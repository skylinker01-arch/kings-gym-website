import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { SITE_URL, breadcrumbLd, PHONE, PHONE_TEL } from "@/lib/site";
import { Check, ArrowRight, Phone } from "lucide-react";

const TITLE = "Gym Membership Plans in Dindoli, Surat | King's Gym";
const DESC =
  "Affordable gym membership plans at King's Gym, Dindoli, Surat — monthly, quarterly and yearly options with cardio, strength training, and personal coaching. Call for pricing.";
const URL = `${SITE_URL}/membership`;

const PLANS = [
  {
    name: "Starter",
    tag: "Begin strong",
    perks: ["Full Gym Access", "Cardio Zone", "Strength Training Area", "Locker Facility"],
  },
  {
    name: "Popular",
    tag: "Most chosen",
    featured: true,
    perks: ["Everything in Starter", "Personal Guidance", "Diet & Nutrition Tips", "Progress Tracking"],
  },
  {
    name: "Premium",
    tag: "Full experience",
    perks: ["Everything in Popular", "1-on-1 Personal Training", "Personalized Fitness Plan", "Priority Support"],
  },
];

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Membership", path: "/membership" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "King's Gym Membership Plans",
          url: URL,
          itemListElement: PLANS.map((p) => ({
            "@type": "Offer",
            name: `${p.name} Membership`,
            description: p.perks.join(", "),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: { "@type": "HealthClub", name: "King's Gym" },
          })),
        }),
      },
    ],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <div>
      <SiteLayout>
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Membership</span>
          <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl md:text-7xl">
            Simple Plans. <span className="text-gradient-gold">Serious Results.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Every King's Gym membership includes full access to our modern equipment, cardio zone
            and strength area. Pick the plan that matches your goal — call us for current pricing
            and any ongoing offers for Dindoli and Surat residents.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative overflow-hidden rounded-2xl border p-8 transition hover:-translate-y-1 ${
                  p.featured
                    ? "border-primary bg-gradient-to-b from-primary/10 to-card shadow-2xl shadow-primary/20"
                    : "border-border/60 bg-card"
                }`}
              >
                {p.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="text-xs uppercase tracking-[0.3em] text-primary">{p.tag}</div>
                <h2 className="mt-3 font-display text-4xl">{p.name}</h2>
                <div className="mt-4 h-px bg-border" />
                <ul className="mt-6 space-y-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold uppercase tracking-wider transition ${
                    p.featured
                      ? "bg-gradient-gold text-primary-foreground hover:scale-105"
                      : "border border-primary/60 text-primary hover:bg-primary/10"
                  }`}
                >
                  Get Pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20">
            <h2 className="font-display text-4xl sm:text-5xl">What's Included in Every Plan</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Free weights, racks, benches",
                "Full cardio zone",
                "Trainer on the floor",
                "Locker & changing room",
                "Clean, sanitised equipment",
                "Beginner-friendly onboarding",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 rounded-2xl border border-primary/30 bg-card p-8 text-center sm:p-12">
            <h3 className="font-display text-3xl sm:text-4xl">
              Want the best price? <span className="text-gradient-gold">Just call us.</span>
            </h3>
            <p className="mt-3 text-muted-foreground">We run monthly offers for Dindoli residents.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground">
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary">
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </SiteLayout>
    </div>
  );
}
