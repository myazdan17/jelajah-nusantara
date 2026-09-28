"use client";

import { useMemo, useState } from "react";
import { Calendar, Minus, Plus, Users, MessageCircle } from "lucide-react";
import { formatDateID, formatRupiah, getTodayISO } from "@/lib/utils";
import { buildBookingWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { TravelPackage } from "@/types/travel";

interface BookingCalculatorProps {
  pkg: TravelPackage;
}

const MIN_PAX = 1;
const MAX_PAX = 20;

export function BookingCalculator({ pkg }: BookingCalculatorProps) {
  const [pax, setPax] = useState(2);
  const [date, setDate] = useState("");

  const total = useMemo(() => pkg.price * pax, [pkg.price, pax]);
  const minDate = useMemo(() => getTodayISO(), []);

  const decrease = () => setPax((v) => Math.max(MIN_PAX, v - 1));
  const increase = () => setPax((v) => Math.min(MAX_PAX, v + 1));

  const handlePaxInput = (value: string) => {
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed)) {
      setPax(MIN_PAX);
      return;
    }
    setPax(Math.min(MAX_PAX, Math.max(MIN_PAX, parsed)));
  };

  const whatsappUrl = buildBookingWhatsAppUrl({
    packageName: pkg.name,
    totalPrice: total,
    pax,
    date: date || undefined,
  });

  return (
    <div className="rounded-2xl border border-forest-700/15 bg-ivory-100/70 p-4 sm:p-5">
      <h4 className="font-display text-base font-medium text-forest-900 sm:text-lg">
        Kalkulator Booking
      </h4>
      <p className="mt-1 text-xs text-charcoal-700/70">
        Estimasi otomatis. Harga final akan dikonfirmasi admin.
      </p>

      {/* Inputs */}
      <div className="mt-4 space-y-4">
        {/* Tanggal */}
        <div>
          <label
            htmlFor="travel-date"
            className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest-800"
          >
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            Tanggal Perjalanan
          </label>
          <input
            id="travel-date"
            type="date"
            value={date}
            min={minDate}
            onChange={(e) => setDate(e.target.value)}
            className="h-11 w-full appearance-none rounded-xl border border-forest-700/20 bg-ivory-50 px-3 text-sm text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 [&::-webkit-calendar-picker-indicator]:ml-auto [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60"
          />
          {date ? (
            <p className="mt-1.5 text-[11px] text-forest-700">
              Dipilih: {formatDateID(date)}
            </p>
          ) : (
            <p className="mt-1.5 text-[11px] text-charcoal-700/60">
              Belum dipilih
            </p>
          )}
        </div>

        {/* Jumlah Peserta */}
        <div>
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest-800">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            Jumlah Peserta
          </span>
          <div className="flex h-11 items-center gap-1 rounded-xl border border-forest-700/20 bg-ivory-50 px-1.5">
            <button
              type="button"
              onClick={decrease}
              disabled={pax <= MIN_PAX}
              aria-label="Kurangi jumlah peserta"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-forest-800 transition hover:bg-forest-50 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <input
              type="number"
              min={MIN_PAX}
              max={MAX_PAX}
              value={pax}
              onChange={(e) => handlePaxInput(e.target.value)}
              aria-label="Jumlah peserta"
              className="h-full w-full min-w-0 border-0 bg-transparent text-center text-sm font-semibold text-forest-900 focus-visible:outline-none"
            />
            <button
              type="button"
              onClick={increase}
              disabled={pax >= MAX_PAX}
              aria-label="Tambah jumlah peserta"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-forest-800 transition hover:bg-forest-50 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary */}
      <dl className="mt-4 space-y-2 border-t border-dashed border-forest-700/20 pt-4 text-sm">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-charcoal-700/75">Harga per orang</dt>
          <dd className="font-medium text-forest-900">
            {formatRupiah(pkg.price)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-charcoal-700/75">Jumlah peserta</dt>
          <dd className="font-medium text-forest-900">{pax} orang</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-charcoal-700/75">Tanggal</dt>
          <dd className="max-w-[60%] truncate text-right font-medium text-forest-900">
            {date ? formatDateID(date) : "Belum dipilih"}
          </dd>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3 border-t border-forest-700/15 pt-3">
          <dt className="font-display text-base font-medium text-forest-900">
            Total Estimasi
          </dt>
          <dd className="font-display text-xl font-semibold tracking-[-0.01em] text-terracotta-600">
            {formatRupiah(total)}
          </dd>
        </div>
      </dl>

      {/* CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl",
          "bg-gradient-to-br from-[#2ce06e] to-[#1ebe5b] text-sm font-semibold text-white",
          "shadow-[0_8px_20px_-8px_rgba(37,211,102,0.5)]",
          "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(37,211,102,0.7)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        )}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Booking via WhatsApp
      </a>
    </div>
  );
}