"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Personal", href: "/personal" },
  { label: "Contact", href: "/contact" },
];

/**
 * NavLinks — client component so usePathname() is available for the active indicator.
 * Renders as a horizontal flex row; whitespace-nowrap prevents wrapping on small screens.
 * The parent <nav> wrapping this component sets overflow-x-auto for mobile scroll.
 */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6 whitespace-nowrap py-2">
      {links.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={[
              "font-sans text-[15px] font-[500]",
              "text-[var(--ink)] hover:text-[var(--teal)]",
              "transition-colors duration-[180ms]",
              "border-b-2",
              isActive
                ? "border-[var(--teal)]"
                : "border-transparent",
            ].join(" ")}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
