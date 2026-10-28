import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

// The lab is its own app (separate Vercel project) — nothing here is shared with main/.

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lab — Marcel Malbrich",
  description: "Experiments and prototypes by Marcel Malbrich.",
  // Hidden lab: ask search engines not to list any page (see also app/robots.ts).
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header className="border-b border-line">
          <div className="mx-auto px-4 md:px-12 max-w-[1120px] h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]">
              <span
                aria-hidden="true"
                className="grid place-items-center size-9 rounded-full font-serif font-semibold text-[var(--on-brand)] [box-shadow:var(--shadow-brand)]"
                style={{ background: "linear-gradient(140deg, var(--teal-bright), var(--teal-deep))" }}
              >
                MM
              </span>
              <span className="font-semibold text-ink">Lab</span>
            </Link>
            <a
              href="https://marcelmalbrich.com"
              className="text-[length:var(--text-sm)] font-medium text-ink-soft hover:text-[var(--teal)] transition-colors duration-[180ms]"
            >
              marcelmalbrich.com
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
