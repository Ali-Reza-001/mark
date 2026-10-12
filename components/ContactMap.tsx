import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

/* Edit the office details here. */
const OFFICE = {
  name: "Mark Travel & Tours",
  address: "Kabul, Afghanistan", // replace with the full street address
  hours: "Saturday to Thursday, 8:00 to 17:00", // replace with real hours
};

const query = encodeURIComponent(`${OFFICE.name}, ${OFFICE.address}`);
// Tip: for a precise pin, open your office in Google Maps > Share > Embed a map,
// then paste the src URL from that iframe here instead.
const EMBED_SRC = `https://www.google.com/maps?q=${query}&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/search/?api=1&query=${query}`;

export function ContactMap() {
  return (
    <Section className="pt-0">
      <Container className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="mb-6 text-4xl md:text-5xl">Visit our office</h2>
          <dl className="space-y-5">
            <div className="border-gold border-t-2 pt-4">
              <dt className="text-gold-light text-xl">Address</dt>
              <dd className="mt-1 opacity-85">
                {OFFICE.name}
                <br />
                {OFFICE.address}
              </dd>
            </div>
            <div className="border-gold border-t-2 pt-4">
              <dt className="text-gold-light text-xl">Opening hours</dt>
              <dd className="mt-1 opacity-85">{OFFICE.hours}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <ButtonLink href={DIRECTIONS} variant="outline">
              Get directions
            </ButtonLink>
          </div>
        </div>

        <div className="border-gold/30 min-h-[340px] overflow-hidden rounded-2xl border">
          <iframe
            title={`Map showing ${OFFICE.name}`}
            src={EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full min-h-[340px] w-full [filter:grayscale(0.35)_contrast(1.05)]"
          />
        </div>
      </Container>
    </Section>
  );
}
