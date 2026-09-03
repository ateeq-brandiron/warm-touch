import { promise } from "@/content/promise";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function OurPromise() {
  return (
    <section className="bg-wt-slate-dark">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Eyebrow label={promise.eyebrow} tone="amber-light" />
        <p className="font-heading text-[1.7rem] leading-snug text-green-100 sm:text-4xl">
          {promise.statement}
        </p>
      </div>
    </section>
  );
}
