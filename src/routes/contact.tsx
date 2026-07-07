import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Download App - KaamDo" },
      { name: "description", content: "Get in touch with KaamDo or download the app when it launches - coming soon on Google Play and the App Store." },
      { property: "og:title", content: "Contact KaamDo" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // BACKEND TODO: send to contact/support API
    setTimeout(() => {
      toast.success("Thanks! We'll get back to you within 24 hours.");
      setForm({ name: "", contact: "", message: "" });
    }, 600);
  }

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Contact"
          title="We'd love to hear from you"
          subtitle="Questions, partnerships, or feedback - drop us a note."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Your Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm outline-none focus:border-orange" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Email or Phone</label>
              <input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="w-full rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm outline-none focus:border-orange" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Message</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm outline-none focus:border-orange" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow">
              Send Message <Send size={14} />
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold text-navy">Reach us directly</h3>
              <div className="mt-4 space-y-3 text-sm text-navy">
                <div className="flex items-center gap-3"><Mail size={16} className="text-orange" /> hello@kaamdo.in</div>
                <div className="flex items-center gap-3"><Phone size={16} className="text-orange" /> +91 98••• •••••</div>
                <div className="flex items-center gap-3"><MapPin size={16} className="text-orange" /> Indore, Madhya Pradesh</div>
              </div>
            </div>

            <div className="rounded-3xl bg-navy-gradient p-6 text-white shadow-soft">
              <h3 className="font-display text-lg font-bold">Get the App</h3>
              <p className="mt-1 text-xs text-white/70">Launching soon in Indore. Sign up for early access.</p>
              <div className="mt-4 space-y-2">
                <button disabled className="w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-left opacity-80">
                  <div className="text-[10px] uppercase tracking-wider text-white/60">Coming Soon</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </button>
                <button disabled className="w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-left opacity-80">
                  <div className="text-[10px] uppercase tracking-wider text-white/60">Coming Soon</div>
                  <div className="text-sm font-semibold">App Store</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
