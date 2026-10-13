import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our team | Mark Travel & Tours",
  description: "The people who plan, book and support your travel.",
};

/* Replace with real people. Add or delete rows freely. */
const people = [
  { name: "Full Name", role: "Managing Director" },
  { name: "Full Name", role: "Head of Operations" },
  { name: "Full Name", role: "Ticketing Manager" },
  { name: "Full Name", role: "Visa & Documentation Manager" },
  { name: "Full Name", role: "Umrah Coordinator" },
  { name: "Full Name", role: "Customer Support Lead" },
];

const departments = [
  { name: "Ticketing", text: "Fares, bookings, changes and refunds for Air Arabia and other airlines." },
  { name: "Visas", text: "Document review, applications and tracking until a decision." },
  { name: "Umrah & tours", text: "Packages, hotels and transport planned from start to finish." },
  { name: "Corporate travel", text: "Account management and central booking for businesses." },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

export default function TeamPage() {
  return (
    <>
      <PageHero
        // eyebrow="Our team"
        title="Experts who"
        // accent="know the way."
        text="Every booking is handled by people who do this every day, and who pick up the phone when you need them."
      // ctas={[{ label: "Talk to us", href: "/contact" }]}
      />

      <Section>
        <Container>
          <h2 className="mb-10 text-4xl md:text-5xl">Leadership</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((p, i) => (
              <div key={p.role + i} className="border-gold border-t-2 pt-5">
                {/* To use a photo: replace this div with <Image src=... className="size-24 rounded-full object-cover" /> */}
                <div className="border-gold/60 bg-wine font-display text-gold-light mb-4 flex size-24 items-center justify-center rounded-full border text-3xl">
                  {initials(p.name)}
                </div>
                <h3 className="text-gold-light text-2xl">{p.name}</h3>
                <p className="mt-1 opacity-80">{p.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-gold/30 from-wine border-y bg-linear-to-br to-[#2a060d]">
        <Container>
          <h2 className="mb-10 text-4xl md:text-5xl">How we are organised</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {departments.map((d) => (
              <div key={d.name}>
                <h3 className="text-gold-light text-2xl">{d.name}</h3>
                <p className="mt-2 opacity-85">{d.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border-gold/30 flex flex-col items-start justify-between gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl">Want to work with us?</h2>
              <p className="mt-2 max-w-[52ch] opacity-85">
                Send us a message and tell us what you are good at.
              </p>
            </div>
            <ButtonLink href="/contact" variant="outline">
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
