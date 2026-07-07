import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  Search, IndianRupee, Clock, Handshake, Upload, CheckCircle2,
  Wallet, TrendingUp, Package, HardHat, Paintbrush, Users, Truck,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, ResponsiveContainer, Tooltip,
} from "recharts";
import { Section, SectionHeader } from "@/components/Section";
import { AppPreview } from "@/components/AppPreview";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/for-workers")({
  component: ForWorkers,
  head: () => ({
    meta: [
      { title: "Join as a Worker - Daily Work. Dignified Life. | KaamDo" },
      { name: "description", content: "Register on KaamDo to find daily and skilled work near you. Fair pricing, on-time digital payments, and respect on every job." },
      { property: "og:title", content: "Join as a Worker - KaamDo" },
      { property: "og:url", content: "/for-workers" },
    ],
    links: [{ rel: "canonical", href: "/for-workers" }],
  }),
});

const benefits = [
  { icon: Search, title: "Easy to Find Jobs", desc: "See nearby work matching your skills." },
  { icon: IndianRupee, title: "Fair Pricing", desc: "Rates set clearly, agreed upfront." },
  { icon: Clock, title: "Payments on Time", desc: "Digital payouts - no chasing money." },
  { icon: Handshake, title: "Respect & Dignity", desc: "Two-sided ratings. Zero-tolerance for disrespect." },
];

const earningsData = [
  { day: "Mon", amt: 550 }, { day: "Tue", amt: 720 }, { day: "Wed", amt: 0 },
  { day: "Thu", amt: 900 }, { day: "Fri", amt: 650 }, { day: "Sat", amt: 800 }, { day: "Sun", amt: 630 },
];

