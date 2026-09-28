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
    value: "250",
    suffix: "+ orang",
    sub: "Sejak 2019 hingga kini",
  },
  {
    label: "Rating Rata-rata",
    value: "4.9",
    suffix: "/ 5.0",
    sub: "Dari 250+ ulasan",
  },
  {
    label: "Destinasi Aktif",
    value: "10",
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
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Background */}
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
              "radial-gradient(120% 80% at 20% 40%, rgba(15,36,24,0.6) 0%, transparent 60%), linear-gradient(180deg, rgba(15,36,24,0.6) 0%, rgba(15,36,24,0.4) 45%, rgba(15,36,24,0.95) 100%)",
          }}
        />
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden h-[520px] w-[520px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-500 lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(201,101,63,0.30) 0%, transparent 65%)",
            filter: "blur(24px)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-full border border-ivory-50/20 bg-ivory-50/10 px-3.5 py-2 backdrop-blur-xl sm:px-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ivory-50 sm:text-xs">
                <Star
                  className="h-3 w-3 fill-sand-400 text-sand-400 sm:h-3.5 sm:w-3.5"
                  aria-hidden="true"
                />
                4.9/5 dari 250+ Wisatawan
              </span>
              <span
                className="hidden h-3 w-px bg-ivory-50/25 sm:inline-block"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ivory-50 sm:text-xs">
                <ShieldCheck
                  className="h-3 w-3 text-sand-200 sm:h-3.5 sm:w-3.5"
                  aria-hidden="true"
                />
                100% Berizin Resmi
              </span>
            </div>

            {/* Headline — fluid clamp */}
            <h1
              className="font-display font-normal leading-[1.05] tracking-[-0.025em] text-ivory-50"
              style={{
                fontSize: "clamp(2rem, 8vw, 4.5rem)",
                textWrap: "balance",
              }}
            >
              Jelajahi Keindahan Indonesia{" "}
              <span className="font-medium italic text-sand-200">
                Tanpa Ribet
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-5 max-w-xl text-[15px] leading-[1.65] text-ivory-100/90 sm:mt-6 sm:text-base lg:text-lg"
              style={{ textWrap: "pretty" }}
            >
              Dari sailing Phinisi di Labuan Bajo hingga sunrise magis Bromo.
              Itinerary, transport, akomodasi, dan dokumentasi sudah kami
              siapkan. Kamu cukup datang dan menikmati perjalanan.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
              <button
                type="button"
                onClick={onScrollToPackages}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ivory-50 px-6 text-sm font-semibold text-forest-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory-100 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 sm:h-13 sm:text-base"
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
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2ce06e] to-[#1ebe5b] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-8px_rgba(37,211,102,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 sm:h-13 sm:text-base"
              >
                <span className="relative flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-30" />
                  <MessageCircle
                    className="relative h-4 w-4 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </span>
                Konsultasi Gratis
              </a>
            </div>

            {/* Mobile Stats — Compact horizontal scroll */}
            <div className="mt-7 lg:hidden">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-sand-400">
                Dipercaya Wisatawan
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="shrink-0 rounded-xl border border-ivory-50/15 bg-ivory-50/10 px-3.5 py-2.5 backdrop-blur-xl"
                  >
                    <p className="font-display text-base font-medium leading-none text-ivory-50">
                      {stat.value}
                      <span className="ml-1 text-[11px] font-normal text-ivory-50/70">
                        {stat.suffix}
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] leading-tight text-ivory-100/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Desktop Stats — Full vertical cards */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Statistik perusahaan"
            className="hidden flex-col gap-3.5 lg:flex lg:max-w-xs lg:justify-self-end"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ivory-50/15 bg-ivory-50/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory-50/25 hover:bg-ivory-50/15"
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