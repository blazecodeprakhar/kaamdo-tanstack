import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search, IndianRupee, ShieldCheck, Clock, ArrowRight, CheckCircle2,
  Star, Sparkles, MapPin, Zap, Wrench, Paintbrush, Hammer, HardHat, Users, Truck, Package, Warehouse,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { AppPreview } from "@/components/AppPreview";
import { categories } from "@/data/categories";
import { customerTestimonials, workerBubbles } from "@/data/testimonials";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "KaamDo - Find Verified Daily Wage Workers Near You | Kaam Sabko, Samman Sabko" },
      { property: "og:title", content: "KaamDo - Right People. Right Work. Better Tomorrow." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const trustRow = [
  { icon: Search, label: "Find Verified Workers" },
  { icon: IndianRupee, label: "Fair, Transparent Prices" },
  { icon: ShieldCheck, label: "Trusted & Reliable" },
  { icon: Clock, label: "On-Time Service" },
];

const steps = [
  { n: 1, title: "Select Work You Need", desc: "Pick a category - plumber, painter, mason, helper and more." },
  { n: 2, title: "Choose Verified Workers", desc: "Compare ratings, distance and price. All background-checked." },
  { n: 3, title: "Book at Best Price", desc: "Pick date, time, and number of workers. Price shown upfront." },
  { n: 4, title: "Work Done On Time", desc: "Worker arrives, enters OTP, timer starts. You stay in control." },
  { n: 5, title: "Pay & Rate", desc: "Pay via UPI, card or wallet. Rate your experience." },
];

const stats = [
  { title: "Verified & Background-Checked Workers", value: "100%" },
  { title: "Transparent Pricing - Always Shown Upfront", value: "0₹ hidden" },
  { title: "OTP-Verified Attendance on Every Job", value: "OTP✓" },
  { title: "Launching in", value: "Indore, MP" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top left, color-mix(in oklab, var(--orange) 18%, transparent), transparent 55%), radial-gradient(ellipse at bottom right, color-mix(in oklab, var(--navy) 12%, transparent), transparent 55%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
              <ShieldCheck size={14} /> Verified Workers · Background Checked
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-navy sm:text-6xl">
              Right People. <br />
              Right Work. <br />
              <span className="text-gradient-brand">Better Tomorrow.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-text-muted sm:text-lg">
              Find verified daily-wage and skilled workers near you - electricians, plumbers, painters, carpenters, masons, helpers and more. Fair prices. On-time service. Every single time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/demo" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-105">
                Book a Worker Now <ArrowRight size={16} />
              </Link>
              <Link to="/for-workers" className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
                Join as a Worker
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustRow.map((t) => (
                <div key={t.label} className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2.5 shadow-sm ring-1 ring-border/60 backdrop-blur">
                  <t.icon size={16} className="text-orange" />
                  <span className="text-xs font-semibold text-navy">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <AppPreview
              rows={[
                { icon: HardHat, title: "Mason (Rajmistri)", price: "₹700-₹1200/Day", rating: 4.6, meta: "2.3 km" },
                { icon: Paintbrush, title: "Painter", price: "₹600-₹1000/Day", rating: 4.5, meta: "1.8 km" },
                { icon: Wrench, title: "Plumber", price: "₹600-₹1100/Day", rating: 4.7, meta: "2.0 km" },
                { icon: Users, title: "Helper (Labour)", price: "₹500-₹800/Day", rating: 4.4, meta: "1.5 km" },
              ]}
            />
            <div className="absolute -left-4 bottom-8 hidden min-[480px]:flex items-center gap-2 max-w-[230px] rounded-2xl bg-white p-3 shadow-soft ring-1 ring-border animate-floaty-delayed">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-white">
                <Sparkles size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-navy truncate">Empowering Workers.</div>
                <div className="text-[11px] text-text-muted truncate">Empowering Lives.</div>
              </div>
              <CheckCircle2 size={16} className="ml-auto text-success shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <Section>
        <SectionHeader
          eyebrow="How it works"
          title="Simple Steps, Big Difference"
          subtitle="From tap to done - the KaamDo booking flow in five clear steps."
        />
        <div className="relative grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-white p-5 shadow-soft">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-white shadow-glow">
                {s.n}
              </div>
              <div className="text-sm font-bold text-navy">{s.title}</div>
              <div className="mt-1 text-xs text-text-muted">{s.desc}</div>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-orange md:block" size={20} />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CATEGORIES */}
      <Section className="bg-white/60">
        <SectionHeader
          eyebrow="Our categories"
          title="One Platform. Many Skills."
          subtitle="Stronger Homes. Stronger Communities."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.slice(0, 8).map((c) => (
            <Link
              key={c.slug}
              to="/services"
              className="group rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-orange/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange transition group-hover:bg-brand-gradient group-hover:text-white">
                <c.icon size={22} />
              </div>
              <div className="mt-4 text-sm font-bold text-navy">{c.name}</div>
              <div className="mt-1 text-xs text-text-muted">Starting {c.priceRange}</div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:underline">
            View All Categories <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* STATS BAND */}
      {/* TODO: replace with real launch metrics */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="font-display text-2xl font-extrabold text-orange-light">{s.value}</div>
              <div className="mt-2 text-sm text-white/80">{s.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Trust in action"
          title="Real People. Real Work. Real Trust."
          subtitle="From customers who found reliable help, and workers who found dignified work."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-navy">Customers</div>
            <div className="space-y-4">
              {customerTestimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                  <div className="flex items-center gap-1 text-star">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-star" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-navy">"{t.quote}"</p>
                  <div className="mt-3 text-xs font-semibold text-text-muted">{t.name} · {t.role}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-navy">Workers</div>
            <div className="space-y-3">
              {workerBubbles.map((b, i) => (
                <div key={i} className={`max-w-[85%] ${i % 2 === 0 ? "" : "ml-auto"}`}>
                  <div className={`rounded-2xl p-4 shadow-soft ${i % 2 === 0 ? "bg-white text-navy" : "bg-brand-gradient text-white"}`}>
                    <div className="text-sm font-semibold">{b.hindi}</div>
                    <div className={`mt-1 text-xs ${i % 2 === 0 ? "text-text-muted" : "text-white/80"}`}>{b.english}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* DUAL CTA */}
      <Section>
        <div className="overflow-hidden rounded-3xl bg-navy-gradient p-2 shadow-soft">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
              <MapPin size={20} className="text-orange" />
              <h3 className="mt-3 font-display text-2xl font-extrabold">Need work done at home or on-site?</h3>
              <p className="mt-2 text-sm text-white/80">Verified workers arrive on time. Pay only for what's done.</p>
              <Link to="/demo" className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow">
                Book a Worker <ArrowRight size={14} />
              </Link>
            </div>
            <div className="rounded-3xl bg-brand-gradient p-8 text-white sm:p-10">
              <ShieldCheck size={20} />
              <h3 className="mt-3 font-display text-2xl font-extrabold">Looking for daily work near you?</h3>
              <p className="mt-2 text-sm text-white/90">Register once. Get verified. Start earning with dignity.</p>
              <Link to="/for-workers" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy">
                Join as a Worker <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center font-display text-xl font-extrabold text-navy">
          KaamDo - <span className="text-orange">Har Haath Ko Kaam, Har Kaam Ko Samman.</span>
        </div>
      </Section>
    </>
  );
}
