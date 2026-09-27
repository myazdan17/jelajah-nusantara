import { MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { COMPANY } from "@/data/travel-data";
import { buildGeneralConsultationUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Paket Wisata", href: "#paket" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
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

const SOCIAL_LINKS: {
  label: string;
  href: string;
  Icon: ComponentType<IconProps>;
}[] = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-forest-700/10 bg-forest-900 pb-24 pt-16 text-ivory-100 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl text-ivory-50">
              Jelajah<span className="text-terracotta-400">Nusantara</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory-100/75">
              {COMPANY.tagline}. Kami membantu kamu menjelajahi keindahan
              Indonesia dengan perjalanan yang terencana, nyaman, dan berkesan.
              (Data demo)
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/15 text-ivory-100/80 transition hover:bg-ivory-50/10 hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory-50">Navigasi</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ivory-100/75 transition hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory-50">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm text-ivory-100/75">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" aria-hidden="true" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-400 rounded"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" aria-hidden="true" />
                <span>{COMPANY.operationalHours}</span>
              </li>
            </ul>

            <a
              href={buildGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat Admin
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory-50/10 pt-6">
          <p className="text-xs leading-relaxed text-ivory-100/60">
            © {new Date().getFullYear()} {COMPANY.name}. Website ini adalah
            demo showcase. Seluruh data, alamat, nomor kontak, izin, dan
            testimoni bersifat contoh dan tidak merepresentasikan entitas
            nyata.
          </p>
        </div>
      </div>
    </footer>
  );
}