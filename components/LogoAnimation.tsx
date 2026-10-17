"use client";

import { useEffect, useRef } from "react";

/**
 * Mark Travel logo animation, built from the original artwork (shapes, white + gold gradient).
 * Sequence (see TIMELINE, in ms):
 *  1. the globe's outer arcs pop in
 *  2. the first destination ring (bottom-right) pops in
 *  3. the plane emerges from it and flies to the left ring, drawing the lower line behind it
 *  4. the left ring pops in as the plane arrives, the plane banks round in a smooth turn
 *  5. the plane flies up-right drawing the diagonal line, then settles into the logo pose
 *  6. the finished logo holds, fades out, and the whole thing starts again
 */

// Flight legs. Also used as reveal masks so the lines only appear where the plane has passed.
const LEG1 = "M263 257.8 L237 240.8 Q201.1 225.25 175 229 L135.6 226.5";
const LEG2 =
  "M135.6 226.5 L171.5 207.5 Q212.9 195.5 269.5 141.5 C276 135.3 283 140.9 289.6 134.4";

const GLOBE_ARCS = [
  "M262.4,140.04c0.33,3.18-4.85,6.86-7.75,5.56c-1.42-0.63-2.66-1.67-3.93-2.58c-37.61-26.92-95.06-12.08-111.22,36.27c-0.66,1.98-1.13,4.06-2.01,5.95c-1.32,2.85-4.98,4.03-8.01,2.8c-3.01-1.22-2.45-3.69-1.89-5.99c3.94-16.26,12.17-30.08,24.54-41.21c18.04-16.24,39.42-23.36,63.62-21.53c15.48,1.17,29.6,6.41,42.13,15.69C259.73,136.37,261.73,137.76,262.4,140.04",
  "M292.11,203.98c0.36,8.55-1.72,17.96-5.09,27.11c-0.72,1.94-0.86,5.48-4.35,3.97c-2.69-1.16-6.17-2.32-5.65-6.51c0.13-1.03,0.51-2.03,0.81-3.03c5.7-19.09,4.55-37.7-3.93-55.79c-0.87-1.87-2.23-3.85-0.66-5.86c1.44-1.84,3.14-3.87,5.6-3.98c2.48-0.1,3.18,2.43,4.09,4.24C288.97,176.27,292.31,189.06,292.11,203.98",
  "M208.59,286.07c-18.1-0.18-34.44-5.8-49.25-16.07c-1.5-1.04-3-2.17-4.2-3.52c-1.38-1.56-4.81-2.96-2.21-5.55c2.05-2.03,4.69-4.61,8.28-2.66c1.37,0.75,2.61,1.74,3.89,2.66c18.79,13.47,39.44,17.39,61.88,11.95c2.04-0.49,4.07-1,6.1-1.52c2.27-0.59,4.04,0.05,5.59,1.82c3.1,3.54,2.76,6.12-1.63,7.75c-7.89,2.92-16.1,4.58-24.52,5.12C211.22,286.15,209.9,286.07,208.59,286.07",
];

const LINE_LOWER =
  "M238.83,240.61c-0.56,2.24-1.83,3.8-4.4,3.27c-1.77-0.37-3.48-1.08-5.19-1.74c-14.99-5.8-30.41-9.51-46.57-9.65c-1.56-0.01-3.14-0.11-4.69-0.33c-1.97-0.29-3.54-1.25-3.58-3.47c-0.05-2.61,1.68-3.63,4.01-3.88c1.04-0.11,2.08-0.18,3.13-0.15c18.21,0.61,35.77,4.26,52.58,11.3C238.1,237.62,238.92,238.72,238.83,240.61";
const LINE_DIAG =
  "M173.53,212.09c-2.28,0.22-3.18-1.04-3.84-2.54c-0.7-1.56-0.79-3.16,0.84-4.16c1.55-0.95,3.26-1.68,4.92-2.42c23.72-10.62,46.92-22.22,68.4-36.96c6.69-4.59,13.09-9.61,19.61-14.46c0.84-0.63,1.57-1.4,2.4-2.03c1.92-1.45,3.93-3.09,6.18-0.65c2.53,2.74,0.65,4.76-1.32,6.68c-1.13,1.09-2.25,2.21-3.48,3.18c-27.79,21.94-58.79,38.29-91.12,52.33C175.17,211.48,174.18,211.83,173.53,212.09";

