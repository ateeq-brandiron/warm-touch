import { whyChooseUs } from "@/content/whyChooseUs";
import { Eyebrow } from "@/components/ui/Eyebrow";

const badgeStyles = [
  "bg-wt-amber text-green-900",
  "bg-wt-blue text-green-900",
  "bg-wt-berry text-white",
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <Eyebrow label={whyChooseUs.eyebrow} align="center" className="justify-center" />
        <h2 className="mx-auto max-w-[16em] text-center font-heading text-3xl leading-tight text-amber-700 sm:text-4xl lg:text-[2.6rem]">
          {whyChooseUs.headline}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-9 sm:grid-cols-2">
          {whyChooseUs.values.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="group flex items-start gap-6">
              <span
                className={`grid h-14 w-14 shrink-0 place-content-center rounded-2xl transition-all duration-200 group-hover:scale-110 group-hover:bg-amber-500 ${badgeStyles[index % badgeStyles.length]}`}
              >
                <Icon
                  className="h-7 w-7 transition-colors duration-200 group-hover:text-white"
                  strokeWidth={2.75}
                />
              </span>
              <div>
                <h3 className="font-heading text-xl leading-tight text-amber-700">{title}</h3>
                <p className="mt-3 text-xl leading-relaxed text-wt-ink lg:text-justify">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
