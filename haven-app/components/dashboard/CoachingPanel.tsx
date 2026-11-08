"use client";
import { useEffect, useState } from "react";
import { forgeGet, useForge } from "@/lib/forge";
import { Empty, Panel } from "./Panel";

type Review = { name: string | null; content: string };

function parse(content: string) {
  const m = content.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const fm = m?.[1] ?? "";
  const variable = fm.match(/^variable:\s*"?(.+?)"?\s*$/m)?.[1];
  return { variable, body: (m?.[2] ?? content).trim() };
}

/** Latest Log/Reviews note from Suri, with the variable to isolate shown big. */
export function CoachingPanel() {
  const [review, setReview] = useState<Review | null>(null);
  // refetch when the coach finishes a run
  const coachDone = useForge((s) => s.events.find((e) => e.agent === "coach" && e.type === "done")?.ts);

  useEffect(() => {
    forgeGet<Review>("/reviews/latest").then(setReview).catch(() => {});
  }, [coachDone]);

  if (!review) return <Panel title="Coaching"><Empty>Loading…</Empty></Panel>;
  if (!review.name)
    return <Panel title="Coaching"><Empty>No review yet. Suri writes one after your first daily log.</Empty></Panel>;

  const { variable, body } = parse(review.content);
  return (
    <Panel title={`Coaching · ${review.name}`}>
      <div className="text-xs uppercase tracking-wide text-muted">Variable to isolate</div>
      <p className="mt-1 text-2xl font-semibold leading-snug">{variable ?? "Not named in this review"}</p>
      <details className="mt-4 text-sm text-ink-2">
        <summary className="cursor-pointer text-xs text-muted">Full review</summary>
        <div className="mt-2 max-h-80 overflow-y-auto whitespace-pre-wrap">{body}</div>
      </details>
    </Panel>
  );
}
