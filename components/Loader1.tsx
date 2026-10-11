import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface LoaderProps {
  title?: string;
  message?: string;
  /** Data finished loading: fades the screen out. */
  done?: boolean;
  /** Loading failed: shows the retry state. */
  error?: boolean;
  onRetry?: () => void;
}

/** Full-screen loading page. Edit the props, copy or animation here to restyle it. */
export function Loader({
  title = "Mark Travel",
  message = "Preparing your journey",
  done,
  error,
  onRetry,
}: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed inset-0 z-50 grid place-items-center bg-[radial-gradient(circle_at_50%_40%,var(--color-crimson),var(--color-ink)_70%)] text-center transition-[opacity,visibility] duration-700",
        done && "invisible opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-3 px-6">
        <Logo size={72} showText={false} className="animate-pulse-soft" />
        <h1 className="text-gold-light text-4xl tracking-[0.2em]">{title}</h1>
        <svg viewBox="0 0 300 80" className="w-64 overflow-visible" aria-hidden="true">
          <path
            d="M10 70Q150 -30 290 70"
            pathLength="1"
            fill="none"
            strokeWidth="1.5"
            className="animate-draw-loop stroke-gold [stroke-dasharray:1] [stroke-dashoffset:1]"
          />
          <circle cx="10" cy="70" r="4" className="fill-gold-light" />
          <circle cx="290" cy="70" r="4" className="fill-gold-light" />
          <path
            d="M0 0l-9 5 2-5-2-5z"
            className="animate-fly fill-gold-light"
            style={{ offsetPath: 'path("M10 70Q150 -30 290 70")' }}
          />
        </svg>
        {error ? (
          <>
            <p className="opacity-80">
              We couldn&apos;t load the site. Check your connection.
            </p>
            <Button size="sm" onClick={onRetry}>
              Try again
            </Button>
          </>
        ) : (
          <p className="tracking-widest opacity-70">{message}</p>
        )}
      </div>
    </div>
  );
}
