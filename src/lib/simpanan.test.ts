import { describe, expect, it } from "vitest";
import { DEPOSITO_MIN, TABUNGAN, bungaTenor, hitungDeposito } from "./simpanan";

describe("Aturan produk simpanan", () => {
  it("setoran awal tabungan minimal Rp 50.000", () => {
    expect(TABUNGAN.setoranAwalMin).toBe(50_000);
  });

  it("minimum penempatan deposito Rp 1.000.000", () => {
    expect(DEPOSITO_MIN).toBe(1_000_000);
  });

  it("bunga deposito tertinggi 5,5% p.a. untuk tenor 12 bulan", () => {
    expect(bungaTenor(12)).toBe(5.5);
  });

  it("pajak bunga deposito 20% dari bunga kotor", () => {
    const r = hitungDeposito(10_000_000, 12);
    expect(r.bungaKotor).toBe(550_000);
    expect(r.pajak).toBe(110_000);
    expect(r.bungaBersih).toBe(440_000);
  });
});
