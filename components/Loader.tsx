import { LogoAnimation } from "./LogoAnimation";

interface LoaderProps {
  title?: string;
  message?: string;
  /** Data finished loading: fades the screen out. */
  done?: boolean;
  /** Loading failed: shows the retry state. */
  error?: boolean;
  onRetry?: () => void;
}

/**
 * Full-screen loading page. Needs only React and Tailwind (no theme setup).
 * Render it until your data is ready, pass done={true} to fade it out,
 * then unmount it about 800ms later.
 */
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
      className={`fixed inset-0 z-50 grid place-items-center bg-[radial-gradient(circle_at_50%_40%,#7b1226,#1a0508_70%)] text-center text-[#f3e9d6] transition-[opacity,visibility] duration-700 ${
        done ? "invisible opacity-0" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-3 px-6">
        <LogoAnimation className="w-56 sm:w-64" />
        <h1 className="text-4xl tracking-[0.2em] text-[#ecd08a]">{title}</h1>
        {error ? (
          <>
            <p className="opacity-80">We couldn&apos;t load the site. Check your connection.</p>
            <button
              type="button"
              onClick={onRetry}
              className="rounded-sm bg-gradient-to-br from-[#f3dc9a] via-[#c9a24b] to-[#a07c2c] px-5 py-2.5 text-sm font-bold text-[#1a0508] hover:brightness-110"
            >
              Try again
            </button>
          </>
        ) : (
          <p className="tracking-widest opacity-70">{message}</p>
        )}
      </div>
    </div>
  );
}
