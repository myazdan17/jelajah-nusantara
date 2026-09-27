"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FilterBar } from "./FilterBar";
import { buildGeneralConsultationUrl } from "@/lib/whatsapp";
import type { Destination, TravelCategory } from "@/types/travel";

interface HeroProps {
  activeCategory: TravelCategory | "Semua";
  activeDestination: Destination | "Semua";
  onCategoryChange: (category: TravelCategory | "Semua") => void;
  onDestinationChange: (destination: Destination | "Semua") => void;
  onScrollToPackages: () => void;
}

export function Hero({
  activeCategory,
  activeDestination,
  onCategoryChange,
  onDestinationChange,
  onScrollToPackages,
}: HeroProps) {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1920&q=80"
          alt="Pemandangan gugusan pulau karst Indonesia dari udara"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/55 to-forest-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/60 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-ivory-50/20 bg-ivory-50/10 px-3 py-1.5 backdrop-blur">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ivory-50">
              <Star className="h-3.5 w-3.5 fill-sand-400 text-sand-400" aria-hidden="true" />
              4.9/5 dari 3.200+ Wisatawan Puas
            </span>
            <span className="hidden h-3 w-px bg-ivory-50/30 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ivory-50">
              <ShieldCheck className="h-3.5 w-3.5 text-sage-200" aria-hidden="true" />
              100% Berizin Resmi
            </span>
          </div>

          <h1 className="font-display text-4xl leading-[1.08] text-ivory-50 sm:text-5xl lg:text-6xl">
            Jelajahi Keindahan Indonesia{" "}
            <span className="italic text-sand-200">Tanpa Ribet</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-100/90 sm:text-lg">
            Dari sailing Phinisi di Labuan Bajo hingga sunrise magis Bromo —
            semua itinerary, transport, akomodasi, dan dokumentasi sudah kami
            siapkan. Kamu cukup datang dan menikmati perjalanan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              variant="primary"
              onClick={onScrollToPackages}
              className="bg-ivory-50 text-forest-900 hover:bg-ivory-100"
            >
              Lihat Paket Wisata
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <a
              href={buildGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="lg" variant="whatsapp" fullWidth>
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Konsultasi Gratis
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 sm:mt-14"
        >
          <FilterBar
            activeCategory={activeCategory}
            activeDestination={activeDestination}
            onCategoryChange={onCategoryChange}
            onDestinationChange={onDestinationChange}
          />
        </motion.div>
      </div>
    </section>
  );
}