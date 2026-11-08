"""Pull Aikido's public docs into the vault for Mirelle.

For every Aikido/Study/Docs/<Section>/Links.md, fetch each listed page plus every
page nested under it (found via help.aikido.dev/llms.txt), and save them as markdown.

  Docs/<Section>/<Page Title>.md                  a page you listed
  Docs/<Section>/<Page Title>/<Child Title>.md    pages nested under it
  Docs/<Section>/_Index.md                        table of contents

Re-run any time to refresh:  uv run ingest_docs.py
It only overwrites files it generated itself (generated: ingest_docs).
"""
import re, sys, time
from datetime import date
import requests
from benders import VAULT

DOCS = VAULT / "Aikido/Study/Docs"
SITE = "https://help.aikido.dev"
UA = {"User-Agent": "havens-docs-ingest/1.0"}
MARK = "generated: ingest_docs"

# Setup-heavy sections (one page per language / package manager). Their nested pages
# become one summary page instead of full copies. Remove a URL here to fetch them all.
SUMMARIZE_NESTED = {
    f"{SITE}/zen-firewall/zen-installation-instructions",
    f"{SITE}/aikido-device-protection/deploying-aikido-endpoint",
}
session = requests.Session()
session.headers.update(UA)


def fetch_md(url):
    r = session.get(url.rstrip("/") + ".md", timeout=30)
    r.raise_for_status()
    time.sleep(0.15)  # be polite to the docs site
    return r.text


DESCRIPTIONS = {}


def load_index():
    """url -> title for every page the site lists (descriptions go in DESCRIPTIONS)."""
    text = session.get(f"{SITE}/llms.txt", timeout=30).text
    index = {}
    for t, u, d in re.findall(r"- \[([^\]]+)\]\((https://help\.aikido\.dev[^)]*?)\.md\)(?::\s*(.*))?", text):
        index[u] = t
        if d:
            DESCRIPTIONS[u] = d.strip()
    return index


def summary_page(top, top_title, children, index):
    """A code-built table of contents for nested pages we chose not to download."""
    lines = [f"# {top_title}: nested pages (summary)", "",
             f"{len(children)} setup pages live under this section. They were not downloaded,",
             "to keep the vault focused on concepts. This list shows what each one covers.",
             "To pull them in, remove this section's URL from SUMMARIZE_NESTED in",
             "forge/ingest_docs.py and run it again.", ""]
    groups = {}
    for c in children:
        rel = c[len(top) + 1:].split("/")
        groups.setdefault(rel[0] if len(rel) > 1 else "", []).append(c)
    for g in sorted(groups):
        if g:
            lines += ["", f"## {index.get(f'{top}/{g}', g.replace('-', ' ').title())}"]
        for c in groups[g]:
            if c == f"{top}/{g}" and g:
                continue
            desc = DESCRIPTIONS.get(c)
            lines.append(f"- [{index.get(c, c.rsplit('/', 1)[-1])}]({c})" + (f": {desc}" if desc else ""))
    return "\n".join(lines)


def safe(name):
    name = re.sub(r'[<>:"/\\|?*#^\[\]]', "-", name).strip(" .")
    return re.sub(r"\s+", " ", name)[:120] or "Untitled"


def cards_to_list(m):
    """GitBook card grids are navigation tables. Make them a plain list."""
    items = []
    for row in re.findall(r"<tr>(.*?)</tr>", m.group(0), flags=re.S):
        cells = re.findall(r"<td>(.*?)</td>", row, flags=re.S)
        if not cells:
            continue
        text = [re.sub(r"<[^>]+>", "", c).strip() for c in cells]
        name = text[0] or (text[1] if len(text) > 1 else "")
        desc = text[1] if len(text) > 1 and text[0] else ""
        if name:
            items.append(f"- **{name}**" + (f": {desc}" if desc else ""))
    return "\n".join(items)


