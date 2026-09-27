import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
  number?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
  number,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {/* Editorial eyebrow: nomor + garis tipis + label uppercase */}
      {(number || eyebrow) && (
        <div
          className={cn(
            "mb-6 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          {number && (
            <span className="font-display text-xs font-medium tracking-[0.15em] text-sand-400">
              {number}
            </span>
          )}
          {number && eyebrow && (
            <span
              className="h-px w-8 bg-forest-700/30"
              aria-hidden="true"
            />
          )}
          {eyebrow && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest-700">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* Title — fluid clamp typography */}
      <Tag
        className={cn(
          "font-display font-normal leading-[1.08] tracking-[-0.015em] text-forest-900",
          "text-[clamp(2rem,4.5vw,3.75rem)]"
        )}
        style={{ textWrap: "balance" }}
      >
        {title}
      </Tag>

      {/* Description — readable width + relaxed leading */}
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.0625rem)] leading-[1.75] text-charcoal-700/80",
            align === "center" && "mx-auto"
          )}
          style={{ textWrap: "pretty" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}