"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import type { Member } from "@/app/about/team/members";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

export function TeamCard({ member }: { member: Member }) {
  // If the photo file is missing, fall back to an initials avatar instead of a broken image.
  const [failed, setFailed] = useState(false);

  return (
    <article className="group border-gold/30 hover:border-gold overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1">
      <div className="from-wine relative aspect-4/5 overflow-hidden bg-linear-to-br to-[#2a060d]">
        {failed ? (
          <div className="font-display text-gold-light flex size-full items-center justify-center text-7xl">
            {initials(member.name)}
          </div>
        ) : (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.level}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        )}
        <span className="bg-ink/80 text-gold-light border-gold/50 absolute top-3 left-3 rounded-full border px-3 py-1 text-xs tracking-wide backdrop-blur">
          {member.level}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-gold-light text-2xl">{member.name}</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href={`mailto:${member.email}`}
              className="hover:text-gold-light flex items-center gap-2 break-all opacity-85 transition hover:opacity-100"
            >
              <Mail className="text-gold size-4 shrink-0" aria-hidden />
              {member.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${member.phone.replace(/\s/g, "")}`}
              className="hover:text-gold-light flex items-center gap-2 opacity-85 transition hover:opacity-100"
            >
              <Phone className="text-gold size-4 shrink-0" aria-hidden />
              {member.phone}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
