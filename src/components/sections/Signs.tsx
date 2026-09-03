import { signs } from "@/content/signs";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Signs() {
  return (
    <section id="signs" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <Eyebrow label={signs.eyebrow} align="center" className="justify-center" />
        <h2 className="mx-auto max-w-[16em] text-center font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-[2.6rem]">
          {signs.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-[44em] text-center text-xl leading-relaxed text-wt-ink">
          {signs.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {signs.items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 rounded-[28px] bg-wt-peach-100 px-7 py-6 text-xl font-medium leading-snug text-wt-ink transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" strokeWidth={2.25} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-[40em] text-center text-xl leading-relaxed text-wt-ink">
          {signs.closing}
        </p>

        <a
          href={site.phoneHref}
          className="mx-auto mt-7 flex w-fit items-center gap-3 rounded-full bg-amber-700 px-9 py-5 font-heading text-xl text-white shadow-sm transition-colors hover:bg-[#9a3f22]"
        >
          {signs.cta.label}
        </a>
      </div>
    </section>
  );
}
