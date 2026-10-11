import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us where you are going and we will reply with options.",
};

export default function ContactPage() {
  const rows = [
    { Icon: MapPin, label: "Visit", value: site.address, href: undefined },
    { Icon: Mail, label: "Write", value: site.email, href: `mailto:${site.email}` },
    {
      Icon: Phone,
      label: "Call",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
    },
  ];
  return (
    <>
      <PageHero
        title="Plan your next journey"
        text="Tell us where you are going and we will reply with options."
      />
      <Section>
        <Container className="grid items-start gap-14 md:grid-cols-2">
          <div className="space-y-8">
            {rows.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <Icon className="text-gold mt-1 size-5 shrink-0" />
                <div>
                  <h2 className="text-gold text-xl">{label}</h2>
                  {href ? (
                    <a href={href} className="hover:text-gold-light">
                      {value}
                    </a>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Suspense fallback={null}>
            <ContactForm services={site.services} />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
