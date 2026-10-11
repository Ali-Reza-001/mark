import { cn } from "@/lib/utils";

export function Logo({
  size = 44,
  showText = true,
  className,
}: {
  size?: number;
  showText?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
        <defs>
          <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3dc9a" />
            <stop offset=".5" stopColor="#c9a24b" />
            <stop offset="1" stopColor="#8f6b22" />
          </linearGradient>
        </defs>
        <rect
          x="1.5"
          y="1.5"
          width="45"
          height="45"
          rx="10"
          fill="#5c0d1b"
          stroke="url(#logo-gold)"
          strokeWidth="2"
        />
        <path
          d="M10 35V13l14 15 14-15v22"
          fill="none"
          stroke="url(#logo-gold)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M8 40Q24 22 40 40"
          fill="none"
          stroke="#ecd08a"
          strokeWidth="1.4"
          strokeDasharray="2 3"
        />
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <b className="font-display text-gold-light text-2xl tracking-[0.22em]">MARK</b>
          <i className="text-gold text-[0.7rem] tracking-[0.12em] not-italic">
            Travel &amp; Tours
          </i>
        </span>
      )}
    </span>
  );
}
