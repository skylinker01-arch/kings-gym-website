export const SITE_URL = "https://hello-sparkle-joy-23.lovable.app";
export const SITE_NAME = "King's Gym";
export const PHONE = "+91 97232 72262";
export const PHONE_TEL = "+919723272262";
export const WHATSAPP = "https://wa.me/919723272262";
export const MAPS = "https://maps.app.goo.gl/8KfxLpyZAWkpGSKo9";
export const ADDRESS =
  "Shop No. 302, 3rd Floor, Dream Shoppers, Opp. Police Station, Tirupati Society, Dindoli, Surat, Gujarat 394210";

export const HEALTH_CLUB_LD = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "@id": `${SITE_URL}/#healthclub`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: PHONE,
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 302, 3rd Floor, Dream Shoppers, Opp. Police Station, Tirupati Society, Dindoli",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "394210",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.1439,
    longitude: 72.8698,
  },
  areaServed: [
    { "@type": "Place", name: "Dindoli" },
    { "@type": "Place", name: "Surat" },
    { "@type": "Place", name: "Udhna" },
    { "@type": "Place", name: "Pandesara" },
  ],
  hasMap: MAPS,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "23:00",
    },
  ],
};

export function breadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
