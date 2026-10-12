import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";

type Item = { title: string; text: string };

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  included: Item[];
  notesTitle: string;
  notes: string[];
  steps: Item[];
  ctaTitle: string;
  ctaText: string;
};

/** Shared layout for the Umrah, Visas and Tickets pages. Only the data differs. */
export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        accent={p.accent}
        text={p.intro}
        ctas={[
          { label: "Get a quote", href: "/contact" },
          { label: "All services", href: "/services", outline: true },
        ]}
      />

      <Section>
        <Container>
          <h2 className="mb-10 text-4xl md:text-5xl">What is included</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {p.included.map((i) => (
              <div key={i.title} className="border-gold border-t-2 pt-5">
                <h3 className="text-gold-light text-2xl">{i.title}</h3>
                <p className="mt-2 opacity-80">{i.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-gold/30 from-wine border-y bg-linear-to-br to-[#2a060d]">
        <Container className="grid items-start gap-12 md:grid-cols-2">
          <h2 className="text-4xl md:text-5xl">{p.notesTitle}</h2>
          <ul className="flex flex-wrap gap-3">
            {p.notes.map((n) => (
              <li
                key={n}
                className="border-gold text-gold-light rounded-full border px-4 py-2"
              >
                {n}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-10 text-4xl md:text-5xl">How it works</h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {p.steps.map((s, i) => (
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
              <h2 className="text-3xl md:text-4xl">{p.ctaTitle}</h2>
              <p className="mt-2 max-w-[52ch] opacity-85">{p.ctaText}</p>
            </div>
            <ButtonLink href="/contact">Contact us</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
