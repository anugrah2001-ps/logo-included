import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BadgePercent, Building2, PiggyBank, TrendingUp, Wallet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHero } from "@/components/site/Section";
import { TabunganTab } from "@/components/produk/TabunganTab";
import { GiroTab } from "@/components/produk/GiroTab";
import { DepositoTab } from "@/components/produk/DepositoTab";

const TABS = ["tabungan", "giro", "deposito"] as const;
type Tab = (typeof TABS)[number];

export const Route = createFileRoute("/produk")({
  validateSearch: (search: Record<string, unknown>): { tab?: Tab } => {
    const t = search["tab"];
    return TABS.includes(t as Tab) ? { tab: t as Tab } : {};
  },
  head: () => ({
    meta: [
      { title: "Produk Simpanan — Bank Aster" },
      { name: "description", content: "Spesifikasi dan simulasi Tabungan Aster Saver, Aster Giro Bisnis, dan Aster Deposito Berjangka." },
      { property: "og:title", content: "Produk Simpanan — Bank Aster" },
      { property: "og:description", content: "Bandingkan tabungan, giro, dan deposito Bank Aster lengkap dengan simulasi." },
    ],
  }),
  component: Produk,
});

const TRIGGER =
  "h-auto flex-1 gap-3 rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:bg-violet-soft data-[state=active]:hover:bg-midnight data-[state=active]:bg-midnight data-[state=active]:text-midnight-foreground data-[state=active]:shadow-lift";

function Produk() {
  const { tab = "tabungan" } = Route.useSearch();
  const navigate = useNavigate({ from: "/produk" });

  return (
    <>
      <PageHero
        eyebrow="Katalog Produk Simpanan"
        title="Produk simpanan Bank Aster"
        desc="Bandingkan spesifikasi lengkap, lalu coba simulasinya langsung: buka tabungan, ajukan giro, atau hitung bunga deposito."
        chips={[
          { icon: Wallet, label: "Biaya Admin", value: "Rp 0" },
          { icon: BadgePercent, label: "Deposito", value: "hingga 5,5%" },
          { icon: Building2, label: "Giro Bisnis", value: "Cek digital" },
        ]}
      />
      <section className="container-aster relative z-10 -mt-10 pb-24">
        <Tabs value={tab} onValueChange={(v) => navigate({ search: { tab: v as Tab }, replace: true, resetScroll: false })}>
          <TabsList className="relative h-auto animate-fade-up [animation-delay:300ms] w-full flex-col gap-2 rounded-3xl border border-border bg-card p-2 shadow-lift md:flex-row">
            <TabsTrigger value="tabungan" className={TRIGGER}>
              <PiggyBank className="size-6 shrink-0" />
              <span>
                <span className="block text-xs font-medium opacity-70">Tabungan</span>
                <span className="block text-base font-bold">Aster Saver</span>
              </span>
            </TabsTrigger>
            <TabsTrigger value="giro" className={TRIGGER}>
              <Building2 className="size-6 shrink-0" />
              <span>
                <span className="block text-xs font-medium opacity-70">Giro</span>
                <span className="block text-base font-bold">Aster Giro Bisnis</span>
              </span>
            </TabsTrigger>
            <TabsTrigger value="deposito" className={TRIGGER}>
              <TrendingUp className="size-6 shrink-0" />
              <span>
                <span className="block text-xs font-medium opacity-70">Deposito</span>
                <span className="block text-base font-bold">Aster Deposito Berjangka</span>
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tabungan" className="mt-10 data-[state=active]:animate-fade-up"><TabunganTab /></TabsContent>
          <TabsContent value="giro" className="mt-10 data-[state=active]:animate-fade-up"><GiroTab /></TabsContent>
          <TabsContent value="deposito" className="mt-10 data-[state=active]:animate-fade-up"><DepositoTab /></TabsContent>
        </Tabs>
      </section>
    </>
  );
}
