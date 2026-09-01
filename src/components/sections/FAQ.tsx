"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/content/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <span className="mb-6 block text-base font-bold uppercase tracking-wide text-green-700">
          {faq.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-[2.6rem]">
          {faq.headline}
        </h2>

        <div className="mt-9 flex flex-col gap-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-[36px] bg-green-100">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[72px] w-full items-center justify-between gap-5 px-8 py-7 text-left font-heading text-xl leading-tight text-green-900 transition-colors hover:bg-green-200 sm:text-2xl"
                >
                  {item.question}
                  <span className="grid h-10 w-10 shrink-0 place-content-center rounded-full bg-green-700 text-white">
                    {isOpen ? (
                      <Minus className="h-5 w-5" strokeWidth={3} />
                    ) : (
                      <Plus className="h-5 w-5" strokeWidth={3} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[32em] px-8 pb-8 text-lg leading-relaxed text-green-800">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
