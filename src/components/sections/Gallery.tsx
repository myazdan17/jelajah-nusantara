"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <section
      id="galeri"
      className="py-20 sm:py-28 lg:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          eyebrow="Galeri"
          title="Potret Perjalanan dari Destinasi Pilihan"
          description="Kumpulan momen dari destinasi unggulan kami."
        />

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter galeri"
        >
          {FILTERS.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600",
                  isActive
                    ? "border-forest-700 bg-forest-700 text-ivory-50"
                    : "border-forest-700/15 bg-ivory-100 text-forest-800 hover:-translate-y-px hover:border-forest-700/40"
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {items.length === 0 ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-10 rounded-3xl border border-dashed border-forest-700/20 bg-ivory-100/50 p-10 text-center"
          >
            <p className="font-display text-lg text-forest-900">
              Belum ada foto untuk destinasi ini.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(idx * 0.08, 0.4),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-3xl bg-forest-900"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-forest-900/90 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-base font-medium text-ivory-50">
                    {item.caption}
                  </p>
                  <p className="mt-0.5 text-xs text-ivory-100/80">
                    {item.destination}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}