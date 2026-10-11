import { Container } from "./ui/Container";

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="from-wine to-ink bg-linear-to-b pt-20 pb-12">
      <Container>
        <h1 className="text-gold-light max-w-[16ch] text-5xl md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-[55ch] text-lg opacity-85">{text}</p>
      </Container>
    </section>
  );
}
