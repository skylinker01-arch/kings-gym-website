import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUp,
  Dumbbell,
  Heart,
  Users,
  Sparkles,
  Trophy,
  Flame,
  Scale,
  Timer,
  ShieldCheck,
  BadgeIndianRupee,
  Star,
  ChevronDown,
  Crown,
  Check,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import { SITE_URL, HEALTH_CLUB_LD } from "@/lib/site";

const HOME_TITLE = "King's Gym | Best Gym in Dindoli, Surat — Premium Fitness Center";
const HOME_DESC =
  "King's Gym in Dindoli, Surat — premium equipment, certified trainers, strength & cardio, personal training and affordable memberships. Train like a king. Call +91 97232 72262.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(HEALTH_CLUB_LD) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+91 97232 72262";
const PHONE_TEL = "+919723272262";
const WHATSAPP = "https://wa.me/919723272262";
const MAPS = "https://maps.app.goo.gl/8KfxLpyZAWkpGSKo9";
const ADDRESS =
  "Shop No. 302, 3rd Floor, Dream Shoppers, Opp. Police Station, Tirupati Society, Dindoli, Surat, Gujarat 394210";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#membership", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];




const FEATURES = [
  { icon: Dumbbell, title: "Modern Equipment", desc: "Latest strength and cardio machines." },
  { icon: Sparkles, title: "Spacious Workout Area", desc: "Room to move, breathe and grow." },
  { icon: Users, title: "Friendly Environment", desc: "A community that pushes you forward." },
  { icon: Trophy, title: "Personal Training", desc: "Certified coaches on the floor daily." },
  { icon: Flame, title: "Strength Training", desc: "Free weights, racks and heavy iron." },
  { icon: Heart, title: "Cardio Zone", desc: "Treadmills, bikes and cross-trainers." },
  { icon: Scale, title: "Weight Loss Programs", desc: "Structured plans that actually work." },
  { icon: Timer, title: "Muscle Building", desc: "Hypertrophy protocols and coaching." },
  { icon: BadgeIndianRupee, title: "Affordable Membership", desc: "Premium quality, honest pricing." },
  { icon: ShieldCheck, title: "Clean & Hygienic", desc: "Sanitised equipment, fresh space." },
];

const PLANS = [
  {
    name: "Starter",
    tag: "Begin strong",
    perks: ["Gym Access", "Cardio", "Strength Training"],
  },
  {
    name: "Popular",
    tag: "Most chosen",
    featured: true,
    perks: ["Gym Access", "Personal Guidance", "Diet Tips"],
  },
  {
    name: "Premium",
    tag: "Full experience",
    perks: ["Everything Included", "Priority Support", "Personalized Fitness Plan"],
  },
];

const GALLERY = [
  { src: g1, label: "Gym Interior" },
  { src: g3, label: "Weight Training" },
  { src: g2, label: "Cardio Machines" },
  { src: g6, label: "Workout Area" },
  { src: g4, label: "Members Training" },
  { src: g5, label: "Equipment" },
];

const TESTIMONIALS = [
  { name: "Rahul P.", text: "Amazing gym with excellent equipment and a motivating atmosphere. Best in Dindoli." },
  { name: "Priya M.", text: "The trainers are incredible. I lost 8 kg in 3 months with their guidance." },
  { name: "Kiran S.", text: "Clean, spacious and always well maintained. Feels premium every single day." },
  { name: "Aakash D.", text: "Heavy iron, serious lifters and great vibes. Exactly what I was looking for." },
  { name: "Neha J.", text: "Friendly staff, judgement-free space. Highly recommend for beginners too." },
  { name: "Manish K.", text: "Affordable pricing with world-class facilities. Absolutely worth it." },
];

const FAQS = [
  { q: "What are the gym timings?", a: "We are open early morning to late night, seven days a week. Call us to confirm current timings." },
  { q: "Do you offer personal training?", a: "Yes, certified trainers are available for one-on-one sessions and customised programs." },
  { q: "Can beginners join?", a: "Absolutely. Most of our members started as beginners. We'll guide you from day one." },
  { q: "Is there parking available?", a: "Yes, parking is available near the building for both two and four wheelers." },
  { q: "How can I become a member?", a: "Just call us or visit the gym. Our team will walk you through plans and get you started." },
];

