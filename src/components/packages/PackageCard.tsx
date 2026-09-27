"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
import type { TravelPackage } from "@/types/travel";

interface PackageCardProps {
  pkg: TravelPackage;
  onOpenDetail: (pkg: TravelPackage) => void;
}

export function PackageCard({ pkg, onOpenDetail }: PackageCardProps) {
  const discount = pkg.originalPrice
    ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-700/10 bg-ivory-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={pkg.images[0] ?? ""}
          alt={`${pkg.name} di ${pkg.destination}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/55 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {pkg.badge ? <Badge variant="accent">{pkg.badge}</Badge> : null}
          <Badge variant="outline">{pkg.category}</Badge>
        </div>

        {discount > 0 ? (
          <div className="absolute right-3 top-3 rounded-full bg-terracotta-600 px-2.5 py-1 text-[11px] font-bold text-ivory-50 shadow-soft">
            -{discount}%
          </div>
        ) : null}

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-ivory-50/95 px-2.5 py-1 text-[11px] font-semibold text-forest-900 backdrop-blur">
            <Star className="h-3 w-3 fill-terracotta-500 text-terracotta-500" aria-hidden="true" />
            {pkg.rating.toFixed(1)} ({pkg.reviewCount})
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-ivory-50/95 px-2.5 py-1 text-[11px] font-semibold text-forest-900 backdrop-blur">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {pkg.duration}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-snug text-forest-900">
          {pkg.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-charcoal-700/75">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
            {pkg.destination}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
            {pkg.meetingPoint}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal-700/80">
          {pkg.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {pkg.facilities.slice(0, 3).map((fac) => (
            <li
              key={fac}
              className="rounded-md bg-forest-50 px-2 py-1 text-[11px] font-medium text-forest-800"
            >
              {fac}
            </li>
          ))}
          {pkg.facilities.length > 3 ? (
            <li className="rounded-md bg-sand-100 px-2 py-1 text-[11px] font-medium text-charcoal-700">
              +{pkg.facilities.length - 3} lainnya
            </li>
          ) : null}
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-dashed border-forest-700/15 pt-4">
          <div>
            {pkg.originalPrice ? (
              <p className="text-xs text-charcoal-700/55 line-through">
                {formatRupiah(pkg.originalPrice)}
              </p>
            ) : null}
            <p className="font-display text-xl font-semibold text-forest-900">
              {formatRupiah(pkg.price)}
            </p>
            <p className="text-[11px] text-charcoal-700/65">/ pax</p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDetail(pkg)}
              aria-label={`Lihat detail paket ${pkg.name}`}
            >
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              Detail
            </Button>
            <a
              href={buildPackageInquiryUrl(pkg.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pesan cepat paket ${pkg.name} via WhatsApp`}
            >
              <Button variant="whatsapp" size="sm" fullWidth>
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Pesan
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}