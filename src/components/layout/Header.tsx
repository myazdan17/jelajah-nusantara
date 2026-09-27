"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/data/travel-data";
import { buildGeneralConsultationUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Paket Wisata", href: "#paket" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
            ? "bg-ivory-50/95 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#beranda");
            }}
            className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 rounded-md"
            aria-label={`${COMPANY.shortName} - Kembali ke beranda`}
          >
            <span className="font-display text-xl font-semibold leading-none text-forest-900 sm:text-2xl">
              Jelajah<span className="text-terracotta-500">Nusantara</span>
            </span>
            <span className="mt-1 hidden items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-forest-700/70 sm:inline-flex">
              <ShieldCheck className="h-3 w-3" aria-hidden="true" />
              Terpercaya sejak 2025
            </span>
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-forest-800/80 transition hover:bg-forest-50 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={buildGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button variant="whatsapp" size="sm">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Konsultasi Gratis
              </Button>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-forest-700/20 bg-ivory-50/80 text-forest-900 transition hover:bg-ivory-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 lg:hidden"
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

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-forest-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              aria-label="Navigasi mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-ivory-50 p-6 shadow-lift"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 mt-2">
                <p className="font-display text-2xl text-forest-900">
                  Jelajah<span className="text-terracotta-500">Nusantara</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-forest-700/70">
                  Menu Navigasi
                </p>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-forest-800 transition hover:bg-forest-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <a
                  href={buildGeneralConsultationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="whatsapp" size="lg" fullWidth>
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Konsultasi Gratis
                  </Button>
                </a>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}