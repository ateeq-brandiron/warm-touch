// Site-wide, cross-section content. Swap these values for final copy —
// every component that needs them reads from here rather than hardcoding.

export type NavLink = {
  label: string;
  href: string;
};

export const site = {
  name: "WarmTouch",
  tagline: "Personalized senior living placement, at no cost to your family.",
  phoneDisplay: "(520) 909-3908",
  phoneHref: "tel:+15209093908",
  logoLight: "/images/warmtouch-logo-light.png",
  logoDark: "/images/warmtouch-logo.png",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Signs It's Time", href: "#signs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Cheri", href: "#about-cheri" },
  { label: "FAQ", href: "#faq" },
];
