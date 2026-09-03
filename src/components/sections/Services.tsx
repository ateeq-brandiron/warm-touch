import { Check } from "lucide-react";
import { services } from "@/content/services";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <Eyebrow label={services.eyebrow} align="center" className="justify-center" />
        <h2 className="mx-auto max-w-[16em] text-center font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-[2.6rem]">
          {services.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-[44em] text-center text-xl leading-relaxed text-wt-ink">
          {services.intro}
        </p>

        <div className="mt-11 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {services.options.map(({ icon: Icon, name, description, goodFitIf }) => (
            <div
              key={name}
              className="rounded-[40px] bg-cream-surface p-9 transition-transform duration-150 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-5 grid h-[60px] w-[60px] place-content-center rounded-[20px] bg-green-200">
                <Icon className="h-7 w-7 text-green-700" strokeWidth={2.75} />
              </span>
              <h3 className="font-heading text-2xl leading-tight text-green-900">{name}</h3>
              <p className="mt-4 text-xl leading-relaxed text-wt-ink">{description}</p>
              <p className="mt-7 text-lg font-bold text-green-900">
                Often a good fit if your loved one:
              </p>
              <ul className="mt-3 flex flex-col gap-3">
                {goodFitIf.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-snug text-wt-ink">
                    <Check
                      className="mt-1 h-6 w-6 shrink-0 text-green-600"
                      strokeWidth={2.75}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[38em] text-center text-lg italic leading-relaxed text-wt-ink-soft">
          {services.closing}
        </p>
      </div>
    </section>
  );
}
