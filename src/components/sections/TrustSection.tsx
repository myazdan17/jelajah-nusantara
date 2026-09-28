"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Bus, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Legal dan Terdaftar",
    description:
      "Kami terdaftar dan beroperasi sesuai ketentuan yang berlaku di Indonesia.",
  },
  {
    icon: Users,
    title: "Guide Lokal Berpengalaman",
    description:
      "Setiap trip ditemani pemandu lokal yang mengenal betul destinasi dan ramah kepada wisatawan.",
  },
  {
    icon: Bus,
    title: "Fasilitas yang Nyaman",
    description:
      "Akomodasi pilihan, armada ber-AC, dan standar kenyamanan yang kami jaga konsisten.",
  },
  {
    icon: RefreshCw,
    title: "Kebijakan yang Fleksibel",
    description:
      "Reschedule bisa dilakukan sesuai kebijakan yang kami sampaikan terbuka sejak awal.",
  },
] as const;

export function TrustSection() {
  return (
    <section
      id="tentang"
      className="bg-ivory-100 py-16 sm:py-24 lg:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          eyebrow="Tentang Kami"
          title="Kenapa Memilih JelajahNusantara?"
          description="Setiap perjalanan yang kami rancang berangkat dari satu prinsip: rencana yang matang dan tim yang peduli. Empat hal ini yang kami pegang."
        />

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-forest-700/8 bg-ivory-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/20 sm:p-7"
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

                <h3 className="relative z-10 mt-5 font-display text-base font-medium text-forest-900 sm:text-lg">
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