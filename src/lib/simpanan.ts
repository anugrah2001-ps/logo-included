// Aturan produk simpanan Bank Aster (prototipe Tahap 1).

export const TABUNGAN = {
  setoranAwalMin: 50_000,
  saldoMinimum: 25_000,
  bungaPa: 2.5,
} as const;

export const GIRO_FORM_URL = "https://forms.google.com/simulasi-giro-bank-aster";
export const DEPOSITO_FORM_URL = "https://forms.google.com/simulasi-deposito-bank-aster";

export const DEPOSITO_MIN = 1_000_000;
export const PAJAK_BUNGA = 0.2;

export const DEPOSITO_TENOR = [
  { bulan: 1, bungaPa: 4.0 },
  { bulan: 3, bungaPa: 4.5 },
  { bulan: 6, bungaPa: 5.0 },
  { bulan: 12, bungaPa: 5.5 },
] as const;

export type TenorBulan = (typeof DEPOSITO_TENOR)[number]["bulan"];

export function bungaTenor(bulan: TenorBulan): number {
  return DEPOSITO_TENOR.find((t) => t.bulan === bulan)!.bungaPa;
}

export function hitungDeposito(nominal: number, bulan: TenorBulan) {
  const bungaPa = bungaTenor(bulan);
  const bungaKotor = Math.round((nominal * (bungaPa / 100) * bulan) / 12);
  const pajak = Math.round(bungaKotor * PAJAK_BUNGA);
  const bungaBersih = bungaKotor - pajak;
  return { bungaPa, bungaKotor, pajak, bungaBersih, totalJatuhTempo: nominal + bungaBersih };
}

export function formatRupiah(n: number): string {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

/** Nomor kartu debit virtual yang stabil untuk NIK yang sama. */
export function nomorKartuVirtual(nik: string): string {
  let h = 2166136261;
  for (const c of nik) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  const body = String(h).padStart(10, "0").slice(0, 10) + nik.slice(-2);
  const digits = ("5279" + body).slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

export function nomorRekeningVirtual(nik: string): string {
  return "889" + nik.slice(4, 11);
}
