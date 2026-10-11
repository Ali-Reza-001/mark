import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-gold">Error 404</p>
      <h1 className="text-gold-light my-4 text-6xl">Off the map</h1>
      <p className="mb-8 opacity-80">
        That page doesn&apos;t exist, but we can still get you somewhere.
      </p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </Container>
  );
}
