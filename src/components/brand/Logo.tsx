export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 40" className="h-9 w-11" aria-hidden>
        {/* two figures forming an M via a handshake */}
        <circle cx="12" cy="9" r="5" fill="var(--navy)" />
        <circle cx="36" cy="9" r="5" fill="var(--orange)" />
        <path
          d="M4 34 L12 18 L24 30 L36 18 L44 34"
          stroke="var(--navy)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M24 30 L36 18 L44 34"
          stroke="var(--orange)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <div className="font-display text-2xl font-extrabold tracking-tight">
          <span className="text-navy">Kaam</span>
          <span className="text-orange">Do</span>
        </div>
        <div className="mt-0.5 text-[10px] font-medium text-text-muted">
          Kaam Sabko, Samman Sabko.
        </div>
      </div>
    </div>
  );
}
