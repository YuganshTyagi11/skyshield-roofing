import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Gallery | SkyShield Roofing" },
      { name: "description", content: "Browse our portfolio of residential and commercial roofing projects across Central Texas." },
      { property: "og:title", content: "Project Gallery | SkyShield Roofing" },
      { property: "og:description", content: "Browse our portfolio of completed roofing projects." },
    ],
  }),
  component: ProjectsPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const categories = ["All", "Residential", "Commercial", "Repairs"];

const projects = [
  {
    image: project1,
    title: "Modern Farmhouse",
    category: "Residential",
    location: "Cedar Park, TX",
    year: "2024",
    description: "Complete copper metal roof installation on a 4,200 sq ft modern farmhouse.",
  },
  {
    image: project2,
    title: "Commerce Center",
    category: "Commercial",
    location: "Austin, TX",
    year: "2024",
    description: "TPO flat membrane roofing system for a 45,000 sq ft commercial complex.",
  },
  {
    image: project3,
    title: "Victorian Restoration",
    category: "Residential",
    location: "Georgetown, TX",
    year: "2023",
    description: "Full slate roof restoration on a historic 1890s Victorian home.",
  },
  {
    image: project4,
    title: "Asphalt Replacement",
    category: "Residential",
    location: "Round Rock, TX",
    year: "2024",
    description: "Premium architectural shingle replacement with upgraded ventilation.",
  },
  {
    image: project5,
    title: "Mediterranean Villa",
    category: "Residential",
    location: "Westlake, TX",
    year: "2023",
    description: "Custom terracotta tile roof with copper flashing and rain gutters.",
  },
  {
    image: project6,
    title: "Industrial Warehouse",
    category: "Commercial",
    location: "Pflugerville, TX",
    year: "2024",
    description: "Standing seam metal roof installation with energy-efficient coatings.",
  },
];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-dark py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_50%,var(--color-accent)_0%,transparent_50%)]" />
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
              Portfolio
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Project Gallery
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-white/70"
            >
              Browse our portfolio of completed residential and commercial
              roofing projects. Each one represents our commitment to quality
              and craftsmanship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeInUp}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
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
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center text-muted-foreground">
              No projects in this category yet.
            </div>
          )}
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
            Want Your Project Here?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-muted-foreground"
          >
            Let's discuss your roofing needs and add your home or business to
            our growing portfolio of satisfied clients.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
