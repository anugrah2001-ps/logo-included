import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Rate, SpecTable } from "./SpecTable";
import { cn } from "@/lib/utils";
import { AnimatedNumber } from "@/components/site/CountUp";
import {
  DEPOSITO_FORM_URL,
  DEPOSITO_MIN,
  DEPOSITO_TENOR,
  formatRupiah,
  hitungDeposito,
  type TenorBulan,
} from "@/lib/simpanan";

const MAX = 2_000_000_000;
const SLIDER_MAX = 500_000_000;

export function DepositoTab() {
  const [nominal, setNominal] = useState(10_000_000);
  const [tenor, setTenor] = useState<TenorBulan>(12);
  const valid = nominal >= DEPOSITO_MIN;
  const r = hitungDeposito(valid ? nominal : 0, tenor);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <SpecTable
          title="Spesifikasi Aster Deposito Berjangka"
          rows={[
            ["Tenor", "1, 3, 6, 12 Bulan"],
            ["Suku Bunga", <Rate>Hingga 5,5% p.a.</Rate>],
            ["Minimum Penempatan", formatRupiah(DEPOSITO_MIN)],
            ["Ketentuan", "Opsi ARO / pencairan otomatis saat jatuh tempo"],
          ]}
        />
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="px-6 pt-5 text-sm font-semibold text-foreground">Suku bunga per tenor</div>
          <div className="grid grid-cols-4 gap-3 p-5">
            {DEPOSITO_TENOR.map((t) => (
              <div key={t.bulan} className="rounded-2xl bg-gold-soft p-3 text-center">
                <p className="text-xs font-medium text-gold-foreground">{t.bulan} Bulan</p>
                <p className="mt-1 font-extrabold text-gold-foreground">{t.bungaPa.toLocaleString("id-ID")}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
        <h3 className="text-xl font-bold text-foreground">Kalkulator Bunga Deposito</h3>
        <p className="mt-1 text-sm text-muted-foreground">Hitung perkiraan bunga bersih setelah pajak 20%.</p>

        <div className="mt-6 space-y-3">
          <Label htmlFor="nominal">Nominal Penempatan</Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">Rp</span>
            <Input
              id="nominal"
              inputMode="numeric"
              value={nominal.toLocaleString("id-ID")}
              onChange={(e) => {
                const n = Number(e.target.value.replace(/\D/g, "")) || 0;
                setNominal(Math.min(n, MAX));
              }}
              className="h-12 rounded-xl bg-background pl-11 text-lg font-bold"
            />
          </div>
          <Slider
            min={DEPOSITO_MIN}
            max={SLIDER_MAX}
            step={1_000_000}
            value={[Math.min(Math.max(nominal, DEPOSITO_MIN), SLIDER_MAX)]}
            onValueChange={([v]) => v !== undefined && setNominal(v)}
            aria-label="Geser nominal penempatan"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Rp 1 juta</span>
            <span>Rp 500 juta</span>
          </div>
          {!valid && (
            <p className="text-xs font-medium text-destructive">
              Minimum penempatan {formatRupiah(DEPOSITO_MIN)}
            </p>
          )}
        </div>

        <div className="mt-6 space-y-3">
          <Label>Tenor</Label>
          <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Pilih tenor">
            {DEPOSITO_TENOR.map((t) => (
              <button
                key={t.bulan}
                type="button"
                role="radio"
                aria-checked={tenor === t.bulan}
                onClick={() => setTenor(t.bulan)}
                className={cn(
                  "rounded-xl border px-2 py-3 text-sm font-semibold transition-all",
                  tenor === t.bulan
                    ? "border-primary bg-primary text-primary-foreground shadow-violet"
                    : "border-border bg-background text-foreground hover:border-primary/40",
                )}
              >
                {t.bulan} Bulan
              </button>
            ))}
          </div>
        </div>

        <dl className="mt-7 space-y-3 rounded-2xl bg-muted/60 p-5 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Suku bunga</dt>
            <dd className="font-bold text-gold">{r.bungaPa.toLocaleString("id-ID")}% p.a.</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Bunga kotor</dt>
            <dd className="font-semibold text-foreground" data-testid="bunga-kotor"><AnimatedNumber value={r.bungaKotor} format={formatRupiah} /></dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Pajak bunga (20%)</dt>
            <dd className="font-semibold text-destructive">− <AnimatedNumber value={r.pajak} format={formatRupiah} /></dd>
          </div>
          <div className="flex items-end justify-between border-t border-border pt-3">
            <dt className="font-semibold text-foreground">Bunga bersih</dt>
            <dd className="text-2xl font-extrabold text-primary" data-testid="bunga-bersih"><AnimatedNumber value={r.bungaBersih} format={formatRupiah} /></dd>
          </div>
          <div className="flex justify-between text-xs">
            <dt className="text-muted-foreground">Total dana saat jatuh tempo</dt>
            <dd className="font-semibold text-foreground"><AnimatedNumber value={valid ? r.totalJatuhTempo : 0} format={formatRupiah} /></dd>
          </div>
        </dl>

        <Button asChild size="lg" variant="gold" className="mt-6 w-full">
          <a href={DEPOSITO_FORM_URL} target="_blank" rel="noopener noreferrer">
            Buka Deposito via Google Form <ExternalLink />
          </a>
        </Button>
      </div>
    </div>
  );
}
