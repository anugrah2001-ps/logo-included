import { Building2, ExternalLink, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SpecTable } from "./SpecTable";
import { GIRO_FORM_URL } from "@/lib/simpanan";

const DOKUMEN = ["e-KTP pengurus", "NPWP Badan", "NIB/SIUP", "Akta Pendirian"];

export function GiroTab() {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <SpecTable
        title="Spesifikasi Aster Giro Bisnis"
        rows={[
          ["Manfaat", "Kelola arus kas bisnis & transaksi nominal besar"],
          ["Karakteristik", "Cek/Bilyet Giro digital & laporan mutasi lengkap"],
          ["Persyaratan", "e-KTP pengurus, NPWP Badan, NIB/SIUP, Akta Pendirian"],
          ["Biaya Admin", "Rp 25.000/bln"],
          ["Setoran Awal", "Rp 1.000.000"],
        ]}
      />
      <div className="flex flex-col rounded-3xl bg-hero p-8 text-midnight-foreground">
        <Building2 className="size-9 text-gold" />
        <h3 className="mt-5 text-2xl font-bold">Rekening giro untuk bisnis yang bertumbuh</h3>
        <p className="mt-3 leading-relaxed text-midnight-muted">
          Terbitkan Cek dan Bilyet Giro secara digital, pantau mutasi harian, dan kelola transaksi
          bernominal besar dari satu dasbor.
        </p>
        <div className="mt-6 rounded-2xl bg-midnight-foreground/5 p-5">
          <p className="text-sm font-semibold">Siapkan dokumen berikut:</p>
          <ul className="mt-3 grid grid-cols-2 gap-2.5 text-sm text-midnight-muted">
            {DOKUMEN.map((d) => (
              <li key={d} className="flex items-center gap-2">
                <FileCheck2 className="size-4 text-gold" /> {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="w-full">Simulasi Pembukaan Rekening Giro</Button>
            </DialogTrigger>
            <DialogContent className="rounded-3xl sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Simulasi Pembukaan Rekening Giro</DialogTitle>
                <DialogDescription>
                  Pengajuan rekening Aster Giro Bisnis dilanjutkan melalui formulir Google. Pastikan
                  dokumen badan usaha sudah siap sebelum mengisi.
                </DialogDescription>
              </DialogHeader>
              <ul className="space-y-2 rounded-2xl bg-muted/60 p-4 text-sm">
                {DOKUMEN.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-foreground">
                    <FileCheck2 className="size-4 text-primary" /> {d}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full">
                <a href={GIRO_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Lanjutkan ke Google Form Giro <ExternalLink />
                </a>
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
