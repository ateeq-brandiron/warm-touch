export type ProcessStep = {
  title: string;
  description: string;
  note?: string;
  tags?: string[];
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: "A guided path, from first call to move-in day.",
  steps: [
    {
      title: "We talk it through",
      description:
        "A relaxed, no-pressure conversation about what's needed: independent, assisted, or memory care, what matters most day-to-day, and any medical needs we should plan around.",
      note: "This isn't a form to fill out; it's a real conversation, on your schedule, with someone who's genuinely listening.",
      tags: ["Level of care", "Dining, activities, pets", "Medical needs"],
    },
    {
      title: "We find the right fit",
      description:
        "Cheri researches communities that genuinely match your loved one's needs, personality, and budget, not just whichever one happens to have an opening. A long list gets narrowed down to the handful actually worth your time.",
    },
    {
      title: "We tour together",
      description:
        "Cheri personally accompanies you and your loved one on every guided tour, asking the questions families don't always think to ask, and noticing the details that matter: staff turnover, how residents are treated, whether the dining room actually feels warm.",
    },
    {
      title: "We handle the details",
      description:
        "From negotiating placement fees and move-in terms to sorting through contracts and paperwork, Cheri advocates on your family's behalf at every turn, so you're never negotiating alone against a sales office.",
    },
    {
      title: "We stay close",
      description:
        "The relationship doesn't end at move-in. Cheri checks in during the adjustment period to make sure the new home is truly working out, and stays a phone call away if anything changes.",
    },
  ] satisfies ProcessStep[],
};
