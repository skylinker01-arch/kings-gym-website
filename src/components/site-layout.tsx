import { Link } from "@tanstack/react-router";
import { Crown, Phone, MapPin, MessageCircle } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { PHONE, PHONE_TEL, WHATSAPP, MAPS, ADDRESS } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
            : "bg-background/40 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold text-primary-foreground">
              <Crown className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl tracking-widest">
              KING'S <span className="text-gradient-gold">GYM</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-muted-foreground transition hover:text-primary"
                activeProps={{ className: "text-sm font-semibold text-primary" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-lg bg-gradient-gold px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 md:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </header>

      <main className="pt-24">{children}</main>

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

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/85 backdrop-blur-lg md:hidden">
        <div className="mx-auto flex max-w-md gap-2 px-3 py-2.5">
          <Link to="/contact" className="flex-1 rounded-lg bg-gradient-gold px-4 py-2.5 text-center text-sm font-bold text-primary-foreground">
            Join Now
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="flex-1 rounded-lg border border-primary/60 px-4 py-2.5 text-center text-sm font-bold text-primary">
            Call Now
          </a>
        </div>
      </div>

      <footer className="border-t border-border/60 bg-card/40 pb-24 pt-16 md:pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold text-primary-foreground">
                  <Crown className="h-5 w-5" />
                </span>
                <span className="font-display text-2xl tracking-widest">
                  KING'S <span className="text-gradient-gold">GYM</span>
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Premium fitness in the heart of Dindoli, Surat. Train hard. Live strong.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">Explore</div>
              <ul className="mt-4 space-y-2 text-sm">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-muted-foreground hover:text-primary">
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/gym-in-dindoli-surat" className="text-muted-foreground hover:text-primary">
                    Gym in Dindoli
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">Contact</div>
              <address className="mt-4 not-italic text-sm text-muted-foreground">{ADDRESS}</address>
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
    </div>
  );
}
