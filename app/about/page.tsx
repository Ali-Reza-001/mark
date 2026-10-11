import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mark Travel & Tours: official GSA of Air Arabia, serving Afghanistan since 2015.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Your journey. Our mark of excellence."
        text={`Since ${site.since}, Mark has helped individuals, businesses, organizations and institutions travel with confidence.`}
      />
      <Section>
        <Container className="grid items-start gap-14 md:grid-cols-2">
          <div className="space-y-5 opacity-90">
            <h2 className="text-4xl md:text-5xl">Simpler, smoother, stress-free</h2>
            <p>
              We provide reliable, personalized travel solutions. One team handles
              tickets, visas, accommodation and insurance, so you deal with one trusted
              partner instead of five.
            </p>
            <p>
              As the official General Sales Agent of Air Arabia, we deliver efficient,
              customer-focused air travel services for travelers and partners across
              Afghanistan.
            </p>
            <ButtonLink href="/contact">Talk to our team</ButtonLink>
          </div>
          <div className="grid gap-8">
            {site.pillars.map((p) => (
              <div key={p.title} className="border-gold border-t-2 pt-5">
                <h3 className="text-gold-light text-2xl">{p.title}</h3>
                <p className="mt-2 opacity-80">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
