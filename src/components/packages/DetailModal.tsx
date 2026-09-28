"use client";

import Image from "next/image";
import {
  MapPin,
  Clock,
  Star,
  Check,
  X as XIcon,
  Backpack,
  Building2,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { ItineraryAccordion } from "./ItineraryAccordion";
import { BookingCalculator } from "./BookingCalculator";
import { formatRupiah } from "@/lib/utils";
import type { TravelPackage } from "@/types/travel";

interface DetailModalProps {
  pkg: TravelPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DetailModal({ pkg, isOpen, onClose }: DetailModalProps) {
  if (!pkg) {
    return (
      <Modal isOpen={false} onClose={onClose}>
        <div className="p-6" />
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Detail paket ${pkg.name}`}
      size="xl"
    >
      {/* Hero image */}
      <div className="relative h-52 w-full overflow-hidden sm:h-72">
        <Image
          src={pkg.images[0] ?? ""}
          alt={`${pkg.name} di ${pkg.destination}`}
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4 pr-16 sm:p-7 sm:pr-20">
          <div className="mb-2.5 flex flex-wrap gap-1.5 sm:mb-3">
            {pkg.badge ? (
              <Badge variant="accent">{pkg.badge}</Badge>
            ) : null}
            <Badge variant="outline">{pkg.category}</Badge>
            <Badge variant="outline">{pkg.destination}</Badge>
          </div>

          <h3 className="font-display text-xl leading-tight tracking-[-0.01em] text-ivory-50 sm:text-3xl">
            {pkg.name}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-ivory-100/90 sm:gap-x-4 sm:text-xs">
            <span className="inline-flex items-center gap-1.5">
              <Clock
                className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                aria-hidden="true"
              />
              {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin
                className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                aria-hidden="true"
              />
              {pkg.meetingPoint}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star
                className="h-3 w-3 fill-sand-400 text-sand-400 sm:h-3.5 sm:w-3.5"
                aria-hidden="true"
              />
              {pkg.rating.toFixed(1)} ({pkg.reviewCount})
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-7 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-8 lg:space-y-0">
        <div className="space-y-6 sm:space-y-8">
          {/* Tentang */}
          <section>
            <h4 className="font-display text-base font-medium text-forest-900 sm:text-lg">
              Tentang Perjalanan
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-charcoal-700/85 sm:mt-3">
              {pkg.description}
            </p>
          </section>

          {/* Itinerary */}
          <section>
            <h4 className="font-display text-base font-medium text-forest-900 sm:text-lg">
              Itinerary Lengkap
            </h4>
            <div className="mt-3 sm:mt-4">
              <ItineraryAccordion days={pkg.itinerary} />
            </div>
          </section>

          {/* Include & Exclude */}
          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-medium text-forest-900 sm:text-base">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-forest-700 text-ivory-50 sm:h-6 sm:w-6">
                  <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                </span>
                Include
              </h4>
              <ul className="mt-2.5 space-y-1.5 text-sm text-charcoal-700/85 sm:mt-3 sm:space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-600 sm:h-4 sm:w-4"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-medium text-forest-900 sm:text-base">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-500 text-ivory-50 sm:h-6 sm:w-6">
                  <XIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                </span>
                Exclude
              </h4>
              <ul className="mt-2.5 space-y-1.5 text-sm text-charcoal-700/85 sm:mt-3 sm:space-y-2">
                {pkg.excludes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <XIcon
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta-500 sm:h-4 sm:w-4"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Fasilitas & Things to Bring */}
          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-medium text-forest-900 sm:text-base">
                <Building2
                  className="h-4 w-4 text-forest-600"
                  aria-hidden="true"
                />
                Fasilitas
              </h4>
              <ul className="mt-2.5 space-y-1.5 text-sm text-charcoal-700/85 sm:mt-3 sm:space-y-2">
                {pkg.facilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-medium text-forest-900 sm:text-base">
                <Backpack
                  className="h-4 w-4 text-forest-600"
                  aria-hidden="true"
                />
                Yang Perlu Dibawa
              </h4>
              <ul className="mt-2.5 space-y-1.5 text-sm text-charcoal-700/85 sm:mt-3 sm:space-y-2">
                {pkg.thingsToBring.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Booking Calculator — Mobile shows here */}
          <aside className="space-y-4 lg:hidden">
            <div className="rounded-2xl border border-forest-700/15 bg-ivory-50 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-charcoal-700/60">
                Mulai dari
              </p>
              {pkg.originalPrice ? (
                <p className="mt-1 text-xs text-charcoal-700/55 line-through">
                  {formatRupiah(pkg.originalPrice)}
                </p>
              ) : null}
              <p className="font-display text-2xl font-semibold tracking-[-0.01em] text-forest-900">
                {formatRupiah(pkg.price)}
              </p>
              <p className="mt-0.5 text-xs text-charcoal-700/70">per orang</p>
            </div>

            <BookingCalculator pkg={pkg} />
          </aside>
        </div>

        {/* Booking Calculator — Desktop sidebar */}
        <aside className="hidden space-y-4 lg:sticky lg:top-4 lg:block lg:self-start">
          <div className="rounded-2xl border border-forest-700/15 bg-ivory-50 p-5">
            <p className="text-xs uppercase tracking-wider text-charcoal-700/60">
              Mulai dari
            </p>
            {pkg.originalPrice ? (
              <p className="mt-1 text-xs text-charcoal-700/55 line-through">
                {formatRupiah(pkg.originalPrice)}
              </p>
            ) : null}
            <p className="font-display text-3xl font-semibold tracking-[-0.01em] text-forest-900">
              {formatRupiah(pkg.price)}
            </p>
            <p className="mt-1 text-xs text-charcoal-700/70">per orang</p>
          </div>

          <BookingCalculator pkg={pkg} />
        </aside>
      </div>
    </Modal>
  );
}