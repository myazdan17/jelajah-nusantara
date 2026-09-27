import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "JelajahNusantara Tour & Travel — Wisata Indonesia Tanpa Ribet",
    template: "%s | JelajahNusantara Tour & Travel",
  },
  description:
    "Biro perjalanan wisata Indonesia untuk open trip, private trip, family, dan honeymoon. Jelajahi Labuan Bajo, Bromo, Bali, Raja Ampat, Derawan, dan Dieng dengan mudah. (Demo)",
  keywords: [
    "paket wisata Indonesia",
    "open trip",
    "private trip",
    "family trip",
    "honeymoon",
    "Labuan Bajo",
    "Bromo",
    "Raja Ampat",
    "Derawan",
    "Dieng",
    "travel Indonesia",
  ],
  authors: [{ name: "JelajahNusantara Tour & Travel" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "JelajahNusantara Tour & Travel — Wisata Indonesia Tanpa Ribet",
    description:
      "Paket wisata premium ke destinasi terbaik Indonesia. Itinerary lengkap, guide lokal, dokumentasi, dan booking mudah via WhatsApp. (Demo)",
    siteName: "JelajahNusantara Tour & Travel",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1A3A26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-ivory-50 font-sans">{children}</body>
    </html>
  );
}