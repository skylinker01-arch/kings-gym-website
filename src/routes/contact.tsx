import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site-layout";
import { SITE_URL, breadcrumbLd, PHONE, PHONE_TEL, ADDRESS, MAPS, HEALTH_CLUB_LD } from "@/lib/site";
import { Phone, MapPin, Check, ArrowRight, Clock } from "lucide-react";

const TITLE = "Contact King's Gym | Address, Phone & Directions — Dindoli, Surat";
const DESC =
  "Visit King's Gym at Dream Shoppers, Tirupati Society, Dindoli, Surat. Call +91 97232 72262 for membership, timings, and directions. Open 7 days a week.";
const URL = `${SITE_URL}/contact`;

export const Route = createFileRoute("/contact")({
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
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(HEALTH_CLUB_LD) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          url: URL,
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Contact</span>
        <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl md:text-7xl">
          Visit King's Gym in <span className="text-gradient-gold">Dindoli</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Come see the space, meet the trainers, and try a session. Call us, WhatsApp, or fill in
          the form — we'll get back within a few hours.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section aria-labelledby="enquiry-heading" className="rounded-2xl border border-border/60 bg-card p-8">
            <h2 id="enquiry-heading" className="font-display text-3xl">Send an Enquiry</h2>
            {sent ? (
              <div className="mt-8 grid place-items-center py-8 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-3xl">You're in.</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required maxLength={100} />
                  <Field label="Phone Number" name="phone" type="tel" required maxLength={20} />
                </div>
                <Field label="Email" name="email" type="email" maxLength={255} />
                <Field label="Fitness Goal" name="goal" placeholder="e.g. Weight loss, muscle gain" maxLength={200} />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    placeholder="Tell us about your goals..."
                  />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:scale-[1.02]">
                  Join King's Gym <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </section>

          <section aria-labelledby="reach-us-heading" className="space-y-6">
            <h2 id="reach-us-heading" className="sr-only">Reach Us</h2>
            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Address</div>
                  <address className="mt-2 not-italic text-sm leading-relaxed">{ADDRESS}</address>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Phone</div>
                  <a href={`tel:${PHONE_TEL}`} className="mt-2 block text-lg font-semibold hover:text-primary">{PHONE}</a>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Hours</div>
                  <p className="mt-2 text-sm">Open 7 days a week · Early morning to late night</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary/10">
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <iframe
                title="King's Gym location on Google Maps"
                src="https://www.google.com/maps?q=Dream+Shoppers+Dindoli+Surat&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, maxLength, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; maxLength?: number; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} maxLength={maxLength} placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary" />
    </div>
  );
}
