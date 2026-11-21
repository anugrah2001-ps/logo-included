import { createFileRoute } from "@tanstack/react-router";
import { Check, CreditCard, Landmark, PiggyBank } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PillarCards } from "@/components/site/PillarCards";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ekosistem")({
  head: () => ({
    meta: [
      { title: "Ekosistem Layanan — Bank Aster" },
      { name: "description", content: "Ekosistem Bank Aster: produk simpanan, produk kredit, dan layanan digital yang dibangun bertahap." },
      { property: "og:title", content: "Ekosistem Layanan — Bank Aster" },
      { property: "og:description", content: "Peta jalan ekosistem perbankan digital Bank Aster dari tahap ke tahap." },
    ],
  }),
  component: Ekosistem,
});

const TAHAP = [
  {
    no: "Tahap 1",
    title: "Identitas Bank & Desain Produk Pendanaan",
    status: "aktif" as const,
    items: ["Identitas & profil bank", "Tabungan Aster Saver", "Aster Giro Bisnis", "Aster Deposito Berjangka"],
  },
  {
    no: "Tahap 2",
    title: "Produk Kredit",
    status: "segera" as const,
    items: ["Kredit konsumtif (KTA digital)", "Kredit modal kerja UMKM", "Analisis kredit 5C digital"],
  },
  {
    no: "Tahap 3",
    title: "Layanan Digital",
    status: "segera" as const,
    items: ["Transfer antarbank & BI-FAST", "Pembayaran QRIS", "Pembayaran tagihan rutin"],
  },
];

function Ekosistem() {
  return (
    <>
      <PageHero
        eyebrow="Ekosistem Layanan"
        title="Ekosistem perbankan digital Bank Aster"
        desc="Tiga pilar layanan yang saling terhubung: menghimpun dana, menyalurkan kredit, dan memudahkan transaksi sehari-hari."
        chips={[
          { icon: PiggyBank, label: "Simpanan", value: "Aktif" },
          { icon: Landmark, label: "Kredit", value: "Tahap 2" },
          { icon: CreditCard, label: "Digital", value: "Tahap 3" },
        ]}
      />
      <section className="container-aster py-24">
        <SectionHeading eyebrow="Tiga Pilar" title="Pilar layanan Bank Aster" />
        <PillarCards className="mt-12" />
      </section>
      <section className="bg-card py-24">
        <div className="container-aster">
          <SectionHeading eyebrow="Peta Jalan" title="Dibangun tahap demi tahap" />
          <div className="relative mt-14">
            {/* Progress rail */}
            <Reveal className="absolute left-0 right-0 top-0 hidden lg:block">
              <div className="h-1 rounded-full bg-muted">
                <div className="h-full w-1/3 animate-draw-line rounded-full bg-violet-gradient [animation-delay:200ms]" />
              </div>
            </Reveal>
            <ol className="grid gap-6 lg:grid-cols-3 lg:pt-8">
              {TAHAP.map((t, i) => {
                const active = t.status === "aktif";
                return (
                  <Reveal as="li" key={t.no} delay={i * 150} className="h-full">
                    <div
                      className={cn(
                        "card-lift relative h-full overflow-hidden rounded-3xl border p-7",
                        active ? "border-transparent bg-hero text-midnight-foreground" : "border-border bg-background",
                      )}
                    >
                      {active && <HeroBackdrop stars={false} />}
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <span className={cn("text-sm font-bold", active ? "text-gold" : "text-primary")}>{t.no}</span>
                          <Badge variant={t.status}>{active ? "Aktif" : "Tahap Berikutnya"}</Badge>
                        </div>
                        <h3 className={cn("mt-4 text-xl font-bold", active ? "text-midnight-foreground" : "text-foreground")}>
                          {t.title}
                        </h3>
                        <ul className="mt-5 space-y-2.5">
                          {t.items.map((item) => (
                            <li
                              key={item}
                              className={cn("flex items-center gap-2.5 text-sm", active ? "text-midnight-muted" : "text-muted-foreground")}
                            >
                              <span
                                className={cn(
                                  "grid size-5 place-items-center rounded-full",
                                  active ? "bg-gold/20 text-gold" : "bg-violet-soft text-primary",
                                )}
                              >
                                <Check className="size-3" />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
