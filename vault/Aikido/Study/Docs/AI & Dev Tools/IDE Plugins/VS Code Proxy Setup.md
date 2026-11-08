---
title: "VS Code Proxy Setup"
source: https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/troubleshooting/ide-plugin-proxy-and-ca-settings/vs-code-proxy-setup
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# VS Code Proxy Setup

Use this guide when your network requires a proxy for [outbound traffic to Aikido](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/troubleshooting/troubleshooting-ide-plugin-connectivity) in VS Code.

## Configuration

1. Open VS Code `Settings` (`Cmd+,` on macOS, `Ctrl+,` on Windows/Linux).
2. Search for `proxy`.
3.  Set `Http: Proxy Support` to `override` (or `on` if your environment already handles proxying correctly). Http: Proxy Support<br>

    <figure><img src="https://help.aikido.dev/_assets/55ec378a970c/proxy-support.png" alt=""><figcaption></figcaption></figure>
4.  Set `Http: Proxy` to your proxy URL (for example: `http://proxy.company.local:8080`). Http: Proxy<br>

    <figure><img src="https://help.aikido.dev/_assets/581e3ff3afb6/proxy.png" alt=""><figcaption></figcaption></figure>
5.  Keep `Http: Proxy Strict SSL` enabled (`true`) whenever possible. Http: Proxy Strict SSL

    * Use `true` when your proxy/server certificate chain is trusted (public CA or correctly installed corporate CA).
    * If your company uses TLS inspection or custom/self-signed certs, `true` can fail with trust errors until that CA is installed.
    * Preferred fix: add the corporate CA cert (PEM) via `aikido.extraCaCerts` (or `NODE_EXTRA_CA_CERTS`) so validation still stays enabled.
    * Only set `Http: Proxy Strict SSL` to `false` as a temporary troubleshooting step in controlled environments; revert to `true` after certificate trust is configured.

    <figure><img src="https://help.aikido.dev/_assets/d216ac637b7b/proxy-strict-ssl.png" alt=""><figcaption></figcaption></figure>
6. Reload VS Code (`Developer: Reload Window`).
7. Open or save a file to trigger an Aikido scan.

### Alternative set-up with \`settings.json\`

Example `settings.json`:

```json
{
  "http.proxySupport": "override",
  "http.proxy": "http://proxy.company.local:8080",
  "http.proxyStrictSSL": true
}
```

### If your Company uses an Authenticated Proxy

`Http: Proxy Authorization`

<figure><img src="https://help.aikido.dev/_assets/9777fa203083/proxy-auth.png" alt=""><figcaption></figcaption></figure>

Preferred:

```json
{
  "http.proxyAuthorization": "Basic <base64(username:password)>"
}
```

Alternative:

```json
{
  "http.proxy": "http://username:password@proxy.company.local:8080"
}
```

### If your company uses TLS inspection

`Aikido: Extra Ca Certs`

<figure><img src="https://help.aikido.dev/_assets/e99c1b75f3ae/aikido-ca-certs.png" alt=""><figcaption></figcaption></figure>

If your proxy re-signs certificates, add your corporate CA bundle:

```json
{
  "aikido.extraCaCerts": "/absolute/path/to/corporate-ca.pem"
}
```

### Verify Connection

* Reload VS Code after proxy changes.
* Trigger an Aikido scan by opening/saving a file.
* Confirm there are no proxy authentication or TLS trust errors in logs.
* Run an SCA scan and confirm dependency downloads succeed.

### Common Fixes

* **`407 Proxy Authentication Required`**
  * Re-check `http.proxyAuthorization` format (`Basic ...`).
  * If needed, validate credentials using the proxy-URL credential format.
* **TLS errors (`self-signed`, `unable to verify`, `certificate unknown`)**
  * Set a valid `aikido.extraCaCerts` path (or `NODE_EXTRA_CA_CERTS`).
  * Keep `http.proxyStrictSSL: true` whenever possible.
  * Reload VS Code after certificate changes.
* **Proxy not used**
  * Ensure `http.proxySupport` is not `off`.
  * Ensure one of `http.proxy`, `HTTPS_PROXY`, or `https_proxy` is configured.
  * Reload VS Code after updates.
