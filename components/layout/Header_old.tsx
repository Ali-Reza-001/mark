"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSite } from "../AppShell";
import Image from "next/image";
import logoImage from "@/app/Logo.png";
import { Container } from "../ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const { nav } = useSite();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-gold/25 bg-ink/90 sticky top-0 z-30 border-b backdrop-blur">
      <a
        href="#content"
        className="focus:bg-gold focus:text-ink sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:px-3 focus:py-1"
      >
        Skip to content
      </a>
      <Container className="flex items-center justify-between py-3">
        <Link href="/" aria-label="Mark Travel home">
          <Image src={logoImage} alt="Mark Travel logo" width={160} height={60} />
        </Link>
        <button
          type="button"
          className="text-gold-light p-2 md:hidden"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-nav"
          aria-label="Primary"
          className={cn(
            "bg-ink absolute inset-x-0 top-full flex-col px-[4%] py-4 md:static md:flex md:flex-row md:gap-8 md:bg-transparent md:p-0",
            open ? "flex" : "hidden",
          )}
        >
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? "page" : undefined}
              className={cn(
                "hover:border-gold hover:text-gold-light border-b-2 border-transparent py-2 transition md:py-1",
                isActive(href) && "border-gold text-gold-light",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
