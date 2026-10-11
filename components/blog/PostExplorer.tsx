"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "@/lib/types";
import { Card } from "../ui/Card";
import { cn, formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="hover:border-gold flex w-full flex-col transition hover:-translate-y-1">
      <span className="text-gold text-sm">
        {post.category} · {post.readMinutes} min read
      </span>
      <h3 className="text-gold-light mt-2 mb-3 text-2xl">
        <Link href={`/blogs/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h3>
      <p className="text-[0.97rem] opacity-80">{post.excerpt}</p>
      <time dateTime={post.date} className="mt-auto pt-4 text-sm opacity-60">
        {formatDate(post.date)}
      </time>
    </Card>
  );
}

export function PostExplorer({ posts }: { posts: Post[] }) {
  const categories = useMemo(
    () => ["All", ...new Set(posts.map((p) => p.category))],
    [posts],
  );
  const [active, setActive] = useState("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "border-gold text-gold-light rounded-full border px-4 py-1.5 text-sm transition",
              active === c ? "bg-gold text-ink" : "hover:bg-gold/10",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))] gap-6">
        {shown.map((p) => (
          <div key={p.slug} className="relative flex">
            <PostCard post={p} />
          </div>
        ))}
      </div>
    </>
  );
}