const RING_BR_PATH =
  "M251.13,257.18c0.07-6.8,5.18-11.93,11.94-11.95c7.31-0.03,12.89,5.13,12.93,11.95c0.04,6.87-5.49,12.78-12.15,12.98c-0.14,0.01-0.28,0.01-0.42,0.01C256.37,270.18,251.05,264.61,251.13,257.18 M262.86,235.55c-12.64,0.22-22.88,10.17-22.22,22.35c0.54,10.04,7.42,22.21,22.85,21.99c13.3-0.18,22.46-9.64,22.29-23.05c-0.16-12.64-9.29-21.3-22.38-21.3C263.22,235.54,263.05,235.54,262.86,235.55";
const RING_L_PATH =
  "M134.89,245.06c-10.51-0.29-17.93-8.28-17.62-18.96c0.33-11.18,8.4-19.01,19.06-18.51c9.92,0.47,18.51,9.47,18.23,19.1c-0.3,10.15-8.93,18.37-19.14,18.37C135.24,245.07,135.07,245.07,134.89,245.06 M106.18,226.25c-0.02,16.58,12.89,29.78,29.2,29.85c16.76,0.07,29.7-13.06,29.61-30.2c-0.08-15.27-11.45-28.47-29.23-29.02c-0.29-0.01-0.58-0.01-0.86-0.01C119.01,196.87,105.54,210.78,106.18,226.25";

const PLANE_PATH =
  "M301.55,118.47c-4.11,2.89-8.35,3.71-13.31,2.63c-4.05-0.87-8.28-0.98-12.43-1.34c-1.88-0.17-3.93-0.04-4.38,2.23c-0.39,1.95,1.45,2.58,2.87,3.14c2.66,1.07,5.46,1.82,8.07,2.99c4.04,1.8,4.06,2.87,1.5,6.36c-2.75,3.76-7.26,4.67-10.84,6.81c0.51,3.35,3.76,3.82,4.88,6.33c1.37,3.06,3.44,1.84,4.18-0.66c1.1-3.73,3.29-6.48,6.35-8.64c2.18-1.53,4.02-1.18,4.93,1.4c1.21,3.45,2.18,6.98,3.28,10.46c0.32,1.01,0.78,2.03,2.03,2.06c1.64,0.04,2.39-1.26,2.46-2.52c0.24-4.42,0.46-8.87,0.27-13.28c-0.24-5.66,0.25-10.91,4.74-15.09c1.07-0.99,2.1-2.42,1.05-4.23c-0.59-0.33-1.17-0.47-1.71-0.47C303.99,116.65,302.7,117.67,301.55,118.47";

export const TIMELINE = {
  globe: [400, 1000], // globe arcs pop in
  ringBR: [1300, 1750], // first destination pops in
  emerge: [2000, 2400], // plane comes out of it
  leg1: [2150, 3650], // flight to the left ring
  ringL: [3550, 4000], // left ring pops in as the plane arrives
  turn: [3650, 4250], // plane banks round (blends into leg 2, no stop-and-go)
  leg2: [4000, 5700], // flight up-right
  settle: [5050, 5700], // plane eases into the logo pose
  fade: [7000, 7500], // finished logo fades away
  cycle: 7900, // then it starts again
} as const;
const T = TIMELINE;

const RING_BR = { x: 263, y: 257.8 };
const RING_L = { x: 135.6, y: 226.5 };
const GLOBE = { x: 209, y: 202 };
const PLANE_C = { x: 289.6, y: 134.4 };
const PLANE_HEADING = -45; // the logo plane points north-east
const TRAIL_LAG = 7; // the line's front sits at the plane's tail

type Range = readonly [number, number];
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const seg = (t: number, [a, b]: Range) => clamp((t - a) / (b - a));
/** Ease in-out (sine): gentle start and stop, no sudden acceleration. */
const ease = (p: number) => 0.5 - 0.5 * Math.cos(Math.PI * p);
/** Ease-out with a small overshoot: gives the "pop". */
const pop = (p: number) => (p <= 0 ? 0 : 1 + 2.70158 * (p - 1) ** 3 + 1.70158 * (p - 1) ** 2);
const angDiff = (a: number, b: number) => {
  let d = a - b;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return d;
};

/**
 * Heading (degrees) along a path as a function of progress 0..1.
 * The raw tangent jumps where straight and curved segments join, so it is
 * sampled once and low-pass filtered: the plane then turns smoothly instead of twitching.
 */
