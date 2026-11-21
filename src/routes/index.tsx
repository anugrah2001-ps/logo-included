import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Clock,
  CreditCard,
  ScanFace,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/CountUp";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PillarCards } from "@/components/site/PillarCards";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/Section";
import { Tilt } from "@/components/site/Tilt";
import { VirtualCard } from "@/components/site/VirtualCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bank Aster — Perbankan Digital yang Tenang dan Terang" },
      {
        name: "description",
        content:
          "Bank Aster dari PT Bank Aster Digital Indonesia: tabungan tanpa biaya admin, giro bisnis, dan deposito hingga 5,5% p.a.",
      },
      { property: "og:title", content: "Bank Aster — Perbankan Digital yang Tenang dan Terang" },
      {
        property: "og:description",
        content: "Tumbuh Cerdas, Terarah Pasti. Buka rekening Bank Aster 100% online.",
      },
    ],
  }),
  component: Index,
});

const PRODUCTS = [
  { tab: "tabungan" as const, name: "Aster Saver", type: "Tabungan", rate: "2,5% p.a.", note: "Setoran awal Rp 50.000 · Bebas biaya admin" },
  { tab: "giro" as const, name: "Aster Giro Bisnis", type: "Giro", rate: "Rekening bisnis", note: "Cek/Bilyet Giro digital · Mutasi lengkap" },
  { tab: "deposito" as const, name: "Aster Deposito Berjangka", type: "Deposito", rate: "hingga 5,5% p.a.", note: "Tenor 1–12 bulan · Opsi ARO" },
];

const STEPS = [
  { icon: Smartphone, title: "Isi data diri", desc: "Masukkan nama, NIK, dan nomor HP dalam hitungan menit." },
  { icon: ScanFace, title: "Verifikasi e-KTP", desc: "Swafoto dengan e-KTP untuk verifikasi identitas digital." },
  { icon: CreditCard, title: "Rekening aktif", desc: "Kartu debit virtual langsung terbit dan siap dipakai." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <HeroBackdrop />
        <div className="container-aster relative grid items-center gap-16 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-midnight-foreground/15 bg-midnight-foreground/5 px-4 py-1.5 text-sm font-medium text-midnight-foreground backdrop-blur">
              <Sparkles className="size-4 text-gold" /> Tumbuh Cerdas, Terarah Pasti
            </span>
            <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-[1.06] text-midnight-foreground [animation-delay:120ms] md:text-6xl">
              Bank Aster — Perbankan Digital yang{" "}
              <span className="text-shimmer-gold">Tenang</span> dan{" "}
              <span className="text-shimmer-gold">Terang</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-midnight-muted [animation-delay:240ms]">
              Kelola tabungan, giro bisnis, dan deposito dalam satu bank digital yang transparan.
              Tanpa antre, tanpa biaya admin bulanan, kapan pun kamu butuh.
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:360ms]">
              <Button asChild size="lg" className="group">
                <Link to="/produk">
                  Jelajahi Produk Simpanan
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="on-dark">
                <Link to="/profil">Profil Bank</Link>
              </Button>
            </div>
            <div className="mt-10 flex animate-fade-in items-center gap-2 text-sm text-midnight-muted [animation-delay:600ms]">
              <ShieldCheck className="size-4 text-gold" />
              Bank umum konvensional digital · PT Bank Aster Digital Indonesia
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-scale-in pb-20 [animation-delay:250ms] lg:pb-0">
            <div className="absolute inset-6 -z-0 rounded-[2rem] bg-violet/40 blur-3xl" aria-hidden />
            <Tilt className="relative">
              <div className="animate-float-slow">
                <VirtualCard name="Anugrah Satria" number="5279 4410 •••• 2026" />
              </div>
            </Tilt>
            <div className="absolute -bottom-2 -left-4 w-56 animate-fade-up lg:-bottom-24 rounded-2xl border border-border bg-card p-4 shadow-lift [animation-delay:700ms] md:-left-10">
              <div className="animate-bob">
                <p className="text-xs font-medium text-muted-foreground">Bunga Deposito 12 Bulan</p>
                <p className="mt-1 text-3xl font-extrabold text-gold">5,5% p.a.</p>
                <p className="mt-1 text-xs text-muted-foreground">Min. penempatan Rp 1.000.000</p>
              </div>
            </div>
            <div className="absolute -top-10 right-4 hidden animate-fade-up items-center gap-2 rounded-full border border-midnight-foreground/15 bg-midnight/70 px-3 py-2 text-xs font-semibold text-midnight-foreground shadow-lift backdrop-blur-md [animation-delay:850ms] sm:flex">
              <span className="size-2 rounded-full bg-success animate-pulse" /> Rekening aktif
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-px">
        <div className="container-aster">
          <div className="-mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-lift md:grid-cols-4">
            {[
              { icon: Wallet, node: <CountUp to={0} prefix="Rp " />, label: "Biaya admin bulanan" },
              { icon: BadgePercent, node: <CountUp to={5.5} decimals={1} suffix="% p.a." />, label: "Bunga deposito tertinggi", gold: true },
              { icon: Smartphone, node: <CountUp to={100} suffix="%" />, label: "Pembukaan rekening online" },
              { icon: Clock, node: <><CountUp to={24} />/7</>, label: "Layanan nasabah" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="flex items-center gap-4 bg-card p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-violet-soft text-primary">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <p className={s.gold ? "text-xl font-extrabold text-gold" : "text-xl font-extrabold text-foreground"}>
                    {s.node}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="container-aster py-24">
        <SectionHeading
          eyebrow="Ekosistem Bank Digital"
          title="Satu ekosistem, dibangun bertahap"
          desc="Tahap 1 berfokus pada identitas bank dan produk pendanaan. Produk kredit dan layanan digital menyusul di tahap berikutnya."
        />
        <PillarCards className="mt-12" />
      </section>

      {/* Products */}
      <section className="bg-card py-24">
        <div className="container-aster">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Produk Simpanan" title="Pilih simpanan sesuai tujuanmu" />
            <Reveal>
              <Button asChild variant="outline" className="group">
                <Link to="/produk">
                  Lihat semua spesifikasi
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.tab} delay={i * 120} className="h-full">
                <Link
                  to="/produk"
                  search={{ tab: p.tab }}
                  className="group card-lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-violet-gradient transition-transform duration-500 group-hover:scale-x-100" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.type}</p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-5 text-2xl font-extrabold text-gold">{p.rate}</p>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.note}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Detail & simulasi
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container-aster py-24">
        <SectionHeading eyebrow="Buka Rekening" title="Tiga langkah, langsung jadi" center />
        <div className="relative mt-14 grid gap-10 md:grid-cols-3">
          <Reveal className="absolute left-[16%] right-[16%] top-7 hidden md:block">
            <div className="h-px animate-draw-line bg-gradient-to-r from-violet via-gold to-violet [animation-delay:300ms]" />
          </Reveal>
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 180} className="relative text-center">
              <span className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-violet-gradient text-primary-foreground shadow-violet">
                <s.icon className="size-6" />
                <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-aster pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-hero px-8 py-14 text-center md:px-16">
            <HeroBackdrop stars={false} />
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-midnight-foreground md:text-4xl">
                Mulai tumbuh cerdas bersama <span className="text-shimmer-gold">Bank Aster</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-midnight-muted">
                Coba simulasi pembukaan rekening tabungan dan dapatkan kartu debit virtualmu sekarang.
              </p>
              <Button asChild size="lg" variant="gold" className="group mt-8">
                <Link to="/produk" search={{ tab: "tabungan" }}>
                  Buka Rekening Sekarang
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