function ForWorkers() {
  const [online, setOnline] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", mobile: "", aadhaar: "", account: "", ifsc: "", skill: categories[0].slug, selfie: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // BACKEND TODO: submit registration + KYC docs to verification API
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Thanks! Your application is under review - our team will verify your details shortly.");
    }, 700);
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top right, color-mix(in oklab, var(--orange) 18%, transparent), transparent 55%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
              KaamDo · For Workers
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              Daily Work. Dignified Life. <br /><span className="text-gradient-brand">KaamDo Ke Saath.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-text-muted">
              Find Work. Earn Fair. Grow Together. Get verified once and start receiving nearby job requests directly to your phone.
            </p>
            <a href="#register" className="mt-6 inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow">
              Register Now - It's Free
            </a>
          </div>

          <AppPreview
            variant="worker"
            searchPlaceholder="Search for work..."
            sectionTitle="Popular Jobs"
            rows={[
              { icon: Truck, title: "Loading / Unloading", price: "₹500-₹700/Day", meta: "2.4 km · Indore" },
              { icon: HardHat, title: "Mason (Rajmistri)", price: "₹700-₹1200/Day", meta: "3.1 km · Indore" },
              { icon: Paintbrush, title: "Painter", price: "₹600-₹1000/Day", meta: "2.7 km · Indore" },
              { icon: Users, title: "House Help", price: "₹350-₹600/Day", meta: "1.8 km · Indore" },
            ]}
          />
        </div>
      </section>

      {/* BENEFITS */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange">
                <b.icon size={22} />
              </div>
              <div className="mt-4 font-display text-lg font-bold text-navy">{b.title}</div>
              <p className="mt-1 text-sm text-text-muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AVAILABILITY TOGGLE */}
      <Section className="pt-4">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">Availability</div>
              <div className="mt-1 text-base font-bold text-navy">
                {online ? "You're Online - nearby jobs will be sent to you" : "You're Offline - go online to receive job requests"}
              </div>
            </div>
            <button
              onClick={() => setOnline((v) => !v)}
              aria-label="Toggle availability"
              className={`relative h-8 w-14 shrink-0 rounded-full transition ${online ? "bg-success" : "bg-navy/20"}`}
            >
              <span className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all ${online ? "left-7" : "left-1"}`} />
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
            <span className={`inline-block h-2 w-2 rounded-full ${online ? "animate-pulse-dot bg-success" : "bg-text-muted/40"}`} />
            {online ? "Live · pinging jobs in your area" : "Paused"}
          </div>
        </div>
      </Section>

      {/* REGISTRATION */}
      <Section id="register" className="pt-4">
        <SectionHeader
          eyebrow="Sign up"
          title="Register as a KaamDo Worker"
          subtitle="Fill in your details once. Our team verifies your KYC in 24-48 hours."
        />

        {submitted ? (
          <div className="mx-auto max-w-2xl rounded-3xl border border-success/30 bg-success/5 p-10 text-center">
            <CheckCircle2 size={48} className="mx-auto text-success" />
            <h3 className="mt-4 font-display text-2xl font-extrabold text-navy">Application received</h3>
            <p className="mt-2 text-sm text-text-muted">
              Thanks, {form.name || "friend"}! Our team will verify your details and activate your KaamDo profile shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", mobile: "", aadhaar: "", account: "", ifsc: "", skill: categories[0].slug, selfie: "" }); }}
              className="mt-6 rounded-full border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy"
            >
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto grid max-w-3xl gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8 sm:grid-cols-2">
            <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Ramesh Kumar" required />
            <Field label="Mobile Number" value={form.mobile} onChange={(v) => setForm({ ...form, mobile: v })} placeholder="+91 98••• •••••" required />
            <Field label="Aadhaar Number" value={form.aadhaar} onChange={(v) => setForm({ ...form, aadhaar: v })} placeholder="XXXX XXXX XXXX" required />
            <div className="flex flex-col">
              <label className="mb-1.5 text-xs font-semibold text-navy">Skill Category</label>
              <select
                required
                value={form.skill}
                onChange={(e) => setForm({ ...form, skill: e.target.value })}
                className="rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm text-navy outline-none focus:border-orange"
              >
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
            <Field label="Bank Account Number" value={form.account} onChange={(v) => setForm({ ...form, account: v })} placeholder="Account number" required />
            <Field label="IFSC Code" value={form.ifsc} onChange={(v) => setForm({ ...form, ifsc: v })} placeholder="SBIN0001234" required />

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-navy">Selfie Upload (for KYC)</label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-bg-off px-4 py-6 text-sm text-text-muted hover:border-orange hover:text-orange">
                <Upload size={16} />
                {form.selfie ? form.selfie : "Click to upload a clear selfie"}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => setForm({ ...form, selfie: e.target.files?.[0]?.name || "" })} />
              </label>
            </div>

            <button type="submit" className="sm:col-span-2 mt-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow">
              Submit Application
            </button>
          </form>
        )}
      </Section>

      {/* EARNINGS PREVIEW */}
      <Section className="pt-4">
        <SectionHeader
          eyebrow="Your dashboard"
          title="Earnings preview"
          subtitle="Preview - your real dashboard appears once you're verified and start accepting jobs."
          center={false}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { icon: CheckCircle2, label: "Completed Jobs", value: "24", tint: "text-success" },
            { icon: Wallet, label: "This Week's Earnings", value: "₹4,250", tint: "text-orange" },
            { icon: TrendingUp, label: "Pending Payout", value: "₹850", tint: "text-navy" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <s.icon size={20} className={s.tint} />
              <div className="mt-3 font-display text-3xl font-extrabold text-navy">{s.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-navy">Last 7 days · Earnings</div>
              <div className="text-xs text-text-muted">Demo data · not linked to any account</div>
            </div>
            <Package size={18} className="text-orange" />
          </div>
          <div className="h-52 w-full">
            <ResponsiveContainer>
              <BarChart data={earningsData}>
                <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip cursor={{ fill: "rgba(245,129,31,0.08)" }} formatter={(v) => `₹${v}`} />
                <Bar dataKey="amt" fill="var(--orange)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, value, onChange, placeholder, required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1.5 text-xs font-semibold text-navy">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm text-navy outline-none focus:border-orange"
      />
    </div>
  );
}
