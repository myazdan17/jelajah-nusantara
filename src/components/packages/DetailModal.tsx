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
        <div className="p-8" />
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
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={pkg.images[0] ?? ""}
          alt={`${pkg.name} di ${pkg.destination}`}
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {pkg.badge ? <Badge variant="accent">{pkg.badge}</Badge> : null}
            <Badge variant="outline">{pkg.category}</Badge>
            <Badge variant="outline">{pkg.destination}</Badge>
          </div>
          <h3 className="font-display text-2xl text-ivory-50 sm:text-3xl">
            {pkg.name}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ivory-100/90">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Meeting point: {pkg.meetingPoint}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-sand-400 text-sand-400" aria-hidden="true" />
              {pkg.rating.toFixed(1)} ({pkg.reviewCount} ulasan)
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          <section>
            <h4 className="font-display text-lg text-forest-900">
              Tentang Perjalanan
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-700/85">
              {pkg.description}
            </p>
          </section>

          <section>
            <h4 className="font-display text-lg text-forest-900">
              Itinerary Lengkap
            </h4>
            <div className="mt-4">
              <ItineraryAccordion days={pkg.itinerary} />
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 font-display text-base text-forest-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest-700 text-ivory-50">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Include
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-700/85">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-forest-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-display text-base text-forest-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-terracotta-500 text-ivory-50">
                  <XIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Exclude
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-700/85">
                {pkg.excludes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <XIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 font-display text-base text-forest-900">
                <Building2 className="h-4 w-4 text-forest-600" aria-hidden="true" />
                Fasilitas
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-700/85">
                {pkg.facilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-display text-base text-forest-900">
                <Backpack className="h-4 w-4 text-forest-600" aria-hidden="true" />
                Yang Perlu Dibawa
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-700/85">
                {pkg.thingsToBring.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
          <div className="rounded-2xl border border-forest-700/15 bg-ivory-50 p-5">
            <p className="text-xs uppercase tracking-wider text-charcoal-700/60">
              Mulai dari
            </p>
            {pkg.originalPrice ? (
              <p className="text-xs text-charcoal-700/55 line-through">
                {formatRupiah(pkg.originalPrice)}
              </p>
            ) : null}
            <p className="font-display text-3xl font-semibold text-forest-900">
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