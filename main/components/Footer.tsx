import Link from "next/link";

/**
 * Footer — minimal site footer present on every page.
 * Contains: Marcel's name (left), current year + Contact link (right).
 * Server Component — no client-side JS needed.
 */
export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8 bg-background">
      <div className="mx-auto px-4 md:px-12 max-w-[1120px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[var(--ink-soft)] text-sm font-sans">
            Marcel Malbrich
          </span>
          <div className="flex items-center gap-6">
            <span className="text-[var(--ink-soft)] text-sm font-sans">
              {new Date().getFullYear()}
            </span>
            <Link
              href="/contact"
              className="text-[var(--teal)] hover:text-[var(--teal-deep)] text-sm font-sans transition-colors duration-[180ms]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
