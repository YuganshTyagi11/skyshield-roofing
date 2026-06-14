import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Heart,
  Users,
  TrendingUp,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | SkyShield Roofing" },
      { name: "description", content: "Learn about SkyShield Roofing — a family-owned roofing company serving Central Texas for over 15 years with quality craftsmanship and honest pricing." },
      { property: "og:title", content: "About Us | SkyShield Roofing" },
      { property: "og:description", content: "A family-owned roofing company serving Central Texas for over 15 years." },
    ],
  }),
  component: AboutPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description:
      "We believe in transparent pricing, honest assessments, and doing what's right — even when no one is watching.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "Every nail, every shingle, every seal is placed with care. We treat your roof like it's our own home.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "We're not happy until you're happy. Our job isn't done at installation — we're here for the life of your roof.",
  },
];

const team = [
  {
    name: "Michael Rivera",
    role: "Founder & CEO",
    bio: "15+ years in roofing. GAF Master Elite certified. Born and raised in Austin.",
  },
  {
    name: "David Chen",
    role: "Operations Manager",
    bio: "Former commercial project manager. Ensures every job runs on time and on budget.",
  },
  {
    name: "Amanda Foster",
    role: "Customer Success",
    bio: "Your main point of contact. Handles scheduling, insurance claims, and follow-up.",
  },
  {
    name: "Carlos Mendez",
    role: "Lead Foreman",
    bio: "20 years of hands-on roofing experience. Trains every new crew member personally.",
  },
];

const milestones = [
  { year: "2010", event: "SkyShield Roofing founded in Austin, TX" },
  { year: "2013", event: "Achieved GAF Master Elite certification" },
  { year: "2016", event: "Expanded into commercial roofing division" },
  { year: "2019", event: "Completed 1,000th residential project" },
  { year: "2022", event: "Opened second office in Round Rock" },
  { year: "2024", event: "50+ team members, 2,500+ roofs completed" },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-dark py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_40%_50%,var(--color-accent)_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
            >
              Our Story
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Built on Trust, Raised by Craftsmanship
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-white/70"
            >
              SkyShield Roofing started with a simple belief: every family deserves
              a roof they can trust. Fifteen years later, that belief guides
              everything we do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A Local Company With Local Values
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Founded in 2010 by Michael Rivera, SkyShield began as a
                one-man operation with a truck and a commitment to quality.
                Word spread quickly in the Austin community — not because of
                flashy marketing, but because neighbors told neighbors about
                a roofer who showed up on time, did exceptional work, and
                stood behind it.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Today, SkyShield is a team of 50+ professionals serving
                homes and businesses across Central Texas. But our core values
                remain the same: honest pricing, premium materials, and
                craftsmanship that lasts.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-background p-10 shadow-sm"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <TrendingUp className="mx-auto h-8 w-8 text-accent" />
                  <p className="mt-3 font-display text-3xl font-bold text-foreground">
                    15+
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Years in Business
                  </p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto h-8 w-8 text-accent" />
                  <p className="mt-3 font-display text-3xl font-bold text-foreground">
                    50+
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Team Members
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="mx-auto h-8 w-8 text-accent" />
                  <p className="mt-3 font-display text-3xl font-bold text-foreground">
                    2,500+
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Roofs Completed
                  </p>
                </div>
                <div className="text-center">
                  <Star className="mx-auto h-8 w-8 text-accent" />
                  <p className="mt-3 font-display text-3xl font-bold text-foreground">
                    4.9
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Average Rating
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              What We Stand For
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-14 grid gap-8 md:grid-cols-3"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="rounded-2xl border border-border bg-background p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
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
              Our Journey
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Milestones
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-14 space-y-8"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                variants={fadeInUp}
                className={`flex gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden w-32 shrink-0 text-right md:block">
                  <span className="font-display text-2xl font-bold text-accent">
                    {m.year}
                  </span>
                </div>
                <div className="relative flex shrink-0 flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <div className="w-px flex-1 bg-border" />
                </div>
                <div className="flex-1 pb-8">
                  <span className="font-display text-xl font-bold text-accent md:hidden">
                    {m.year}
                  </span>
                  <p className="mt-1 text-foreground md:mt-0">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
              Our Team
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Meet the People Behind SkyShield
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="rounded-2xl border border-border bg-background p-10 shadow-sm"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Certifications & Credentials
              </h2>
              <p className="mt-2 text-muted-foreground">
                We're proud to hold the industry's highest certifications.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                "GAF Master Elite Contractor",
                "Owens Corning Platinum Preferred",
                "Licensed & Fully Insured",
                "BBB A+ Rated Business",
              ].map((cert) => (
                <motion.div
                  key={cert}
                  variants={fadeInUp}
                  className="flex items-center gap-3 rounded-xl border border-border p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl px-6 text-center lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Join the SkyShield Family
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-muted-foreground"
          >
            Experience the difference that integrity, craftsmanship, and
            genuine care can make for your home.
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
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              (512) 555-1234
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
