import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { faqs } from "@/data/faq";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({
    meta: [
      { title: "FAQ - KaamDo" },
      { name: "description", content: "Answers to the most common questions about KaamDo - verification, OTP check-in, pricing, payments and more." },
      { property: "og:title", content: "KaamDo FAQ" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeader
        eyebrow="Frequently asked"
        title="Everything you might want to know"
        subtitle="Still curious? Reach us on the Contact page - we reply within a day."
      />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-bold text-navy sm:text-base">{f.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-orange transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="border-t border-border bg-bg-off px-5 py-4 text-sm text-text-muted">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
