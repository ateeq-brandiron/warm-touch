import Link from "next/link";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "outline" | "phone";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    "border-[3px] border-green-400 bg-transparent text-green-800 hover:bg-green-200 focus-visible:outline-green-700",
  phone: "bg-amber-700 text-white hover:bg-[#9a3f22] focus-visible:outline-amber-700",
};

export function Button({
  href,
  variant = "outline",
  className,
  children,
  ...rest
}: ButtonProps) {
  const isAnchorOrTel = href.startsWith("#") || href.startsWith("tel:");

  const classes = clsx(
    "inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 font-heading text-xl transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className,
  );

  if (isAnchorOrTel) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
