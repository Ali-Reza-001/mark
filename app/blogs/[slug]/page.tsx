import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { getPost, site } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => site.posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <Section className="pt-16">
      <Container className="max-w-3xl">
        <Link
          href="/blogs"
          className="text-gold hover:text-gold-light mb-8 inline-flex items-center gap-2"
        >
          <ArrowLeft className="size-4" /> All articles
        </Link>
        <p className="text-gold text-sm">
          {post.category} · {post.readMinutes} min read
        </p>
        <h1 className="text-gold-light mt-2 text-5xl md:text-6xl">{post.title}</h1>
        <time dateTime={post.date} className="mt-3 block text-sm opacity-60">
          {formatDate(post.date)}
        </time>
        <div className="mt-10 space-y-5 text-lg opacity-90">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="border-gold/30 mt-14 border-t pt-8">
          <p className="mb-4 text-lg">Planning a trip like this?</p>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
