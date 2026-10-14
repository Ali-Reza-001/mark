import type { FlightRoute } from "@/lib/types";
import { GsaStamp } from "@/components/GsaStamp";

const W = 600,
  H = 460;
const ORIGIN = { x: 0.5 * W, y: 0.35 * H }; // Kabul

export function FlightMap({ routes }: { routes: FlightRoute[] }) {
  return (
    <div className="border-gold/30 bg-wine/35 relative border p-4 rounded-4xl shadow-[4px_4px_10px_0_#0000003a,-4px_-4px_18px_0_#ffffff1a]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Flight routes from Kabul"
        className="block w-full"
      >
        {routes.map(({ city, x, y }, i) => {
          const px = x * W,
            py = y * H;
          const d = `M${ORIGIN.x} ${ORIGIN.y}Q${(ORIGIN.x + px) / 2} ${Math.min(ORIGIN.y, py) - 90} ${px} ${py}`;
          return (
            <g key={city}>
              <path
                d={d}
                pathLength="1"
                fill="none"
                strokeWidth="1.6"
                className="animate-draw stroke-gold [stroke-dasharray:1] [stroke-dashoffset:1]"
                style={{ animationDelay: `${0.3 + i * 0.25}s` }}
              />
              <circle cx={px} cy={py} r="5" className="fill-gold-light" />
              <text x={px + 10} y={py + 4} className="fill-ivory text-[15px]">
                {city}
              </text>
            </g>
          );
        })}
        <circle
          cx={ORIGIN.x}
          cy={ORIGIN.y}
          r="9"
          strokeWidth="3"
          className="fill-crimson stroke-gold-light"
        />
        <text
          x={ORIGIN.x + 14}
          y={ORIGIN.y - 12}
          className="fill-gold-light text-[15px] font-bold"
        >
          Kabul
        </text>
      </svg>
      {/* <div
        aria-hidden="true"
        className="animate-stamp absolute -right-2 -bottom-8 w-28 -rotate-14 sm:w-36 shadow-[4px_4px_20px_4px_#000000,-4px_-4px_18px_0_#ffffff3a] rounded-full"
      >
        <svg viewBox="0 0 120 120" className="scale-105">
          <defs>
            <path id="stamp-ring" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
          </defs>
          <circle
            cx="60"
            cy="60"
            r="56"
            strokeWidth="1.5"
            className="fill-white stroke-[#F50444]"
          />
          <circle
            cx="60"
            cy="60"
            r="34"
            strokeWidth="1.5"
            className="stroke-[#F50444] fill-none"
          />
          <text className="fill-[#F50444] text-[8.5px] font-bold tracking-wider">
            <textPath href="#stamp-ring">
              العربيه لطيران · OFFICIAL GSA · AIR ARABIA · AFGHANISTAN ·
            </textPath>
          </text>
          <image
            href="/AlArabia_icon.svg"
            x="40"
            y="44"
            width="40"
            height="32"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div> */}
      <GsaStamp />
    </div>
  );
}
