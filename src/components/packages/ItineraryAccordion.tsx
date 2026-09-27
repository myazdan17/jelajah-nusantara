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
  const [openDay, setOpenDay] = useState<number | null>(
    days[0]?.day ?? null
  );

  const toggle = (day: number) => {
    setOpenDay((current) => (current === day ? null : day));
  };

  return (
    <div className="space-y-3">
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
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold",
                      isOpen
                        ? "bg-forest-700 text-ivory-50"
                        : "bg-forest-100 text-forest-800"
                    )}
                  >
                    {day.day}
                  </span>
                  <span className="font-display text-base text-forest-900 sm:text-lg">
                    Hari {day.day} — {day.title}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-forest-700 transition-transform duration-300",
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
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ol className="space-y-3 border-t border-forest-700/10 px-5 py-4">
                    {day.activities.map((activity, idx) => (
                      <li
                        key={`${day.day}-${idx}`}
                        className="flex gap-3"
                      >
                        <div className="flex w-14 shrink-0 flex-col items-end pt-0.5">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700">
                            <Clock className="h-3 w-3" aria-hidden="true" />
                            {activity.time}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 border-l border-dashed border-forest-700/20 pl-3">
                          <p className="text-sm font-medium text-forest-900">
                            {activity.activity}
                          </p>
                          <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-charcoal-700/70">
                            <MapPin className="h-3 w-3" aria-hidden="true" />
                            {activity.location}
                          </p>
                          {activity.note ? (
                            <p className="mt-1 text-xs italic text-terracotta-500">
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