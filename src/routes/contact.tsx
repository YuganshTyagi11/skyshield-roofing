import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | SkyShield Roofing" },
      { name: "description", content: "Contact SkyShield Roofing for a free estimate. Call, email, or fill out our form — we respond within 24 hours." },
      { property: "og:title", content: "Contact Us | SkyShield Roofing" },
      { property: "og:description", content: "Get in touch with SkyShield Roofing for your free estimate." },
    ],
  }),
  component: ContactPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  address: z.string().min(5, "Please enter your full address").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project in more detail").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-dark py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_60%_50%,var(--color-accent)_0%,transparent_50%)]" />
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
              Get In Touch
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Contact SkyShield Roofing
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-white/70"
            >
              Ready to start your project? Have questions? Fill out the form
              below or reach out directly — we respond to all inquiries within
              24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Our team is available Monday through Saturday to answer your
                  questions and schedule inspections.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="mt-8 space-y-5"
              >
                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+15125551234"
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      (512) 555-1234
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:info@skyshieldroofing.com"
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      info@skyshieldroofing.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Office
                    </p>
                    <p className="text-sm text-muted-foreground">
                      1234 Builder Blvd<br />Austin, TX 78701
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon–Fri: 7am – 6pm<br />Sat: 8am – 2pm
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-3"
            >
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-border bg-background p-8 shadow-lg sm:p-10"
              >
                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                      Thank You!
                    </h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">
                      Your message has been received. A member of our team will
                      reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Request a Free Estimate
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="John Smith"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@example.com"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Phone Number *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="(512) 555-1234"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Property Address *
                        </label>
                        <input
                          {...register("address")}
                          type="text"
                          placeholder="123 Main St, Austin, TX"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        />
                        {errors.address && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Service Needed *
                      </label>
                      <select
                        {...register("service")}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="">Select a service...</option>
                        <option value="residential">
                          Residential Roofing
                        </option>
                        <option value="commercial">
                          Commercial Roofing
                        </option>
                        <option value="repair">Roof Repair</option>
                        <option value="inspection">
                          Roof Inspection
                        </option>
                        <option value="gutter">Gutter Services</option>
                        <option value="storm">Storm Damage</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Project Details *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell us about your project, timeline, and any specific concerns..."
                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 disabled:opacity-60 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
