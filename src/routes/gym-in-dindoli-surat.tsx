import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { SITE_URL, breadcrumbLd, PHONE, PHONE_TEL, ADDRESS, MAPS, HEALTH_CLUB_LD } from "@/lib/site";
import { Phone, MapPin, ArrowRight, Check } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const TITLE = "Best Gym in Dindoli, Surat | King's Gym Near You";
const DESC =
  "Looking for a gym in Dindoli, Surat? King's Gym at Tirupati Society offers premium equipment, expert trainers and affordable memberships — walk in today. Call +91 97232 72262.";
const URL = `${SITE_URL}/gym-in-dindoli-surat`;

export const Route = createFileRoute("/gym-in-dindoli-surat")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "gym in Dindoli, gym near me Surat, best gym Dindoli, fitness center Dindoli, personal trainer Surat" },
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
            { name: "Gym in Dindoli, Surat", path: "/gym-in-dindoli-surat" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(HEALTH_CLUB_LD) },
    ],
  }),
  component: LocalPage,
});

function LocalPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="King's Gym — premium fitness center in Dindoli, Surat"
          width={1920}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Dindoli · Surat · Gujarat
          </span>
          <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl md:text-7xl">
            The Best <span className="text-gradient-gold">Gym in Dindoli, Surat</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Searching for a gym near you in Dindoli? King's Gym at Dream Shoppers, opposite the
            Police Station in Tirupati Society, is your neighbourhood destination for serious
            fitness — premium equipment, certified coaches, and honest membership pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary">
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <h2 className="font-display text-4xl sm:text-5xl">Why King's Gym is Dindoli's Top Choice</h2>
        <p className="mt-4 text-muted-foreground">
          Locals from Dindoli, Udhna, Pandesara and Tirupati Society choose King's Gym for one
          simple reason: the experience is genuinely premium. Whether you want to lose weight,
          build muscle, or simply get healthier, our floor is built to support the goal.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Walkable from Tirupati Society & nearby lanes",
            "Two-wheeler and four-wheeler parking",
            "Certified trainers on the floor",
            "Modern strength & cardio equipment",
            "Beginner-friendly onboarding",
            "Clean, sanitised, hygienic space",
            "Affordable Dindoli membership plans",
            "Open 7 days a week",
          ].map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-4xl sm:text-5xl">How to Reach Us</h2>
        <address className="mt-4 not-italic text-muted-foreground">
          <strong className="text-foreground">Address:</strong> {ADDRESS}
        </address>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Located on the <strong>3rd floor of Dream Shoppers</strong>, a well-known Dindoli landmark.</li>
          <li>Directly <strong>opposite the Police Station</strong> — easy to find.</li>
          <li>Inside <strong>Tirupati Society</strong>, walkable from most Dindoli lanes.</li>
          <li>Easy access from Udhna, Pandesara and the Surat–Navsari main road.</li>
        </ul>

        <h2 className="mt-16 font-display text-4xl sm:text-5xl">Neighbourhoods We Serve</h2>
        <p className="mt-4 text-muted-foreground">
          King's Gym proudly serves fitness enthusiasts from Dindoli, Tirupati Society, Udhna,
          Pandesara, Bhathena, Bamroli and surrounding areas of South Surat.
        </p>

        <div className="mt-14 rounded-2xl border border-primary/30 bg-card p-8 text-center sm:p-12">
          <h3 className="font-display text-3xl sm:text-4xl">
            Nearest premium gym? <span className="text-gradient-gold">You're already looking at it.</span>
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Book a Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/membership" className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary">
              See Plans
            </Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
