import Image from "next/image";
import { aboutCheri } from "@/content/aboutCheri";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AboutCheri() {
  return (
    <section id="about-cheri" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start gap-10 rounded-[56px] bg-cream-surface p-8 sm:p-12">
          <div className="mx-auto flex w-full max-w-[260px] flex-col items-center gap-5 text-center lg:sticky lg:top-28">
            <figure className="m-0 h-[240px] w-[240px] overflow-hidden rounded-full shadow-md ring-8 ring-cream">
              <Image
                src={aboutCheri.photo}
                alt={aboutCheri.name}
                width={240}
                height={240}
                className="h-full w-full object-cover"
              />
            </figure>
            <div>
              <p className="font-heading text-2xl leading-tight text-green-900">
                {aboutCheri.name}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-[#9a3f22]">
                {aboutCheri.role}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {aboutCheri.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-wt-khaki px-5 py-2.5 text-lg font-bold text-green-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-1 basis-[380px]">
            <Eyebrow label={aboutCheri.eyebrow} tone="amber-strong" />
            <h2 className="font-heading text-[1.75rem] leading-tight text-green-900 sm:text-[2.2rem]">
              {aboutCheri.headline}
            </h2>

            {aboutCheri.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-xl leading-relaxed text-wt-ink">
                {paragraph}
              </p>
            ))}

            <div className="mt-9 flex flex-col gap-6 border-l-2 border-green-400 pl-[28px]">
              {aboutCheri.timeline.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[34px] top-2 h-[14px] w-[14px] rounded-full bg-amber-500 ring-[5px] ring-green-200" />
                  <p className="text-lg leading-snug text-wt-ink">
                    <strong className="text-green-900">{item.title}</strong>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-9 border-l-4 border-wt-berry pl-6 font-heading text-xl leading-snug text-green-900">
              {aboutCheri.quote}
            </blockquote>

            <p className="mt-6 text-lg leading-relaxed text-wt-ink">{aboutCheri.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
