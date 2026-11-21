/** Animated aurora + star field shared by every dark hero. */
// Kept to the edges and right side so they never sit inside headline text.
const STARS = [
  [6, 8, 0], [28, 6, 1.2], [62, 10, 0.6], [72, 88, 2], [86, 22, 0.3],
  [94, 60, 1.6], [78, 52, 0.9], [96, 90, 2.4], [48, 94, 1.1], [3, 92, 2.8],
];

export function HeroBackdrop({ stars = true }: { stars?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-stars opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -right-32 -top-40 size-[36rem] animate-aurora rounded-full bg-violet/35 blur-3xl" />
      <div className="absolute -bottom-48 -left-24 size-[28rem] animate-aurora rounded-full bg-gold/15 blur-3xl [animation-delay:-6s]" />
      {stars &&
        STARS.map(([x, y, d], i) => (
        <span
          key={i}
          className="absolute size-1 animate-twinkle rounded-full bg-midnight-foreground/80"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-midnight-foreground/20 to-transparent" />
    </div>
  );
}