function Index() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Features />
      <Cta line="Your Fitness Journey Starts Today." />
      <Membership />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />

      {/* Floating buttons */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call now"
        className="fixed bottom-6 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-2xl transition hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-5 z-50 grid h-11 w-11 place-items-center rounded-full glass text-primary shadow-lg transition hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/85 backdrop-blur-lg md:hidden">
        <div className="mx-auto flex max-w-md gap-2 px-3 py-2.5">
          <a href="#contact" className="flex-1 rounded-lg bg-gradient-gold px-4 py-2.5 text-center text-sm font-bold text-primary-foreground">
            Join Now
          </a>
          <a href={`tel:${PHONE_TEL}`} className="flex-1 rounded-lg border border-primary/60 px-4 py-2.5 text-center text-sm font-bold text-primary">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold text-primary-foreground">
        <Crown className="h-5 w-5" />
      </span>
      <span className="font-display text-2xl tracking-widest">
        KING'S <span className="text-gradient-gold">GYM</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden items-center gap-2 rounded-lg bg-gradient-gold px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-105 lg:inline-flex"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <img
        src={heroImg}
        alt="Athlete training at King's Gym"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.82_0.15_85/0.15),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <div className="max-w-3xl animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <Crown className="h-3.5 w-3.5" /> Premium Gym in Dindoli, Surat
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            Train Like a <span className="text-gradient-gold">King</span>.
            <br />
            Become Your Strongest Self.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Join King's Gym in Dindoli, Surat and transform your body with world-class equipment,
            expert guidance, and a motivating atmosphere.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl shadow-primary/20 transition hover:scale-105"
            >
              Join Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary transition hover:bg-primary/10"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
            {[
              { n: "500+", l: "Active Members" },
              { n: "10+", l: "Expert Trainers" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-gold sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
          )}
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title={<>Built for <span className="text-gradient-gold">Champions</span></>}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={g4} alt="Training at King's Gym" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
        </div>
        <div>
          <h3 className="font-display text-3xl sm:text-4xl">
            A gym that meets you where you are.
          </h3>
          <p className="mt-5 text-muted-foreground">
            King's Gym is committed to helping people achieve their fitness goals through quality
            equipment, a motivating environment, and dedicated support. Whether you're beginning your
            fitness journey or preparing for athletic performance, King's Gym welcomes everyone.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Certified, experienced trainers",
              "Premium equipment for every goal",
              "Programs for weight loss, strength & performance",
              "Clean, spacious and hygienic facility",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Features() {
  return (
    <Section
      eyebrow="Why Choose Us"
      title={<>Everything you need <span className="text-gradient-gold">to win</span></>}
      subtitle="From heavy iron to expert coaching — every detail is built for your progress."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-gold opacity-0 blur-3xl transition group-hover:opacity-30" />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl tracking-wide">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Cta({ line }: { line: string }) {
  return (
    <section className="px-5 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center sm:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.82_0.15_85/0.2),transparent_60%)]" />
        <div className="relative">
          <h3 className="font-display text-4xl sm:text-5xl md:text-6xl">
            {line.split(".")[0]}.<span className="text-gradient-gold"> Become Stronger Every Day.</span>
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="rounded-lg bg-gradient-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl shadow-primary/20 transition hover:scale-105">
              Join Now
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary/10">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <Section
      id="membership"
      eyebrow="Membership"
      title={<>Choose your <span className="text-gradient-gold">path</span></>}
      subtitle="Simple, honest plans built around your goals."
    >
      <div className="grid gap-6 md:grid-cols-3">
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
            <h3 className="mt-3 font-display text-4xl">{p.name}</h3>
            <div className="mt-4 h-px bg-border" />
            <ul className="mt-6 space-y-3">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold uppercase tracking-wider transition ${
                p.featured
                  ? "bg-gradient-gold text-primary-foreground hover:scale-105"
                  : "border border-primary/60 text-primary hover:bg-primary/10"
              }`}
            >
              Contact Us for Pricing
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title={<>Step <span className="text-gradient-gold">inside</span></>}
      subtitle="A look at the space, the equipment and the energy."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.map((g) => (
          <div key={g.label} className="group relative overflow-hidden rounded-2xl">
            <img
              src={g.src}
              alt={g.label}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-5 transition group-hover:-translate-y-1">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">King's Gym</div>
              <div className="mt-1 font-display text-2xl">{g.label}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={<>Loved by our <span className="text-gradient-gold">members</span></>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border/60 bg-card p-7 transition hover:-translate-y-1 hover:border-primary/50">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/90">"{t.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-bold text-primary-foreground">
                {t.name.charAt(0)}
              </div>
              <div className="text-sm font-semibold">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Questions, <span className="text-gradient-gold">answered</span></>}
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-xl border border-border/60 bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm text-muted-foreground animate-float-up">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Start <span className="text-gradient-gold">today</span></>}
      subtitle="Drop your details or call us — we'll take it from there."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-8">
          {sent ? (
            <div className="grid place-items-center py-12 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-3xl">You're in.</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Thanks for reaching out. Our team will contact you shortly to help you get started.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required maxLength={100} />
                <Field label="Phone Number" name="phone" type="tel" required maxLength={20} />
              </div>
              <Field label="Email" name="email" type="email" maxLength={255} />
              <Field label="Fitness Goal" name="goal" placeholder="e.g. Weight loss, muscle gain" maxLength={200} />
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:scale-[1.02]"
              >
                Join King's Gym <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-widest text-primary">Address</div>
                <p className="mt-2 text-sm leading-relaxed">{ADDRESS}</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-widest text-primary">Phone</div>
                <a href={`tel:${PHONE_TEL}`} className="mt-2 block text-lg font-semibold hover:text-primary">
                  {PHONE}
                </a>
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
              title="King's Gym location"
              src="https://www.google.com/maps?q=Dream+Shoppers+Dindoli+Surat&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40 pb-24 pt-16 md:pb-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Premium fitness in the heart of Dindoli, Surat. Train hard. Live strong.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About King's Gym</Link></li>
              <li><Link to="/membership" className="text-muted-foreground hover:text-primary">Membership Plans</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact & Directions</Link></li>
              <li><Link to="/gym-in-dindoli-surat" className="text-muted-foreground hover:text-primary">Gym in Dindoli, Surat</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Contact</div>
            <p className="mt-4 text-sm text-muted-foreground">{ADDRESS}</p>
            <a href={`tel:${PHONE_TEL}`} className="mt-3 block text-sm font-semibold hover:text-primary">
              {PHONE}
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
              <MapPin className="h-4 w-4" /> View on Google Maps
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © 2026 King's Gym. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
