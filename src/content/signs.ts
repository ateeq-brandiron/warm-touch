import type { LucideIcon } from "lucide-react";
import { Bandage, CircleHelp, Heart, House, TrendingDown, Users } from "lucide-react";

export type Sign = {
  icon: LucideIcon;
  text: string;
};

export const signs = {
  eyebrow: "Not sure where to start?",
  headline: "Some quiet signs it might be time for a conversation.",
  intro:
    "There's rarely one single moment that makes the decision obvious. More often, it's a handful of smaller things, noticed over weeks or months, that quietly add up. If a few of these sound familiar, it doesn't mean anything has to change today. It might just be time to start talking about what's next.",
  items: [
    {
      icon: Bandage,
      text: "Meals, mail, bills, or medications are being missed, doubled up, or mismanaged.",
    },
    {
      icon: House,
      text: "The house feels harder to keep up with than it used to: laundry, cleaning, and yardwork are piling up.",
    },
    {
      icon: TrendingDown,
      text: "A fall, a near-fall, or a new hesitation on stairs and uneven ground.",
    },
    {
      icon: Users,
      text: "Less interest in hobbies, friends, or leaving the house, days spent more alone than before.",
    },
    {
      icon: Heart,
      text: "The family caregiver, often a spouse or adult child, is stretched thin, worn out, or losing sleep.",
    },
    {
      icon: CircleHelp,
      text: "Memory lapses that are becoming more frequent: repeated questions, missed appointments, or getting turned around in familiar places.",
    },
  ] satisfies Sign[],
  closing:
    "None of these mean it's too late, or that your family has missed something. They just mean it might help to have someone in your corner as you figure out what's next.",
  cta: {
    label: "Talk it through with Cheri",
  },
};
