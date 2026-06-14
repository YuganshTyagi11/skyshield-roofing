import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Shield,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import appCss from "../styles.css?url";

/* ============================================
   Root Route Configuration
   ============================================ */

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SkyShield Roofing | Premium Roofing Services in Central Texas" },
      { name: "description", content: "SkyShield Roofing delivers premium residential and commercial roofing services across Central Texas. Quality craftsmanship, honest pricing, guaranteed protection." },
      { name: "author", content: "SkyShield Roofing" },
      { property: "og:title", content: "SkyShield Roofing | Premium Roofing Services" },
      { property: "og:description", content: "Premium residential and commercial roofing services across Central Texas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SkyShieldRoofing" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

/* ============================================
   Header / Navigation
   ============================================ */

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 lg:h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight tracking-tight text-foreground">
              SkyShield
            </span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Roofing
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
              {pathname === link.to && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/quote"
            className="hidden items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:bg-accent/90 hover:shadow md:inline-flex"
          >
            Get a Quote
            <ChevronRight className="h-4 w-4" />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              Get a Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============================================
   Footer
   ============================================ */

const footerLinks = {
  Services: [
    { to: "/services", label: "Residential Roofing" },
    { to: "/services", label: "Commercial Roofing" },
    { to: "/services", label: "Roof Repairs" },
    { to: "/services", label: "Roof Inspections" },
    { to: "/services", label: "Gutter Services" },
  ],
  Company: [
    { to: "/about", label: "About Us" },
    { to: "/projects", label: "Our Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/quote", label: "Free Quote" },
  ],
};

const serviceAreas = [
  "Austin, TX",
  "Round Rock, TX",
  "Cedar Park, TX",
  "Georgetown, TX",
  "Leander, TX",
  "Pflugerville, TX",
];

function Footer() {
  return (
    <footer className="bg-slate-dark text-primary-foreground">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Shield className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight tracking-tight">
                  SkyShield
                </span>
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Roofing
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Premium roofing solutions for homes and businesses across Central
              Texas. Quality craftsmanship, honest pricing, guaranteed
              protection.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact Us
            </h4>
            <div className="mt-5 space-y-3">
              <a
                href="tel:+15125551234"
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0" />
                (512) 555-1234
              </a>
              <a
                href="mailto:info@skyshieldroofing.com"
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@skyshieldroofing.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>1234 Builder Blvd<br />Austin, TX 78701</span>
              </div>
            </div>

            <h4 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Service Areas
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
          <p>© 2025 SkyShield Roofing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy Policy</a>
            <a href="#" className="hover:text-white/70">Terms of Service</a>
            <a href="#" className="hover:text-white/70">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
