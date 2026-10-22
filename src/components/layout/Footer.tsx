import { footer } from "@/content/footer";
import { navLinks, site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-green-500">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Logo className="h-9 bg-green-900" />

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-green-900 underline-offset-4 transition-colors hover:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="text-base font-bold text-green-900 underline-offset-4 transition-colors hover:underline"
            >
              {site.phoneDisplay}
            </a>
          </nav>
        </div>

        <p className="mt-5 text-xl font-medium leading-snug text-green-900">
          {site.tagline}
        </p>

        <div className="mt-7 h-px bg-black/10" />

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 text-base text-green-800">
          <span>{footer.copyright}</span>
          <span>{footer.careTypes}</span>
        </div>
      </div>
    </footer>
  );
}
