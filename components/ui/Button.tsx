import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center rounded-xl font-bold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60";
const variants: Record<Variant, string> = {
  solid: "bg-gold-gradient text-ink",
  outline: "text-gold-light ring-1 ring-gold ring-inset hover:bg-gold/10",
};
const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
};

interface Options {
  variant?: Variant;
  size?: Size;
  className?: string;
}
const styles = ({ variant = "solid", size = "md", className }: Options) =>
  cn(base, variants[variant], sizes[size], className);

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: Options & React.ComponentProps<typeof Link>) {
  return <Link className={styles({ variant, size, className })} {...props} />;
}

export function Button({
  variant,
  size,
  className,
  ...props
}: Options & React.ComponentProps<"button">) {
  return <button className={styles({ variant, size, className })} {...props} />;
}
