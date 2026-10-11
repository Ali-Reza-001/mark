import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { FlightMap } from "@/components/FlightMap";
import { ServiceIcon } from "@/components/ServiceIcon";
import { PostCard } from "@/components/blog/PostExplorer";
import { site } from "@/lib/data";

const steps = [
  [
    "Tell us your plans",
    "Share your dates, destination and budget by form, phone or in person.",
  ],
  [
    "We arrange everything",
    "Tickets, visas, hotels and insurance, checked and confirmed by one team.",
  ],
  [
    "You travel with support",
    "Changes, delays or questions on the road? We are a call away.",
  ],
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[radial-gradient(ellipse_at_80%_20%,rgba(123,18,38,0.7),transparent_60%)] pt-20 pb-16">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-gold mb-4 tracking-wide">Welcome to Mark</p>
            <h1 className="text-6xl sm:text-7xl lg:text-[6.2rem] lg:leading-[0.95]">
              Excellence in <em className="text-gold-gradient">every journey.</em>
            </h1>
            <p className="my-6 max-w-[56ch] text-lg opacity-85">
              From flights and visas to hotels, insurance, tours and corporate travel, we
              bring every part of your trip together with expertise, reliability and
              personal care.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/services">Explore services</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Plan a trip
              </ButtonLink>
            </div>
          </div>
          <FlightMap routes={site.routes} />
        </Container>
      </section>

      <Section>
        <Container>
          <h2 className="mb-3 text-4xl md:text-5xl">Excellence without borders</h2>
          <p className="max-w-[56ch] text-lg opacity-85">
            Reliable, seamless and globally connected travel solutions for businesses and
            organizations.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {site.pillars.map((p) => (
              <div key={p.title} className="border-gold border-t-2 pt-5">
                <h3 className="text-gold-light text-2xl">{p.title}</h3>
                <p className="mt-2 opacity-80">{p.text}</p>
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
              Mark Travel &amp; Tours connects travelers, businesses and partners across
              Afghanistan with dependable air travel, backed by experienced support at
              every stage.
            </p>
            <ButtonLink href="/about">Our story</ButtonLink>
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
          <h2 className="mb-10 text-4xl md:text-5xl">How it works</h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <span className="font-display text-gold/60 text-6xl">{i + 1}</span>
                <h3 className="text-gold-light text-2xl">{t}</h3>
                <p className="mt-2 opacity-80">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl">From the journal</h2>
            <ButtonLink href="/blogs" variant="outline" size="sm">
              All articles
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {site.posts.slice(0, 3).map((p) => (
              <div key={p.slug} className="relative flex">
                <PostCard post={p} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
