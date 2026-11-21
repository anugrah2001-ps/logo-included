import type { LucideIcon } from "lucide-react";
import asterLogo from "@/assets/aster-logo.png";
import { Tilt } from "@/components/site/Tilt";
import { cn } from "@/lib/utils";

export type OrbitChip = { icon: LucideIcon; label: string; value: string };

const CHIP_POS = ["-left-10 top-[14%]", "-right-12 top-[50%]", "left-[6%] bottom-0"];

export function OrbitVisual({ chips = [], className }: { chips?: OrbitChip[]; className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[22rem]", className)}>
      {/* Keyframes CSS langsung agar 100% jalan tanpa bergantung config Tailwind */}
      <style>{`
        @keyframes asterOrbitCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes asterOrbitCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes asterFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* 1. Lingkaran Luar + Bola Kuning (Berputar mengelilingi logo searah jarum jam) */}
      <div
        style={{ animation: "asterOrbitCW 10s linear infinite" }}
        className="pointer-events-none absolute inset-0 rounded-full border border-midnight-foreground/20"
        aria-hidden
      >
        <span className="absolute left-1/2 top-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_20px_#F59E0B]" />
        <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold/60" />
      </div>

      {/* 2. Lingkaran Dalam Putus-Putus + Bola Ungu (Berputar berlawanan arah jarum jam) */}
      <div
        style={{ animation: "asterOrbitCCW 7s linear infinite" }}
        className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-midnight-foreground/30"
        aria-hidden
      >
        <span className="absolute bottom-0 left-1/2 size-3.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet shadow-[0_0_18px_#7C3AED]" />
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/70" />
      </div>

      {/* 3. Kotak Logo Tengah (Mengambang naik-turun + miring 3D saat disentuh kursor) */}
      <div
        style={{ animation: "asterFloat 3.5s ease-in-out infinite" }}
        className="absolute inset-[32%]"
      >
        <Tilt className="size-full">
          <div className="size-full rounded-[2rem] bg-card p-4 shadow-lift transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(124,58,237,0.5)]">
            <img src={asterLogo} alt="Logo Bank Aster" className="size-full object-contain" />
          </div>
        </Tilt>
      </div>

      {/* Cahaya latar belakang ungu */}
      <div className="pointer-events-none absolute inset-[30%] -z-10 rounded-full bg-violet/40 blur-3xl" aria-hidden />

      {/* 4. Tiga Kartu Info di Sekeliling Orbit (Mengambang halus) */}
      {chips.slice(0, 3).map((c, i) => (
        <div
          key={c.label}
          style={{ animation: `asterFloat ${3.2 + i * 0.5}s ease-in-out infinite` }}
          className={cn("pointer-events-none absolute", CHIP_POS[i])}
          aria-hidden
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-midnight-foreground/15 bg-midnight/85 px-3.5 py-2.5 shadow-lift backdrop-blur-md">
            <span className="grid size-8 place-items-center rounded-xl bg-midnight-foreground/10 text-gold">
              <c.icon className="size-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-medium uppercase tracking-wider text-midnight-muted">
                {c.label}
              </span>
              <span className="block text-sm font-bold text-midnight-foreground">{c.value}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}