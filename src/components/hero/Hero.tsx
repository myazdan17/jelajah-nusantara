"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { buildGeneralConsultationUrl } from "@/lib/whatsapp";

interface HeroProps {
  onScrollToPackages: () => void;
}

const HERO_STATS = [
  {
    label: "Wisatawan Puas",
    value: "3.200",
    suffix: "+ orang",
    sub: "Sejak 2019 hingga kini",
  },
  {
    label: "Rating Rata-rata",
    value: "4.9",
    suffix: "/ 5.0",
    sub: "Dari 1.200+ ulasan",
  },
  {
    label: "Destinasi Aktif",
    value: "12",
    suffix: "destinasi",
    sub: "Sabang sampai Merauke",
  },
];

export function Hero({ onScrollToPackages }: HeroProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  const handlePointerEnter = () => {
    if (glowRef.current) glowRef.current.style.opacity = "1";
  };

  const handlePointerLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1920&q=80"
          alt="Pemandangan kepulauan Indonesia dari udara"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 20% 40%, rgba(15,36,24,0.55) 0%, transparent 60%), linear-gradient(180deg, rgba(15,36,24,0.55) 0%, rgba(15,36,24,0.35) 45%, rgba(15,36,24,0.92) 100%)",
          }}
        />
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle, rgba(201,101,63,0.30) 0%, transparent 65%)",
            filter: "blur(24px)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-7 inline-flex flex-wrap items-center gap-3 rounded-full border border-ivory-50/20 bg-ivory-50/10 px-4 py-2 backdrop-blur-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ivory-50">
                <Star
                  className="h-3.5 w-3.5 fill-sand-400 text-sand-400"
                  aria-hidden="true"
                />
                4.9/5 dari 3.200+ Wisatawan
              </span>
              <span
                className="hidden h-3 w-px bg-ivory-50/25 sm:inline-block"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ivory-50">
                <ShieldCheck
                  className="h-3.5 w-3.5 text-sand-200"
                  aria-hidden="true"
                />
                100% Berizin Resmi
              </span>
            </div>

            <h1
              className="font-display font-normal leading-[1.02] tracking-[-0.025em] text-ivory-50 text-[clamp(2.25rem,5.5vw,4.5rem)]"
              style={{ textWrap: "balance" }}
            >
              Jelajahi Keindahan Indonesia{" "}
              <span className="font-medium italic text-sand-200">
                Tanpa Ribet
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.7] text-ivory-100/90"
              style={{ textWrap: "pretty" }}
            >
              Dari sailing Phinisi di Labuan Bajo hingga sunrise magis Bromo —
              itinerary, transport, akomodasi, dan dokumentasi sudah kami
              siapkan. Kamu cukup datang dan menikmati perjalanan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onScrollToPackages}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ivory-50 px-7 text-sm font-semibold text-forest-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory-100 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 sm:text-base"
              >
                Lihat Paket Wisata
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href={buildGeneralConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2ce06e] to-[#1ebe5b] px-7 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-8px_rgba(37,211,102,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 sm:text-base"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-30" />
                  <MessageCircle
                    className="relative h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
                Konsultasi Gratis
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Statistik perusahaan"
            className="hidden flex-col gap-3.5 lg:flex lg:max-w-xs lg:justify-self-end"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ivory-50/15 bg-ivory-50/10 p-5 backdrop-blur-xl transition-all duration-400 hover:-translate-y-0.5 hover:border-ivory-50/25 hover:bg-ivory-50/15"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sand-400">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-2xl font-medium leading-none tracking-[-0.02em] text-ivory-50">
                  {stat.value}
                  <span className="ml-1 text-sm font-normal opacity-70">
                    {stat.suffix}
                  </span>
                </p>
                <p className="mt-1.5 text-xs text-ivory-50/70">{stat.sub}</p>
              </div>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}