"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";

const inputClasses =
  "w-full rounded-full border-2 border-green-300 bg-white px-6 py-4 font-body text-lg text-ink placeholder:text-ink/40 focus:border-green-600 focus:outline-none";

const labelClasses = "flex flex-col gap-2 text-lg font-bold text-green-900";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="get-started" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 rounded-[56px] bg-green-700 p-8 shadow-md sm:p-12 lg:grid-cols-2">
          <div>
            <Eyebrow label={contact.eyebrow} tone="amber-light" />
            <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl">
              {contact.headline}
            </h2>
            <p className="mt-6 max-w-[26em] text-xl font-medium leading-relaxed text-green-100">
              {contact.intro}
            </p>

            <p className="mt-8 text-lg font-bold text-green-200">{contact.callLabel}</p>
            <a
              href={site.phoneHref}
              className="mt-3 inline-flex items-center gap-4 rounded-full bg-cream px-8 py-6 font-heading text-2xl text-green-800 transition-colors hover:bg-wt-amber hover:text-green-900 sm:text-3xl"
            >
              <Phone className="h-7 w-7" strokeWidth={2.75} />
              {site.phoneDisplay}
            </a>

            <div className="my-9 h-px bg-green-600" />

            <div className="flex flex-col gap-4">
              {contact.steps.map((step, index) => (
                <p key={step} className="flex items-center gap-4 text-xl leading-snug text-green-100">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-content-center rounded-full bg-green-600 font-heading text-xl text-white">
                    {index + 1}
                  </span>
                  {step}
                </p>
              ))}
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col gap-5 rounded-[44px] bg-cream px-8 py-9 sm:px-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className={labelClasses}>
                Your name
                <input type="text" name="name" placeholder="Jane Smith" className={inputClasses} />
              </label>
              <label className={labelClasses}>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="(520) 555-0100"
                  className={inputClasses}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className={labelClasses}>
                Email (optional)
                <input
                  type="email"
                  name="email"
                  placeholder="jane@email.com"
                  className={inputClasses}
                />
              </label>
              <label className={labelClasses}>
                Kind of care
                <div className="relative">
                  <select
                    name="careType"
                    defaultValue=""
                    className={`${inputClasses} appearance-none pr-12`}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {contact.careTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-green-700"
                    strokeWidth={2.5}
                  />
                </div>
              </label>
            </div>

            <label className={labelClasses}>
              Tell us a little about your situation
              <textarea
                name="message"
                rows={4}
                placeholder="Timeline, location, what's most important to your family…"
                className="w-full resize-y rounded-3xl border-2 border-green-300 bg-white px-6 py-4 font-body text-lg text-ink placeholder:text-ink/40 focus:border-green-600 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="min-h-[66px] rounded-full bg-green-700 font-heading text-xl text-white transition-colors hover:bg-wt-amber hover:text-green-900"
            >
              {contact.submitLabel}
            </button>
            {submitted && (
              <p className="m-0 rounded-2xl bg-green-100 px-5 py-4 text-lg leading-relaxed text-wt-ink">
                {contact.submitMessage}
              </p>
            )}
            <p className="m-0 text-lg italic leading-relaxed text-wt-ink-soft">{contact.formNote}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
