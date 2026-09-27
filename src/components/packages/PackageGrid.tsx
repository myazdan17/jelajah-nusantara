"use client";

import { motion } from "framer-motion";
import { PackageCard } from "./PackageCard";
import type { TravelPackage } from "@/types/travel";

interface PackageGridProps {
  packages: TravelPackage[];
  onOpenDetail: (pkg: TravelPackage) => void;
}

export function PackageGrid({ packages, onOpenDetail }: PackageGridProps) {
  if (packages.length === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-dashed border-forest-700/20 bg-ivory-100/50 p-10 text-center"
      >
        <p className="font-display text-xl text-forest-900">
          Belum ada paket yang cocok
        </p>
        <p className="mt-2 text-sm text-charcoal-700/75">
          Coba ubah filter kategori atau destinasi untuk melihat paket lainnya.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg, idx) => (
        <motion.div
          key={pkg.id}
          layout
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: Math.min(idx * 0.06, 0.35),
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <PackageCard pkg={pkg} onOpenDetail={onOpenDetail} />
        </motion.div>
      ))}
    </div>
  );
}