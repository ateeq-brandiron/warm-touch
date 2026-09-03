"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/content/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-900">
      <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="mr-auto block shrink-0">
          <Image
            src={site.logoLight}
            alt={site.name}
            width={200}
            height={103}
            className="h-11 w-auto sm:h-[52px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-green-100 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden items-center gap-3 rounded-full bg-green-400 px-6 py-3.5 font-heading text-lg text-green-900 shadow-sm transition-colors hover:bg-green-300 sm:inline-flex"
        >
          <Phone className="h-5 w-5" strokeWidth={2.75} />
          {site.phoneDisplay}
        </a>
        <a
          href={site.phoneHref}
          aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
          className="inline-flex items-center justify-center rounded-full bg-green-400 p-3 text-green-900 sm:hidden"
        >
          <Phone className="h-5 w-5" strokeWidth={2.75} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full p-2 text-green-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-green-700/60 bg-green-900 px-4 pb-5 pt-2 sm:px-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg font-semibold text-green-100 transition-colors hover:bg-white/5 hover:text-white"
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
