"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_ITEMS } from "@/data/travel-data";
import type { Destination } from "@/types/travel";

const FILTERS: (Destination | "Semua")[] = [
  "Semua",
  "Bromo",
  "Labuan Bajo",
  "Bali",
  "Raja Ampat",
  "Derawan",
  "Dieng",
  "Puncak Jaya",
  "Wakatobi",
  "Danau Toba",
  "Belitung",
];

export function Gallery() {
  const [active, setActive] = useState<Destination | "Semua">("Semua");

  const items = useMemo(() => {
    if (active === "Semua") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.destination === active);
  }, [active]);

  return (
    <section id="galeri" className="py-16 sm:py-24" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galeri"
          title="Potret Perjalanan dari Destinasi Pilihan"
          description="Kumpulan momen dari destinasi unggulan kami. Foto bersifat ilustratif (demo)."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter galeri">
          {FILTERS.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600",
                  isActive
                    ? "border-forest-700 bg-forest-700 text-ivory-50"
                    : "border-forest-700/15 bg-ivory-100 text-forest-800 hover:border-forest-700/40"
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, idx) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-forest-700/10 bg-forest-900"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/90 to-transparent p-4">
                  <p className="font-display text-base text-ivory-50">
                    {item.caption}
                  </p>
                  <p className="text-xs text-ivory-100/80">{item.destination}</p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}