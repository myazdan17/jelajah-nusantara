"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ItineraryDay } from "@/types/travel";

interface ItineraryAccordionProps {
  days: ItineraryDay[];
}

export function ItineraryAccordion({ days }: ItineraryAccordionProps) {
  const [openDay, setOpenDay] = useState<number | null>(days[0]?.day ?? null);

  const toggle = (day: number) => {
    setOpenDay((current) => (current === day ? null : day));
  };

  return (
    <div className="space-y-2.5 sm:space-y-3">
      {days.map((day) => {
        const isOpen = openDay === day.day;
        const panelId = `itinerary-panel-${day.day}`;
        const buttonId = `itinerary-button-${day.day}`;

        return (
          <div
            key={day.day}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors",
              isOpen
                ? "border-forest-700/30 bg-forest-50/60"
                : "border-forest-700/10 bg-ivory-50"
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(day.day)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 sm:px-5 sm:py-4"
              >
                <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold sm:h-9 sm:w-9 sm:text-sm",
                      isOpen
                        ? "bg-forest-700 text-ivory-50"
                        : "bg-forest-100 text-forest-800"
                    )}
                  >
                    {day.day}
                  </span>
                  <span className="min-w-0 truncate font-display text-sm font-medium text-forest-900 sm:text-base md:text-lg">
                    Hari {day.day}: {day.title}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-forest-700 transition-transform duration-300 sm:h-5 sm:w-5",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <ol className="space-y-3 border-t border-forest-700/10 px-4 py-3.5 sm:space-y-4 sm:px-5 sm:py-4">
                    {day.activities.map((activity, idx) => (
                      <li
                        key={`${day.day}-${idx}`}
                        className="flex gap-2.5 sm:gap-3"
                      >
                        <div className="flex w-12 shrink-0 flex-col items-end pt-0.5 sm:w-14">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-forest-700 sm:text-xs">
                            <Clock
                              className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                              aria-hidden="true"
                            />
                            {activity.time}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 border-l border-dashed border-forest-700/20 pl-2.5 sm:pl-3">
                          <p className="text-[13px] font-medium leading-snug text-forest-900 sm:text-sm">
                            {activity.activity}
                          </p>
                          <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-charcoal-700/70 sm:text-xs">
                            <MapPin
                              className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                              aria-hidden="true"
                            />
                            {activity.location}
                          </p>
                          {activity.note ? (
                            <p className="mt-1 text-[11px] italic text-terracotta-500 sm:text-xs">
                              {activity.note}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}