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
    <div className="w-full rounded-2xl border border-forest-700/10 bg-ivory-50/95 p-4 shadow-card backdrop-blur sm:p-5">
      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70">
            Tipe Perjalanan
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tipe perjalanan">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onCategoryChange(cat)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600",
                    active
                      ? "border-forest-700 bg-forest-700 text-ivory-50"
                      : "border-forest-700/15 bg-ivory-100 text-forest-800 hover:border-forest-700/40"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-px w-full bg-forest-700/10" />

        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70">
            Destinasi
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter destinasi">
            {DESTINATIONS.map((dest) => {
              const active = activeDestination === dest;
              return (
                <button
                  key={dest}
                  type="button"
                  onClick={() => onDestinationChange(dest)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600",
                    active
                      ? "border-terracotta-500 bg-terracotta-500 text-ivory-50"
                      : "border-forest-700/15 bg-ivory-100 text-forest-800 hover:border-terracotta-400/50"
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