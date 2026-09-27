"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Bus, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Legal & Terdaftar",
    description:
      "Terdaftar dan beroperasi sesuai ketentuan yang berlaku di Indonesia.",
  },
  {
    icon: Users,
    title: "Local Guide",
    description:
      "Pemandu lokal berpengalaman dan ramah yang memahami setiap sudut destinasi.",
  },
  {
    icon: Bus,
    title: "Fasilitas Nyaman",
    description:
      "Akomodasi pilihan, armada ber-AC, dan standar kenyamanan yang konsisten.",
  },
  {
    icon: RefreshCw,
    title: "Fleksibel",
    description:
      "Pilihan reschedule sesuai kebijakan perjalanan yang transparan dan adil.",
  },
] as const;

export function TrustSection() {
  return (
    <section
      id="tentang"
      className="bg-ivory-100 py-20 sm:py-28 lg:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          eyebrow="Tentang Kami"
          title="Kenapa Memilih JelajahNusantara?"
          description="Kami percaya perjalanan terbaik lahir dari perencanaan yang matang dan tim yang peduli. Berikut empat pilar yang kami pegang."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-forest-700/8 bg-ivory-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/20"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl font-medium leading-none text-forest-700/[0.06]"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="relative z-10 mt-5 font-display text-lg font-medium text-forest-900">
                  {pillar.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-charcoal-700/75">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}