function buildHeading(path: SVGPathElement) {
  const total = path.getTotalLength();
  const n = Math.max(2, Math.ceil(total));
  const raw: number[] = [];
  for (let i = 0; i <= n; i++) {
    const len = (i / n) * total;
    const a = path.getPointAtLength(Math.max(0, len - 3));
    const b = path.getPointAtLength(Math.min(total, len + 3));
    raw.push((Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI);
  }
  for (let i = 1; i <= n; i++) {
    while (raw[i] - raw[i - 1] > 180) raw[i] -= 360;
    while (raw[i] - raw[i - 1] < -180) raw[i] += 360;
  }
  const R = 14;
  const smooth = raw.map((_, i) => {
    let sum = 0;
    for (let j = -R; j <= R; j++) sum += raw[Math.min(n, Math.max(0, i + j))];
    return sum / (2 * R + 1);
  });
  return (p: number) => {
    const f = clamp(p) * n;
    const i = Math.floor(f);
    const j = Math.min(n, i + 1);
    return smooth[i] + (smooth[j] - smooth[i]) * (f - i);
  };
}

export function LogoAnimation({ className }: { className?: string }) {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = svg.current;
    if (!root) return;
    const q = <E extends Element>(id: string) => root.querySelector<E>(`#mk-${id}`) as E;

    const globe = q<SVGGElement>("globe");
    const ringBR = q<SVGGElement>("ring-br");
    const ringL = q<SVGGElement>("ring-l");
    const gLower = q<SVGGElement>("g-lower");
    const gDiag = q<SVGGElement>("g-diag");
    const maskLower = q<SVGUseElement>("mask-lower");
    const maskDiag = q<SVGUseElement>("mask-diag");
    const plane = q<SVGGElement>("plane");
    const leg1 = q<SVGPathElement>("leg1");
    const leg2 = q<SVGPathElement>("leg2");
    if (![globe, ringBR, ringL, gLower, gDiag, maskLower, maskDiag, plane, leg1, leg2].every(Boolean)) return;

    const L1 = leg1.getTotalLength();
    const L2 = leg2.getTotalLength();
    const heading1 = buildHeading(leg1);
    const heading2 = buildHeading(leg2);
    maskLower.setAttribute("stroke-dasharray", `${L1} ${L1 + 50}`);
    maskDiag.setAttribute("stroke-dasharray", `${L2} ${L2 + 50}`);

    const popGroup = (g: SVGGElement, c: { x: number; y: number }, k: number) => {
      if (k <= 0) {
        g.setAttribute("opacity", "0");
        return;
      }
      g.setAttribute("opacity", String(Math.min(1, k * 3)));
      if (k >= 1) g.removeAttribute("transform");
      else g.setAttribute("transform", `translate(${c.x} ${c.y}) scale(${pop(k)}) translate(${-c.x} ${-c.y})`);
    };

    const frame = (t: number) => {
      popGroup(globe, GLOBE, seg(t, T.globe));
      popGroup(ringBR, RING_BR, seg(t, T.ringBR));
      popGroup(ringL, RING_L, seg(t, T.ringL));

      const a = ease(seg(t, T.leg1));
      const b = ease(seg(t, T.leg2));
      const d1 = a * L1;
      const d2 = b * L2;

      // Lines are revealed just behind the plane...
      maskLower.setAttribute("stroke-dashoffset", String(L1 - (a >= 1 ? L1 : Math.max(0, d1 - TRAIL_LAG))));
      maskDiag.setAttribute("stroke-dashoffset", String(L2 - (b >= 1 ? L2 : Math.max(0, d2 - TRAIL_LAG))));
      // ...and once a leg is complete they show unmasked: the exact original artwork.
      if (a >= 1) gLower.removeAttribute("mask");
      else gLower.setAttribute("mask", "url(#mk-reveal-lower)");
      if (b >= 1) gDiag.removeAttribute("mask");
      else gDiag.setAttribute("mask", "url(#mk-reveal-diag)");

      // Position: leg 1, then leg 2 (they share the left ring's centre).
      const onLeg2 = t >= T.leg2[0];
      const path = onLeg2 ? leg2 : leg1;
      const pt = path.getPointAtLength(onLeg2 ? d2 : d1);

      // Heading: follows leg 1, banks round at the left ring, then follows leg 2.
      const from = heading1(a);
      const to = heading2(b);
      const heading = from + ease(seg(t, T.turn)) * angDiff(to, from);
      const rotation = angDiff(heading, PLANE_HEADING) * (1 - ease(seg(t, T.settle)));

      const k = seg(t, T.emerge);
      plane.setAttribute("opacity", t >= T.emerge[0] ? String(Math.min(1, k * 4)) : "0");
      const final = t >= T.settle[1] && b >= 1;
      if (final) plane.removeAttribute("transform");
      else
        plane.setAttribute(
          "transform",
          `translate(${pt.x} ${pt.y}) rotate(${rotation}) scale(${Math.max(pop(k), 0.0001)}) translate(${-PLANE_C.x} ${-PLANE_C.y})`,
        );

      root.style.opacity = String(1 - ease(seg(t, T.fade)));
    };

    frame(0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame(T.fade[0] - 1); // show the finished logo, no motion
      return;
    }

    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      frame(Math.max(0, now - start) % T.cycle);
      raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={svg}
      viewBox="62 56 290 290"
      role="img"
      aria-label="Mark Travel logo animation"
      className={`block overflow-visible ${className ?? ""}`}
    >
      <defs>
        {/* flight legs: used for the plane's position/heading and as reveal masks */}
        <path id="mk-leg1" d={LEG1} fill="none" />
        <path id="mk-leg2" d={LEG2} fill="none" />
        <mask id="mk-reveal-lower" maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="360">
          <use
            id="mk-mask-lower"
            href="#mk-leg1"
            stroke="#fff"
            strokeWidth="32"
            strokeLinecap="butt"
            strokeDasharray="0 10000"
            fill="none"
          />
        </mask>
        <mask id="mk-reveal-diag" maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="360">
          <use
            id="mk-mask-diag"
            href="#mk-leg2"
            stroke="#fff"
            strokeWidth="32"
            strokeLinecap="butt"
            strokeDasharray="0 10000"
            fill="none"
          />
        </mask>

        <linearGradient
          id="mk-grad-br"
          gradientUnits="userSpaceOnUse"
          x1="-20.7569"
          y1="402.2606"
          x2="-15.0917"
          y2="402.2606"
          gradientTransform="matrix(7.9746 0 0 -7.9746 406.1428 3465.686)"
        >
          <stop offset="0" stopColor="#E6BA2C" />
          <stop offset="1" stopColor="#925F1A" />
        </linearGradient>
        <linearGradient
          id="mk-grad-l"
          gradientUnits="userSpaceOnUse"
          x1="-29.8501"
          y1="409.0942"
          x2="-24.1848"
          y2="409.0942"
          gradientTransform="matrix(10.3854 0 0 -10.3854 416.1604 4475.1455)"
        >
          <stop offset="0" stopColor="#E6BA2C" />
          <stop offset="1" stopColor="#925F1A" />
        </linearGradient>
        <linearGradient
          id="mk-grad-plane"
          gradientUnits="userSpaceOnUse"
          x1="-18.4605"
          y1="413.5256"
          x2="-12.7953"
          y2="413.5256"
          gradientTransform="matrix(6.3997 0 0 -6.3997 389.525 2780.8779)"
        >
          <stop offset="0" stopColor="#E6BA2C" />
          <stop offset="1" stopColor="#925F1A" />
        </linearGradient>
      </defs>

      {/* 1. globe: outer arcs */}
      <g id="mk-globe" opacity="0">
        {GLOBE_ARCS.map((d, i) => (
          <path key={i} d={d} fill="#FFFFFF" />
        ))}
      </g>

      {/* interior connecting lines, revealed progressively behind the plane */}
      <g id="mk-g-lower" mask="url(#mk-reveal-lower)">
        <path d={LINE_LOWER} fill="#FFFFFF" />
      </g>
      <g id="mk-g-diag" mask="url(#mk-reveal-diag)">
        <path d={LINE_DIAG} fill="#FFFFFF" />
      </g>

      {/* 2. bottom-right destination (first) */}
      <g id="mk-ring-br" opacity="0">
        <path d={RING_BR_PATH} fill="url(#mk-grad-br)" />
      </g>

      {/* 3. left destination (second, pops on arrival) */}
      <g id="mk-ring-l" opacity="0">
        <path d={RING_L_PATH} fill="url(#mk-grad-l)" />
      </g>

      {/* plane: original shape, identity transform in the final frame */}
      <g id="mk-plane" opacity="0">
        <path d={PLANE_PATH} fill="url(#mk-grad-plane)" />
      </g>
    </svg>
  );
}
