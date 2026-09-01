import Link from "next/link";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({ href, className, children, ...rest }: ButtonProps) {
  const isAnchorOrTel = href.startsWith("#") || href.startsWith("tel:");

  const classes = clsx(
    "inline-flex items-center justify-center gap-3 rounded-full bg-green-400 px-8 py-5 font-heading text-xl text-green-900 transition-colors duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700",
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
