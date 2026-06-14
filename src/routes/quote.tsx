import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, ArrowRight, Home, Phone, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Free Quote Calculator | SkyShield Roofing" },
      { name: "description", content: "Get an instant roofing estimate with our free online quote calculator. Residential and commercial roofing quotes in minutes." },
      { property: "og:title", content: "Free Quote Calculator | SkyShield Roofing" },
      { property: "og:description", content: "Get an instant roofing estimate with our online calculator." },
    ],
  }),
  component: QuotePage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const roofTypes = [
  { value: "asphalt", label: "Asphalt Shingles", basePrice: 4.5 },
  { value: "metal", label: "Metal Roofing", basePrice: 9.0 },
  { value: "tile", label: "Clay/Concrete Tile", basePrice: 12.0 },
  { value: "slate", label: "Slate", basePrice: 18.0 },
  { value: "flat", label: "Flat / Membrane", basePrice: 7.5 },
];

const storiesOptions = [
  { value: "1", label: "1 Story", multiplier: 1.0 },
  { value: "2", label: "2 Stories", multiplier: 1.15 },
  { value: "3", label: "3+ Stories", multiplier: 1.3 },
];

const conditionOptions = [
  { value: "new", label: "New Construction", multiplier: 1.0 },
  { value: "replace", label: "Full Replacement", multiplier: 1.1 },
  { value: "repair", label: "Partial Repair", multiplier: 0.4 },
];

function QuotePage() {
  const [roofType, setRoofType] = useState("asphalt");
  const [sqft, setSqft] = useState(2500);
  const [stories, setStories] = useState("1");
  const [condition, setCondition] = useState("replace");
  const [showResult, setShowResult] = useState(false);

  const selectedRoof = roofTypes.find((r) => r.value === roofType)!;
  const selectedStories = storiesOptions.find((s) => s.value === stories)!;
  const selectedCondition = conditionOptions.find((c) => c.value === condition)!;

  const lowEstimate = Math.round(
    sqft * selectedRoof.basePrice * 0.85 * selectedStories.multiplier * selectedCondition.multiplier
  );
  const highEstimate = Math.round(
    sqft * selectedRoof.basePrice * 1.15 * selectedStories.multiplier * selectedCondition.multiplier
  );

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-dark py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,var(--color-accent)_0%,transparent_50%)]" />
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
              Instant Estimate
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Free Roofing Quote Calculator
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-white/70"
            >
              Get a ballpark estimate for your roofing project in under 60
              seconds. For an exact quote, schedule a free on-site inspection.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Calculator className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Calculate Your Estimate
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >
              {/* Roof Type */}
              <motion.div variants={fadeInUp}>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Roof Material
                </label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {roofTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => {
                        setRoofType(type.value);
                        setShowResult(false);
                      }}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        roofType === type.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border bg-muted text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Square Footage */}
              <motion.div variants={fadeInUp}>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Approximate Square Footage: {" "}
                  <span className="text-accent">{sqft.toLocaleString()}</span>{" "}
                  sq ft
                </label>
                <input
                  type="range"
                  min={1000}
                  max={10000}
                  step={100}
                  value={sqft}
                  onChange={(e) => {
                    setSqft(Number(e.target.value));
                    setShowResult(false);
                  }}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-accent"
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>1,000 sq ft</span>
                  <span>10,000 sq ft</span>
                </div>
              </motion.div>

              {/* Stories */}
              <motion.div variants={fadeInUp}>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Number of Stories
                </label>
                <div className="flex flex-wrap gap-3">
                  {storiesOptions.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => {
                        setStories(s.value);
                        setShowResult(false);
                      }}
                      className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${
                        stories === s.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border bg-muted text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Condition */}
              <motion.div variants={fadeInUp}>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-3">
                  {conditionOptions.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => {
                        setCondition(c.value);
                        setShowResult(false);
                      }}
                      className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${
                        condition === c.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border bg-muted text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Calculate button */}
              <motion.div variants={fadeInUp}>
                <button
                  onClick={() => setShowResult(true)}
                  className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 sm:w-auto"
                >
                  Calculate Estimate
                </button>
              </motion.div>

              {/* Result */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-accent/20 bg-accent/5 p-6"
                >
                  <div className="flex items-center gap-2 text-accent">
                    <Home className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Estimated Range
                    </span>
                  </div>
                  <p className="mt-3 font-display text-4xl font-bold text-foreground">
                    {formatCurrency(lowEstimate)} — {formatCurrency(highEstimate)}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Based on {sqft.toLocaleString()} sq ft of{" "}
                    {selectedRoof.label.toLowerCase()} on a{" "}
                    {selectedStories.label.toLowerCase()} building. This is a
                    rough estimate — actual pricing depends on roof complexity,
                    accessibility, and local material costs.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                    >
                      Schedule Exact Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="tel:+15125551234"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 rounded-xl border border-border bg-background p-6"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  About This Estimate
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li>
                    • This calculator provides a rough range based on square
                    footage and material type.
                  </li>
                  <li>
                    • Actual costs vary based on roof pitch, accessibility,
                    existing layers, and local permitting.
                  </li>
                  <li>
                    • For an accurate, binding quote, we offer free on-site
                    inspections with no obligation.
                  </li>
                  <li>
                    • Financing options are available for qualified
                    homeowners.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
