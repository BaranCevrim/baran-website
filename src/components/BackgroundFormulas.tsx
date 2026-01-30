'use client';
import { useMemo, memo } from 'react';

const formulas = [
  'P = VI', 'S = √3 V_L I_L', 'Q = VI sinφ', 'Z = R + jX',
  'I_sc = V_th / Z_th', 'P_f = cosφ', 'S = P + jQ',
  'ΔV/V ≈ (Rcosφ+Xsinφ)', '∠V - ∠I = φ', 'X_d′ , X_q',
];

const BackgroundFormulas = memo(function BackgroundFormulas() {
  const items = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const f = formulas[i % formulas.length];
      const x = (i * 97) % 100;     // 0–100
      const y = (i * 53) % 100;
      const rot = ((i * 17) % 10) - 5; // -5..+5°
      const delay = (i % 10) * 0.35;
      return { f, x, y, rot, delay, key: i };
    });
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 opacity-40"
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {items.map(({ f, x, y, rot, delay, key }) => (
        <text
          key={key}
          x={x}
          y={y}
          transform={`rotate(${rot} ${x} ${y})`}
          className="fill-white/5 text-[3px] md:text-[2.4px] [font-variation-settings:'wght'_600]"
          style={{ animation: `fadeBlink 6s ${delay}s ease-in-out infinite` }}
        >
          {f}
        </text>
      ))}
    </svg>
  );
});

export default BackgroundFormulas;