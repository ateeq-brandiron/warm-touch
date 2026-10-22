"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-500">
      <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="mr-auto block shrink-0">
          <Logo className="h-11 bg-green-900 sm:h-[52px]" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-green-900 underline-offset-4 transition-colors hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden items-center gap-3 rounded-full bg-amber-700 px-6 py-3.5 font-heading text-lg text-white shadow-sm transition-colors hover:bg-wt-amber hover:text-green-900 sm:inline-flex"
        >
          <Phone className="h-5 w-5" strokeWidth={2.75} />
          {site.phoneDisplay}
        </a>
        <a
          href={site.phoneHref}
          aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
          className="inline-flex items-center justify-center rounded-full bg-amber-700 p-3 text-white transition-colors hover:bg-wt-amber hover:text-green-900 sm:hidden"
        >
          <Phone className="h-5 w-5" strokeWidth={2.75} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full p-2 text-green-900 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-black/10 bg-green-500 px-4 pb-5 pt-2 sm:px-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg font-semibold text-green-900 underline-offset-4 transition-colors hover:bg-black/5 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
