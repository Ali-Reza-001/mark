"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useSite } from "../AppShell";
import { Logo } from "../Logo";
import Image from "next/image";
import logoImage from "@/app/Logo.png";
import { Container } from "../ui/Container";

export function Footer() {
  const { nav, since, address, email, phone, name } = useSite();
  const link = "flex items-start gap-2 opacity-85 transition hover:text-gold-light";
  return (
    <footer className="border-gold/30 mt-8 border-t bg-[#10030a] pt-16">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.4fr]">
        <div>
          <Image src={logoImage} alt="Mark Travel logo" width={160} height={60} />
          <p className="mt-4 max-w-xs opacity-65">
            Every journey perfected. Serving Afghanistan since {since}.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-gold mb-2 text-xl">Explore</h4>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-gold-light opacity-85 transition"
            >
              {n.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-gold mb-2 text-xl">Find us</h4>
          <p className={link}>
            <MapPin className="text-gold mt-1 size-4 shrink-0" />
            {address}
          </p>
          <a className={link} href={`mailto:${email}`}>
            <Mail className="text-gold mt-1 size-4 shrink-0" />
            {email}
          </a>
          <a className={link} href={`tel:${phone.replace(/\s/g, "")}`}>
            <Phone className="text-gold mt-1 size-4 shrink-0" />
            {phone}
          </a>
        </div>
      </Container>
      <Container className="border-gold/20 mt-12 border-t py-6 text-sm opacity-60">
        © {new Date().getFullYear()} {name}. All rights reserved.
        Designed & Developed By <a href="https://alireza.dev" className="text-blue-300 text-md underline">Alireza Ahmadi</a>
      </Container>
    </footer>
  );
}
