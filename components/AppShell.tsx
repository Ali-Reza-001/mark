"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Site } from "@/lib/types";
import { Loader } from "./Loader";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

const MIN_LOADER_MS = 5800; // keeps the animation from flashing on fast connections
const SiteContext = createContext<Site | null>(null);

export const useSite = () => {
  const site = useContext(SiteContext);
  if (!site)
    throw new Error("useSite must be used inside <AppShell> after the data has loaded");
  return site;
};

export function AppShell({ children }: { children: ReactNode }) {
  const [site, setSite] = useState<Site | null>(null);
  const [failed, setFailed] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const load = useCallback(async () => {
    setFailed(false);
    const started = Date.now();
    try {
      const res = await fetch("/api/site");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Site = await res.json();
      await new Promise((r) =>
        setTimeout(r, Math.max(0, MIN_LOADER_MS - (Date.now() - started))),
      );
      setSite(data);
    } catch {
      setFailed(true);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!site) return;
    const id = setTimeout(() => setLoaderGone(true), 800); // after the fade-out
    return () => clearTimeout(id);
  }, [site]);

  return (
    <SiteContext.Provider value={site}>
      {!loaderGone && <Loader done={!!site} error={failed} onRetry={load} />}
      {site && <Header />}
      <main id="content">{children}</main>
      {site && <Footer />}
    </SiteContext.Provider>
  );
}
