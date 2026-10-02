import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Eyebrow } from "@/components/ui/Eyebrow";

const markStyles = [
  "bg-green-700 text-white",
  "bg-wt-blue text-green-900",
  "bg-wt-amber text-green-900",
  "bg-wt-berry text-white",
];

export function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <Eyebrow label={testimonials.eyebrow} tone="green" />
        <h2 className="font-heading text-3xl leading-tight text-amber-700 sm:text-4xl lg:text-[2.6rem]">
          {testimonials.headline}
        </h2>
        <p className="mt-6 max-w-[30em] text-xl leading-relaxed text-wt-ink-soft sm:text-justify">
          {testimonials.note}
        </p>

        <div className="mt-11 flex flex-col gap-7">
          {testimonials.quotes.map(({ quote, attribution }, index) => (
            <figure
              key={attribution + quote.slice(0, 12)}
              className="m-0 rounded-[40px] bg-green-100 px-9 py-9 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md sm:px-10"
            >
              <span
                className={`mb-5 grid h-11 w-11 place-content-center rounded-full ${markStyles[index % markStyles.length]}`}
              >
                <Quote className="h-5 w-5" strokeWidth={2.5} fill="currentColor" />
              </span>
              <blockquote className="m-0 break-words font-heading text-2xl leading-snug text-green-900 sm:text-justify">
                {quote}
              </blockquote>
              <figcaption className="mt-6 text-lg font-semibold leading-snug text-wt-ink-soft">
                {attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
