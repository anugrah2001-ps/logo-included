import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-midnight-deep text-midnight-muted">
      <div className="container-aster grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed">
            Perbankan digital yang tenang dan terang. Tumbuh Cerdas, Terarah Pasti.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold text-midnight-foreground">Tautan Cepat</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-midnight-foreground">Beranda</Link></li>
            <li><Link to="/profil" className="hover:text-midnight-foreground">Profil Bank</Link></li>
            <li><Link to="/produk" className="hover:text-midnight-foreground">Produk Simpanan</Link></li>
            <li><Link to="/ekosistem" className="hover:text-midnight-foreground">Ekosistem Layanan</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold text-midnight-foreground">Produk Simpanan</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/produk" search={{ tab: "tabungan" }} className="hover:text-midnight-foreground">Tabungan Aster Saver</Link></li>
            <li><Link to="/produk" search={{ tab: "giro" }} className="hover:text-midnight-foreground">Aster Giro Bisnis</Link></li>
            <li><Link to="/produk" search={{ tab: "deposito" }} className="hover:text-midnight-foreground">Aster Deposito Berjangka</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-midnight-foreground/10">
        <div className="container-aster flex flex-col gap-2 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© 2026 PT Bank Aster Digital Indonesia</p>
          <p className="text-midnight-muted/90">
            Prototipe Simulasi Layanan Perbankan Digital — Tugas UAS Mata Kuliah Perbankan, D-IV
            Manajemen Informatika, Politeknik Negeri Sriwijaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
