import type { Metadata } from "next";
import { Eye, Plane, Target } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { RingIcon } from "@/components/RingIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { history, mission, values, vision } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2015, Mark Travel & Tours is one of Afghanistan's trusted travel service providers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Setting the mark of excellence."
        text="To deliver reliable, seamless, and customer-focused travel solutions with professionalism, integrity, and excellence."
      />

      {/* History: three stops, like the logo (big circle, small circle, plane) */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our history"
            title="From a small local agency to a trusted name"
          />
          <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            <div
              aria-hidden
              className="border-gold/40 absolute top-7 right-[16%] left-[8%] hidden border-t-2 border-dashed md:block"
            />
            {history.map((h, i) => (
              <div key={h.label} className="relative">
                <div className="flex h-14 items-center">
                  {i === 0 && (
                    <span
                      aria-hidden
                      className="border-gold bg-ink relative z-10 size-14 rounded-full border-[7px]"
                    />
                  )}
                  {i === 1 && (
                    <span
                      aria-hidden
                      className="border-gold bg-ink relative z-10 size-10 rounded-full border-[5px]"
                    />
                  )}
                  {i === 2 && (
                    <Plane
                      aria-hidden
                      className="text-gold-light bg-ink relative z-10 size-10 p-1"
                    />
                  )}
                </div>
                <p className="text-gold mt-5 text-sm tracking-[0.2em] uppercase">
                  {h.label}
                </p>
                <h3 className="text-gold-light mt-1 text-3xl">{h.title}</h3>
                <p className="mt-3 opacity-85">{h.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Vision & mission */}
      <Section className="border-gold/30 from-wine border-y bg-linear-to-br to-[#2a060d]">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            { label: "Vision", text: vision, icon: Eye },
            { label: "Mission", text: mission, icon: Target },
          ].map(({ label, text, icon }) => (
            <div
              key={label}
              className="border-gold/40 bg-ink/40 rounded border p-8 md:p-10"
            >
              <RingIcon icon={icon} size="lg" />
              <h2 className="mt-6 text-4xl">{label}</h2>
              <p className="font-display mt-4 text-2xl leading-snug italic md:text-[1.7rem]">
                &ldquo;{text}&rdquo;
              </p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Core values */}
      <Section>
        <Container>
          <SectionHeading
            center
            eyebrow="Core values"
            title="What we stand for"
            text="Seven principles guide every journey we plan."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ name, quote, text, icon }) => (
              <li key={name} className="flex">
                <Card className="hover:border-gold w-full transition hover:-translate-y-1">
                  <RingIcon icon={icon} />
                  <h3 className="text-gold-light mt-5 text-2xl">{name}</h3>
                  <p className="font-display text-gold mt-2 text-xl leading-snug italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm opacity-80">{text}</p>
                </Card>
              </li>
            ))}
            <li className="bg-gold-gradient text-ink flex flex-col items-start justify-center rounded p-7">
              <p className="font-display text-3xl leading-tight font-bold">
                Experience it on your next journey.
              </p>
              <Link
                href="/contact"
                className="bg-ink text-gold-light mt-5 inline-flex rounded-sm px-7 py-3.5 text-sm font-bold hover:brightness-125"
              >
                Plan a trip
              </Link>
            </li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
