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
    <div className="mb-8 rounded-2xl border border-forest-700/10 bg-ivory-100/60 p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70">
              Kategori
            </label>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori paket">
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onCategoryChange(cat)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600",
                      active
                        ? "border-forest-700 bg-forest-700 text-ivory-50"
                        : "border-forest-700/15 bg-ivory-50 text-forest-800 hover:border-forest-700/40"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-700/70">
              Destinasi
            </label>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter destinasi paket">
              {DESTINATIONS.map((dest) => {
                const active = activeDestination === dest;
                return (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => onDestinationChange(dest)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600",
                      active
                        ? "border-terracotta-500 bg-terracotta-500 text-ivory-50"
                        : "border-forest-700/15 bg-ivory-50 text-forest-800 hover:border-terracotta-400/50"
                    )}
                  >
                    {dest}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-sm text-charcoal-700/70 lg:pb-1" aria-live="polite">
          Menampilkan{" "}
          <span className="font-semibold text-forest-900">{resultCount}</span>{" "}
          paket
        </p>
      </div>
    </div>
  );
}