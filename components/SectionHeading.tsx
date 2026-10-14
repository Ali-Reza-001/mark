import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  center,
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-gold mb-3 text-sm tracking-[0.2em] uppercase">{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg opacity-85">{text}</p>}
    </div>
  );
}
