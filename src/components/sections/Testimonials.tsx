"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/travel-data";

export function Testimonials() {
  return (
    <section
      className="bg-forest-900 py-16 text-ivory-100 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sand-200">
            Testimoni
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl leading-tight text-ivory-50 sm:text-4xl"
          >
            Cerita Perjalanan Mereka
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ivory-100/75">
            Semua testimoni di bawah adalah contoh demo untuk keperluan
            showcase dan tidak mewakili pelanggan nyata.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, idx) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex h-full flex-col rounded-2xl border border-ivory-50/10 bg-forest-800/60 p-5 backdrop-blur"
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

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ivory-100/90">
                &ldquo;{t.experience}&rdquo;
              </blockquote>

              <figcaption className="mt-4 flex items-center gap-3 border-t border-ivory-50/10 pt-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
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
                  <p className="truncate text-xs text-ivory-100/70">
                    {t.city} — {t.packageName}
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