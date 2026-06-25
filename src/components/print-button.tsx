"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-sm border border-ink px-4 py-2 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
    >
      Download PDF
      <span aria-hidden>&darr;</span>
    </button>
  );
}
