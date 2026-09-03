import Image from "next/image";
import { footer } from "@/content/footer";
import { navLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mt-16 mb-10 flex flex-col gap-7 rounded-[48px] bg-green-900 px-6 py-10 sm:px-9">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex flex-col gap-3.5">
              <Image
                src={site.logoLight}
                alt={site.name}
                width={140}
                height={72}
                className="h-9 w-auto"
              />
              <p className="max-w-[10em] text-lg font-medium leading-snug text-green-200">
                {site.tagline}
              </p>
            </div>

            <nav className="flex flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2.5 pt-1.5">
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

          <div className="h-px bg-green-700" />

          <div className="flex flex-wrap items-center justify-between gap-3 text-base text-green-300">
            <span>{footer.copyright}</span>
            <span>{footer.careTypes}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
