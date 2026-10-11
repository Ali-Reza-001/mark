import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "border-gold/30 from-crimson/45 to-ink/60 rounded border bg-linear-to-br p-7",
        className,
      )}
      {...props}
    />
  );
}
