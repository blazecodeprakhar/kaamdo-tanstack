import { MapPin, Search, Home, Briefcase, Wallet, User, Star, Wifi, Battery, Signal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PreviewRow = {
  icon?: LucideIcon;
  title: string;
  price: string;
  rating?: number;
  meta: string;
};

type Props = {
  city?: string;
  searchPlaceholder?: string;
  sectionTitle?: string;
  rows: PreviewRow[];
  variant?: "customer" | "worker";
};

export function AppPreview({
  city = "Indore, Madhya Pradesh",
  searchPlaceholder = "Search for workers...",
  sectionTitle = "Popular Workers",
  rows,
  variant = "customer",
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[310px]">
      {/* Premium metallic/glass Outer Phone Frame */}
      <div className="relative rounded-[2.8rem] border-[10px] border-slate-900 bg-slate-950 p-2.5 shadow-[0_25px_60px_-15px_rgba(26,36,57,0.35)] animate-floaty hover:shadow-[0_25px_60px_-15px_rgba(249,115,22,0.25)] transition-all duration-700 ease-out ring-1 ring-white/10 select-none">
        
        {/* Physical Power Button */}
        <div className="absolute -right-3 top-24 h-10 w-0.75 rounded-r-sm bg-slate-800 border-l border-white/5" />
        
        {/* Physical Volume Buttons */}
        <div className="absolute -left-3 top-20 h-7 w-0.75 rounded-l-sm bg-slate-800 border-r border-white/5" />
        <div className="absolute -left-3 top-30 h-7 w-0.75 rounded-l-sm bg-slate-800 border-r border-white/5" />

        {/* Dynamic Island Notch */}
        <div className="absolute left-1/2 top-4 z-40 h-4.5 w-20 -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-2.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
          <div className="h-1.5 w-1.5 rounded-full bg-[#0a1128]/90 relative">
            <span className="absolute inset-0.5 rounded-full bg-[#1e40af]/60 blur-[0.5px]" />
          </div>
          <div className="h-1 w-3 rounded-full bg-neutral-900" />
        </div>

        {/* Screen Glass Reflection Overlay */}
        <div className="pointer-events-none absolute inset-0 z-30 rounded-[2.35rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10" />

        {/* Inner Phone Screen Display */}
        <div className="overflow-hidden rounded-[2.1rem] bg-bg-off px-3.5 pt-6 pb-2.5 shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] relative flex flex-col h-[550px]">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between px-3 pt-1 pb-2 text-[9px] font-bold text-navy/70 z-30 relative select-none">
            <span>09:41</span>
            <div className="flex items-center gap-1">
              <Signal size={9} className="stroke-[2.5]" />
              <Wifi size={9} className="stroke-[2.5]" />
              <Battery size={11} className="stroke-[2.5] fill-navy/70" />
            </div>
          </div>

          {/* App Logo & Location Selection */}
          <div className="flex items-center justify-between mt-2 px-1 shrink-0">
            <div className="font-display text-sm font-extrabold tracking-tight">
              <span className="text-navy">Kaam</span><span className="text-orange">Do</span>
            </div>
            <div className="flex items-center gap-0.5 rounded-full bg-white px-2.5 py-0.5 text-[8px] font-bold text-navy shadow-sm ring-1 ring-black/[0.04]">
              <MapPin size={8} className="text-orange" /> {city.split(",")[0]}
            </div>
          </div>

          {/* Dynamic Search Bar */}
          <div className="mt-3 flex items-center gap-1.5 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/[0.03] shrink-0">
            <Search size={11} className="text-text-muted shrink-0" />
            <span className="text-[10px] text-text-muted truncate">{searchPlaceholder}</span>
          </div>

          {/* Section Header */}
          <div className="mt-4 flex items-center justify-between px-1 shrink-0">
            <div className="text-[10px] font-bold tracking-tight text-navy uppercase">{sectionTitle}</div>
            <div className="text-[8px] font-bold text-orange hover:underline cursor-pointer">View All</div>
          </div>

          {/* Scrollable Rows */}
          <div className="mt-3 space-y-3.5 flex-1 overflow-hidden">
            {rows.map((r, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.02] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <div className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-sm">
                  {r.icon ? <r.icon size={13} /> : <span className="text-[11px] font-bold">{r.title[0]}</span>}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <div className="truncate text-[10.5px] font-bold text-navy leading-none">{r.title}</div>
                    {r.rating && (
                      <div className="flex items-center gap-0.5 text-[8.5px] font-bold text-navy shrink-0">
                        <Star size={9} className="fill-star text-star" /> {r.rating}
                      </div>
                    )}
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[8.5px] text-text-muted leading-none">
                    <span className="truncate font-semibold">{r.price}</span>
                    <span className="shrink-0 font-medium">{r.meta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Bottom Tab Bar */}
          <div className="mt-auto mb-2 flex items-center justify-around rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/[0.02] shrink-0">
            {[
              { icon: Home, label: "Home" },
              { icon: Briefcase, label: variant === "worker" ? "Jobs" : "My Jobs" },
              { icon: Wallet, label: "Wallet" },
              { icon: User, label: "Profile" },
            ].map((t, i) => (
              <div 
                key={i} 
                className={`flex flex-col items-center gap-0.5 px-1 cursor-pointer transition-all duration-200 active:scale-95 ${i === 0 ? "text-orange" : "text-text-muted hover:text-navy"}`}
              >
                <t.icon size={12} className={i === 0 ? "stroke-[2.5]" : "stroke-[2]"} />
                <span className="text-[7.5px] font-extrabold tracking-tight">{t.label}</span>
              </div>
            ))}
          </div>

          {/* Home Indicator Bar */}
          <div className="mt-1 mx-auto h-0.75 w-16 rounded-full bg-navy/20 shrink-0" />

        </div>
      </div>
    </div>
  );
}

