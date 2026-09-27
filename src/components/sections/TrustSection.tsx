"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, BedDouble, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Legal & Terdaftar",
    description:
      "Terdaftar dan beroperasi sesuai ketentuan yang berlaku. Data demo untuk keperluan showcase.",
  },
  {
    icon: Users,
    title: "Local Guide",
    description:
      "Pemandu lokal berpengalaman dan ramah yang memahami setiap sudut destinasi.",
  },
  {
    icon: BedDouble,
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
      className="bg-ivory-100/60 py-16 sm:py-24"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tentang Kami"
          title="Kenapa Memilih JelajahNusantara?"
          description="Kami percaya perjalanan terbaik lahir dari perencanaan yang matang dan tim yang peduli. Berikut empat pilar yang kami pegang. (Semua data bersifat demo)"
          align="center"
          className="max-w-3xl"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex h-full flex-col rounded-2xl border border-forest-700/10 bg-ivory-50 p-6 shadow-soft"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg text-forest-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700/80">
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