"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import logoImage from "@/app/Logo.png";
import { Container } from "../ui/Container";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  NAV DATA — add, remove or reorder items here. That's all you need to do.  */
/*  • An item with `children` gets a dropdown (and a chevron).                */
/*  • `description` on a sub item is optional.                                */
/* -------------------------------------------------------------------------- */
type SubItem = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: SubItem[] };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  // {
  //   label: "Destinations",
  //   href: "/destinations",
  //   children: [
  //     { label: "Europe", href: "/destinations/europe", description: "Classic cities and coastlines" },
  //     { label: "Asia", href: "/destinations/asia", description: "Temples, markets and islands" },
  //     { label: "Middle East", href: "/destinations/middle-east", description: "Desert, history and luxury" },
  //   ],
  // },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tickets", href: "/services/ticket", description: "Best fares, flexible dates" },
      { label: "Umra", href: "/services/umra", description: "Sacred journey to Makkah and Madinah" },
      { label: "Visa support", href: "/services/visa", description: "Paperwork handled for you" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Team", href: "/about/team", description: "Meet the people behind the scenes" },
      { label: "About Us", href: "/about", description: "Learn more about our company" },
      { label: "Air Arabia GSA", href: "/about/air-arabia-gsa", description: "We are official GSA of Air Arabia" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null); // mobile accordion

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isItemActive = (item: NavItem) =>
    isActive(item.href) || !!item.children?.some((c) => isActive(c.href));

  // Close the mobile menu on route change and on Escape
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
          className="text-gold-light hover:bg-gold/10 focus-visible:ring-gold rounded-md p-2 transition focus:outline-none focus-visible:ring-2 md:hidden"
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
            "bg-ink border-gold/25 absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] flex-col overflow-y-auto border-b px-[4%] py-4",
            "md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-1 md:overflow-visible md:border-0 md:bg-transparent md:p-0",
            open ? "flex" : "hidden",
          )}
        >
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            const hasChildren = !!item.children?.length;
            const isExpanded = expanded === item.href;

            return (
              <div key={item.href} className="group/item relative">
                {/* Top-level row: link + (mobile only) expand toggle */}
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "group/link text-ink-foreground relative isolate flex flex-1 items-center gap-1.5 overflow-hidden rounded-md px-3 py-2.5 text-sm tracking-wide transition-colors duration-300 md:flex-none md:py-2",
                      "hover:text-gold-light focus-visible:text-gold-light focus-visible:ring-gold focus:outline-none focus-visible:ring-2",
                      active && "text-gold-light",
                    )}
                  >
                    {/* Fill-up gold wash */}
                    <span
                      aria-hidden
                      className={cn(
                        "from-gold/30 via-gold/10 to-gold/0 absolute inset-0 -z-10 translate-y-full bg-linear-to-t transition-transform duration-300 ease-out",
                        "group-hover/link:translate-y-0 group-focus-visible/link:translate-y-0",
                        hasChildren && "md:group-hover/item:translate-y-0",
                        active && "translate-y-[70%]",
                      )}
                    />
                    {/* Gold hairline that opens from the centre */}
                    <span
                      aria-hidden
                      className={cn(
                        "via-gold absolute inset-x-2 bottom-0 h-px scale-x-0 bg-linear-to-r from-transparent to-transparent transition-transform duration-500 ease-out",
                        "group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100",
                        active && "scale-x-100",
                      )}
                    />
                    {/* Diamond marker */}
                    <span
                      aria-hidden
                      className={cn(
                        "bg-gold absolute -bottom-0.75 left-1/2 hidden size-1.5 -translate-x-1/2 rotate-45 scale-0 transition-transform duration-300 md:block",
                        "group-hover/link:scale-100 group-focus-visible/link:scale-100",
                        active && "scale-100",
                      )}
                    />
                    <span className="transition-transform duration-300 group-hover/link:-translate-y-px">
                      {item.label}
                    </span>
                    {hasChildren && (
                      <ChevronDown
                        aria-hidden
                        className="hidden size-3.5 transition-transform duration-300 md:block md:group-hover/item:rotate-180 md:group-focus-within/item:rotate-180"
                      />
                    )}
                  </Link>

                  {hasChildren && (
                    <button
                      type="button"
                      className="text-gold-light hover:bg-gold/10 rounded-md p-2 md:hidden"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isExpanded}
                      aria-controls={`sub-${item.href}`}
                      onClick={() => setExpanded(isExpanded ? null : item.href)}
                    >
                      <ChevronDown
                        className={cn("size-4 transition-transform duration-300", isExpanded && "rotate-180")}
                      />
                    </button>
                  )}
                </div>

                {/* Sub item box */}
                {hasChildren && (
                  <div
                    id={`sub-${item.href}`}
                    className={cn(
                      // mobile: simple accordion
                      isExpanded ? "block" : "hidden",
                      // desktop: floating box, shown on hover / keyboard focus
                      "md:invisible md:absolute md:top-full md:left-1/2 md:block md:w-72 md:-translate-x-1/2 md:translate-y-2 md:pt-3 md:opacity-0",
                      "md:transition-all md:duration-200 md:ease-out",
                      "md:group-hover/item:visible md:group-hover/item:translate-y-0 md:group-hover/item:opacity-100",
                      "md:group-focus-within/item:visible md:group-focus-within/item:translate-y-0 md:group-focus-within/item:opacity-100",
                    )}
                  >
                    <ul
                      className={cn(
                        "border-gold/25 relative flex flex-col gap-0.5 border-l pl-2 md:rounded-lg md:border md:bg-ink/95 md:p-2 md:pl-2 md:shadow-2xl md:shadow-black/50 md:backdrop-blur",
                      )}
                    >
                      {/* Notch pointing at the parent */}
                      <span
                        aria-hidden
                        className="bg-ink border-gold/25 absolute -top-1.5 left-1/2 hidden size-3 -translate-x-1/2 rotate-45 border-t border-l md:block"
                      />
                      {item.children!.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(sub.href) ? "page" : undefined}
                            className={cn(
                              "group/sub text-ink-foreground relative flex items-center justify-between gap-3 overflow-hidden rounded-md px-3 py-2 transition-colors duration-200",
                              "hover:bg-gold/10 hover:text-gold-light focus-visible:bg-gold/10 focus-visible:text-gold-light focus-visible:ring-gold focus:outline-none focus-visible:ring-2",
                              isActive(sub.href) && "text-gold-light bg-gold/10",
                            )}
                          >
                            {/* Gold bar that slides in from the left */}
                            <span
                              aria-hidden
                              className={cn(
                                "bg-gold absolute inset-y-1 left-0 w-0.5 origin-center scale-y-0 rounded-full transition-transform duration-200",
                                "group-hover/sub:scale-y-100 group-focus-visible/sub:scale-y-100",
                                isActive(sub.href) && "scale-y-100",
                              )}
                            />
                            <span className="flex flex-col transition-transform duration-200 group-hover/sub:translate-x-1">
                              <span className="text-sm">{sub.label}</span>
                              {sub.description && (
                                <span className="text-xs opacity-60">{sub.description}</span>
                              )}
                            </span>
                            <span
                              aria-hidden
                              className="text-gold -translate-x-2 opacity-0 transition-all duration-200 group-hover/sub:translate-x-0 group-hover/sub:opacity-100"
                            >
                              &rsaquo;
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
