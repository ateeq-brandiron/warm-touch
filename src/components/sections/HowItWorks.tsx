import { howItWorks } from "@/content/howItWorks";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <span className="mb-6 block text-base font-bold uppercase tracking-wide text-green-700">
          {howItWorks.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-[2.6rem]">
          {howItWorks.headline}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-11 lg:gap-y-9">
          {howItWorks.steps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-7">
              <span className="grid h-[82px] w-[82px] shrink-0 place-content-center rounded-full bg-green-700 font-heading text-4xl text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-heading text-2xl leading-tight text-green-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-green-800">
                  {step.description}
                </p>
                {step.note && (
                  <p className="mt-3 max-w-[30em] text-lg italic leading-relaxed text-green-700">
                    {step.note}
                  </p>
                )}
                {step.tags && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-green-200 px-5 py-2.5 text-base font-semibold text-green-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
