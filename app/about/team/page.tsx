import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { TeamCard } from "@/components/TeamCard";
import { members } from "./members";

export const metadata: Metadata = {
  title: "Our team | Mark Travel & Tours",
  description: "The people who plan, book and support your travel.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet our team"
        text="Every booking is handled by people who do this every day, and who pick up the phone when you need them."
      />

      <Section>
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((m, i) => (
              <TeamCard key={`${m.name}-${i}`} member={m} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="border-gold/30 flex flex-col items-start justify-between gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl">Not sure who to contact?</h2>
              <p className="mt-2 max-w-[52ch] opacity-85">
                Send us a message and we will pass it to the right person.
              </p>
            </div>
            <ButtonLink href="/contact">Contact us</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
