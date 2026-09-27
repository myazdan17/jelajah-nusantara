import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-500">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="font-display text-3xl leading-tight text-forest-900 sm:text-4xl md:text-[2.6rem]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-charcoal-700/80">
          {description}
        </p>
      ) : null}
    </div>
  );
}