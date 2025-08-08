import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import { blogPosts } from "@/data/blog"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return blogPosts.map(b => ({ slug: b.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const b = blogPosts.find(x => x.slug === params.slug)
  return {
    title: `${b?.title ?? "Blog"} — Auralytix AI`,
    description: b?.excerpt ?? "Blog post",
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const b = blogPosts.find(x => x.slug === params.slug)
  if (!b) return notFound()

  return (
    <Container className="py-10 space-y-4">
      <h1 className="text-3xl font-semibold">{b.title}</h1>
      <div className="text-xs text-muted-foreground">{b.date} • {b.author}</div>
      <div className="prose prose-sm dark:prose-invert">{b.content}</div>
    </Container>
  )
}
