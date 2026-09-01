import type { LucideIcon } from "lucide-react";
import { Heart, House, ShieldCheck } from "lucide-react";

export type CareOption = {
  icon: LucideIcon;
  name: string;
  description: string;
  goodFitIf: string[];
};

export const services = {
  eyebrow: "Services & care options",
  headline: "Every family's journey looks a little different.",
  intro:
    "Cheri specializes in three levels of senior living, and helps you figure out, honestly and without pressure, which one actually fits your loved one's life today, not just their diagnosis on paper.",
  options: [
    {
      icon: House,
      name: "Independent living",
      description:
        "For seniors who want their own space, an active community, and freedom from home upkeep, without giving up their privacy or independence.",
      goodFitIf: [
        "Manages daily activities and medications independently",
        "Wants built-in community, dining, and activities",
        "Is ready to be done with yardwork and home maintenance",
      ],
    },
    {
      icon: Heart,
      name: "Assisted living",
      description:
        "Day-to-day support with medication, meals, and personal care, delivered in a warm community setting that still feels like home.",
      goodFitIf: [
        "Needs help with bathing, dressing, or medication reminders",
        "Would benefit from staff and support close by, day or night",
        "Still wants to stay social, active, and engaged",
      ],
    },
    {
      icon: ShieldCheck,
      name: "Memory care",
      description:
        "Secure, specially designed communities for families navigating Alzheimer's and dementia, built around safety, structure, and dignity.",
      goodFitIf: [
        "Has a diagnosis of Alzheimer's or another form of dementia",
        "Needs a secure environment to prevent wandering",
        "Benefits from structured routines and specially trained staff",
      ],
    },
  ] satisfies CareOption[],
  closing:
    "Not sure which one fits? That's normal. Most families start there, and figuring it out together is part of the first conversation.",
};
