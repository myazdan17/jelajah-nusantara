import { MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import type { SVGProps } from "react";
import { COMPANY } from "@/data/travel-data";
import { buildGeneralConsultationUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Paket Wisata", href: "#paket" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com/", Icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com/", Icon: YoutubeIcon },
];

type IconProps = SVGProps<SVGSVGElement>;

function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-ivory-50/8 bg-forest-900 pb-24 pt-20 text-ivory-100 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-ivory-50/10 pb-12 lg:grid-cols-[2fr_1fr_1.5fr] lg:gap-14">
          <div>
            <p className="font-display text-2xl font-medium tracking-[-0.02em] text-ivory-50 sm:text-3xl">
              Jelajah
              <span className="text-terracotta-400">Nusantara</span>
            </p>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ivory-100/70">
              {COMPANY.tagline}. Kami membantu kamu menjelajahi keindahan
              Indonesia dengan perjalanan yang terencana, nyaman, dan berkesan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/15 text-ivory-100/80 transition-all duration-250 hover:-translate-y-0.5 hover:bg-ivory-50/10 hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-base font-medium text-ivory-50">
              Navigasi
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded text-ivory-100/70 transition-colors duration-200 hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-medium text-ivory-50">
              Kontak
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex gap-3 text-ivory-100/75">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-sand-400"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex gap-3 text-ivory-100/75">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-sand-400"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="rounded transition-colors duration-200 hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3 text-ivory-100/75">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-sand-400"
                  aria-hidden="true"
                />
                <span>{COMPANY.operationalHours}</span>
              </li>
            </ul>

            <a
              href={buildGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat Admin
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs leading-relaxed text-ivory-100/50">
          <span>
            © {new Date().getFullYear()} {COMPANY.name}. Seluruh hak cipta
            dilindungi.
          </span>
          <span>Dibuat dengan ♥ di Indonesia</span>
        </div>
      </div>
    </footer>
  );
}