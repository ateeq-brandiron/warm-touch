import { Video } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <span className="mb-6 block text-base font-bold uppercase tracking-wide text-green-700">
          {testimonials.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-[2.6rem]">
          {testimonials.headline}
        </h2>
        <p className="mt-6 max-w-[30em] text-xl leading-relaxed text-green-700">
          {testimonials.note}
        </p>

        <div className="mt-11 flex flex-col gap-7">
          {testimonials.quotes.map(({ quote, attribution }) => (
            <figure
              key={attribution + quote.slice(0, 12)}
              className="m-0 rounded-[40px] bg-green-100 px-9 py-9 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md sm:px-10"
            >
              <blockquote className="m-0 font-heading text-2xl leading-snug text-green-900">
                {quote}
              </blockquote>
              <figcaption className="mt-6 text-lg font-semibold leading-snug text-green-700">
                {attribution}
              </figcaption>
            </figure>
          ))}

          <figure className="m-0 flex items-center gap-5 rounded-[44px] border-[3px] border-dashed border-green-400 px-9 py-9 sm:px-11">
            <Video className="h-8 w-8 shrink-0 text-green-600" strokeWidth={2.75} />
            <figcaption className="m-0 text-xl font-semibold leading-snug text-green-700">
              {testimonials.videoPlaceholder}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
