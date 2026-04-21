import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

type LngLat = { lng: number; lat: number };

const MAP_W = 1000;
const MAP_H = 500;

// Projeção equiretangular
function project({ lng, lat }: LngLat): { x: number; y: number } {
  return {
    x: ((lng + 180) / 360) * MAP_W,
    y: ((90 - lat) / 180) * MAP_H,
  };
}

// Grid de coordenadas aproximando silhueta dos continentes (dotted map).
// Cada entrada é [lngMin, lngMax, latMin, latMax] de uma "mancha" continental.
// Dentro de cada mancha, geramos pontos com jitter para dar naturalidade.
const LANDMASSES: Array<[number, number, number, number]> = [
  // América do Norte (contíguos + México)
  [-168, -52, 25, 70],
  [-115, -80, 13, 33],
  // América Central
  [-92, -77, 7, 18],
  // América do Sul
  [-82, -34, -55, 13],
  // Europa
  [-10, 40, 36, 70],
  [-25, -15, 63, 68], // Islândia
  // Escandinávia
  [4, 30, 55, 71],
  // Rússia oeste
  [28, 60, 50, 68],
  // África
  [-18, 52, -35, 37],
  // Oriente Médio
  [32, 60, 12, 38],
  // Ásia Central / Sibéria
  [40, 180, 42, 75],
  // Sudeste Asiático + Índia
  [60, 110, 5, 42],
  [95, 141, -10, 24],
  // China / Mongólia
  [73, 135, 18, 50],
  // Japão + península
  [125, 146, 30, 46],
  // Oceania
  [112, 155, -40, -10],
  [165, 180, -47, -34], // Nova Zelândia
];

function generateDots(seed: number, count: number) {
  // PRNG simples determinístico
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const dots: { x: number; y: number; r: number }[] = [];
  for (let i = 0; i < count; i++) {
    const box = LANDMASSES[Math.floor(rand() * LANDMASSES.length)];
    const lng = box[0] + rand() * (box[1] - box[0]);
    const lat = box[2] + rand() * (box[3] - box[2]);
    const { x, y } = project({ lng, lat });
    dots.push({ x, y, r: 0.9 + rand() * 0.8 });
  }
  return dots;
}

const ORIGINS: Array<{
  id: string;
  country: string;
  material: string;
  flag: string;
  coord: LngLat;
}> = [
  { id: 'it', country: 'Itália', material: 'Calacata · Statuario · Travertino', flag: '🇮🇹', coord: { lng: 12.5, lat: 41.9 } },
  { id: 'es', country: 'Espanha', material: 'Linha TECH · Ultracompactas', flag: '🇪🇸', coord: { lng: -3.7, lat: 40.4 } },
  { id: 'tr', country: 'Turquia', material: 'Onix · Travertino Premium', flag: '🇹🇷', coord: { lng: 32.8, lat: 39.9 } },
  { id: 'gr', country: 'Grécia', material: 'Thassos · Mármores Brancos', flag: '🇬🇷', coord: { lng: 23.7, lat: 37.9 } },
  { id: 'eg', country: 'Egito', material: 'Galala · Sinai Pearl', flag: '🇪🇬', coord: { lng: 31.2, lat: 30.0 } },
  { id: 'in', country: 'Índia', material: 'Granitos · Quartzitos Raros', flag: '🇮🇳', coord: { lng: 77.2, lat: 28.6 } },
  { id: 'cn', country: 'China', material: 'Granitos · Lâminas TECH', flag: '🇨🇳', coord: { lng: 116.4, lat: 39.9 } },
];

const DESTINATION: LngLat = { lng: -46.6, lat: -23.5 }; // São Paulo

function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // Curva para cima — quanto maior a distância, maior a curvatura
  const curvature = dist * 0.28;
  // Perpendicular ao segmento (apontando "para cima" no plano)
  const nx = -dy / dist;
  const ny = dx / dist;
  const cx = mx + nx * curvature;
  const cy = my + ny * curvature - Math.min(dist * 0.08, 40); // bias pra cima
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

