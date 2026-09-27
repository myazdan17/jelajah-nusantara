"use client";

import { cn } from "@/lib/utils";
import type { Destination, TravelCategory } from "@/types/travel";

const CATEGORIES: (TravelCategory | "Semua")[] = [
  "Semua",
  "Open Trip",
  "Private Trip",
  "Family",
  "Honeymoon",
];

const DESTINATIONS: (Destination | "Semua")[] = [
  "Semua",
  "Labuan Bajo",
  "Bromo",
  "Bali",
  "Raja Ampat",
  "Derawan",
  "Dieng",
  "Puncak Jaya",
  "Wakatobi",
  "Danau Toba",
  "Belitung",
];

interface FilterBarProps {
  activeCategory: TravelCategory | "Semua";
  activeDestination: Destination | "Semua";
  onCategoryChange: (category: TravelCategory | "Semua") => void;
  onDestinationChange: (destination: Destination | "Semua") => void;
}

export function FilterBar({
  activeCategory,
  activeDestination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="w-full rounded-3xl border border-forest-700/8 bg-ivory-50 p-5 shadow-soft backdrop-blur sm:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span
            id="filter-tipe-label"
            className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70 sm:min-w-[7rem]"
          >
            Tipe
          </span>
          <div
            role="group"
            aria-labelledby="filter-tipe-label"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onCategoryChange(cat)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600",
                    active
                      ? "border-forest-700 bg-forest-700 text-ivory-50"
                      : "border-forest-700/15 bg-ivory-100 text-forest-800 hover:-translate-y-px hover:border-forest-700/40"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-px w-full bg-forest-700/8" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span
            id="filter-dest-label"
            className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70 sm:min-w-[7rem]"
          >
            Destinasi
          </span>
          <div
            role="group"
            aria-labelledby="filter-dest-label"
            className="flex flex-wrap gap-2"
          >
            {DESTINATIONS.map((dest) => {
              const active = activeDestination === dest;
              return (
                <button
                  key={dest}
                  type="button"
                  onClick={() => onDestinationChange(dest)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500",
                    active
                      ? "border-terracotta-500 bg-terracotta-500 text-ivory-50"
                      : "border-forest-700/15 bg-ivory-100 text-forest-800 hover:-translate-y-px hover:border-terracotta-400/50"
                  )}
                >
                  {dest}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}