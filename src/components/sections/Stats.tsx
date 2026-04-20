import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATS } from '@/data/differentials';
import { useCountUp } from '@/hooks/useCountUp';

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const match = value.match(/(\D*)(\d+(?:\.\d+)?)(\D*)/);
  const prefix = match?.[1] ?? '';
  const num = match ? parseFloat(match[2].replace('.', '')) : 0;
  const suffix = match?.[3] ?? '';
  const hasDot = value.includes('.');
  const displayRaw = useCountUp(num, { duration: 1500, start: inView });
  const display = hasDot ? displayRaw.toLocaleString('pt-BR') : displayRaw.toString();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-6 py-8 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-serif text-5xl md:text-6xl text-white leading-none mb-3">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="border-y border-line bg-bg-card/30">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
          {STATS.map((s, i) => (
            <StatItem key={s.label} value={s.number} label={s.label} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
