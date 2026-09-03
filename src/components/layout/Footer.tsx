import Image from "next/image";
import { footer } from "@/content/footer";
import { navLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-green-900">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Image
            src={site.logoLight}
            alt={site.name}
            width={140}
            height={72}
            className="h-9 w-auto"
          />

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-green-100 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="text-base font-bold text-green-100 transition-colors hover:text-white"
            >
              {site.phoneDisplay}
            </a>
          </nav>
        </div>

        <p className="mt-5 text-xl font-medium leading-snug text-green-200">
          {site.tagline}
        </p>

        <div className="mt-7 h-px bg-green-700" />

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 text-base text-green-300">
          <span>{footer.copyright}</span>
          <span>{footer.careTypes}</span>
        </div>
      </div>
    </footer>
  );
}