export function ImportMap() {
  const prefersReducedMotion = useReducedMotion();
  const dest = useMemo(() => project(DESTINATION), []);
  const dots = useMemo(() => generateDots(42, 900), []);

  const origins = useMemo(
    () =>
      ORIGINS.map((o) => {
        const p = project(o.coord);
        return { ...o, p, d: arcPath(p, dest) };
      }),
    [dest],
  );

  return (
    <section
      id="importacao"
      className="relative py-24 lg:py-36 border-y border-line overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 30%, rgba(200,169,126,0.08) 0%, rgba(10,10,10,0) 60%), #080808',
      }}
    >
      <div className="container-site relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-eyebrow mb-5 justify-center">Importação Global</div>
          <h2 className="heading-lg mb-6">
            Do melhor do mundo <br className="hidden md:block" />
            <span className="italic text-gold">direto ao Brasil</span>
          </h2>
          <div className="h-px w-14 bg-gold mx-auto mb-6" />
          <p className="text-body">
            Curadoria de pedras nobres com relacionamento direto com pedreiras e fornecedores em sete
            países — Itália, Espanha, Turquia, Grécia, Egito, Índia e China. Cada chapa rastreada,
            inspecionada e entregue pronta para o seu projeto.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto max-w-6xl">
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="w-full h-auto"
              role="img"
              aria-label="Mapa de origens globais de importação Montefalco"
            >
              <defs>
                <radialGradient id="glowGold" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c8a97e" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#c8a97e" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#c8a97e" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGold" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#c8a97e" stopOpacity="0" />
                  <stop offset="50%" stopColor="#d4ba94" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#c8a97e" stopOpacity="0" />
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="hardGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Pontos do mapa — silhueta pontilhada */}
              <g fill="#2a2520" opacity="0.9">
                {dots.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={d.r} />
                ))}
              </g>

              {/* Rotas (primeiro a camada escura de base, depois a animada) */}
              {origins.map((o) => (
                <path
                  key={`bg-${o.id}`}
                  d={o.d}
                  stroke="rgba(200,169,126,0.12)"
                  strokeWidth={0.8}
                  fill="none"
                />
              ))}

              {origins.map((o, i) => (
                <motion.path
                  key={`line-${o.id}`}
                  d={o.d}
                  stroke="url(#lineGold)"
                  strokeWidth={1.4}
                  fill="none"
                  filter="url(#softGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 2.2,
                    delay: prefersReducedMotion ? 0 : 0.3 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}

              {/* Pulsos de luz correndo pelas rotas */}
              {!prefersReducedMotion &&
                origins.map((o, i) => (
                  <circle key={`pulse-${o.id}`} r={3.2} fill="#fff5e1" filter="url(#hardGlow)">
                    <animateMotion
                      dur={`${3.4 + (i % 3) * 0.4}s`}
                      repeatCount="indefinite"
                      begin={`${2.5 + i * 0.25}s`}
                      path={o.d}
                      rotate="auto"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.1;0.85;1"
                      dur={`${3.4 + (i % 3) * 0.4}s`}
                      repeatCount="indefinite"
                      begin={`${2.5 + i * 0.25}s`}
                    />
                  </circle>
                ))}

              {/* Destino (Brasil) — pulso radial permanente */}
              <circle cx={dest.x} cy={dest.y} r={18} fill="url(#glowGold)">
                <animate attributeName="r" values="14;22;14" dur="2.6s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0.9;0.4;0.9"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={dest.x} cy={dest.y} r={4} fill="#c8a97e" filter="url(#hardGlow)" />

              {/* Marcadores de origem */}
              {origins.map((o, i) => (
                <g key={`mk-${o.id}`}>
                  <motion.circle
                    cx={o.p.x}
                    cy={o.p.y}
                    r={10}
                    fill="url(#glowGold)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                  />
                  <motion.circle
                    cx={o.p.x}
                    cy={o.p.y}
                    r={2.5}
                    fill="#d4ba94"
                    filter="url(#softGlow)"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
                  />
                </g>
              ))}

              {/* Label de destino */}
              <g transform={`translate(${dest.x + 14}, ${dest.y + 4})`}>
                <text
                  fill="#c8a97e"
                  fontFamily="'Inter', sans-serif"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="2"
                >
                  BRASIL
                </text>
                <text
                  y="14"
                  fill="#777"
                  fontFamily="'Inter', sans-serif"
                  fontSize="8.5"
                  letterSpacing="1.5"
                >
                  HUB · SÃO PAULO
                </text>
              </g>
            </svg>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-line">
          {ORIGINS.map((o, i) => (
            <Reveal
              key={o.id}
              delay={i * 0.06}
              className="bg-bg-card/60 p-5 flex flex-col items-center text-center hover:bg-bg-card transition-colors"
            >
              <div className="text-2xl mb-2" aria-hidden>
                {o.flag}
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.2em] text-gold mb-1">
                {o.country}
              </div>
              <div className="text-[0.7rem] text-muted leading-snug">{o.material}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
