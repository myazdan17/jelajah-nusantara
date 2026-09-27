"use client";

import { cn } from "@/lib/utils";
import type { Destination, TravelCategory } from "@/types/travel";

const CATEGORIES: (TravelCategory | "Semua")[] = [
  "Semua",
  "Open Trip",
  "Private Trip",
  "Family",
  "Honeymoon",
  "Premium Trip",
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

interface PackageFiltersProps {
  activeCategory: TravelCategory | "Semua";
  activeDestination: Destination | "Semua";
  onCategoryChange: (category: TravelCategory | "Semua") => void;
  onDestinationChange: (destination: Destination | "Semua") => void;
  resultCount: number;
}

export function PackageFilters({
  activeCategory,
  activeDestination,
  onCategoryChange,
  onDestinationChange,
  resultCount,
}: PackageFiltersProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-forest-700/8 bg-ivory-50 p-5 shadow-soft sm:p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70 sm:min-w-[5rem]">
            Kategori
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
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

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70 sm:min-w-[5rem]">
            Destinasi
          </span>
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

      <p
        className="shrink-0 text-sm text-charcoal-700/70 lg:pb-1"
        aria-live="polite"
      >
        Menampilkan{" "}
        <span className="font-semibold text-forest-900">{resultCount}</span>{" "}
        paket
      </p>
    </div>
  );
}