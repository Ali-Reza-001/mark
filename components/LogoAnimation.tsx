"use client";

import { useEffect, useRef } from "react";

/**
 * Mark Travel logo animation. Sequence (see TIMELINE, in ms):
 *  1. destination 1's circle pops in alone
 *  2. the plane emerges from it and flies to destination 2
 *  3. on arrival, destination 2's circle pops in, then the plane flies to destination 3
 *  4. the plane settles into the logo pose, everything fades, and it starts again
 */
const RING1 = { cx: 26, cy: 118, r: 21 };
const RING2 = { cx: 169, cy: 150, r: 15 };
const LEG1 = "M26 118C55 168 120 176 169 150";
const LEG2 = "M169 150C205 134 160 70 197 20";
const PLANE =
  "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z";

export const TIMELINE = {
  ring1: [0, 550], // first circle pops in, alone
  emerge: [1000, 1350], // plane comes out of it
  leg1: [1250, 2350], // flight to destination 2
  ring2: [2350, 2900], // second circle pops in on arrival
  leg2: [3000, 4100], // flight to destination 3
  settle: [4100, 4500], // plane turns to the logo pose, trail fades
  fade: [5100, 5500], // everything fades away
  cycle: 5500, // then it starts again
} as const;
const T = TIMELINE;

type Range = readonly [number, number];
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const seg = (t: number, [a, b]: Range) => clamp((t - a) / (b - a));
const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
/** Ease-out with a small overshoot: gives the "pop". */
const pop = (p: number) => 1 + 2.70158 * (p - 1) ** 3 + 1.70158 * (p - 1) ** 2;

export function LogoAnimation({ className }: { className?: string }) {
  const svg = useRef<SVGSVGElement>(null);
  const g1 = useRef<SVGGElement>(null);
  const g2 = useRef<SVGGElement>(null);
  const trail1 = useRef<SVGPathElement>(null);
  const trail2 = useRef<SVGPathElement>(null);
  const measure1 = useRef<SVGPathElement>(null);
  const measure2 = useRef<SVGPathElement>(null);
  const plane = useRef<SVGGElement>(null);

  useEffect(() => {
    const els = [svg, g1, g2, trail1, trail2, measure1, measure2, plane].map((r) => r.current);
    if (els.some((e) => !e)) return;
    const [root, r1, r2, t1, t2, m1, m2, pl] = els as [
      SVGSVGElement, SVGGElement, SVGGElement, SVGPathElement,
      SVGPathElement, SVGPathElement, SVGPathElement, SVGGElement,
    ];
    const L1 = m1.getTotalLength();
    const L2 = m2.getTotalLength();

    const popRing = (g: SVGGElement, c: { cx: number; cy: number }, k: number) => {
      g.setAttribute("transform", `translate(${c.cx} ${c.cy}) scale(${pop(k)}) translate(${-c.cx} ${-c.cy})`);
      g.style.opacity = String(Math.min(1, k * 4));
    };

    const frame = (t: number) => {
      const a = ease(seg(t, T.leg1));
      const b = ease(seg(t, T.leg2));
      popRing(r1, RING1, seg(t, T.ring1));
      popRing(r2, RING2, seg(t, T.ring2));

      const trailOpacity = String(1 - ease(seg(t, T.settle)));
      t1.style.strokeDashoffset = String(1 - a);
      t2.style.strokeDashoffset = String(1 - b);
      t1.style.opacity = trailOpacity;
      t2.style.opacity = trailOpacity;

      const onLeg2 = t >= T.leg2[0];
      const path = onLeg2 ? m2 : m1;
      const total = onLeg2 ? L2 : L1;
      const len = (onLeg2 ? b : a) * total;
      const pt = path.getPointAtLength(len);
      const from = path.getPointAtLength(Math.max(0, len - 0.5));
      const to = path.getPointAtLength(Math.min(total, len + 0.5));
      const heading = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
      // The glyph points north-east (-45deg); settle back to that so it matches the logo.
      const rotation = (heading + 45) * (1 - ease(seg(t, T.settle)));
      const size = 1.6 * Math.max(pop(seg(t, T.emerge)), 0.0001);

      pl.setAttribute("transform", `translate(${pt.x} ${pt.y}) rotate(${rotation}) scale(${size}) translate(-12 -12)`);
      pl.style.opacity = t >= T.emerge[0] ? "1" : "0";
      root.style.opacity = String(1 - seg(t, T.fade));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame(T.fade[0] - 1); // show the finished logo, no motion
      return;
    }
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      frame((now - start) % T.cycle);
      raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const ring = "fill-none [stroke:url(#mk-gold)]";
  return (
    <svg
      ref={svg}
      viewBox="0 0 220 185"
      role="img"
      aria-label="Mark Travel logo animation"
      className={`overflow-visible ${className ?? ""}`}
    >
      <defs>
        <linearGradient id="mk-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3dc9a" />
          <stop offset=".55" stopColor="#c9a24b" />
          <stop offset="1" stopColor="#8f6b22" />
        </linearGradient>
        <path ref={measure1} d={LEG1} fill="none" />
        <path ref={measure2} d={LEG2} fill="none" />
      </defs>

      {/* flight trail */}
      {[[trail1, LEG1], [trail2, LEG2]].map(([ref, d], i) => (
        <path
          key={i}
          ref={ref as React.RefObject<SVGPathElement>}
          d={d as string}
          pathLength="1"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-[#ecd08a]/60 [stroke-dasharray:1] [stroke-dashoffset:1]"
        />
      ))}

      {/* destinations: hidden until their pop */}
      <g ref={g1} style={{ opacity: 0 }}>
        <circle cx={RING1.cx} cy={RING1.cy} r={RING1.r} strokeWidth="9" className={ring} />
      </g>
      <g ref={g2} style={{ opacity: 0 }}>
        <circle cx={RING2.cx} cy={RING2.cy} r={RING2.r} strokeWidth="8" className={ring} />
      </g>

      <g ref={plane} style={{ opacity: 0 }}>
        <path d={PLANE} fill="url(#mk-gold)" />
      </g>
    </svg>
  );
}
