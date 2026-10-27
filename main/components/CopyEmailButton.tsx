"use client";

import { useState } from "react";

/**
 * CopyEmailButton — copies an email address to the clipboard.
 * Useful for visitors whose computer has no mail app set up, where a mailto: link does nothing.
 * Client component because it reacts to a click and briefly shows "Copied".
 */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      // Modern clipboard blocked (some embedded or older browsers) — fall back to the classic copy command.
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      ok = document.execCommand("copy");
      field.remove();
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 self-start sm:self-auto items-center rounded-[var(--radius-sm)] border border-white/30 px-3 py-1.5 text-[length:var(--text-sm)] font-semibold text-[var(--text-on-dark)] hover:bg-white/10 transition-colors duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--teal-soft)]"
    >
      {/* aria-live lets screen readers announce the change to "Copied" */}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
