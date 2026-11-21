import { createFileRoute } from "@tanstack/react-router";
import {
  BadgePercent,
  Building2,
  Clock,
  Eye,
  Headphones,
  Landmark,
  Smartphone,
  Sparkles,
  Target,
  Wallet,
  Workflow,
} from "lucide-react";
import logo from "@/assets/aster-logo.png";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Bank — Bank Aster" },
      { name: "description", content: "Profil PT Bank Aster Digital Indonesia: visi, misi, keunggulan, dan model layanan digital." },
      { property: "og:title", content: "Profil Bank — Bank Aster" },
      { property: "og:description", content: "Kenali visi, misi, dan keunggulan Bank Aster sebagai bank digital konvensional." },
    ],
  }),
  component: Profil,
});

const IDENTITAS = [
  ["Nama Bank", "Bank Aster"],
  ["Badan Hukum", "PT Bank Aster Digital Indonesia"],
  ["Jenis Bank", "Bank Umum Konvensional Digital"],
  ["Tagline", "Tumbuh Cerdas, Terarah Pasti"],
  ["Fokus Tahap 1", "Identitas Bank & Produk Pendanaan"],
  ["Kanal Layanan", "Aplikasi seluler & website"],
];

const MISI = [
  "Menyediakan produk simpanan yang sederhana, transparan, dan mudah diakses seluruh lapisan masyarakat.",
  "Menghadirkan proses pembukaan rekening dan transaksi yang sepenuhnya digital, aman, dan cepat.",
  "Mendukung pertumbuhan UMKM melalui layanan giro dan pembiayaan yang terintegrasi.",
  "Menjaga kepercayaan nasabah dengan tata kelola yang prudent dan pelayanan 24/7.",
];

const KEUNGGULAN = [
  { icon: Wallet, title: "Bebas Biaya Admin Bulanan", desc: "Tabungan Aster Saver tanpa potongan biaya administrasi setiap bulan." },
  { icon: BadgePercent, title: "Bunga Deposito hingga 5,5% p.a.", desc: "Imbal hasil kompetitif untuk penempatan dana berjangka.", gold: true },
  { icon: Smartphone, title: "Pembukaan Rekening 100% Online", desc: "Cukup e-KTP dan swafoto, tanpa perlu datang ke kantor cabang." },
  { icon: Clock, title: "Layanan 24/7", desc: "Tim layanan nasabah siap membantu kapan saja melalui aplikasi dan chat." },
];

const MODEL = [
  { icon: Smartphone, step: "01", title: "Akuisisi Digital", desc: "Nasabah mendaftar lewat aplikasi atau website dengan verifikasi e-KTP elektronik (e-KYC)." },
  { icon: Building2, step: "02", title: "Branchless Banking", desc: "Tanpa kantor cabang fisik; seluruh layanan berjalan di kanal digital sehingga biaya operasional efisien." },
  { icon: Workflow, step: "03", title: "Layanan Terintegrasi", desc: "Simpanan, kredit, dan pembayaran terhubung dalam satu aplikasi dan satu identitas nasabah." },
  { icon: Headphones, step: "04", title: "Dukungan 24/7", desc: "Pusat bantuan virtual dan agen layanan nasabah tersedia sepanjang waktu." },
];

function Profil() {
  return (
    <>
      <PageHero
        eyebrow="Profil Bank"
        title="PT Bank Aster Digital Indonesia"
        desc="Bank umum konvensional digital yang menghadirkan layanan perbankan tenang dan terang — transparan dalam biaya, jelas dalam manfaat, dan mudah diakses dari mana saja."
        chips={[
          { icon: Landmark, label: "Jenis Bank", value: "Konvensional Digital" },
          { icon: Sparkles, label: "Tagline", value: "Terarah Pasti" },
          { icon: Clock, label: "Layanan", value: "24/7" },
        ]}
      />

      <section className="container-aster grid gap-12 py-24 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          <SectionHeading eyebrow="Gambaran Umum" title="Bank digital untuk generasi yang terarah" />
          <Reveal delay={100} className="space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              Bank Aster lahir dari keinginan menghadirkan pengalaman perbankan yang menenangkan.
              Nama "Aster" diambil dari bunga bintang — simbol pertumbuhan dan arah. Seperti logonya,
              Bank Aster ingin menjadi penunjuk arah finansial nasabah: membantu menabung lebih
              cerdas dan berinvestasi dengan pasti.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Sebagai bank konvensional digital, Bank Aster menghimpun dana masyarakat melalui produk
              tabungan, giro, dan deposito, lalu menyalurkannya kembali sebagai kredit konsumtif dan
              UMKM pada tahap berikutnya.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <div className="flex items-center gap-3 bg-midnight px-6 py-4 text-sm font-semibold text-midnight-foreground">
              <img src={logo} alt="Logo Bank Aster" className="size-6 rounded-md bg-card p-0.5" />
              Identitas Bank
            </div>
            <dl className="divide-y divide-border">
              {IDENTITAS.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[9rem_1fr] gap-4 px-6 py-3.5 text-sm transition-colors hover:bg-violet-soft/60"
                >
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="bg-card py-24">
        <div className="container-aster grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-hero p-9 text-midnight-foreground">
              <HeroBackdrop stars={false} />
              <img
                src={logo}
                alt=""
                className="pointer-events-none absolute -bottom-16 -right-16 size-64 animate-spin-slow opacity-15"
              />
              <div className="relative">
                <Eye className="size-8 text-gold" />
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-midnight-muted">Visi</h3>
                <p className="mt-3 text-2xl font-bold leading-snug md:text-3xl">
                  Menjadi bank digital pilihan utama di Indonesia yang menuntun nasabah tumbuh{" "}
                  <span className="text-shimmer-gold">cerdas dan terarah</span> secara finansial.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-background p-9">
              <Target className="size-8 text-primary" />
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Misi</h3>
              <ol className="mt-4 space-y-3">
                {MISI.map((m, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-2xl p-2 text-sm leading-relaxed text-foreground transition-colors hover:bg-violet-soft/60"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-violet-gradient text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-aster py-24">
        <SectionHeading eyebrow="Keunggulan Kompetitif" title="Empat alasan memilih Bank Aster" center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KEUNGGULAN.map((k, i) => (
            <Reveal key={k.title} delay={i * 100} className="h-full">
              <div className="group card-lift h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
                    k.gold ? "bg-gold-soft text-gold" : "bg-violet-soft text-primary",
                  )}
                >
                  <k.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{k.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{k.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container-aster">
          <SectionHeading
            eyebrow="Model Layanan Digital"
            title="Bagaimana Bank Aster melayani nasabah"
            desc="Seluruh siklus layanan, dari pendaftaran hingga bantuan, berjalan tanpa kantor cabang."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MODEL.map((m, i) => (
              <Reveal key={m.step} delay={i * 120} className="h-full">
                <div className="group card-lift relative h-full overflow-hidden rounded-3xl border border-border bg-background p-7">
                  <span className="absolute right-6 top-4 text-5xl font-extrabold text-primary/10 transition-colors duration-500 group-hover:text-primary/25">
                    {m.step}
                  </span>
                  <m.icon className="size-7 text-primary" />
                  <h3 className="mt-5 text-lg font-bold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}