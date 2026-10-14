import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = {
  md: ["size-14", "size-6"],
  lg: ["size-16", "size-7"],
  sm: ["size-11", "size-5"],
} as const;

/** Icon inside a thick gold ring, echoing the circles in the Mark logo. */
export function RingIcon({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const [box, glyph] = sizes[size];
  return (
    <span
      aria-hidden
      className={cn(
        "border-gold bg-ink/50 text-gold-light grid shrink-0 place-items-center rounded-full border-[3px]",
        box,
        className,
      )}
    >
      <Icon className={glyph} />
    </span>
  );
}