def clean(md):
    """Turn GitBook tags into Obsidian-friendly markdown."""
    md = re.sub(r'<table[^>]*data-view="cards".*?</table>', cards_to_list, md, flags=re.S)
    out, in_hint = [], False
    for line in md.splitlines():
        m = re.match(r'\s*{%\s*hint style="(\w+)"\s*%}', line)
        if m:
            kind = {"success": "tip", "danger": "danger", "warning": "warning"}.get(m.group(1), "info")
            out.append(f"> [!{kind}]")
            in_hint = True
            continue
        if re.match(r"\s*{%\s*endhint\s*%}", line):
            in_hint = False
            out.append("")
            continue
        tab = re.match(r'\s*{%\s*tab title="([^"]+)"\s*%}', line)
        if tab:
            out.append(f"**{tab.group(1)}**")
            continue
        emb = re.match(r'\s*{%\s*embed url="([^"]+)"\s*%}', line)
        if emb:
            out.append(emb.group(1))
            continue
        if re.match(r"\s*{%.*%}\s*$", line):  # other GitBook tags
            continue
        out.append(f"> {line}" if in_hint else line)
    return re.sub(r"\n{3,}", "\n\n", "\n".join(out)).strip()


def title_of(md, fallback):
    m = re.match(r"\s*#\s+(.+)", md)
    return m.group(1).strip() if m else fallback


def has_content(md):
    body = re.sub(r"^\s*#.*$", "", md, count=1, flags=re.M)
    return len(body.strip()) > 40


def write(path, url, section, title, body):
    if path.exists() and MARK not in path.read_text(encoding="utf-8", errors="ignore")[:400]:
        print(f"  skip (hand-written): {path.relative_to(DOCS)}")
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    fm = (f"---\ntitle: \"{title.replace('\"', '')}\"\nsource: {url}\nsection: {section}\n"
          f"fetched: {date.today()}\n{MARK}\n---\n")
    path.write_text(fm + body + "\n", encoding="utf-8")
    return True


def main():
    index = load_index()
    total, failed = 0, []
    for links in sorted(DOCS.glob("*/Links.md")):
        folder = links.parent
        section = folder.name
        urls = list(dict.fromkeys(u.rstrip("/").removesuffix(".md")
                                  for u in re.findall(r"https://help\.aikido\.dev[^\s)>\]]*", links.read_text(encoding="utf-8"))))
        print(f"\n== {section} ({len(urls)} links)")
        toc, seen = [], set()
        for top in urls:
            children = sorted(u for u in index if u.startswith(top + "/"))
            try:
                md = fetch_md(top)
            except Exception as e:
                failed.append((top, str(e))); print(f"  FAIL {top}: {e}"); continue
            top_title = safe(title_of(md, index.get(top, top.rsplit("/", 1)[-1])))
            if top not in seen and has_content(md):
                seen.add(top)
                write(folder / f"{top_title}.md", top, section, top_title, clean(md))
                toc.append(f"- [[{top_title}]]"); total += 1
            elif top not in seen:
                toc.append(f"- {top_title}" + ("" if children else " (empty page)"))
            if top in SUMMARIZE_NESTED and children:
                name = f"{top_title} - Setup Summary"
                write(folder / f"{name}.md", top, section, name,
                      summary_page(top, top_title, children, index))
                toc.append(f"  - [[{name}]] ({len(children)} setup pages, summarized)")
                print(f"  {top_title}: 1 + {len(children)} nested (summarized)")
                continue
            for child in children:
                if child in seen:
                    continue
                seen.add(child)
                try:
                    cmd = fetch_md(child)
                except Exception as e:
                    failed.append((child, str(e))); print(f"  FAIL {child}: {e}"); continue
                if not has_content(cmd):
                    continue
                ct = safe(title_of(cmd, index.get(child, child.rsplit("/", 1)[-1])))
                write(folder / top_title / f"{ct}.md", child, section, ct, clean(cmd))
                toc.append(f"  - [[{top_title}/{ct}|{ct}]]"); total += 1
            print(f"  {top_title}: 1 + {len(children)} nested")
        (folder / "_Index.md").write_text(
            f"---\n{MARK}\nfetched: {date.today()}\n---\n# {section}\n\n"
            "Top-level pages are the ones listed in Links.md. Indented pages are nested under them.\n\n"
            + "\n".join(toc) + "\n", encoding="utf-8")
    print(f"\nWrote {total} pages. Failed: {len(failed)}")
    for u, e in failed:
        print(f"  {u}  {e}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
