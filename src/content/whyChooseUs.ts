import type { LucideIcon } from "lucide-react";
import {
  CircleDollarSign,
  Handshake,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

export type ValueProp = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs = {
  eyebrow: "Why families choose WarmTouch",
  headline: "Guidance that feels like family.",
  values: [
    {
      icon: Phone,
      title: "One point of contact",
      description:
        "No hand-offs, no juggling different agents, just Cheri, from your very first call through move-in day.",
    },
    {
      icon: ShieldCheck,
      title: "Honest, even when it's harder",
      description:
        "If a community isn't the right fit, Cheri will say so, even if it means the search takes a little longer. Her reputation depends on getting it right, not on filling a quota.",
    },
    {
      icon: Users,
      title: "We go with you",
      description:
        "Every tour, every visit, Cheri is there in person, walking beside your family, not sending you off with a list of addresses.",
    },
    {
      icon: Handshake,
      title: "We negotiate for you",
      description:
        "From placement fees to move-in terms, Cheri advocates on your behalf so your family isn't negotiating alone against a sales team.",
    },
    {
      icon: CircleDollarSign,
      title: "Always free to families",
      description:
        "Our placement services are completely complimentary to families. WarmTouch is compensated directly by the senior living communities, so there are no consulting charges. Our goal is to provide trusted guidance and personalized support throughout your search, with no financial obligation or hidden costs by WarmTouch.",
    },
    {
      icon: MapPin,
      title: "Local & personal",
      description:
        "Cheri knows these communities from the inside: years spent working alongside residents and caregivers, not reading from a national call-center script.",
    },
  ] satisfies ValueProp[],
};
