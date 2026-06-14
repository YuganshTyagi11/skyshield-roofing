import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Wrench,
  Search,
  Droplets,
  Shield,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | SkyShield Roofing" },
      { name: "description", content: "Comprehensive roofing services including residential, commercial, repairs, inspections, gutters, and storm damage restoration." },
      { property: "og:title", content: "Our Services | SkyShield Roofing" },
      { property: "og:description", content: "Comprehensive roofing services for homes and businesses across Central Texas." },
    ],
  }),
  component: ServicesPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    description:
      "Complete roof installations and replacements tailored to your home's architecture. We work with asphalt shingles, metal roofing, slate, tile, and wood shakes to match your style and budget.",
    features: [
      "Asphalt shingle installation",
      "Metal roofing systems",
      "Slate & tile roofing",
      "Wood shake repairs",
      "Full roof replacements",
      "New construction roofing",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description:
      "Durable, energy-efficient roofing systems for offices, warehouses, retail spaces, and industrial facilities. We specialize in flat and low-slope roof solutions designed for longevity.",
    features: [
      "TPO & EPDM membrane roofs",
      "Modified bitumen systems",
      "Standing seam metal roofs",
      "Roof coating & restoration",
      "Scheduled maintenance plans",
      "Energy-efficient solutions",
    ],
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    description:
      "Fast, reliable repairs to extend the life of your roof. From minor leaks to significant damage, our technicians diagnose issues quickly and fix them right the first time.",
    features: [
      "Leak detection & repair",
      "Shingle replacement",
      "Flashing repairs",
      "Skylight sealing",
      "Vent pipe repairs",
      "Chimney cricket installation",
    ],
  },
  {
    icon: Search,
    title: "Roof Inspections",
    description:
      "Comprehensive roof assessments with detailed digital reports. Perfect for pre-purchase evaluations, insurance claims, warranty checks, or annual maintenance planning.",
    features: [
      "Drone aerial surveys",
      "Insurance claim documentation",
      "Pre-purchase home inspections",
      "Annual maintenance reports",
      "Storm damage assessments",
      "Infrared moisture detection",
    ],
  },
  {
    icon: Droplets,
    title: "Gutter Services",
    description:
      "Protect your foundation and landscaping with professionally installed seamless gutters, guards, and drainage systems. We also handle cleaning, repair, and replacement.",
    features: [
      "Seamless gutter installation",
      "Gutter guard systems",
      "Downspout repair & relocation",
      "Rain barrel integration",
      "French drain solutions",
      "Annual cleaning contracts",
    ],
  },
  {
    icon: Shield,
    title: "Storm Damage Restoration",
    description:
      "When severe weather strikes, our emergency response team acts fast to prevent further damage. We handle everything from emergency tarping to full restoration and insurance coordination.",
    features: [
      "24/7 emergency tarping",
      "Hail damage restoration",
      "Wind damage repair",
      "Insurance claim assistance",
      "Tree removal coordination",
      "Complete rebuild services",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Schedule a no-obligation inspection. We'll assess your roof and discuss your needs and budget.",
  },
  {
    step: "02",
    title: "Detailed Estimate",
    description:
      "Receive a transparent, itemized quote with material options, timeline, and warranty details.",
  },
  {
    step: "03",
    title: "Expert Installation",
    description:
      "Our certified crew completes the work on schedule with daily cleanup and progress updates.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "We inspect every detail together, ensure your satisfaction, and register your warranty coverage.",
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-dark py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_70%_50%,var(--color-accent)_0%,transparent_50%)]" />
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
              What We Do
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Comprehensive Roofing Services
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-white/70"
            >
              From routine maintenance to complete roof replacements, our certified
              team delivers exceptional results for homes and businesses across
              Central Texas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="rounded-2xl border border-border bg-background p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
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
              Our Process
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              A simple, transparent process from first call to final walkthrough.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative text-center"
              >
                <span className="font-display text-5xl font-bold text-accent/20">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
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
            Not Sure What You Need?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-muted-foreground"
          >
            Our experts will assess your roof and recommend the right solution
            for your budget and timeline — completely free.
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
              Call Us Now
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
