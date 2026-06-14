import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield,
  Home,
  Building2,
  Wrench,
  Search,
  Droplets,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
  Award,
  Users,
  TrendingUp,
  MapPin,
} from "lucide-react";

import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkyShield Roofing | Premium Roofing Services in Central Texas" },
      { name: "description", content: "SkyShield Roofing delivers premium residential and commercial roofing services across Central Texas. Quality craftsmanship, honest pricing, guaranteed protection." },
      { property: "og:title", content: "SkyShield Roofing | Premium Roofing Services" },
      { property: "og:description", content: "Premium residential and commercial roofing services across Central Texas." },
    ],
  }),
  component: HomePage,
});

/* ============================================
   Animation helpers
   ============================================ */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

/* ============================================
   Home Page
   ============================================ */

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

/* ============================================
   Hero Section
   ============================================ */

function HeroSection() {
  return (
    <section className="relative -mt-20 flex min-h-[90vh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Beautiful home with premium roofing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
          >
            <Shield className="h-3.5 w-3.5" />
            Trusted by 2,500+ homeowners
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Protect What Matters Most With{" "}
            <span className="text-accent">Premium Roofing</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            SkyShield Roofing delivers expert craftsmanship, premium materials,
            and honest pricing for homes and businesses across Central Texas.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">25-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Free Estimates</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   Stats Bar
   ============================================ */

const stats = [
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
  { icon: Home, value: "2,500+", label: "Roofs Completed" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Users, value: "50+", label: "Team Members" },
];

function StatsBar() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="h-6 w-6 text-accent" />
              <span className="mt-2 font-display text-3xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   Services Preview
   ============================================ */

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    description:
      "Complete roof installations and replacements for single-family homes, townhomes, and multi-family properties.",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description:
      "Flat membrane, metal, and TPO roofing systems designed for durability and energy efficiency.",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    description:
      "Fast, reliable repairs for leaks, storm damage, missing shingles, and general wear.",
  },
  {
    icon: Search,
    title: "Roof Inspections",
    description:
      "Thorough inspections with detailed reports for insurance claims, home sales, or peace of mind.",
  },
  {
    icon: Droplets,
    title: "Gutter Services",
    description:
      "Installation, cleaning, and repair of seamless gutters and downspouts to protect your foundation.",
  },
  {
    icon: Shield,
    title: "Storm Damage",
    description:
      "Emergency tarping, damage assessment, and full restoration after hail, wind, or storm events.",
  },
];

function ServicesPreview() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Complete Roofing Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            From new installations to emergency repairs, we handle every aspect
            of your roofing needs with expertise and care.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group rounded-2xl border border-border bg-background p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-foreground"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   Featured Projects
   ============================================ */

const featuredProjects = [
  {
    image: project1,
    title: "Modern Farmhouse",
    category: "Residential",
    location: "Cedar Park, TX",
  },
  {
    image: project2,
    title: "Commerce Center",
    category: "Commercial",
    location: "Austin, TX",
  },
  {
    image: project3,
    title: "Victorian Restoration",
    category: "Residential",
    location: "Georgetown, TX",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
            >
              Portfolio
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-xl text-lg text-muted-foreground"
            >
              See the quality and craftsmanship that sets SkyShield apart.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   Why Choose Us
   ============================================ */

const reasons = [
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "GAF Master Elite and Owens Corning Platinum Preferred contractors.",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description:
      "Comprehensive warranties on materials and workmanship for total peace of mind.",
  },
  {
    icon: Star,
    title: "5-Star Service",
    description:
      "Rated 4.9/5 across 500+ reviews. We don't leave until you're satisfied.",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Response",
    description:
      "Storm damage doesn't wait. Our emergency team is ready day or night.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
          >
            Why SkyShield
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            The SkyShield Difference
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            We combine old-school craftsmanship with modern materials and
            transparent pricing to deliver roofs that last.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   Testimonials
   ============================================ */

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Austin",
    text: "SkyShield replaced our entire roof in just 3 days. The crew was professional, cleaned up perfectly, and the final result is stunning. Our neighbors keep asking who we used!",
    rating: 5,
  },
  {
    name: "James & Lisa Torres",
    role: "Homeowners, Round Rock",
    text: "After a bad hail storm, their emergency team had us tarped within hours. The insurance claim process was seamless and the new roof looks incredible. Highly recommend!",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "Property Manager, Cedar Park",
    text: "We've used SkyShield for 4 commercial properties. Their commercial roofing expertise is unmatched — on time, on budget, and zero callbacks. They're our go-to contractor.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>
              <div className="mt-6">
                <p className="font-display text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   CTA Section
   ============================================ */

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-dark py-20 lg:py-28">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_50%,var(--color-accent)_0%,transparent_50%)]" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ready to Protect Your Home?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg text-white/70"
        >
          Get a free, no-obligation estimate in minutes. Our team is standing by
          to help you find the perfect roofing solution.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+15125551234"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <Phone className="h-4 w-4" />
            (512) 555-1234
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
