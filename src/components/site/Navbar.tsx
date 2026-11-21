import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil Bank" },
  { to: "/produk", label: "Produk Simpanan" },
  { to: "/ekosistem", label: "Ekosistem Layanan" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-500",
        scrolled
          ? "border-midnight-foreground/10 bg-midnight/85 shadow-lift backdrop-blur-xl"
          : "border-transparent bg-midnight",
      )}
    >
      <div
        className={cn(
          "container-aster flex items-center justify-between gap-6 transition-[height] duration-500",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" onClick={() => setOpen(false)} className="transition-transform hover:scale-[1.02]">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-midnight-foreground/10 bg-midnight-foreground/5 p-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-medium text-midnight-muted transition-all duration-300 hover:text-midnight-foreground data-[status=active]:bg-midnight-foreground data-[status=active]:text-midnight"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/produk" search={{ tab: "tabungan" }}>
              Buka Rekening
            </Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full text-midnight-foreground hover:bg-midnight-foreground/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-aster flex animate-fade-up flex-col gap-1 pb-5 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              className="rounded-xl px-4 py-3 text-sm font-medium text-midnight-muted data-[status=active]:bg-midnight-foreground/10 data-[status=active]:text-midnight-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Button asChild className="mt-2 sm:hidden">
            <Link to="/produk" search={{ tab: "tabungan" }} onClick={() => setOpen(false)}>
              Buka Rekening
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
