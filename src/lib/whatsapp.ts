import { COMPANY } from "@/data/travel-data";
import { formatDateID, formatRupiah } from "./utils";

interface BookingMessageParams {
  packageName: string;
  totalPrice?: number;
  pax?: number;
  date?: string;
  customMessage?: string;
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY.whatsapp}?text=${encoded}`;
}

export function buildBookingMessage({
  packageName,
  totalPrice,
  pax,
  date,
  customMessage,
}: BookingMessageParams): string {
  if (customMessage) return customMessage;

  const parts: string[] = [
    `Halo Admin ${COMPANY.shortName},`,
    `saya ingin booking paket *${packageName}*`,
  ];

  if (pax && pax > 0) parts.push(`untuk *${pax} orang*`);
  if (date) parts.push(`pada tanggal *${formatDateID(date)}*`);
  if (totalPrice && totalPrice > 0) {
    parts.push(`dengan total estimasi *${formatRupiah(totalPrice)}*.`);
  } else {
    parts.push(".");
  }

  parts.push("Mohon info ketersediaan slotnya ya. Terima kasih!");

  return parts.join(" ");
}

export function buildGeneralConsultationUrl(): string {
  const msg = `Halo Admin ${COMPANY.shortName}, saya ingin konsultasi mengenai paket wisata yang tersedia. Mohon dibantu ya.`;
  return buildWhatsAppUrl(msg);
}

export function buildPackageInquiryUrl(packageName: string): string {
  const msg = `Halo Admin ${COMPANY.shortName}, saya tertarik dengan paket *${packageName}*. Boleh minta info detail dan ketersediaan slotnya?`;
  return buildWhatsAppUrl(msg);
}

export function buildBookingWhatsAppUrl(params: BookingMessageParams): string {
  return buildWhatsAppUrl(buildBookingMessage(params));
}