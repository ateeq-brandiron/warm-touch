import { Check, Phone } from "lucide-react";
import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="mb-5 flex items-center gap-3 text-base font-bold uppercase tracking-wide text-amber-700">
            <span className="h-[3px] w-7 rounded-sm bg-amber-600" />
            {hero.eyebrow}
          </span>

          <h1 className="font-heading text-[2.4rem] leading-[1.06] text-green-900 sm:text-5xl lg:text-[3.6rem]">
            {hero.headline}
          </h1>

          {hero.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 max-w-[30em] text-xl font-medium leading-relaxed text-green-800 first:mt-8"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={site.phoneHref} className="shadow-md">
              <Phone className="h-5 w-5" strokeWidth={2.75} />
              Call {site.phoneDisplay}
            </Button>
          </div>

          <div className="my-9 h-px max-w-[32em] bg-green-300" />

          <ul className="grid max-w-[32em] grid-cols-1 gap-y-3.5 gap-x-8 sm:grid-cols-[repeat(auto-fit,minmax(230px,auto))]">
            {hero.trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-lg font-bold text-green-800"
              >
                <Check
                  className="h-6 w-6 shrink-0 text-green-600"
                  strokeWidth={2.75}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <figure className="m-0 flex h-[420px] items-center justify-center overflow-hidden rounded-[56px] bg-cream-surface text-center shadow-md sm:h-[480px] lg:h-[clamp(420px,42vw,560px)]">
          <figcaption className="mx-10 text-lg font-medium leading-snug text-green-700">
            {hero.imagePlaceholder}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
