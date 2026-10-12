import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Official GSA of Air Arabia | Mark Travel & Tours",
  description: "Mark Travel & Tours represents Air Arabia in Afghanistan.",
};

const roles = [
  { title: "Sales & ticketing", text: "We sell Air Arabia tickets directly to travelers, agents and companies." },
  { title: "Traveler support", text: "Changes, refunds and questions are handled by our local team, in your language." },
  { title: "Partner network", text: "We work with travel agents and corporate clients to keep Air Arabia easy to book." },
];

const forPartners = [
  "Travel agents",
  "Corporate accounts",
  "Group bookings",
  "Organizations & NGOs",
  "Hajj & Umrah groups",
];

const steps = [
  { title: "Contact our GSA desk", text: "Tell us who you are and what you book." },
  { title: "Get set up", text: "We share fares, conditions and how to book with us." },
  { title: "Book and manage", text: "Issue tickets and handle changes through one dedicated team." },
];

export default function GsaPage() {
  return (
    <>
      <PageHero
        eyebrow="Air Arabia"
        title="Official GSA of Air Arabia,"
        accent="in Afghanistan."
        text="A General Sales Agent is the airline's authorized representative in a market. We sell and support Air Arabia travel locally, so you deal with a team that can act on the spot."
        ctas={[
          { label: "Book a flight", href: "/services/tickets" },
          { label: "Become a partner", href: "/contact", outline: true },
        ]}
      />

      <Section>
        <Container>
          <h2 className="mb-10 text-4xl md:text-5xl">What a GSA does for you</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} className="border-gold border-t-2 pt-5">
                <h3 className="text-gold-light text-2xl">{r.title}</h3>
                <p className="mt-2 opacity-80">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-gold/30 from-wine border-y bg-linear-to-br to-[#2a060d]">
        <Container className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl">Who we work with</h2>
            <p className="opacity-90">
              From a single traveler to a whole delegation, the same desk handles your
              booking and stays with you after you buy.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {forPartners.map((p) => (
              <li key={p} className="border-gold text-gold-light rounded-full border px-4 py-2">
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-10 text-4xl md:text-5xl">Working with us</h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-display text-gold/60 text-6xl">{i + 1}</span>
                <h3 className="text-gold-light text-2xl">{s.title}</h3>
                <p className="mt-2 opacity-80">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="border-gold/30 from-wine flex flex-col items-start justify-between gap-6 rounded-2xl border bg-linear-to-br to-[#2a060d] p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl">Talk to the GSA desk</h2>
              <p className="mt-2 max-w-[52ch] opacity-85">
                Fares, group bookings or agent accounts: send us a message and we will reply.
              </p>
            </div>
            <ButtonLink href="/contact">Contact us</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
