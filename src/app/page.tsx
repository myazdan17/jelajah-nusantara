"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Hero } from "@/components/hero/Hero";
import { PackageFilters } from "@/components/packages/PackageFilters";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { DetailModal } from "@/components/packages/DetailModal";
import { TrustSection } from "@/components/sections/TrustSection";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TRAVEL_PACKAGES } from "@/data/travel-data";
import type { Destination, TravelCategory, TravelPackage } from "@/types/travel";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<
    TravelCategory | "Semua"
  >("Semua");
  const [activeDestination, setActiveDestination] = useState<
    Destination | "Semua"
  >("Semua");
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(
    null
  );
  const packagesRef = useRef<HTMLDivElement>(null);

  const filteredPackages = useMemo(() => {
    return TRAVEL_PACKAGES.filter((pkg) => {
      const matchCategory =
        activeCategory === "Semua" || pkg.category === activeCategory;
      const matchDestination =
        activeDestination === "Semua" || pkg.destination === activeDestination;
      return matchCategory && matchDestination;
    });
  }, [activeCategory, activeDestination]);

  const handleScrollToPackages = useCallback(() => {
    packagesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleOpenDetail = useCallback((pkg: TravelPackage) => {
    setSelectedPackage(pkg);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedPackage(null);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero onScrollToPackages={handleScrollToPackages} />
        <section
          id="paket"
          ref={packagesRef}
          className="scroll-mt-24 py-20 sm:py-28 lg:py-32"
          aria-labelledby="packages-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number="01"
              eyebrow="Paket Wisata"
              title="Perjalanan yang Dirancang dengan Hati"
              description="Kurasi perjalanan terbaik ke destinasi unggulan Indonesia. Setiap itinerary disusun dengan detail, ditemani guide lokal berpengalaman, dan dokumentasi profesional."
            />

            <div className="mt-14">
              <PackageFilters
                activeCategory={activeCategory}
                activeDestination={activeDestination}
                onCategoryChange={setActiveCategory}
                onDestinationChange={setActiveDestination}
                resultCount={filteredPackages.length}
              />
              <PackageGrid
                packages={filteredPackages}
                onOpenDetail={handleOpenDetail}
              />
            </div>
          </div>
        </section>

        <TrustSection />
        <Gallery/>
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <MobileCTA />

      <DetailModal
        pkg={selectedPackage}
        isOpen={selectedPackage !== null}
        onClose={handleCloseDetail}
      />
    </>
  );
}