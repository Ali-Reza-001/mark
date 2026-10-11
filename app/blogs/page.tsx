import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { PostExplorer } from "@/components/blog/PostExplorer";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Practical guides for flights, visas, Umrah and business travel.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title="The Mark journal"
        text="Practical guides for flights, visas, Umrah and business travel."
      />
      <Section>
        <Container>
          <PostExplorer posts={site.posts} />
        </Container>
      </Section>
    </>
  );
}
