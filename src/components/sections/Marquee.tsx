import { MARQUEE_ITEMS } from '@/data/differentials';

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="border-y border-line py-8 overflow-hidden mask-fade-x"
      aria-hidden="true"
    >
      <div className="flex gap-14 whitespace-nowrap animate-marquee w-max">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-14">
            <span className="font-serif italic text-[clamp(1.75rem,4vw,3rem)] text-white/65 font-normal">
              {item}
            </span>
            <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
          </div>
        ))}
      </div>
    </div>
  );
}
