import type {
  CompanyConfig,
  FAQItem,
  GalleryItem,
  Testimonial,
  TravelPackage,
} from "@/types/travel";

export const COMPANY: CompanyConfig = {
  name: "JelajahNusantara Tour & Travel",
  shortName: "JelajahNusantara",
  tagline: "Perjalanan Indonesia yang Dirancang dengan Teliti",
  whatsapp: "6285692208315",
  email: "jelajahnusantara@gmail.com",
  address: "Jl. Cemara Unggul No. 27, Jakarta Selatan, DKI Jakarta 270809",
  operationalHours: "Senin sampai Sabtu, 08.00 hingga 20.00 WIB",
  isDemo: true,
};

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: "pkg-01",
    slug: "labuan-bajo-sailing-phinisi",
    name: "Labuan Bajo Sailing Phinisi",
    destination: "Labuan Bajo",
    category: "Private Trip",
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    meetingPoint: "Bandara Komodo (LBJ)",
    price: 4850000,
    originalPrice: 6200000,
    images: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Berlayar dengan kapal Phinisi menyusuri Padar, Komodo, dan Pink Beach selama tiga hari. Ditemani guide lokal dan dokumentasi profesional.",
    description:
      "Tiga hari berlayar dengan kapal Phinisi menyusuri Taman Nasional Komodo. Menginap langsung di kapal dengan kabin ber-AC, ditemani guide lokal yang sudah bertahun-tahun memandu di perairan Flores. Semua logistik sudah kami urus, kamu tinggal datang dan menikmati perjalanan. Itinerary bisa menyesuaikan kondisi cuaca tanpa mengurangi spot utama.",
    facilities: [
      "Hotel bintang 4 (1 malam di Labuan Bajo)",
      "Kapal Phinisi dengan kabin ber-AC",
      "Transportasi ber-AC",
      "Tiket masuk Taman Nasional",
      "Dokumentasi foto dan video",
      "Guide lokal bersertifikat",
      "Makan tiga kali sehari",
      "Peralatan snorkeling",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan dan Sunset Dinner",
        activities: [
          {
            time: "12.00",
            activity: "Penjemputan di Bandara Komodo",
            location: "Bandara LBJ",
            note: "Tim kami akan menunggu dengan signboard nama Anda",
          },
          {
            time: "14.00",
            activity: "Check-in hotel dan makan siang",
            location: "Labuan Bajo",
          },
          {
            time: "16.30",
            activity: "Sunset di Bukit Sylvia",
            location: "Bukit Sylvia",
            note: "Spot foto terbaik di Labuan Bajo",
          },
          {
            time: "19.00",
            activity: "Makan malam seafood",
            location: "Kampung Ujung",
          },
        ],
      },
      {
        day: 2,
        title: "Sailing Day: Padar, Komodo, Pink Beach",
        activities: [
          {
            time: "05.00",
            activity: "Sarapan dan boarding kapal",
            location: "Pelabuhan Labuan Bajo",
          },
          {
            time: "07.30",
            activity: "Trekking Pulau Padar",
            location: "Pulau Padar",
            note: "Trekking 30 menit, bawa air minum",
          },
          {
            time: "11.00",
            activity: "Snorkeling dan melihat Komodo",
            location: "Pulau Komodo",
          },
          {
            time: "14.00",
            activity: "Berenang di Pink Beach",
            location: "Pink Beach",
          },
          {
            time: "17.30",
            activity: "Sunset di atas kapal",
            location: "Laut Flores",
          },
        ],
      },
      {
        day: 3,
        title: "Manta Point dan Kepulangan",
        activities: [
          {
            time: "06.00",
            activity: "Snorkeling bersama Manta Ray",
            location: "Manta Point",
            note: "Kesempatan melihat Manta Ray dari dekat",
          },
          {
            time: "09.00",
            activity: "Kanawa Island dan sarapan",
            location: "Pulau Kanawa",
          },
          {
            time: "12.00",
            activity: "Kembali ke Labuan Bajo dan antar ke bandara",
            location: "Bandara LBJ",
          },
        ],
      },
    ],
    includes: [
      "Hotel 1 malam di Labuan Bajo",
      "Kapal Phinisi full AC",
      "Semua tiket masuk",
      "Guide lokal bersertifikat",
      "Dokumentasi foto dan video",
      "Makan tiga kali sehari",
      "Peralatan snorkeling",
      "Asuransi perjalanan",
    ],
    excludes: [
      "Tiket pesawat ke Labuan Bajo",
      "Pengeluaran pribadi",
      "Tipping guide (opsional)",
      "Minuman beralkohol",
    ],
    thingsToBring: [
      "Sunscreen SPF 50+",
      "Kacamata hitam",
      "Baju ganti tiga set",
      "Sandal dan sepatu trekking",
      "Power bank",
      "Obat pribadi",
    ],
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 412,
    isDemo: true,
  },
  {
    id: "pkg-02",
    slug: "bromo-midnight-sunrise-savana",
    name: "Bromo Midnight Sunrise & Savana",
    destination: "Bromo",
    category: "Open Trip",
    duration: "1 Hari",
    durationDays: 1,
    meetingPoint: "Malang atau Surabaya",
    price: 385000,
    originalPrice: 550000,
    images: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1602748828300-8b7d2e3c1e84?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Kejar sunrise di Penanjakan, jelajahi kawah Bromo, dan nikmati savana Teletubbies dalam satu hari penuh.",
    description:
      "Trip satu hari yang padat tapi tetap nyaman. Berangkat tengah malam dari Malang atau Surabaya, kami antar ke spot sunrise terbaik di Penanjakan, lalu lanjut ke kawah Bromo dan savana. Cocok untuk kamu yang ingin merasakan Bromo tanpa harus cuti panjang.",
    facilities: [
      "Jeep 4x4 Bromo",
      "Transportasi ber-AC dari meeting point",
      "Tiket masuk Taman Nasional",
      "Guide lokal",
      "Dokumentasi",
      "Masker dan senter",
    ],
    itinerary: [
      {
        day: 1,
        title: "Midnight Trip: Sunrise dan Kawah Bromo",
        activities: [
          {
            time: "23.30",
            activity: "Kumpul di meeting point dan briefing",
            location: "Malang",
          },
          {
            time: "00.30",
            activity: "Perjalanan menuju Bromo",
            location: "Tumpang",
          },
          {
            time: "03.00",
            activity: "Ganti ke Jeep 4x4 dan menuju Penanjakan",
            location: "Penanjakan 1",
          },
          {
            time: "04.30",
            activity: "Menunggu sunrise di Penanjakan",
            location: "Penanjakan 1",
            note: "Suhu sekitar 5 sampai 10 derajat Celsius, bawa jaket tebal",
          },
          {
            time: "06.30",
            activity: "Turun ke Kawah Bromo",
            location: "Kawah Bromo",
          },
          {
            time: "08.30",
            activity: "Savana Teletubbies dan Pasir Berbisik",
            location: "Savana Bromo",
          },
          {
            time: "11.00",
            activity: "Kembali ke Malang atau Surabaya",
            location: "Malang",
          },
        ],
      },
    ],
    includes: [
      "Jeep 4x4",
      "Transportasi ber-AC",
      "Tiket masuk Taman Nasional Bromo",
      "Guide lokal",
      "Dokumentasi",
    ],
    excludes: ["Makan dan minum", "Sewa jaket (Rp 25.000)", "Pengeluaran pribadi"],
    thingsToBring: [
      "Jaket tebal atau windbreaker",
      "Sarung tangan dan kupluk",
      "Sepatu tertutup",
      "Air minum",
    ],
    badge: "Favorit",
    rating: 4.8,
    reviewCount: 684,
    isDemo: true,
  },
  {
    id: "pkg-03",
    slug: "nusa-penida-snorkeling-tour",
    name: "Nusa Penida & Snorkeling Tour",
    destination: "Bali",
    category: "Private Trip",
    duration: "2 Hari 1 Malam",
    durationDays: 2,
    meetingPoint: "Sanur, Bali",
    price: 1950000,
    originalPrice: 2400000,
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Dua hari menjelajahi Kelingking Beach, Diamond Beach, dan snorkeling di Manta Point. Ritme santai, cocok untuk honeymoon.",
    description:
      "Nusa Penida punya tebing dramatis dan air laut yang jernih. Paket private ini menggabungkan eksplorasi darat dengan snorkeling di Manta Point dan Crystal Bay. Cocok untuk pasangan yang ingin honeymoon santai atau solo traveler yang mencari ketenangan.",
    facilities: [
      "Hotel bintang 4 di Nusa Penida",
      "Transportasi ber-AC dan fast boat",
      "Tiket masuk semua spot",
      "Peralatan snorkeling lengkap",
      "Guide lokal",
      "Dokumentasi foto dan GoPro",
      "Makan dua kali",
    ],
    itinerary: [
      {
        day: 1,
        title: "West Trip: Kelingking dan Sunset",
        activities: [
          {
            time: "07.00",
            activity: "Berangkat dari Sanur dengan fast boat",
            location: "Pelabuhan Sanur",
          },
          {
            time: "09.00",
            activity: "Tiba di Nusa Penida dan check-in",
            location: "Toyapakeh",
          },
          {
            time: "11.00",
            activity: "Kelingking Beach dan Broken Beach",
            location: "Kelingking",
            note: "Spot foto ikonik Nusa Penida",
          },
          {
            time: "15.00",
            activity: "Crystal Bay untuk sunset",
            location: "Crystal Bay",
          },
        ],
      },
      {
        day: 2,
        title: "Snorkeling dan Kepulangan",
        activities: [
          {
            time: "08.00",
            activity: "Snorkeling di Manta Point dan Wall Point",
            location: "Manta Point",
            note: "Kesempatan melihat Manta Ray",
          },
          {
            time: "12.00",
            activity: "Makan siang dan Diamond Beach",
            location: "Diamond Beach",
          },
          {
            time: "16.00",
            activity: "Kembali ke Sanur",
            location: "Pelabuhan Sanur",
          },
        ],
      },
    ],
    includes: [
      "Hotel 1 malam",
      "Fast boat pulang pergi",
      "Transportasi ber-AC dan driver",
      "Peralatan snorkeling",
      "Guide lokal",
      "Dokumentasi",
    ],
    excludes: [
      "Tiket pesawat",
      "Makan malam",
      "Pengeluaran pribadi",
      "Tipping guide",
    ],
    thingsToBring: [
      "Baju renang",
      "Sunscreen",
      "Handuk",
      "Sandal jepit",
      "Uang tunai untuk pengeluaran pribadi",
    ],
    badge: "Honeymoon Pick",
    rating: 4.9,
    reviewCount: 328,
    isDemo: true,
  },
  {
    id: "pkg-04",
    slug: "raja-ampat-wayag-explorer",
    name: "Raja Ampat Wayag Explorer",
    destination: "Raja Ampat",
    category: "Premium Trip",
    duration: "4 Hari 3 Malam",
    durationDays: 4,
    meetingPoint: "Sorong (SOQ)",
    price: 12500000,
    originalPrice: 15800000,
    images: [
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Petualangan empat hari ke jantung Raja Ampat. Menjelajahi Wayag, Pianemo, dan snorkeling di perairan dengan keanekaragaman karang tertinggi di dunia.",
    description:
      "Raja Ampat sering disebut sebagai surga tropis terakhir. Paket premium ini membawa kamu ke Wayag yang ikonik, Pianemo dengan laguna bintang lautnya, serta spot snorkeling terbaik di kawasan ini. Menginap di resort tepi laut, ditemani guide profesional dan chef pribadi. Pilihan tepat untuk honeymoon premium atau wisatawan yang mencari pengalaman berbeda.",
    facilities: [
      "Resort tepi laut premium",
      "Kapal cepat (speedboat)",
      "Tiket masuk dan konservasi",
      "Chef pribadi",
      "Guide profesional",
      "Dokumentasi drone 4K",
      "Peralatan snorkeling dan diving",
      "Sesi spa satu kali",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan di Sorong dan Menuju Waisai",
        activities: [
          {
            time: "10.00",
            activity: "Penjemputan di Bandara Sorong",
            location: "Bandara SOQ",
          },
          {
            time: "12.00",
            activity: "Ferry menuju Waisai",
            location: "Pelabuhan Sorong",
          },
          {
            time: "15.00",
            activity: "Check-in resort dan sunset dinner",
            location: "Waisai",
          },
        ],
      },
      {
        day: 2,
        title: "Wayag, Ikon Raja Ampat",
        activities: [
          {
            time: "05.00",
            activity: "Sarapan dan berangkat ke Wayag",
            location: "Waisai",
          },
          {
            time: "09.00",
            activity: "Trekking ke puncak Wayag",
            location: "Wayag",
            note: "Trekking 45 menit, pemandangan dari atas sangat memukau",
          },
          {
            time: "12.00",
            activity: "Snorkeling di laguna Wayag",
            location: "Wayag",
          },
          {
            time: "17.00",
            activity: "Kembali ke resort",
            location: "Waisai",
          },
        ],
      },
      {
        day: 3,
        title: "Pianemo dan Snorkeling Manta",
        activities: [
          {
            time: "07.00",
            activity: "Berangkat ke Pianemo",
            location: "Pianemo",
          },
          {
            time: "09.00",
            activity: "Trekking viewpoint Pianemo",
            location: "Pianemo",
          },
          {
            time: "12.00",
            activity: "Snorkeling bersama Manta Ray",
            location: "Manta Sandy",
          },
          {
            time: "16.00",
            activity: "Sesi spa di resort",
            location: "Waisai",
          },
        ],
      },
      {
        day: 4,
        title: "Kepulangan",
        activities: [
          {
            time: "08.00",
            activity: "Sarapan dan check-out",
            location: "Waisai",
          },
          {
            time: "10.00",
            activity: "Ferry kembali ke Sorong",
            location: "Sorong",
          },
          {
            time: "13.00",
            activity: "Antar ke Bandara Sorong",
            location: "Bandara SOQ",
          },
        ],
      },
    ],
    includes: [
      "Resort 3 malam",
      "Speedboat dan ferry",
      "Semua tiket masuk",
      "Chef pribadi (full board)",
      "Guide profesional",
      "Dokumentasi drone",
      "Peralatan snorkeling",
      "Spa satu kali",
      "Asuransi perjalanan",
    ],
    excludes: [
      "Tiket pesawat ke Sorong",
      "Minuman beralkohol",
      "Kursus sertifikasi diving",
      "Pengeluaran pribadi",
    ],
    thingsToBring: [
      "Sunscreen ramah terumbu karang",
      "Baju renang tiga set",
      "Dry bag",
      "Kamera bawah air",
      "Obat anti mabuk laut",
    ],
    badge: "Premium",
    rating: 5.0,
    reviewCount: 96,
    isDemo: true,
  },
  {
    id: "pkg-05",
    slug: "derawan-whaleshark-adventure",
    name: "Derawan Whaleshark Adventure",
    destination: "Derawan",
    category: "Open Trip",
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    meetingPoint: "Berau (BEJ)",
    price: 3450000,
    originalPrice: 4200000,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Berenang bersama whale shark di Talisayan, menjelajahi Danau Kakaban, dan bersantai di Pulau Derawan yang tenang.",
    description:
      "Kepulauan Derawan di Kalimantan Timur menawarkan pengalaman yang jarang ditemui: berenang bersama whale shark di perairan Talisayan. Selain itu, kamu akan menjelajahi Danau Kakaban dengan ubur-ubur tanpa sengat, snorkeling di Maratua, dan menikmati ketenangan Pulau Derawan. Cocok untuk open trip bersama komunitas atau solo traveler.",
    facilities: [
      "Homestay ber-AC di Derawan",
      "Speedboat dan kapal lokal",
      "Tiket masuk konservasi",
      "Peralatan snorkeling",
      "Guide lokal",
      "Dokumentasi",
      "Makan tiga kali sehari",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan dan Whale Shark Talisayan",
        activities: [
          {
            time: "08.00",
            activity: "Penjemputan di Bandara Berau",
            location: "Bandara BEJ",
          },
          {
            time: "10.00",
            activity: "Perjalanan ke Talisayan",
            location: "Talisayan",
          },
          {
            time: "12.00",
            activity: "Berenang bersama Whale Shark",
            location: "Talisayan",
            note: "Jaga jarak aman tiga meter dari whale shark",
          },
          {
            time: "16.00",
            activity: "Menuju Pulau Derawan dan check-in",
            location: "Pulau Derawan",
          },
        ],
      },
      {
        day: 2,
        title: "Kakaban dan Maratua",
        activities: [
          {
            time: "07.00",
            activity: "Berangkat ke Danau Kakaban",
            location: "Kakaban",
          },
          {
            time: "09.00",
            activity: "Berenang dengan ubur-ubur tanpa sengat",
            location: "Danau Kakaban",
          },
          {
            time: "12.00",
            activity: "Snorkeling di Maratua",
            location: "Maratua",
          },
          {
            time: "16.00",
            activity: "Sunset di Pulau Derawan",
            location: "Pulau Derawan",
          },
        ],
      },
      {
        day: 3,
        title: "Sangalaki dan Kepulangan",
        activities: [
          {
            time: "07.00",
            activity: "Snorkeling di Sangalaki untuk melihat Manta",
            location: "Sangalaki",
          },
          {
            time: "11.00",
            activity: "Kembali ke Derawan dan check-out",
            location: "Pulau Derawan",
          },
          {
            time: "14.00",
            activity: "Antar ke Bandara Berau",
            location: "Bandara BEJ",
          },
        ],
      },
    ],
    includes: [
      "Homestay 2 malam",
      "Speedboat dan kapal lokal",
      "Tiket konservasi",
      "Peralatan snorkeling",
      "Guide lokal",
      "Dokumentasi",
    ],
    excludes: [
      "Tiket pesawat ke Berau",
      "Pengeluaran pribadi",
      "Tipping guide",
      "Minuman beralkohol",
    ],
    thingsToBring: [
      "Sunscreen",
      "Baju renang",
      "Dry bag",
      "Obat anti mabuk",
      "Uang tunai",
    ],
    badge: "Rare Experience",
    rating: 4.7,
    reviewCount: 214,
    isDemo: true,
  },
  {
    id: "pkg-06",
    slug: "dieng-culture-golden-sunrise",
    name: "Dieng Culture & Golden Sunrise",
    destination: "Dieng",
    category: "Open Trip",
    duration: "2 Hari 1 Malam",
    durationDays: 2,
    meetingPoint: "Yogyakarta",
    price: 850000,
    originalPrice: 1100000,
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Menikmati golden sunrise di Bukit Sikunir, menjelajahi Kawah Sikidang, dan merasakan suasana budaya Jawa di dataran tinggi Dieng.",
    description:
      "Dieng adalah dataran tinggi vulkanik dengan pesona alam dan budaya yang masih terjaga. Paket dua hari ini mengajak kamu mengejar golden sunrise di Bukit Sikunir, menjelajahi Kawah Sikidang, dan berkunjung ke Candi Arjuna. Cocok untuk keluarga, pasangan, maupun solo traveler yang mencari liburan singkat yang bermakna.",
    facilities: [
      "Homestay di Dieng",
      "Transportasi ber-AC dari Yogyakarta",
      "Tiket masuk semua objek",
      "Guide lokal",
      "Dokumentasi",
      "Makan dua kali",
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan dan Eksplorasi Dieng",
        activities: [
          {
            time: "06.00",
            activity: "Berangkat dari Yogyakarta",
            location: "Yogyakarta",
          },
          {
            time: "10.00",
            activity: "Tiba di Dieng dan check-in homestay",
            location: "Dieng",
          },
          {
            time: "12.00",
            activity: "Kawah Sikidang dan Candi Arjuna",
            location: "Kawah Sikidang",
          },
          {
            time: "16.00",
            activity: "Sunset di Bukit Sikunir",
            location: "Bukit Sikunir",
          },
        ],
      },
      {
        day: 2,
        title: "Golden Sunrise dan Kepulangan",
        activities: [
          {
            time: "04.00",
            activity: "Trekking ke Bukit Sikunir untuk golden sunrise",
            location: "Sikunir",
            note: "Trekking 30 menit, bawa jaket",
          },
          {
            time: "08.00",
            activity: "Sarapan dan Telaga Warna",
            location: "Telaga Warna",
          },
          {
            time: "12.00",
            activity: "Kembali ke Yogyakarta",
            location: "Yogyakarta",
          },
        ],
      },
    ],
    includes: [
      "Homestay 1 malam",
      "Transportasi ber-AC",
      "Tiket masuk",
      "Guide lokal",
      "Dokumentasi",
      "Makan dua kali",
    ],
    excludes: [
      "Makan di perjalanan",
      "Pengeluaran pribadi",
      "Sewa jaket",
      "Tipping guide",
    ],
    thingsToBring: ["Jaket tebal", "Sepatu trekking", "Air minum", "Obat pribadi"],
    badge: "Cultural",
    rating: 4.8,
    reviewCount: 542,
    isDemo: true,
  },
  {
    id: "pkg-07",
    slug: "carstensz-pyramid-expedition",
    name: "Carstensz Pyramid Expedition",
    destination: "Puncak Jaya",
    category: "Premium Trip",
    duration: "9 Hari 8 Malam",
    durationDays: 9,
    meetingPoint: "Timika (TIM)",
    price: 48500000,
    originalPrice: 62000000,
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Ekspedisi ke Puncak Jaya (Carstensz Pyramid, 4.884 mdpl), salah satu dari Seven Summits dunia. Pendakian paling eksklusif yang bisa dilakukan di Indonesia.",
    description:
      "Puncak Jaya, atau lebih dikenal sebagai Carstensz Pyramid, adalah puncak tertinggi di Indonesia sekaligus salah satu dari Seven Summits dunia. Berdiri di ketinggian 4.884 meter, puncak ini menawarkan tantangan teknis batuan yang menantang dan pemandangan gletser tropis yang langka, satu-satunya di Indonesia. Ekspedisi sembilan hari ini dirancang untuk pendaki berpengalaman, ditemani guide gunung bersertifikat internasional dan porter lokal Papua. Termasuk helikopter drop ke base camp untuk memangkas waktu trekking hutan hujan.",
    facilities: [
      "Helikopter drop ke base camp",
      "Guide gunung bersertifikat internasional",
      "Porter lokal Papua berpengalaman",
      "Tenda ekspedisi 4-season",
      "Sleeping bag dan matras premium",
      "Makan penuh dan snack energi",
      "Komunikasi satelit dan radio",
      "Peralatan panjat lengkap",
      "Asuransi pendakian",
      "Dokumentasi foto dan video profesional",
      "Oksigen cadangan",
      "Medical kit lengkap",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan di Timika",
        activities: [
          {
            time: "12.00",
            activity: "Penjemputan di Bandara Timika",
            location: "Bandara TIM",
          },
          {
            time: "14.00",
            activity: "Check-in hotel dan briefing ekspedisi",
            location: "Timika",
          },
          {
            time: "18.00",
            activity: "Dinner dan final gear check",
            location: "Timika",
            note: "Wajib bawa dokumen lengkap",
          },
        ],
      },
      {
        day: 2,
        title: "Perizinan dan Persiapan",
        activities: [
          {
            time: "08.00",
            activity: "Pengurusan izin pendakian dan administrasi",
            location: "Kantor Bupati Mimika",
          },
          {
            time: "12.00",
            activity: "Makan siang dan pengarahan keselamatan",
            location: "Timika",
          },
          {
            time: "15.00",
            activity: "Cek peralatan dan packing",
            location: "Timika",
          },
        ],
      },
      {
        day: 3,
        title: "Helikopter ke Base Camp Yellow Valley",
        activities: [
          {
            time: "06.00",
            activity: "Sarapan dan menuju helipad",
            location: "Timika",
          },
          {
            time: "08.00",
            activity: "Helikopter drop ke Yellow Valley Base Camp",
            location: "Yellow Valley",
            note: "Pemandangan gletser dari udara",
          },
          {
            time: "10.00",
            activity: "Setup camp dan aklimatisasi",
            location: "Yellow Valley",
          },
          {
            time: "15.00",
            activity: "Short hike ke New Zealand Pass",
            location: "New Zealand Pass",
          },
        ],
      },
      {
        day: 4,
        title: "Aklimatisasi di Base Camp",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan latihan teknik panjat",
            location: "Base Camp",
          },
          {
            time: "10.00",
            activity: "Trekking aklimatisasi ke 4.400 mdpl",
            location: "Yellow Valley",
          },
          {
            time: "15.00",
            activity: "Rest dan briefing untuk besok",
            location: "Base Camp",
          },
        ],
      },
      {
        day: 5,
        title: "Summit Day, Puncak Jaya",
        activities: [
          {
            time: "02.00",
            activity: "Bangun dan sarapan energi",
            location: "Base Camp",
          },
          {
            time: "03.00",
            activity: "Mulai summit push ke Puncak Jaya",
            location: "Base Camp",
            note: "Menggunakan fixed rope dan jumar",
          },
          {
            time: "09.00",
            activity: "Summit Puncak Jaya 4.884 mdpl",
            location: "Puncak Jaya",
            note: "Salah satu dari Seven Summits dunia",
          },
          {
            time: "11.00",
            activity: "Turun kembali ke Base Camp",
            location: "Base Camp",
          },
          {
            time: "16.00",
            activity: "Celebration dinner",
            location: "Base Camp",
          },
        ],
      },
      {
        day: 6,
        title: "Cadangan Summit atau Rest Day",
        activities: [
          {
            time: "07.00",
            activity: "Rest day atau cadangan summit sesuai cuaca",
            location: "Base Camp",
          },
          {
            time: "12.00",
            activity: "Kunjungan ke gletser tropis",
            location: "Glacier",
            note: "Gletser tropis yang langka",
          },
        ],
      },
      {
        day: 7,
        title: "Kembali ke Timika",
        activities: [
          {
            time: "07.00",
            activity: "Pack up dan bersihkan camp",
            location: "Base Camp",
          },
          {
            time: "09.00",
            activity: "Helikopter kembali ke Timika",
            location: "Timika",
          },
          {
            time: "12.00",
            activity: "Check-in hotel dan rest",
            location: "Timika",
          },
          {
            time: "19.00",
            activity: "Celebration dinner dan pemberian sertifikat",
            location: "Timika",
          },
        ],
      },
      {
        day: 8,
        title: "Free Day di Timika",
        activities: [
          {
            time: "08.00",
            activity: "Sarapan dan free time",
            location: "Timika",
          },
          {
            time: "12.00",
            activity: "City tour Timika (opsional)",
            location: "Timika",
          },
          {
            time: "18.00",
            activity: "Dinner perpisahan",
            location: "Timika",
          },
        ],
      },
      {
        day: 9,
        title: "Kepulangan",
        activities: [
          {
            time: "08.00",
            activity: "Sarapan dan check-out",
            location: "Timika",
          },
          {
            time: "10.00",
            activity: "Antar ke Bandara Timika",
            location: "Bandara TIM",
          },
        ],
      },
    ],
    includes: [
      "Helikopter drop dan pick up",
      "Guide gunung bersertifikat",
      "Porter lokal Papua",
      "Hotel 4 malam di Timika",
      "Camp dan peralatan ekspedisi",
      "Makan penuh",
      "Komunikasi satelit",
      "Peralatan panjat lengkap",
      "Asuransi pendakian",
      "Dokumentasi profesional",
      "Oksigen dan medical kit",
      "Sertifikat pendakian",
    ],
    excludes: [
      "Tiket pesawat ke Timika",
      "Peralatan pribadi seperti sepatu gunung dan jaket",
      "Minuman beralkohol",
      "Tipping guide dan porter",
      "Pengeluaran pribadi",
      "Biaya izin tambahan jika ada perubahan regulasi",
    ],
    thingsToBring: [
      "Sepatu gunung",
      "Jaket down tahan suhu minus 10 derajat",
      "Crampons dan harness",
      "Headlamp dan baterai cadangan",
      "Sunscreen SPF 50+",
      "Kacamata gunung",
      "Sarung tangan thermal",
    ],
    badge: "Seven Summits",
    rating: 5.0,
    reviewCount: 23,
    isDemo: true,
  },
  {
    id: "pkg-08",
    slug: "wakatobi-dive-paradise",
    name: "Wakatobi Dive Paradise",
    destination: "Wakatobi",
    category: "Premium Trip",
    duration: "4 Hari 3 Malam",
    durationDays: 4,
    meetingPoint: "Wakatobi (WNI)",
    price: 8900000,
    originalPrice: 11200000,
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Diving dan snorkeling di Wakatobi, taman laut dengan biodiversitas karang tertinggi di dunia. Surga bagi pencinta bawah laut.",
    description:
      "Wakatobi terdiri dari empat pulau utama: Wangi-Wangi, Kaledupa, Tomia, dan Binongko. Taman nasional laut ini diakui UNESCO sebagai salah satu dari sepuluh spot diving terbaik dunia. Dengan lebih dari 750 spesies karang dan 900 spesies ikan, Wakatobi menawarkan pengalaman bawah laut yang sulit ditemukan di tempat lain. Paket empat hari ini dirancang untuk diver dan snorkeler yang ingin menikmati keindahan bawah laut tanpa keramaian. Menginap di resort tepi pantai dengan akses langsung ke dive site.",
    facilities: [
      "Resort tepi pantai (3 malam)",
      "Speedboat dan kapal dive",
      "Dive master bersertifikat PADI",
      "Peralatan snorkeling dan diving",
      "Tiket masuk Taman Nasional Wakatobi",
      "Makan penuh",
      "Dokumentasi bawah air 4K",
      "Antar jemput bandara",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan dan Sunset Dive",
        activities: [
          {
            time: "10.00",
            activity: "Penjemputan di Bandara Wakatobi",
            location: "Bandara WNI",
          },
          {
            time: "12.00",
            activity: "Check-in resort dan makan siang",
            location: "Wanci",
          },
          {
            time: "15.00",
            activity: "Check dive dan snorkeling di House Reef",
            location: "Resort",
            note: "Cocok untuk pemula",
          },
          {
            time: "18.00",
            activity: "Sunset dinner di tepi pantai",
            location: "Wanci",
          },
        ],
      },
      {
        day: 2,
        title: "Diving di Roma dan Hoga",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan briefing dive",
            location: "Resort",
          },
          {
            time: "09.00",
            activity: "Dive pertama di Roma",
            location: "Roma",
          },
          {
            time: "12.00",
            activity: "Makan siang di kapal",
            location: "Laut Wakatobi",
          },
          {
            time: "14.00",
            activity: "Dive kedua di Hoga Corner",
            location: "Hoga",
          },
          {
            time: "17.30",
            activity: "Sunset dan relax",
            location: "Resort",
          },
        ],
      },
      {
        day: 3,
        title: "Diving di Tomia dan Atoll",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan menuju Tomia",
            location: "Resort",
          },
          {
            time: "09.00",
            activity: "Dive ketiga di Tomia Wall",
            location: "Tomia",
          },
          {
            time: "12.00",
            activity: "Snorkeling di Atoll",
            location: "Atoll",
          },
          {
            time: "15.00",
            activity: "Dive keempat di Zoo",
            location: "Zoo",
          },
          {
            time: "18.00",
            activity: "BBQ dinner",
            location: "Resort",
          },
        ],
      },
      {
        day: 4,
        title: "Kepulangan",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan check-out",
            location: "Resort",
          },
          {
            time: "09.00",
            activity: "Free time atau dive opsional",
            location: "Wanci",
          },
          {
            time: "12.00",
            activity: "Antar ke Bandara Wakatobi",
            location: "Bandara WNI",
          },
        ],
      },
    ],
    includes: [
      "Resort 3 malam",
      "Dive master profesional",
      "Semua trip diving dan snorkeling",
      "Peralatan snorkeling dan diving",
      "Makan penuh",
      "Tiket Taman Nasional",
      "Dokumentasi bawah air",
      "Antar jemput bandara",
    ],
    excludes: [
      "Tiket pesawat ke Wakatobi",
      "Minuman beralkohol",
      "Kursus sertifikasi diving",
      "Tipping guide",
      "Pengeluaran pribadi",
    ],
    thingsToBring: [
      "Kartu sertifikasi dive (jika diving)",
      "Baju renang tiga set",
      "Sunscreen ramah terumbu karang",
      "Kamera bawah air",
      "Obat anti mabuk",
    ],
    badge: "Divers Choice",
    rating: 4.9,
    reviewCount: 156,
    isDemo: true,
  },
  {
    id: "pkg-09",
    slug: "danau-toba-samosir-cultural",
    name: "Danau Toba & Samosir Cultural",
    destination: "Danau Toba",
    category: "Family",
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    meetingPoint: "Medan (KNO)",
    price: 1850000,
    originalPrice: 2350000,
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Menjelajahi Danau Toba, danau vulkanik terbesar di dunia, dan menyelami budaya Batak di Pulau Samosir. Cocok untuk keluarga.",
    description:
      "Danau Toba adalah danau vulkanik terbesar di dunia dan salah satu keajaiban alam Indonesia. Paket tiga hari ini mengajak kamu menjelajahi keindahan Danau Toba, menyeberang ke Pulau Samosir, dan mengenal budaya Batak lebih dekat. Mengunjungi Desa Tomok, Huta Siallagan, dan menikmati pertunjukan tari tradisional Batak. Cocok untuk family trip yang ingin menggabungkan wisata budaya dan alam dalam satu perjalanan.",
    facilities: [
      "Hotel bintang 4 di Parapat (1 malam)",
      "Hotel di Samosir (1 malam)",
      "Transportasi ber-AC dan driver",
      "Guide lokal Batak",
      "Tiket kapal ferry dan semua objek",
      "Makan tiga kali sehari",
      "Dokumentasi keluarga",
      "Welcome drink dan snack khas Batak",
    ],
    itinerary: [
      {
        day: 1,
        title: "Medan ke Parapat",
        activities: [
          {
            time: "08.00",
            activity: "Penjemputan di Bandara Kualanamu",
            location: "Bandara KNO",
          },
          {
            time: "10.00",
            activity: "City tour Medan ke Istana Maimun",
            location: "Medan",
          },
          {
            time: "12.00",
            activity: "Makan siang khas Batak",
            location: "Medan",
          },
          {
            time: "14.00",
            activity: "Perjalanan ke Parapat",
            location: "Parapat",
          },
          {
            time: "17.00",
            activity: "Check-in hotel dan sunset Danau Toba",
            location: "Parapat",
          },
        ],
      },
      {
        day: 2,
        title: "Eksplorasi Pulau Samosir",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan menyeberang ke Samosir",
            location: "Pelabuhan Parapat",
          },
          {
            time: "09.00",
            activity: "Desa Tomok dan Makam Raja Sidabutar",
            location: "Tomok",
          },
          {
            time: "11.00",
            activity: "Huta Siallagan dengan batu persidangan kuno",
            location: "Siallagan",
          },
          {
            time: "13.00",
            activity: "Makan siang dengan pemandangan Danau Toba",
            location: "Samosir",
          },
          {
            time: "15.00",
            activity: "Bukit Holbung dan pertunjukan Tari Batak",
            location: "Holbung",
          },
          {
            time: "18.00",
            activity: "Check-in hotel Samosir dan dinner",
            location: "Samosir",
          },
        ],
      },
      {
        day: 3,
        title: "Samosir ke Medan",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan check-out",
            location: "Samosir",
          },
          {
            time: "09.00",
            activity: "Air Terjun Sipiso-piso",
            location: "Sipiso-piso",
          },
          {
            time: "11.00",
            activity: "Pasar buah Berastagi dan kebun strawberry",
            location: "Berastagi",
          },
          {
            time: "13.00",
            activity: "Makan siang dan kembali ke Medan",
            location: "Medan",
          },
          {
            time: "17.00",
            activity: "Antar ke Bandara Kualanamu",
            location: "Bandara KNO",
          },
        ],
      },
    ],
    includes: [
      "Hotel 2 malam",
      "Transportasi ber-AC dan driver",
      "Guide lokal Batak",
      "Tiket ferry dan semua objek",
      "Makan tiga kali sehari",
      "Dokumentasi",
    ],
    excludes: [
      "Tiket pesawat ke Medan",
      "Souvenir dan oleh-oleh",
      "Pengeluaran pribadi",
      "Tipping guide",
    ],
    thingsToBring: [
      "Jaket tipis",
      "Sunscreen",
      "Topi atau payung",
      "Kamera",
      "Uang tunai",
    ],
    badge: "Family Favorit",
    rating: 4.8,
    reviewCount: 387,
    isDemo: true,
  },
  {
    id: "pkg-10",
    slug: "belitung-island-hopping",
    name: "Belitung Island Hopping",
    destination: "Belitung",
    category: "Open Trip",
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    meetingPoint: "Tanjung Pandan (TJQ)",
    price: 2450000,
    originalPrice: 3100000,
    images: [
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Menjelajahi Belitung, pulau granit dengan pantai berpasir putih dan air biru jernih. Suasana yang mengingatkan pada novel Laskar Pelangi.",
    description:
      "Belitung adalah permata tersembunyi di Bangka Belitung dengan pantai granit yang khas, air laut biru jernih, dan pulau-pulau kecil yang menawan. Paket tiga hari ini mengajak kamu island hopping ke Pulau Lengkuas, Pulau Kepayang, dan snorkeling di Pulau Burung. Cocok untuk solo traveler, pasangan, dan komunitas yang mencari liburan santai dengan pemandangan yang menarik.",
    facilities: [
      "Hotel bintang 3 di Tanjung Pandan (2 malam)",
      "Transportasi ber-AC dan driver",
      "Kapal island hopping",
      "Peralatan snorkeling",
      "Guide lokal",
      "Tiket masuk semua objek",
      "Makan tiga kali sehari",
      "Dokumentasi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan dan Tanjung Tinggi",
        activities: [
          {
            time: "10.00",
            activity: "Penjemputan di Bandara H.A.S. Hanandjoeddin",
            location: "Bandara TJQ",
          },
          {
            time: "12.00",
            activity: "Check-in hotel dan makan siang",
            location: "Tanjung Pandan",
          },
          {
            time: "14.00",
            activity: "Pantai Tanjung Tinggi yang ikonik dari Laskar Pelangi",
            location: "Tanjung Tinggi",
            note: "Pantai ikonik Belitung",
          },
          {
            time: "17.00",
            activity: "Sunset di Pantai Tanjung Kelayang",
            location: "Tanjung Kelayang",
          },
          {
            time: "19.00",
            activity: "Makan malam seafood",
            location: "Tanjung Pandan",
          },
        ],
      },
      {
        day: 2,
        title: "Island Hopping Day",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan menuju dermaga",
            location: "Tanjung Kelayang",
          },
          {
            time: "09.00",
            activity: "Snorkeling di Pulau Burung",
            location: "Pulau Burung",
          },
          {
            time: "11.00",
            activity: "Melihat mercusuar di Pulau Lengkuas",
            location: "Pulau Lengkuas",
          },
          {
            time: "13.00",
            activity: "Makan siang di Pulau Kepayang",
            location: "Pulau Kepayang",
          },
          {
            time: "15.00",
            activity: "Berenang di Pulau Batu Berlayar",
            location: "Pulau Batu Berlayar",
          },
          {
            time: "18.00",
            activity: "Kembali ke hotel dan dinner",
            location: "Tanjung Pandan",
          },
        ],
      },
      {
        day: 3,
        title: "Danau Kaolin dan Kepulangan",
        activities: [
          {
            time: "07.00",
            activity: "Sarapan dan check-out",
            location: "Tanjung Pandan",
          },
          {
            time: "09.00",
            activity: "Danau Kaolin",
            location: "Danau Kaolin",
            note: "Danau biru bekas tambang",
          },
          {
            time: "11.00",
            activity: "Kampoeng Reklamasi Belitung",
            location: "Belitung",
          },
          {
            time: "13.00",
            activity: "Makan siang dan beli oleh-oleh",
            location: "Tanjung Pandan",
          },
          {
            time: "15.00",
            activity: "Antar ke Bandara TJQ",
            location: "Bandara TJQ",
          },
        ],
      },
    ],
    includes: [
      "Hotel 2 malam",
      "Transportasi ber-AC",
      "Kapal island hopping",
      "Peralatan snorkeling",
      "Guide lokal",
      "Tiket masuk",
      "Makan penuh",
      "Dokumentasi",
    ],
    excludes: [
      "Tiket pesawat",
      "Minuman beralkohol",
      "Pengeluaran pribadi",
      "Tipping guide",
    ],
    thingsToBring: [
      "Baju renang",
      "Sunscreen",
      "Sandal jepit",
      "Topi atau kacamata hitam",
      "Kamera",
    ],
    badge: "Instagramable",
    rating: 4.9,
    reviewCount: 421,
    isDemo: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-01",
    name: "Andini Prameswari",
    city: "Jakarta",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    experience:
      "Sailing Labuan Bajo-nya luar biasa. Guide-nya ramah banget, dokumentasi keren, dan itinerary-nya pas. Nggak nyesel pilih JelajahNusantara untuk honeymoon kami.",
    packageName: "Labuan Bajo Sailing Phinisi",
    isDemo: true,
  },
  {
    id: "t-02",
    name: "Rizky Hidayat",
    city: "Bandung",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    experience:
      "Open trip Bromo tengah malam awalnya bikin ragu, tapi ternyata aman dan terorganisir. Jeep-nya bersih, guide-nya sabar, dan sunrise-nya juara.",
    packageName: "Bromo Midnight Sunrise & Savana",
    isDemo: true,
  },
  {
    id: "t-03",
    name: "Siti Nurhaliza",
    city: "Surabaya",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    experience:
      "Bawa keluarga lima orang ke Dieng, semuanya nyaman. Anak-anak senang, orang tua juga nggak capek. Recommended untuk family trip.",
    packageName: "Dieng Culture & Golden Sunrise",
    isDemo: true,
  },
  {
    id: "t-04",
    name: "Bramantyo Adi",
    city: "Semarang",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    experience:
      "Raja Ampat premium trip memang mahal, tapi worth it banget. Resort-nya bersih, chef-nya jago, dan Wayag-nya luar biasa.",
    packageName: "Raja Ampat Wayag Explorer",
    isDemo: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-01",
    destination: "Labuan Bajo",
    src: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    alt: "Kapal Phinisi berlayar di perairan Labuan Bajo",
    caption: "Sailing Phinisi di Labuan Bajo",
    isDemo: true,
  },
  {
    id: "g-02",
    destination: "Bromo",
    src: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunrise di Gunung Bromo dengan lautan awan",
    caption: "Sunrise Magis Bromo",
    isDemo: true,
  },
  {
    id: "g-03",
    destination: "Bali",
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    alt: "Tebing Kelingking Beach di Nusa Penida, Bali",
    caption: "Kelingking Beach, Nusa Penida",
    isDemo: true,
  },
  {
    id: "g-04",
    destination: "Raja Ampat",
    src: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=80",
    alt: "Gugusan karst Wayag di Raja Ampat",
    caption: "Wayag, Raja Ampat",
    isDemo: true,
  },
  {
    id: "g-05",
    destination: "Derawan",
    src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80",
    alt: "Whale shark berenang di perairan Derawan",
    caption: "Whale Shark di Talisayan",
    isDemo: true,
  },
  {
    id: "g-06",
    destination: "Dieng",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    alt: "Pegunungan berkabut di dataran tinggi Dieng",
    caption: "Kabut Pagi Dieng",
    isDemo: true,
  },
  {
    id: "g-07",
    destination: "Labuan Bajo",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    alt: "Terumbu karang dan ikan tropis di bawah laut",
    caption: "Bawah Laut Komodo",
    isDemo: true,
  },
  {
    id: "g-08",
    destination: "Bali",
    src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
    alt: "Pura Ulun Danu Beratan di tepi danau Bali",
    caption: "Pura Ulun Danu, Bali",
    isDemo: true,
  },
  {
    id: "g-09",
    destination: "Raja Ampat",
    src: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=80",
    alt: "Pianemo dengan bintang laut di Raja Ampat",
    caption: "Pianemo, Raja Ampat",
    isDemo: true,
  },
  {
    id: "g-10",
    destination: "Puncak Jaya",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    alt: "Puncak gunung bersalju dengan kabut di ketinggian",
    caption: "Carstensz Pyramid",
    isDemo: true,
  },
  {
    id: "g-11",
    destination: "Wakatobi",
    src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80",
    alt: "Terumbu karang dan ikan tropis di bawah laut Wakatobi",
    caption: "Bawah Laut Wakatobi",
    isDemo: true,
  },
  {
    id: "g-12",
    destination: "Danau Toba",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    alt: "Danau vulkanik dengan pegunungan hijau di sekelilingnya",
    caption: "Danau Toba",
    isDemo: true,
  },
  {
    id: "g-13",
    destination: "Belitung",
    src: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1200&q=80",
    alt: "Pantai tropis dengan batu granit ikonik Belitung",
    caption: "Pantai Granit Belitung",
    isDemo: true,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-01",
    question: "Berapa DP yang harus dibayar untuk booking paket?",
    answer:
      "DP sebesar 30% dari total harga paket diperlukan untuk mengunci slot. Pelunasan dilakukan maksimal 7 hari sebelum keberangkatan.",
  },
  {
    id: "faq-02",
    question: "Apakah bisa reschedule tanggal perjalanan?",
    answer:
      "Bisa, reschedule dapat dilakukan maksimal 14 hari sebelum keberangkatan tanpa biaya tambahan, tergantung ketersediaan slot.",
  },
  {
    id: "faq-03",
    question: "Bagaimana kebijakan pembatalan?",
    answer:
      "Pembatalan lebih dari 30 hari sebelum keberangkatan, DP dapat dikembalikan 50%. Kurang dari 14 hari, DP tidak dapat dikembalikan.",
  },
  {
    id: "faq-04",
    question: "Apakah anak-anak boleh ikut?",
    answer:
      "Boleh. Anak usia 3 sampai 12 tahun mendapat harga khusus. Untuk anak di bawah 3 tahun, silakan konsultasi terlebih dahulu dengan admin kami.",
  },
  {
    id: "faq-05",
    question: "Di mana meeting point-nya?",
    answer:
      "Meeting point bervariasi tergantung paket. Umumnya di bandara kedatangan atau titik yang disepakati. Detail akan diinfokan saat konfirmasi booking.",
  },
  {
    id: "faq-06",
    question: "Apakah ada batasan bagasi?",
    answer:
      "Untuk paket yang menggunakan penerbangan, batas bagasi mengikuti kebijakan maskapai. Kami sarankan membawa tas kabin 7 kg dan tas bagasi 20 kg.",
  },
  {
    id: "faq-07",
    question: "Apakah dokumentasi sudah termasuk?",
    answer:
      "Ya, semua paket sudah termasuk dokumentasi foto dan video oleh tim kami. Untuk paket premium, dokumentasi drone juga tersedia.",
  },
  {
    id: "faq-08",
    question: "Apakah itinerary bisa berubah?",
    answer:
      "Itinerary dapat menyesuaikan kondisi cuaca dan force majeure. Kami akan selalu mengutamakan keselamatan dan kenyamanan peserta.",
  },
];