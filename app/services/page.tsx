import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon } from "@/components/ServiceIcon";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Flights, visas, hotels, insurance, Umrah, tours and corporate travel.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Everything your trip needs"
        text="Seven services, one team, from the first booking to the flight home."
      />
      <Section>
        <Container className="grid gap-5">
          {site.services.map((s) => (
            <article
              key={s.slug}
              className="border-gold bg-wine relative flex flex-col items-start gap-6 rounded-xl border-l-4 px-8 py-7 md:flex-row md:items-center md:justify-between"
            >
              {/* ticket notches and tear line */}
              <span
                aria-hidden
                className="bg-ink absolute -top-3 right-[22%] hidden size-6 rounded-full md:block"
              />
              <span
                aria-hidden
                className="bg-ink absolute right-[22%] -bottom-3 hidden size-6 rounded-full md:block"
              />
              <span
                aria-hidden
                className="border-gold-light/40 absolute inset-y-4 right-[22%] hidden border-l-2 border-dashed md:block"
              />
              <div className="flex items-start gap-5">
                <ServiceIcon name={s.icon} className="text-gold mt-1 size-8 shrink-0" />
                <div>
                  <h2 className="text-gold-light text-3xl">{s.name}</h2>
                  <p className="mt-1 max-w-[52ch] opacity-80">{s.description}</p>
                </div>
              </div>
              <ButtonLink
                href={`/contact?service=${encodeURIComponent(s.name)}`}
                size="sm"
                className="md:mr-[3%]"
              >
                Enquire
              </ButtonLink>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
