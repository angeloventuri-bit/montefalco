interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={`font-serif text-xl tracking-[0.18em] uppercase text-white select-none ${className ?? ''}`}
      aria-label="Montefalco"
    >
      Monte<span className="text-gold">falco</span>
    </span>
  );
}
