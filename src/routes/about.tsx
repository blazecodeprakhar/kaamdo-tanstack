import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck, IndianRupee, Zap, Star, HeartHandshake, Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About KaamDo - Kaam Sabko, Samman Sabko." },
      { name: "description", content: "KaamDo is India's first OTP-based on-demand workforce marketplace - built on the belief that every worker deserves dignity and every customer deserves reliability." },
      { property: "og:title", content: "About KaamDo" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: ShieldCheck, title: "Trusted Profiles" },
  { icon: IndianRupee, title: "Fair Prices & Transparent Deals" },
  { icon: Zap, title: "Easy. Fast. Reliable." },
  { icon: Star, title: "Ratings That Build Trust" },
  { icon: HeartHandshake, title: "Empowering Workers" },
  { icon: Sparkles, title: "Enriching Lives" },
];

function About() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">Our mission</div>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-navy sm:text-6xl">
            Kaam Sabko, <br /><span className="text-gradient-brand">Samman Sabko.</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            <em>Work for everyone. Respect for everyone.</em>
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-navy/90">
          <p>
            Today, most people find daily-wage workers through labour chowks, contractors, or word of mouth. There's no easy way to verify who's showing up, no visibility into arrival time, no proof of attendance, no clarity on pricing, and no digital payment trail. When something goes wrong - and it often does - nobody has anything to fall back on.
          </p>
          <p>
            <strong className="text-navy">KaamDo fixes this</strong> with a verified, transparent, technology-driven marketplace. Every worker is background-checked. Every booking has an OTP-based check-in. Every rupee is tracked. Every payment leaves a receipt.
          </p>
          <p>
            But the deeper mission goes beyond convenience. KaamDo exists so that the electrician, the mason, the helper, the domestic worker - the millions of people whose labour holds our homes and cities together - get treated with the dignity, safety, and predictability that their work deserves.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="What we stand for"
          title="One Platform. Countless Opportunities."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                <v.icon size={22} />
              </div>
              <div className="mt-4 font-display text-lg font-bold text-navy">{v.title}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-3xl bg-navy-gradient p-10 text-center text-white shadow-soft">
          <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
            Respect Every Worker. <br /><span className="text-orange-light">Build a Better India.</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
            Daily Work. Dignified Life. - this is why KaamDo exists.
          </p>
        </div>
      </Section>
    </>
  );
}
