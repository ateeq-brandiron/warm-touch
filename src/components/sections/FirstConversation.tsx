import { firstConversation } from "@/content/firstConversation";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FirstConversation() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <Eyebrow label={firstConversation.eyebrow} />
        <h2 className="font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-[2.6rem]">
          {firstConversation.headline}
        </h2>
        <p className="mt-6 max-w-[46em] text-xl leading-relaxed text-green-800">
          {firstConversation.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {firstConversation.topics.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[36px] bg-green-100 p-8 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-5 grid h-[52px] w-[52px] place-content-center rounded-2xl bg-green-200">
                <Icon className="h-6 w-6 text-amber-600" strokeWidth={2.25} />
              </span>
              <h3 className="font-heading text-xl leading-tight text-green-900">{title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-green-800">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
