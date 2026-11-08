"use client";

export function Switch({ checked, onChange, label, disabled }:
  { checked: boolean; onChange: (v: boolean) => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-40 ${
        checked ? "bg-series-1" : "bg-grid"}`}>
      <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
        checked ? "translate-x-4" : "translate-x-0.5"}`} />
    </button>
  );
}
