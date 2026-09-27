"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/data/travel-data";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(
    FAQ_ITEMS[0]?.id ?? null
  );

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="font-display text-xs font-medium tracking-[0.15em] text-sand-400">
              05
            </span>
            <span className="h-px w-8 bg-forest-700/30" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest-700">
              FAQ
            </span>
          </div>
          <h2
            id="faq-heading"
            className="font-display font-normal leading-[1.08] tracking-[-0.015em] text-forest-900 text-[clamp(2rem,4.5vw,3.75rem)]"
            style={{ textWrap: "balance" }}
          >
            Pertanyaan yang{" "}
            <span className="font-medium italic text-terracotta-500">
              Sering Ditanyakan
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.0625rem)] leading-[1.75] text-charcoal-700/80">
            Jawaban singkat untuk pertanyaan umum seputar booking dan
            perjalanan.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;
            return (
              <div
                key={item.id}
                className={cn(
                  "mb-3 overflow-hidden rounded-3xl border transition-colors duration-300",
                  isOpen
                    ? "border-forest-700/30 bg-forest-50/60"
                    : "border-forest-700/10 bg-ivory-50"
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-forest-700/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                  >
                    <span className="font-display text-base font-medium text-forest-900 sm:text-lg">
                      {item.question}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-forest-700 transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-forest-700/10 px-6 pb-5 pt-5 text-sm leading-relaxed text-charcoal-700/85">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}