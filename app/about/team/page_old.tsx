import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon } from "@/components/ServiceIcon";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About us | Mark Travel & Tours",
  description: "Who we are, what we do and why travelers and businesses trust us.",
};

const values = [
  { title: "Expertise", text: "Tickets, visas, hotels and insurance handled by people who know the details." },
  { title: "Reliability", text: "Confirmed in writing, checked twice, and supported until you are home." },
  { title: "Personal care", text: "A real person answers, whether you are one traveler or a whole delegation." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mark"
        title="The company behind"
        accent="every journey."
        text="Mark Travel & Tours connects travelers, businesses and partners across Afghanistan with dependable travel services and personal support."
        ctas={[
          { label: "Meet the team", href: "/team" },
          { label: "Contact us", href: "/contact", outline: true },
        ]}
      />

      <Section>
        <Container className="grid items-start gap-12 md:grid-cols-2">
          <h2 className="text-4xl md:text-5xl">One team for the whole trip</h2>
          <div className="space-y-4 text-lg opacity-85">
            {/* Replace with your own company story */}
            <p>
              We started with a simple idea: travel should not mean calling five different
              offices. Today flights, visas, hotels, insurance, tours and corporate travel
              are all arranged under one roof.
            </p>
            <p>
              Whether you are planning a family Umrah, a business trip or travel for an
              entire organization, you deal with one team that knows your booking from
              start to finish.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <h2 className="mb-10 text-4xl md:text-5xl">What we stand for</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-gold border-t-2 pt-5">
                <h3 className="text-gold-light text-2xl">{v.title}</h3>
                <p className="mt-2 opacity-80">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-gold/30 from-wine border-y bg-linear-to-br to-[#2a060d]">
        <Container className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl">Official GSA of Air Arabia</h2>
            <p className="mb-6 opacity-90">
              We represent Air Arabia in Afghanistan, which means direct access to fares
              and support for travelers, agents and corporate clients.
            </p>
            <ButtonLink href="/air-arabia-gsa">About the partnership</ButtonLink>
          </div>
          <ul className="flex flex-wrap gap-3">
            {site.services.map((s) => (
              <li
                key={s.slug}
                className="border-gold text-gold-light flex items-center gap-2 rounded-full border px-4 py-2"
              >
                <ServiceIcon name={s.icon} className="size-4" />
                {s.name}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border-gold/30 flex flex-col items-start justify-between gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl">Let us plan your next trip</h2>
              <p className="mt-2 max-w-[52ch] opacity-85">
                Tell us where you want to go and we will take care of the rest.
              </p>
            </div>
            <ButtonLink href="/contact">Plan a trip</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
