import asterLogo from "@/assets/aster-logo.png";
import { cn } from "@/lib/utils";

export function VirtualCard({
  name = "NAMA NASABAH",
  number = "5279 •••• •••• 2026",
  expiry = "11/31",
  className,
}: {
  name?: string;
  number?: string;
  expiry?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[1.586] w-full max-w-sm overflow-hidden rounded-3xl bg-card-aster p-6 text-midnight-foreground shadow-lift",
        className,
      )}
    >
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-violet/40 blur-2xl" aria-hidden />
      <div className="absolute -bottom-20 -left-10 size-48 rounded-full bg-gold/20 blur-2xl" aria-hidden />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-card p-1">
              <img src={asterLogo} alt="Logo Bank Aster" className="size-full object-contain" />
            </span>
            <span className="text-sm font-bold">Bank Aster</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-midnight-muted">Debit</span>
        </div>

        {/* Chip EMV Kartu ATM/Debit dengan garis sirkuit realistis */}
        <div className="h-9 w-12 overflow-hidden rounded-lg border border-amber-300/60 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-inner" aria-hidden>
          <svg viewBox="0 0 48 36" className="size-full stroke-amber-950/45" fill="none" strokeWidth="1.2">
            {/* Garis horizontal atas & bawah */}
            <line x1="0" y1="12" x2="16" y2="12" />
            <line x1="32" y1="12" x2="48" y2="12" />
            <line x1="0" y1="24" x2="16" y2="24" />
            <line x1="32" y1="24" x2="48" y2="24" />
            {/* Garis vertikal kiri & kanan */}
            <line x1="16" y1="0" x2="16" y2="36" />
            <line x1="32" y1="0" x2="32" y2="36" />
            {/* Kotak kontak tengah chip */}
            <rect x="16" y="9" width="16" height="18" rx="3" />
            <line x1="24" y1="9" x2="24" y2="27" />
          </svg>
        </div>

        <div>
          <p className="font-mono text-lg tracking-[0.18em] md:text-xl">{number}</p>
          <div className="mt-3 flex items-end justify-between text-xs">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-midnight-muted">Pemilik Kartu</p>
              <p className="mt-0.5 font-semibold uppercase tracking-wide">{name}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-midnight-muted">Berlaku</p>
              <p className="mt-0.5 font-semibold">{expiry}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}