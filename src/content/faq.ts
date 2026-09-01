export type FaqItem = {
  question: string;
  answer: string;
};

export const faq = {
  eyebrow: "Questions families ask",
  headline: "Straight answers, before you even call.",
  draftNote:
    "Draft answers, written from the site content, to be reviewed and confirmed before launch.",
  items: [
    {
      question: "Does this really cost my family nothing?",
      answer:
        "Yes. WarmTouch is compensated by the communities we place with, so there is no consulting fee, no membership, and no charge to your family at any point in the process.",
    },
    {
      question: "How is that different from just calling communities myself?",
      answer:
        "A sales office represents its own community. Cheri represents your family: she narrows a long list to the few homes actually worth your time, tours with you in person, and negotiates the terms on your behalf.",
    },
    {
      question: "What areas does WarmTouch serve?",
      answer:
        "[Draft: service area to be confirmed.] Call and ask about your area. If it isn't one Cheri serves, she'll point you toward someone who can help.",
    },
    {
      question: "We're not sure what kind of care is needed yet. Can you still help?",
      answer:
        "That's where most families start. Sorting out whether independent living, assisted living, or memory care is the right level is part of the first conversation, and nothing has to be decided that day.",
    },
    {
      question: "How long does the process usually take?",
      answer:
        "[Draft: typical timeline to be confirmed.] It depends on urgency: some families are touring quickly, others plan months ahead. Cheri moves at your family's pace, not a sales timeline.",
    },
    {
      question: "Do you only work with certain communities?",
      answer:
        "Cheri recommends homes she knows and would trust for her own family. If a community isn't the right fit, she'll say so, even when that makes the search take longer.",
    },
    {
      question: "What if we already have a community in mind?",
      answer:
        "Bring it to her. Cheri will tour it with you, ask the questions families don't think to ask, and help you compare it honestly against the other options before anything is signed.",
    },
  ] satisfies FaqItem[],
};
