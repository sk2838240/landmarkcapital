import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  /** Soft stone band under the title for editorial depth */
  tone?: "ivory" | "stone";
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  tone = "ivory",
}: Props) {
  return (
    <section
      className={`relative pt-36 pb-16 lg:pt-44 lg:pb-24 border-b border-border ${
        tone === "stone" ? "surface-stone" : "surface-ivory"
      }`}
    >
      <div className="container-tb">
        {eyebrow && (
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="accent-bar" />
              <p className="eyebrow !mb-0">{eyebrow}</p>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <h1 className="display-1 text-balance max-w-4xl">{title}</h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg lg:text-xl max-w-2xl leading-relaxed text-slate text-justify">
              {subtitle}
            </p>
          </Reveal>
        )}

        {children && (
          <Reveal delay={0.15}>
            <div className="mt-10">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
