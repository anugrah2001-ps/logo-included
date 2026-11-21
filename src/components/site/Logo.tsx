import asterLogo from "@/assets/aster-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="grid size-11 place-items-center rounded-2xl bg-card p-1.5 shadow-soft">
        <img src={asterLogo} alt="Logo Bank Aster" className="size-full object-contain" />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block text-lg font-extrabold tracking-tight",
            tone === "light" ? "text-midnight-foreground" : "text-foreground",
          )}
        >
          Bank Aster
        </span>
        <span
          className={cn(
            "block text-[11px] font-medium",
            tone === "light" ? "text-midnight-muted" : "text-muted-foreground",
          )}
        >
          PT Bank Aster Digital Indonesia
        </span>
      </span>
    </span>
  );
}
