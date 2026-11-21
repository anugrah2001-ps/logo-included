import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VirtualCard } from "@/components/site/VirtualCard";
import { Rate, SpecTable } from "./SpecTable";
import { TABUNGAN, formatRupiah, nomorKartuVirtual, nomorRekeningVirtual } from "@/lib/simpanan";

const schema = z.object({
  nama: z.string().trim().min(3, "Nama minimal 3 huruf").max(60, "Nama maksimal 60 huruf")
    .regex(/^[A-Za-z .'-]+$/, "Nama hanya boleh berisi huruf"),
  nik: z.string().trim().regex(/^\d{16}$/, "NIK harus 16 digit angka"),
  hp: z.string().trim().regex(/^08\d{8,11}$/, "No. HP diawali 08, 10–13 digit"),
  setoran: z.number({ invalid_type_error: "Isi nominal setoran" })
    .min(TABUNGAN.setoranAwalMin, `Setoran awal minimal ${formatRupiah(TABUNGAN.setoranAwalMin)}`)
    .max(1_000_000_000, "Nominal terlalu besar untuk simulasi"),
});

type Result = { nama: string; nik: string; hp: string; setoran: number };

export function TabunganTab() {
  const [form, setForm] = useState({ nama: "", nik: "", hp: "", setoran: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [result, setResult] = useState<Result | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({
      ...form,
      setoran: form.setoran === "" ? undefined : Number(form.setoran.replace(/\D/g, "")),
    });
    if (!parsed.success) {
      const errs: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof typeof form;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setResult(parsed.data);
  };

  const field = (key: keyof typeof form, label: string, props: React.ComponentProps<typeof Input>) => (
    <div className="space-y-1.5">
      <Label htmlFor={key}>{label}</Label>
      <Input
        id={key}
        value={form[key]}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        aria-invalid={!!errors[key]}
        className="h-11 rounded-xl bg-background"
        {...props}
      />
      {errors[key] && <p className="text-xs font-medium text-destructive">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <SpecTable
        title="Spesifikasi Tabungan Aster Saver"
        rows={[
          ["Manfaat", "Transaksi harian & bebas biaya transfer"],
          ["Setoran Awal", formatRupiah(TABUNGAN.setoranAwalMin)],
          ["Biaya Admin", <span className="font-bold text-success">Rp 0 / Gratis</span>],
          ["Saldo Minimum", formatRupiah(TABUNGAN.saldoMinimum)],
          ["Suku Bunga", <Rate>2,5% p.a.</Rate>],
          ["Persyaratan", "WNI, e-KTP, min. 17 tahun"],
        ]}
      />

      <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
        {!result ? (
          <form onSubmit={submit} noValidate className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-foreground">Simulasi Pembukaan Rekening Tabungan</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Isi data berikut untuk membuat kartu debit virtual Bank Aster.
              </p>
            </div>
            {field("nama", "Nama Lengkap", { placeholder: "Sesuai e-KTP", autoComplete: "name", maxLength: 60 })}
            {field("nik", "NIK", { placeholder: "16 digit NIK", inputMode: "numeric", maxLength: 16 })}
            {field("hp", "No. HP", { placeholder: "08xxxxxxxxxx", inputMode: "tel", maxLength: 13 })}
            {field("setoran", "Setoran Awal (Rp)", { placeholder: "Minimal 50.000", inputMode: "numeric", maxLength: 13 })}
            <Button type="submit" size="lg" className="w-full">
              Buka Rekening Simulasi
            </Button>
          </form>
        ) : (
          <div className="animate-card-in space-y-6">
            <div className="flex items-center gap-3 rounded-2xl bg-success-soft p-4 text-success">
              <CheckCircle2 className="size-6 shrink-0" />
              <div>
                <p className="font-bold">Rekening berhasil dibuka (simulasi)</p>
                <p className="text-sm">Selamat datang di Bank Aster, {result.nama.split(" ")[0]}!</p>
              </div>
            </div>
            <VirtualCard name={result.nama} number={nomorKartuVirtual(result.nik)} className="mx-auto" />
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-muted/60 p-5 text-sm">
              <div>
                <p className="text-muted-foreground">No. Rekening</p>
                <p className="mt-0.5 font-mono font-bold text-foreground">{nomorRekeningVirtual(result.nik)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Saldo Awal</p>
                <p className="mt-0.5 text-lg font-extrabold text-primary">{formatRupiah(result.setoran)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Produk</p>
                <p className="mt-0.5 font-semibold text-foreground">Aster Saver</p>
              </div>
              <div>
                <p className="text-muted-foreground">Suku Bunga</p>
                <p className="mt-0.5 font-bold text-gold">2,5% p.a.</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setResult(null);
                setForm({ nama: "", nik: "", hp: "", setoran: "" });
              }}
            >
              <RotateCcw /> Simulasi Ulang
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
