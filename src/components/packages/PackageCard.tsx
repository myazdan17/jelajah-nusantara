"use client";

import Image from "next/image";
import {
  MapPin,
  Clock,
  Users,
  Star,
  MessageCircle,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatRupiah } from "@/lib/utils";
import { buildPackageInquiryUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { TravelPackage } from "@/types/travel";

interface PackageCardProps {
  pkg: TravelPackage;
  onOpenDetail: (pkg: TravelPackage) => void;
  className?: string;
}

export function PackageCard({
  pkg,
  onOpenDetail,
  className,
}: PackageCardProps) {
  const discount = pkg.originalPrice
    ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
    : 0;

  const durationShort = pkg.duration
    .replace(/Hari/gi, "D")
    .replace(/Malam/gi, "N")
    .replace(/\s+/g, "")
    .replace(/^(\d+)D(\d+)N$/, "$1D$2N")
    .slice(0, 6);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-forest-700/8 bg-ivory-50 transition-all duration-500",
        "hover:-translate-y-1.5 hover:border-forest-700/20 hover:shadow-lift",
        className
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-200">
        <Image
          src={pkg.images[0] ?? ""}
          alt={`${pkg.name} di ${pkg.destination}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 45%, rgba(15,36,24,0.7) 100%)",
          }}
        />

        {/* Top badges */}
        <div className="absolute left-3.5 top-3.5 z-10 flex flex-wrap gap-1.5">
          {pkg.badge ? <Badge variant="accent">{pkg.badge}</Badge> : null}
          <Badge variant="outline">{pkg.category}</Badge>
        </div>

        {/* Discount */}
        {discount > 0 ? (
          <div className="absolute right-3.5 top-3.5 z-10 rounded-full bg-terracotta-600 px-2.5 py-1 text-[11px] font-bold text-ivory-50 shadow-sm">
            -{discount}%
          </div>
        ) : null}

        {/* Bottom info bar */}
        <div className="absolute inset-x-3.5 bottom-3.5 z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-ivory-50/95 px-2.5 py-1 text-[11px] font-semibold text-forest-900 backdrop-blur">
            <Star
              className="h-3 w-3 fill-terracotta-500 text-terracotta-500"
              aria-hidden="true"
            />
            {pkg.rating.toFixed(1)} · {pkg.reviewCount}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-ivory-50/95 px-2.5 py-1 text-[11px] font-semibold text-forest-900 backdrop-blur">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {durationShort}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.01em] text-forest-900">
          {pkg.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-charcoal-700/70">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
            {pkg.destination}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
            {pkg.meetingPoint}
          </span>
        </div>

        <p className="mt-3.5 line-clamp-2 text-sm leading-relaxed text-charcoal-700/75">
          {pkg.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {pkg.facilities.slice(0, 2).map((fac) => (
            <li
              key={fac}
              className="rounded-md bg-forest-50 px-2 py-1 text-[11px] font-medium text-forest-800"
            >
              {fac}
            </li>
          ))}
          {pkg.facilities.length > 2 ? (
            <li className="rounded-md bg-sand-100 px-2 py-1 text-[11px] font-medium text-charcoal-700">
              +{pkg.facilities.length - 2} lainnya
            </li>
          ) : null}
        </ul>

        {/* Footer */}
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-dashed border-forest-700/15 pt-5">
          <div>
            {pkg.originalPrice ? (
              <p className="text-xs text-charcoal-700/55 line-through">
                {formatRupiah(pkg.originalPrice)}
              </p>
            ) : null}
            <p className="font-display text-xl font-semibold tracking-[-0.01em] text-forest-900">
              {formatRupiah(pkg.price)}
            </p>
            <p className="text-[11px] text-charcoal-700/60">/ pax</p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDetail(pkg)}
              aria-label={`Lihat detail paket ${pkg.name}`}
              className="rounded-lg"
            >
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              Detail
            </Button>
            <a
              href={buildPackageInquiryUrl(pkg.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pesan paket ${pkg.name} via WhatsApp`}
            >
              <Button
                variant="whatsapp"
                size="sm"
                fullWidth
                className="rounded-lg"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Pesan
              </Button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}