import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "forest" | "sand" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-forest-700 text-ivory-50",
  accent: "bg-terracotta-500 text-ivory-50",
  forest: "bg-forest-50 text-forest-800 border border-forest-200",
  sand: "bg-sand-100 text-charcoal-800 border border-sand-200",
  outline: "bg-ivory-50/90 text-forest-800 border border-forest-700/20 backdrop-blur",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}