"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, ShieldCheck } from "lucide-react";
import { buildGeneralConsultationUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Paket Wisata", href: "#paket" },
  { label: "Tentang", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-ivory-50/95 py-2.5 shadow-[0_1px_0_rgba(35,74,49,0.06),0_8px_32px_-16px_rgba(15,36,24,0.12)] backdrop-blur-xl"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#beranda");
            }}
            className="flex min-w-0 flex-col gap-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
            aria-label="JelajahNusantara beranda"
          >
            <span className="font-display text-lg font-semibold leading-none tracking-[-0.02em] text-forest-900 sm:text-xl md:text-2xl">
              Jelajah<span className="text-terracotta-500">Nusantara</span>
            </span>
            <span className="hidden items-center gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-forest-700/70 sm:inline-flex">
              <ShieldCheck className="h-3 w-3" aria-hidden="true" />
              Terpercaya sejak 2019
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-forest-800/85 transition-colors hover:bg-forest-50 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={buildGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-forest-900 px-4 py-2 text-xs font-semibold text-ivory-50 transition-colors hover:bg-forest-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2 md:inline-flex"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Konsultasi Gratis
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-forest-700/15 bg-ivory-50/90 text-forest-900 transition hover:bg-ivory-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full screen */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ivory-50 lg:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header menu */}
              <div className="flex items-center justify-between border-b border-forest-700/10 px-4 py-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-lg font-semibold leading-none tracking-[-0.02em] text-forest-900">
                    Jelajah<span className="text-terracotta-500">Nusantara</span>
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-forest-700/70">
                    Menu Navigasi
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Tutup menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 text-forest-900 transition hover:bg-forest-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Nav items */}
              <nav aria-label="Navigasi mobile" className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className="w-full rounded-xl px-4 py-4 text-left text-base font-medium text-forest-800 transition hover:bg-forest-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer menu */}
              <div className="border-t border-forest-700/10 p-4">
                <a
                  href={buildGeneralConsultationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#2ce06e] to-[#1ebe5b] text-sm font-semibold text-white shadow-soft transition hover:shadow-[0_8px_20px_-8px_rgba(37,211,102,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                  style={{ height: "3.25rem" }}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}