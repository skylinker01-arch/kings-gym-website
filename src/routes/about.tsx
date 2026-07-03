import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { SITE_URL, breadcrumbLd, PHONE, PHONE_TEL } from "@/lib/site";
import { Trophy, Users, Sparkles, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import g4 from "@/assets/g4.jpg";

const TITLE = "About King's Gym | Premium Fitness Center in Dindoli, Surat";
const DESC =
  "Learn about King's Gym in Dindoli, Surat — certified trainers, modern equipment, a welcoming community, and results-driven programs for every fitness level.";
const URL = `${SITE_URL}/about`;

export const Route = createFileRoute("/about")({
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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          url: URL,
          description: DESC,
        }),
      },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  { icon: Trophy, title: "Certified Coaches", desc: "Experienced trainers who program, coach, and hold you accountable." },
  { icon: Sparkles, title: "Modern Equipment", desc: "Free weights, racks, machines, and cardio kept in top condition." },
  { icon: Users, title: "Real Community", desc: "A judgement-free, motivating floor where everyone belongs." },
  { icon: ShieldCheck, title: "Clean & Safe", desc: "Sanitised equipment and a hygienic, spacious workout space." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-5xl px-5 py-12 sm:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About Us</span>
        <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl md:text-7xl">
          The Premium Gym Locals in <span className="text-gradient-gold">Dindoli</span> Trust
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          King's Gym was built with one belief — everyone deserves access to a world-class training
          space, close to home. Tucked into the heart of Dindoli, Surat, we combine premium
          equipment, certified coaches, and a genuinely welcoming atmosphere so every member — from
          first-timer to seasoned lifter — has room to grow.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={g4}
            alt="Members strength training at King's Gym in Dindoli, Surat"
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              We started King's Gym because Dindoli deserved a fitness destination that felt
              premium without being intimidating. Since day one, our promise has stayed the same:
              well-maintained gear, coaches who actually coach, and a floor that pushes you forward
              — every single session.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether your goal is fat loss, strength, athletic performance, or simply feeling
              better in your body, our team designs a plan around <em>you</em> — not a template.
            </p>
          </div>
        </div>

        <h2 className="mt-20 font-display text-4xl sm:text-5xl">What Sets Us Apart</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 font-display text-4xl sm:text-5xl">Who We Train</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Beginners taking their first step, working professionals squeezing in a session before
          the day starts, students building athletic performance, and lifelong lifters chasing new
          PRs. King's Gym is built for all of them.
        </p>

        <div className="mt-14 rounded-2xl border border-primary/30 bg-card p-8 text-center sm:p-12">
          <h3 className="font-display text-3xl sm:text-4xl">
            Ready to see the space? <span className="text-gradient-gold">Come train with us.</span>
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Book a Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary">
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
