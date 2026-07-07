import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search, UserCheck, CalendarCheck, Clock, CreditCard,
  UserPlus, MapPin, CheckSquare, Hammer, Star,
  ShieldCheck, KeyRound, Timer, Wallet, ArrowRight,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How It Works - KaamDo" },
      { name: "description", content: "See how KaamDo works for customers and workers - verified profiles, OTP-based check-in, timer billing and digital payments." },
      { property: "og:title", content: "How It Works - KaamDo" },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
});

const customerSteps = [
  { icon: Search, title: "Select Work You Need", desc: "Choose from 10+ verified worker categories." },
  { icon: UserCheck, title: "Choose from Verified Workers", desc: "Compare ratings, distance, price - pick who's right." },
  { icon: CalendarCheck, title: "Book at Best Price", desc: "Set date, time and count. Price shown before you book." },
  { icon: Clock, title: "Work Done On Time", desc: "Worker arrives, enters your OTP, and gets to work." },
  { icon: CreditCard, title: "Pay & Rate", desc: "Pay via UPI, card or wallet. Rate your experience." },
];

const workerSteps = [
  { icon: UserPlus, title: "Register in KaamDo", desc: "Submit Aadhaar, selfie and bank details." },
  { icon: MapPin, title: "Find Work Near You", desc: "See jobs in your area matching your skills." },
  { icon: CheckSquare, title: "Choose & Accept Job", desc: "Review the customer, price, and location." },
  { icon: Hammer, title: "Complete the Work", desc: "Enter the customer's OTP on arrival. Timer starts." },
  { icon: Star, title: "Get Paid & Rated", desc: "Instant digital payout. Build your rating and reputation." },
];

const trustBits = [
  { icon: ShieldCheck, title: "Verified Profiles", desc: "Every worker is background-checked before going live on KaamDo." },
  { icon: KeyRound, title: "OTP Check-In", desc: "You share a one-time code; the worker enters it on arrival - verified attendance." },
  { icon: Timer, title: "Transparent Timer Billing", desc: "Hours worked and any overtime tracked live and shown clearly before payment." },
  { icon: Wallet, title: "Digital Payments", desc: "UPI, cards or wallet - with a paper trail for both sides." },
];

function Journey({
  eyebrow,
  title,
  subtitle,
  steps,
  ctaLabel,
  ctaTo,
  accent,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: typeof customerSteps;
  ctaLabel: string;
  ctaTo: string;
  accent: "orange" | "navy";
}) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-10">
      <div className="mb-8 max-w-2xl">
        <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${accent === "orange" ? "bg-orange/10 text-orange" : "bg-navy/10 text-navy"}`}>{eyebrow}</div>
        <h3 className="mt-3 font-display text-3xl font-extrabold text-navy">{title}</h3>
        <p className="mt-2 text-sm text-text-muted">{subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <div key={i} className="relative rounded-2xl border border-border bg-bg-off p-5">
            <div className={`mb-3 grid h-10 w-10 place-items-center rounded-full font-display text-sm font-extrabold text-white ${accent === "orange" ? "bg-brand-gradient" : "bg-navy-gradient"}`}>
              {i + 1}
            </div>
            <s.icon size={18} className={accent === "orange" ? "text-orange" : "text-navy"} />
            <div className="mt-2 text-sm font-bold text-navy">{s.title}</div>
            <div className="mt-1 text-xs text-text-muted">{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to={ctaTo} className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-glow ${accent === "orange" ? "bg-brand-gradient" : "bg-navy"}`}>
          {ctaLabel} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="How KaamDo works"
          title="Two journeys. One promise."
          subtitle="Whether you're booking help or looking for work - the KaamDo flow is clear, fast, and fair."
        />
        <div className="space-y-8">
          <Journey
            eyebrow="For Customers"
            title="Find. Book. Get it Done."
            subtitle="Reliable workers, at your doorstep, in five simple steps."
            steps={customerSteps}
            ctaLabel="Book a Worker Now"
            ctaTo="/demo"
            accent="orange"
          />
          <Journey
            eyebrow="For Workers"
            title="Register. Work. Earn. Grow."
            subtitle="Steady, nearby work - with fair pay and dignity."
            steps={workerSteps}
            ctaLabel="Join as a Worker"
            ctaTo="/for-workers"
            accent="navy"
          />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Behind every booking"
          title="What makes KaamDo safe and fair"
          subtitle="Simple mechanics that quietly remove all the uncertainty out of hiring."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustBits.map((t) => (
            <div key={t.title} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                <t.icon size={22} />
              </div>
              <div className="mt-4 font-display text-lg font-bold text-navy">{t.title}</div>
              <p className="mt-1 text-sm text-text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
