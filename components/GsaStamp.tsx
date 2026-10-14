import { cn } from "@/lib/utils";

/**
 * "Official GSA of Air Arabia" stamp.
 * Drop it inside any `relative` parent: <GsaStamp />
 * Override position/size with className: <GsaStamp className="-top-6 left-4 w-24" />
 *
 * The whole stamp is drawn in one colour (`text-[#F50444]` on the wrapper);
 * every stroke and fill uses `currentColor`, so changing that class re-colours it.
 */
export function GsaStamp({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-stamp absolute -right-2 -bottom-8 aspect-square w-28 -rotate-14 sm:w-36",
        "rounded-full bg-white text-[#F50444] shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/20",
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="size-full">
        <defs>
          {/* Circle the ring text follows (r = 42, starts at 9 o'clock, runs clockwise) */}
          <path id="gsa-ring" d="M60 60m-42 0a42 42 0 1 1 84 0a42 42 0 1 1-84 0" />
        </defs>

        {/* Outer double border */}
        <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="60" r="53.5" fill="none" stroke="currentColor" strokeWidth="0.75" />

        {/* Inner circle that frames the logo */}
        <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1.25" />

        {/* Ring text, stretched to fill the circle evenly */}
        <text fill="currentColor" fontSize="8" fontWeight="700">
          <textPath href="#gsa-ring" textLength="258" lengthAdjust="spacing">
            OFFICIAL GSA • AIR ARABIA • AFGHANISTAN •
          </textPath>
        </text>

        {/* Logo + Arabic name, centred inside the inner circle */}
        <image
          href="/AlArabia_icon.svg"
          x="42"
          y="38"
          width="36"
          height="28"
          preserveAspectRatio="xMidYMid meet"
        />
        <text
          x="60"
          y="79"
          textAnchor="middle"
          fill="currentColor"
          fontSize="7"
          fontWeight="700"
          direction="rtl"
        >
          العربية للطيران
        </text>
      </svg>
    </div>
  );
}
