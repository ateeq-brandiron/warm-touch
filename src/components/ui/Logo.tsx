import clsx from "clsx";
import { site } from "@/content/site";

type LogoProps = {
  className?: string;
};

/**
 * Renders the logo artwork as a solid color via CSS masking instead of the
 * flattened PNG assets (which only ship light-on-dark and dark-on-light
 * variants). This lets the mark take any Tailwind bg-* color -- needed once
 * the logo sits on a background neither existing PNG was colored for.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span
      role="img"
      aria-label={site.name}
      className={clsx("inline-block aspect-[200/103] w-auto", className)}
      style={{
        maskImage: `url(${site.logoDark})`,
        WebkitMaskImage: `url(${site.logoDark})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "left center",
        WebkitMaskPosition: "left center",
      }}
    />
  );
}
