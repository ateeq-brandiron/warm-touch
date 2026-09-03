import clsx from "clsx";

type EyebrowProps = {
  label: string;
  tone?: "amber" | "amber-light" | "amber-strong" | "green";
  align?: "left" | "center";
  dash?: boolean;
  className?: string;
};

const toneClasses: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  amber: "text-amber-700",
  "amber-light": "text-cream",
  "amber-strong": "text-[#9a3f22]",
  green: "text-green-700",
};

const dashToneClasses: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  amber: "bg-amber-600",
  "amber-light": "bg-wt-amber",
  "amber-strong": "bg-amber-600",
  green: "bg-green-600",
};

export function Eyebrow({
  label,
  tone = "amber",
  align = "left",
  dash = true,
  className,
}: EyebrowProps) {
  return (
    <span
      className={clsx(
        "mb-5 flex items-center gap-3 text-base font-bold uppercase tracking-wide",
        toneClasses[tone],
        align === "center" && "justify-center",
        className,
      )}
    >
      {dash && <span className={clsx("h-[3px] w-7 rounded-sm", dashToneClasses[tone])} />}
      {label}
    </span>
  );
}
