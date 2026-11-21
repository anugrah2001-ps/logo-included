import { Link } from "@tanstack/react-router";
import { ArrowRight, CreditCard, Landmark, PiggyBank } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export const PILLARS = [
  {
    icon: PiggyBank,
    title: "Produk Simpanan",
    items: "Tabungan, Giro, Deposito",
    desc: "Fondasi pendanaan Bank Aster: tabungan harian, giro untuk bisnis, dan deposito berjangka dengan bunga kompetitif.",
    status: "aktif" as const,
  },
  {
    icon: Landmark,
    title: "Produk Kredit",
    items: "Konsumtif & UMKM",
    desc: "Pembiayaan kebutuhan pribadi dan modal usaha UMKM dengan proses analisis kredit yang sepenuhnya digital.",
    status: "segera" as const,
  },
  {
    icon: CreditCard,
    title: "Layanan Digital",
    items: "Transfer, QRIS, Tagihan",
    desc: "Transfer antarbank, pembayaran QRIS, dan pembayaran tagihan rutin langsung dari aplikasi Bank Aster.",
    status: "segera" as const,
  },
];

export function PillarCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {PILLARS.map((p, i) => {
        const active = p.status === "aktif";
        return (
          <Reveal key={p.title} delay={i * 120} className="h-full">
            <article
              className={cn(
                "group card-lift relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-7 shadow-soft",
                active ? "border-primary/30" : "border-border",
              )}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-violet/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
                    active
                      ? "animate-pulse-ring bg-violet-gradient text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  <p.icon className="size-6" />
                </span>
                <Badge variant={p.status}>{active ? "Aktif" : "Tahap Berikutnya"}</Badge>
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{p.items}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              {active ? (
                <Link
                  to="/produk"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Lihat produk
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <p className="mt-6 text-sm font-medium text-muted-foreground">Segera hadir</p>
              )}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
