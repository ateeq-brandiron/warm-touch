import { promise } from "@/content/promise";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function OurPromise() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[56px] bg-green-900 px-8 py-12 sm:px-14 sm:py-14">
          <Eyebrow label={promise.eyebrow} tone="amber-light" />
          <p className="font-heading text-[1.7rem] leading-snug text-green-100 sm:text-4xl">
            {promise.statement}
          </p>
        </div>
      </div>
    </section>
  );
}
