"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildGeneralConsultationUrl } from "@/lib/whatsapp";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-forest-700/10 bg-ivory-50/97 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(15,36,24,0.18)] backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto flex max-w-md items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-forest-900">
                Mulai Petualanganmu
              </p>
              <p className="truncate text-[11px] text-charcoal-700/65">
                Konsultasi gratis dengan admin
              </p>
            </div>
            <a
              href={buildGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-gradient-to-br from-[#2ce06e] to-[#1ebe5b] px-4 text-sm font-semibold text-white shadow-soft transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(37,211,102,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              aria-label="Hubungi kami via WhatsApp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}