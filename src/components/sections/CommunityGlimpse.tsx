import Image from "next/image";
import { communityGlimpse } from "@/content/communityGlimpse";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CommunityGlimpse() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <Eyebrow label={communityGlimpse.eyebrow} align="center" className="justify-center" />
        <h2 className="mx-auto max-w-[16em] text-center font-heading text-3xl leading-tight text-amber-700 sm:text-4xl lg:text-[2.6rem]">
          {communityGlimpse.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-[44em] text-center text-xl leading-relaxed text-wt-ink">
          {communityGlimpse.intro}
        </p>

        <div className="mt-11 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {communityGlimpse.photos.map(({ src, alt, caption }) => (
            <div key={src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-cream-surface">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-lg font-semibold text-wt-ink-soft">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
