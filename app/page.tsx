import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { FlightMap } from "@/components/FlightMap";
import { RingIcon } from "@/components/RingIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { PostCard } from "@/components/blog/PostExplorer";
import { clients, homeServices, partners, whyChoose } from "@/lib/content";
import { site } from "@/lib/data";

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

      {/* Why choose us */}
      <Section>
        <Container>
          <SectionHeading
            center
            eyebrow="Why choose us"
            title="Why choose Mark Travel & Tours"
            text="We are committed to making every journey simple, reliable, and memorable through personalized service and professional travel solutions."
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ title, text, icon }) => (
              <li key={title} className="flex">
                <Card className="hover:border-gold w-full transition hover:-translate-y-1">
                  <RingIcon icon={icon} />
                  <h3 className="text-gold-light mt-5 text-2xl">{title}</h3>
                  <p className="mt-2 opacity-80">{text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Services */}
      <Section className="border-gold/30 from-wine border-y bg-linear-to-br to-[#2a060d]">
        <Container>
          <SectionHeading
            center
            eyebrow="Our services"
            title="Complete travel solutions"
            text="Delivering complete travel solutions with reliability, professionalism, and care."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map(({ title, text, icon }) => (
              <li
                key={title}
                className="border-gold/30 bg-ink/40 hover:border-gold flex flex-col items-center rounded border p-6 text-center transition"
              >
                <RingIcon icon={icon} size="lg" />
                <h3 className="text-gold-light mt-4 text-2xl">{title}</h3>
                <p className="mt-1 text-sm opacity-75">{text}</p>
              </li>
            ))}
            <li className="bg-gold-gradient text-ink flex flex-col items-center justify-center rounded p-6 text-center">
              <p className="font-display text-3xl font-bold">Ready to go?</p>
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

      {/* Clients */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Our clients"
              title="Trusted by those who travel for a living"
            />
            <p className="mt-5 max-w-[48ch] opacity-85">
              We are proud to serve a diverse portfolio of clients by delivering reliable
              and personalized travel solutions tailored to their unique needs.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {clients.map(({ name, icon }) => (
              <li
                key={name}
                className="border-gold/30 from-crimson/40 to-ink/60 flex items-center gap-4 rounded border bg-linear-to-br p-5"
              >
                <RingIcon icon={icon} size="sm" />
                <span className="font-display text-gold-light text-2xl leading-tight font-bold">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Partners */}
      <Section className="border-gold/30 border-y bg-[#10030a]">
        <Container>
          <SectionHeading
            center
            eyebrow="Our partners"
            title="Connected to the world's best"
            text="Partnering with trusted airlines and leading travel technology providers to deliver reliable, seamless, and customer-focused travel experiences."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="border-gold/30 rounded border p-8 lg:col-span-2">
              <h3 className="text-gold text-2xl">Airline partners</h3>
              <p className="mt-1 text-sm opacity-75">
                We collaborate with reputable domestic and international airlines to
                connect our clients with destinations across the globe.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {partners.airlines.map((a) => (
                  <li
                    key={a}
                    className={
                      a === partners.gsa
                        ? "border-gold bg-gold/10 text-gold-light rounded-full border px-5 py-2 font-bold"
                        : "border-gold/30 rounded-full border px-5 py-2"
                    }
                  >
                    {a}
                    {a === partners.gsa && (
                      <span className="text-gold ml-2 text-xs tracking-wider uppercase">
                        GSA
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              <div className="border-gold/30 rounded border p-8">
                <h3 className="text-gold text-2xl">Travel technology partner</h3>
                <p className="font-display text-gold-gradient mt-3 text-4xl font-bold">
                  {partners.technology.name}
                </p>
                <p className="mt-2 text-sm opacity-75">{partners.technology.text}</p>
              </div>
              <div className="border-gold/30 rounded border p-8">
                <h3 className="text-gold text-2xl">Memberships &amp; certifications</h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {partners.memberships.map((m) => (
                    <li
                      key={m}
                      className="text-gold-light flex items-center gap-2 font-bold"
                    >
                      <BadgeCheck className="text-gold size-5" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Journal */}
      <Section>
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
