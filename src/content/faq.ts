export type FaqItem = {
  question: string;
  answer: string;
};

export const faq = {
  eyebrow: "Questions families ask",
  headline: "Straight answers, before you even call.",
  items: [
    {
      question: "Does this really cost my family nothing?",
      answer:
        "Yes. WarmTouch is compensated by the senior living communities we help fill, similar to how a real estate agent is typically paid by the seller, not the buyer. Your family never pays a placement fee, consulting fee, or membership fee for our services.",
    },
    {
      question: "How is that different from just calling communities myself?",
      answer:
        "You're always welcome to call communities directly. The difference is Cheri already knows which ones are worth calling, tours with you in person, catches details a first-time visitor might miss, and negotiates on your behalf, all at no extra cost.",
    },
    {
      question: "What areas does WarmTouch serve?",
      answer:
        "Cheri works with a network of communities across the region. Reach out below or give her a call, and she can tell you right away whether she covers your area.",
    },
    {
      question: "We're not sure what kind of care is needed yet, can you still help?",
      answer:
        "Absolutely, that's actually the most common starting point. Most families call Cheri before they've settled on independent living, assisted living, or memory care, and figuring that out together is part of the process.",
    },
    {
      question: "How long does the process usually take?",
      answer:
        "It depends on your timeline and your loved one's needs. Some families need to move quickly out of necessity; others take weeks to feel confident. Cheri moves at your family's pace, not a sales deadline.",
    },
    {
      question: "Do you only work with certain communities?",
      answer:
        "Cheri's job is to find the right fit for your family, not to steer you toward a particular community. If a place isn't right for your loved one, she'll tell you.",
    },
    {
      question: "What if we already have a community in mind?",
      answer:
        "That's a great place to start. Cheri can still tour it with you, help evaluate it against other options, and negotiate on your family's behalf.",
    },
  ] satisfies FaqItem[],
};
