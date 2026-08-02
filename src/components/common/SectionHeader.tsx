import { type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title?: ReactNode;
  description?: ReactNode;
  accent?: "crimson" | "bronze" | "trust";
  className?: string;
  align?: "left" | "split";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  accent = "crimson",
  className,
  align = "left",
}: Props) {
  const eye =
    accent === "bronze" ? "eyebrow-accent" : accent === "trust" ? "eyebrow-trust" : "eyebrow";

  if (align === "split") {
    return (
      <div className={cn("grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14", className)}>
        <div className={cn(title ? "lg:col-span-5" : "lg:col-span-12")}>
          <Reveal>
            <div className={cn(accent === "bronze" ? "accent-bar-bronze" : "accent-bar", "mb-5")} />
            <p className={cn(eye, "mb-5")}>{eyebrow}</p>
            {title && <h2 className="display-2 text-balance">{title}</h2>}
          </Reveal>
        </div>
        {description && (
          <div
            className={cn(
              "flex items-end",
              title ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-8 mt-2",
            )}
          >
            <Reveal delay={0.05}>
              <p className="text-lg text-slate leading-relaxed">{description}</p>
            </Reveal>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn("mb-14", className)}>
      <Reveal>
        <div className={cn(accent === "bronze" ? "accent-bar-bronze" : "accent-bar", "mb-5")} />
        <p className={cn(eye, "mb-5")}>{eyebrow}</p>
        {title && <h2 className="display-2 text-balance max-w-3xl">{title}</h2>}
        {description && (
          <p className="mt-5 text-lg text-slate leading-relaxed max-w-2xl">{description}</p>
        )}
      </Reveal>
    </div>
  );
}
