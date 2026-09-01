import type { LucideIcon } from "lucide-react";
import { AlignLeft, CirclePlus, Heart, Layers } from "lucide-react";

export type ConversationTopic = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const firstConversation = {
  eyebrow: "Our first conversation",
  headline: "Getting to know your family, not just a checklist.",
  intro:
    "Before Cheri ever suggests a single community, she wants to understand your family's actual life. That first conversation, by phone or in person, on your schedule, usually covers four things.",
  topics: [
    {
      icon: Layers,
      title: "Level of care",
      description:
        "Independent living, assisted living, memory care, or somewhere in between: we'll figure out what's realistic and right, together.",
    },
    {
      icon: Heart,
      title: "What matters most",
      description:
        "Dining preferences, hobbies and activities, whether pets are part of the family, location, and budget.",
    },
    {
      icon: CirclePlus,
      title: "Medical & care needs",
      description:
        "Mobility, medications, cognitive changes, and anything a doctor has recommended we plan around.",
    },
    {
      icon: AlignLeft,
      title: "The full picture",
      description:
        "Timeline, other family members involved in the decision, and any concerns. Nothing is off the table.",
    },
  ] satisfies ConversationTopic[],
};
