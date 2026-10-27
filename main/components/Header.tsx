import Link from "next/link";
import { NavLinks } from "./NavLinks";

/**
 * NavBrand — MM monogram as a teal-gradient circle.
 * Self-contained: swap this component's internals to use an Image/SVG
 * without touching the surrounding nav layout.
 */
function NavBrand() {
  return (
    <Link href="/" aria-label="Home">
      <span
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "linear-gradient(140deg, var(--teal-bright), var(--teal-deep))",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          fontSize: 16,
          boxShadow: "var(--shadow-brand)",
          flexShrink: 0,
        }}
      >
        MM
      </span>
    </Link>
  );
}

/**
 * Header — sticky top nav with MM monogram and 5 nav links.
 * - Translucent off-white background + 10px backdrop blur (only such surface on the site).
 * - Mobile: links scroll horizontally, no hamburger menu.
 * - Active page link: underline indicator via NavLinks (client component).
 */
export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--line)]"
      style={{
        background: "rgba(244,247,247,0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto px-4 md:px-12 max-w-[1120px]">
        <div className="flex items-center justify-between h-14 gap-6">
          <NavBrand />
          <nav
            aria-label="Main navigation"
            className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" as const }}
          >
            <NavLinks />
          </nav>
        </div>
      </div>
    </header>
  );
}
