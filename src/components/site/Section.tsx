import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroBackdrop } from "./HeroBackdrop";
import { OrbitVisual, type OrbitChip } from "./OrbitVisual";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-violet-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  desc?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl space-y-4", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">{title}</h2>
      {desc && <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{desc}</p>}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
  chips,
}: {
  eyebrow: string;
  title: ReactNode;
  desc: ReactNode;
  chips?: OrbitChip[];
}) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <HeroBackdrop />
      <div className="container-aster relative grid items-center gap-10 py-20 md:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="animate-fade-up">
            <Eyebrow className="bg-midnight-foreground/10 text-midnight-foreground">{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold leading-[1.1] text-midnight-foreground [animation-delay:120ms] md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-midnight-muted [animation-delay:240ms]">
            {desc}
          </p>
        </div>
        {chips && <OrbitVisual chips={chips} className="hidden lg:block" />}
      </div>
    </section>
  );
}
