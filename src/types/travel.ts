export type TravelCategory =
  | "Open Trip"
  | "Private Trip"
  | "Family"
  | "Honeymoon"
  | "Premium Trip";

export type Destination =
  | "Labuan Bajo"
  | "Bromo"
  | "Bali"
  | "Raja Ampat"
  | "Derawan"
  | "Dieng"
  | "Puncak Jaya"
  | "Wakatobi"
  | "Danau Toba"
  | "Belitung";

export interface ItineraryActivity {
  time: string;
  activity: string;
  location: string;
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
}

export interface TravelPackage {
  id: string;
  slug: string;
  name: string;
  destination: Destination;
  category: TravelCategory;
  duration: string;
  durationDays: number;
  meetingPoint: string;
  price: number;
  originalPrice?: number;
  images: string[];
  shortDescription: string;
  description: string;
  facilities: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  thingsToBring: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  isDemo: true;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  photo: string;
  rating: number;
  experience: string;
  packageName: string;
  isDemo: true;
}

export interface GalleryItem {
  id: string;
  destination: Destination | "Semua";
  src: string;
  alt: string;
  caption: string;
  isDemo: true;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyConfig {
  name: string;
  shortName: string;
  tagline: string;
  whatsapp: string;
  email: string;
  address: string;
  operationalHours: string;
  isDemo: true;
}