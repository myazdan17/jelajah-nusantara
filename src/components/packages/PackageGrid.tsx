"use client";

import { PackageCard } from "./PackageCard";
import type { TravelPackage } from "@/types/travel";

interface PackageGridProps {
  packages: TravelPackage[];
  onOpenDetail: (pkg: TravelPackage) => void;
}

export function PackageGrid({ packages, onOpenDetail }: PackageGridProps) {
  if (packages.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-forest-700/20 bg-ivory-100/50 p-10 text-center">
        <p className="font-display text-xl text-forest-900">
          Tidak ada paket yang cocok
        </p>
        <p className="mt-2 text-sm text-charcoal-700/75">
          Coba ubah filter kategori atau destinasi untuk melihat paket lainnya.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} onOpenDetail={onOpenDetail} />
      ))}
    </div>
  );
}