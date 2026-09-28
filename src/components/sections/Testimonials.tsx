"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/travel-data";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-forest-900 py-16 text-ivory-100 sm:py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-display text-xs font-medium tracking-[0.15em] text-sand-400">
              04
            </span>
            <span className="h-px w-8 bg-ivory-50/25" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-200">
              Testimoni
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-display font-normal leading-[1.08] tracking-[-0.015em] text-ivory-50 text-[clamp(2rem,4.5vw,3.75rem)]"
            style={{ textWrap: "balance" }}
          >
            Cerita dari{" "}
            <span className="font-medium italic text-terracotta-400">
              Mereka yang Sudah Trip
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.0625rem)] leading-[1.75] text-ivory-100/75">
            Beberapa cerita yang mereka bagikan setelah pulang dari perjalanan.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {TESTIMONIALS.map((t, idx) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-full flex-col rounded-3xl border border-ivory-50/8 bg-forest-800/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-ivory-50/16 hover:bg-forest-800/80 sm:p-6"
            >
              <div
                className="flex gap-0.5"
                role="img"
                aria-label={`Rating ${t.rating} dari 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < t.rating
                        ? "h-3.5 w-3.5 fill-sand-400 text-sand-400"
                        : "h-3.5 w-3.5 text-ivory-100/25"
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-[13px] leading-relaxed text-ivory-100/90 sm:text-sm">
                &ldquo;{t.experience}&rdquo;
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-ivory-50/10 pt-5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-forest-700">
                  <Image
                    src={t.photo}
                    alt={`Foto ${t.name}`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ivory-50">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-ivory-100/65">
                    {t.city}, {t.packageName}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}