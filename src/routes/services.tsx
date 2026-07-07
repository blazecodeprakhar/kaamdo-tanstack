import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services & Categories - KaamDo" },
      { name: "description", content: "Book verified electricians, plumbers, painters, carpenters, masons, helpers, movers and more - with transparent, upfront pricing." },
      { property: "og:title", content: "One Platform. Countless Opportunities. - KaamDo" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  const phase1 = categories.filter((c) => c.phase === 1);
  const phase2 = categories.filter((c) => c.phase === 2);
  return (
    <>
      <Section className="pb-8">
        <SectionHeader
          eyebrow="Our services"
          title="One Platform. Countless Opportunities."
          subtitle="KaamDo - Dignity in Every Work. Transparent day-rates or timer-based billing, always shown upfront."
        />

        {/* NOTE: prices below are indicative/sample ranges - adjust once real market rates are locked in */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.slug} className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-orange/40">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange transition group-hover:bg-brand-gradient group-hover:text-white">
                  <c.icon size={22} />
                </div>
                <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">Verified</span>
              </div>
              <div className="mt-4 font-display text-lg font-bold text-navy">
                {c.name}
                {c.hindi && <span className="ml-2 text-sm font-medium text-text-muted">{c.hindi}</span>}
              </div>
              <p className="mt-1 flex-1 text-sm text-text-muted">{c.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-bold text-orange">{c.priceRange}</div>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-1 rounded-full bg-navy px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-navy-light"
                >
                  Book Now <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Rollout roadmap */}
      <Section className="pt-4">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-orange">Growing every day</div>
            <h3 className="mt-1 font-display text-2xl font-extrabold text-navy">Our rollout - one phase at a time</h3>
            <p className="mt-1 text-sm text-text-muted">We're launching category by category to keep quality high everywhere.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-brand-gradient p-6 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-white/80">Phase 1 · Live</div>
              <div className="mt-2 font-display text-xl font-extrabold">On-Site & Labour Work</div>
              <ul className="mt-4 space-y-2 text-sm">
                {phase1.map((c) => (
                  <li key={c.slug} className="flex items-center gap-2">
                    <CheckCircle2 size={14} /> {c.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-bg-off p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-navy/60">Phase 2 · Coming next</div>
              <div className="mt-2 font-display text-xl font-extrabold text-navy">Skilled Home Services</div>
              <ul className="mt-4 space-y-2 text-sm text-navy">
                {phase2.map((c) => (
                  <li key={c.slug} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-orange" /> {c.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
