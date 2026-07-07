import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircle2, ChevronRight, MapPin, Star, ShieldCheck, KeyRound, Timer, Wallet,
  CreditCard, Smartphone, ArrowLeft, RotateCcw, Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { categories, type Category } from "@/data/categories";
import { workers, type Worker } from "@/data/workers";

export const Route = createFileRoute("/demo")({
  component: Demo,
  head: () => ({
    meta: [
      { title: "Live Demo - KaamDo OTP-Based Booking Flow" },
      { name: "description", content: "Walk through KaamDo's full OTP-based booking flow - from picking a category to timer billing and digital payment. No real bookings are made." },
      { property: "og:title", content: "KaamDo - Live Interactive Demo" },
      { property: "og:url", content: "/demo" },
    ],
    links: [{ rel: "canonical", href: "/demo" }],
  }),
});

type Step = 1 | 2 | 3 | 4 | 5 | 6;
const STEP_TITLES = ["Select Work", "Booking Details", "Choose Worker", "Confirm & OTP", "Work in Progress", "Payment & Rating"] as const;

function Demo() {
  const [step, setStep] = useState<Step>(1);
  const [category, setCategory] = useState<Category | null>(null);
  const [details, setDetails] = useState({ count: 1, date: "", time: "", desc: "" });
  const [worker, setWorker] = useState<Worker | null>(null);
  const [otp, setOtp] = useState<string>("");
  const [otpInput, setOtpInput] = useState<string[]>(["", "", "", ""]);
  const [eta, setEta] = useState(12);
  const [arrived, setArrived] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);
  const [pay, setPay] = useState<"upi" | "card" | "wallet" | null>(null);
  const [paid, setPaid] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingSent, setRatingSent] = useState(false);

  // Countdown ETA
  useEffect(() => {
    if (step !== 4 || arrived) return;
    const id = setInterval(() => setEta((v) => (v > 1 ? v - 1 : v)), 1500);
    return () => clearInterval(id);
  }, [step, arrived]);

  // Timer
  useEffect(() => {
    if (step !== 5 || done) return;
    const id = setInterval(() => setElapsed((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, [step, done]);

  function reset() {
    setStep(1); setCategory(null); setDetails({ count: 1, date: "", time: "", desc: "" });
    setWorker(null); setOtp(""); setOtpInput(["", "", "", ""]); setEta(12); setArrived(false);
    setElapsed(0); setDone(false); setPay(null); setPaid(false); setRating(0); setRatingSent(false);
  }

  function goNextFromDetails() {
    if (!details.date || !details.time) {
      toast.error("Please pick a date and time.");
      return;
    }
    setStep(3);
  }

  function pickWorker(w: Worker) {
    setWorker(w);
    // BACKEND TODO: create booking, generate/send real OTP via SMS provider
    const generated = String(Math.floor(1000 + Math.random() * 9000));
    setOtp(generated);
    setStep(4);
  }

  const otpValue = otpInput.join("");
  const otpMatches = otpValue.length === 4 && otpValue === otp;

  function confirmArrival() {
    if (!otpMatches) {
      toast.error("Incorrect OTP. Please match the code shown above.");
      return;
    }
    setArrived(true);
    setStep(5);
    toast.success("Worker verified. Timer started.");
  }

  const filteredWorkers = useMemo(
    () => (category ? workers.filter((w) => w.categorySlug === category.slug).slice(0, 4) : []),
    [category],
  );

  const ratePerMin = worker ? Math.round(worker.pricePerDay / 480) : 0; // day = 8h
  const runningCharge = worker ? Math.max(worker.pricePerDay / 8, Math.round((elapsed / 60) * ratePerMin)) : 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
        <Sparkles size={14} /> Live interactive demo - no real bookings are made
      </div>
      <h1 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Try the KaamDo booking flow</h1>
      <p className="mt-2 text-sm text-text-muted">Six quick steps - the same flow every customer will use in the app.</p>

      {/* Stepper */}
      <div className="mt-8 overflow-x-auto">
        <div className="flex min-w-[600px] items-center gap-2 sm:min-w-0">
          {STEP_TITLES.map((t, i) => {
            const n = (i + 1) as Step;
            const active = step === n;
            const complete = step > n;
            return (
              <div key={t} className="flex flex-1 items-center gap-2">
                <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold ${complete ? "bg-success text-white" : active ? "bg-brand-gradient text-white shadow-glow" : "bg-secondary text-text-muted"}`}>
                  {complete ? <CheckCircle2 size={16} /> : n}
                </div>
                <div className={`text-xs font-semibold ${active ? "text-navy" : complete ? "text-navy/70" : "text-text-muted"}`}>{t}</div>
                {i < STEP_TITLES.length - 1 && <div className={`h-0.5 flex-1 ${complete ? "bg-success" : "bg-border"}`} />}
              </div>
            );
          })}
        </div>
        <div className="mt-2 text-xs text-text-muted">Step {step} of 6</div>
      </div>

      {/* Panel */}
      <div className="mt-6 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
        {step === 1 && (
          <>
            <h2 className="font-display text-xl font-bold text-navy">Select the work you need</h2>
            <p className="mt-1 text-sm text-text-muted">Pick a category to see verified workers near you.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {categories.map((c) => {
                const active = category?.slug === c.slug;
                return (
                  <button
                    key={c.slug}
                    onClick={() => setCategory(c)}
                    className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition ${active ? "border-orange bg-orange/10" : "border-border bg-bg-off hover:border-orange/40"}`}
                  >
                    <div className={`grid h-11 w-11 place-items-center rounded-xl ${active ? "bg-brand-gradient text-white" : "bg-white text-orange"}`}>
                      <c.icon size={20} />
                    </div>
                    <div className="text-xs font-bold text-navy">{c.name}</div>
                    <div className="text-[10px] text-text-muted">{c.priceRange}</div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                disabled={!category}
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow disabled:opacity-40"
              >
                Continue <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 2 && category && (
          <>
            <h2 className="font-display text-xl font-bold text-navy">Booking details - {category.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-navy">Number of Workers</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setDetails({ ...details, count: Math.max(1, details.count - 1) })} className="grid h-10 w-10 place-items-center rounded-full border-2 border-navy text-navy">−</button>
                  <div className="w-10 text-center font-display text-2xl font-extrabold text-navy">{details.count}</div>
                  <button onClick={() => setDetails({ ...details, count: Math.min(10, details.count + 1) })} className="grid h-10 w-10 place-items-center rounded-full border-2 border-navy text-navy">+</button>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-navy">Date</label>
                <input type="date" value={details.date} onChange={(e) => setDetails({ ...details, date: e.target.value })} className="w-full rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm outline-none focus:border-orange" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-navy">Time</label>
                <input type="time" value={details.time} onChange={(e) => setDetails({ ...details, time: e.target.value })} className="w-full rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm outline-none focus:border-orange" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold text-navy">Work Description</label>
                <textarea rows={3} placeholder="Briefly describe the work (e.g., replace 3 ceiling fans)…" value={details.desc} onChange={(e) => setDetails({ ...details, desc: e.target.value })} className="w-full rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm outline-none focus:border-orange" />
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy"><ArrowLeft size={14} /> Back</button>
              <button onClick={goNextFromDetails} className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow">
                Find Workers <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 3 && category && (
          <>
            <h2 className="font-display text-xl font-bold text-navy">Choose a {category.name}</h2>
            <p className="mt-1 text-sm text-text-muted">{filteredWorkers.length} verified worker{filteredWorkers.length === 1 ? "" : "s"} near you.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {filteredWorkers.map((w) => (
                <div key={w.id} className="flex items-start gap-4 rounded-2xl border border-border bg-bg-off p-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-white">
                    {w.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="truncate font-bold text-navy">{w.name}</div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                        <ShieldCheck size={10} /> Verified
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-text-muted">
                      <span className="inline-flex items-center gap-0.5 text-star"><Star size={12} className="fill-star" /> <span className="font-semibold text-navy">{w.rating}</span></span>
                      · <MapPin size={11} /> {w.distanceKm} km · {w.yearsExp} yrs exp · {w.jobsDone} jobs
                    </div>
                    <div className="mt-2 text-sm font-bold text-orange">₹{w.pricePerDay}/day</div>
                    <button onClick={() => pickWorker(w)} className="mt-3 w-full rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-light">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy"><ArrowLeft size={14} /> Back</button>
            </div>
          </>
        )}

        {step === 4 && worker && category && (
          <>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 size={20} /> <span className="font-bold">Booking Confirmed</span>
            </div>
            <h2 className="mt-2 font-display text-xl font-bold text-navy">{worker.name} is on the way</h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-bg-off p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">Booking summary</div>
                <div className="mt-3 space-y-2 text-sm">
                  <Row label="Worker" value={worker.name} />
                  <Row label="Category" value={category.name} />
                  <Row label="Date & Time" value={`${details.date} · ${details.time}`} />
                  <Row label="Count" value={`${details.count} worker(s)`} />
                  <Row label="Est. Price" value={`₹${worker.pricePerDay * details.count}/day`} />
                </div>

                <div className="mt-6 rounded-xl bg-navy p-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <KeyRound size={14} /> Share this OTP with your worker on arrival
                  </div>
                  <div className="mt-2 flex gap-2">
                    {otp.split("").map((d, i) => (
                      <div key={i} className="grid h-12 w-12 place-items-center rounded-lg bg-white font-display text-2xl font-extrabold text-navy">{d}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-bg-off p-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">Live Tracking</div>
                  <div className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">ETA: {eta} min</div>
                </div>
                <MapPreview />
                <button
                  onClick={() => setStep(5)}
                  className="mt-4 w-full rounded-full bg-brand-gradient px-4 py-3 text-sm font-semibold text-white shadow-glow"
                >
                  Worker Has Arrived → Enter OTP
                </button>
              </div>
            </div>
          </>
        )}

        {step === 5 && worker && (
          <>
            <h2 className="font-display text-xl font-bold text-navy">
              {arrived ? "Work in progress" : "Verify arrival with OTP"}
            </h2>

            {!arrived ? (
              <>
                <p className="mt-1 text-sm text-text-muted">Ask {worker.name} to share the OTP you gave. Enter it below to start the timer.</p>
                <div className="mt-6 flex justify-center gap-3">
                  {otpInput.map((v, i) => (
                    <OtpBox
                      key={i}
                      value={v}
                      onChange={(nv) => {
                        const copy = [...otpInput];
                        copy[i] = nv.slice(-1);
                        setOtpInput(copy);
                      }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-center text-xs text-text-muted">Hint (demo only): <span className="font-mono font-bold text-navy">{otp}</span></p>
                <div className="mt-6 flex justify-center">
                  <button onClick={confirmArrival} disabled={otpValue.length !== 4} className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow disabled:opacity-40">
                    Verify & Start Timer
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-bg-off p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                      <Timer size={14} /> Time Elapsed
                    </div>
                    <div className="mt-2 font-display text-4xl font-extrabold text-navy tabular-nums">
                      {formatTime(elapsed)}
                    </div>
                    <div className="mt-1 text-xs text-text-muted">Rate: ₹{ratePerMin}/min (₹{worker.pricePerDay}/day equivalent)</div>
                  </div>
                  <div className="rounded-2xl bg-brand-gradient p-5 text-white">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/80">Running Charge</div>
                    <div className="mt-2 font-display text-4xl font-extrabold tabular-nums">
                      ₹{Math.round(runningCharge).toLocaleString("en-IN")}
                    </div>
                    <div className="mt-1 text-xs text-white/80">Minimum charge = ½ day. Overtime shown live.</div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button onClick={() => { setDone(true); setStep(6); }} className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
                    Mark Work as Complete
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {step === 6 && worker && (
          <>
            <h2 className="font-display text-xl font-bold text-navy">Payment & rating</h2>
            {!paid ? (
              <>
                <p className="mt-1 text-sm text-text-muted">Choose how you'd like to pay ₹{Math.round(runningCharge).toLocaleString("en-IN")}.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <PayOption id="upi" label="UPI" icon={Smartphone} active={pay === "upi"} onClick={() => setPay("upi")} />
                  <PayOption id="card" label="Debit / Credit" icon={CreditCard} active={pay === "card"} onClick={() => setPay("card")} />
                  <PayOption id="wallet" label="KaamDo Wallet" icon={Wallet} active={pay === "wallet"} onClick={() => setPay("wallet")} />
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    disabled={!pay}
                    onClick={() => {
                      // BACKEND TODO: charge via real payment gateway (Razorpay/Cashfree/UPI)
                      setTimeout(() => { setPaid(true); toast.success("Payment successful"); }, 700);
                    }}
                    className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow disabled:opacity-40"
                  >
                    Pay ₹{Math.round(runningCharge).toLocaleString("en-IN")}
                  </button>
                </div>
              </>
            ) : !ratingSent ? (
              <>
                <div className="mt-4 rounded-2xl bg-success/10 p-5 text-success">
                  <div className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} /> Payment received</div>
                  <div className="mt-1 text-sm text-navy/80">Rate your experience with {worker.name}.</div>
                </div>
                <div className="mt-6 flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} onClick={() => setRating(n)}>
                      <Star size={40} className={n <= rating ? "fill-star text-star" : "text-border"} />
                    </button>
                  ))}
                </div>
                <textarea placeholder="Add a short comment (optional)…" className="mt-4 w-full rounded-xl border border-border bg-bg-off px-4 py-2.5 text-sm outline-none focus:border-orange" rows={3} />
                <div className="mt-6 flex justify-end">
                  <button
                    disabled={rating === 0}
                    onClick={() => {
                      // BACKEND TODO: submit rating to reviews API
                      setRatingSent(true);
                    }}
                    className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white disabled:opacity-40"
                  >
                    Submit Rating
                  </button>
                </div>
              </>
            ) : (
              <div className="py-8 text-center">
                <CheckCircle2 size={52} className="mx-auto text-success" />
                <h3 className="mt-4 font-display text-2xl font-extrabold text-navy">Thank you!</h3>
                <p className="mt-2 text-sm text-text-muted">Your rating helps keep KaamDo trustworthy for everyone.</p>
                <button onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow">
                  <RotateCcw size={14} /> Book Another Worker
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-text-muted">{label}</span>
      <span className="font-semibold text-navy">{value}</span>
    </div>
  );
}

function OtpBox({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <input
      ref={ref}
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => {
        const v = e.target.value.replace(/\D/g, "");
        onChange(v);
        if (v) {
          const next = ref.current?.nextElementSibling as HTMLInputElement | null;
          next?.focus();
        }
      }}
      className="h-14 w-12 rounded-xl border-2 border-border bg-white text-center font-display text-2xl font-extrabold text-navy outline-none focus:border-orange"
    />
  );
}

function PayOption({ label, icon: Icon, active, onClick }: { id: string; label: string; icon: any; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${active ? "border-orange bg-orange/5" : "border-border bg-bg-off hover:border-orange/40"}`}
    >
      <div className={`grid h-10 w-10 place-items-center rounded-xl ${active ? "bg-brand-gradient text-white" : "bg-white text-navy"}`}>
        <Icon size={18} />
      </div>
      <div>
        <div className="text-sm font-bold text-navy">{label}</div>
        <div className="text-[10px] text-text-muted">{active ? "Selected" : "Tap to select"}</div>
      </div>
    </button>
  );
}

function formatTime(s: number) {
  const hh = Math.floor(s / 3600).toString().padStart(2, "0");
  const mm = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
  const ss = (s % 60).toString().padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function MapPreview() {
  return (
    <div className="mt-3 relative h-48 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#e6efff,#f7f0e6)]">
      <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
        <path d="M20 170 Q 120 40 220 120 T 380 30" stroke="var(--orange)" strokeWidth="3" strokeDasharray="6 6" fill="none" />
        <circle cx="20" cy="170" r="7" fill="var(--navy)" />
        <circle cx="380" cy="30" r="7" fill="var(--orange)" />
      </svg>
      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-navy shadow">
        Worker
      </div>
      <div className="absolute right-3 bottom-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-navy shadow">
        Your Location
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <span className="absolute inset-0 -m-1 animate-pulse-dot rounded-full bg-orange/40" />
          <div className="relative grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-white shadow-glow">
            <MapPin size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
