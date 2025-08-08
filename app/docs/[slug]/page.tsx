import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import Link from "next/link"
import { docs } from "@/data/docs"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return docs.map(d => ({ slug: d.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = docs.find(x => x.slug === params.slug)
  return { title: `${d?.title ?? "Docs"} — Auralytix AI`, description: d?.excerpt ?? "Docs" }
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const d = docs.find(x => x.slug === params.slug)
  if (!d) return notFound()

  return (
    <div className="py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          <aside className="rounded-2xl border p-4 bg-card shadow-glass h-fit sticky top-24">
            <nav className="space-y-2">
              {docs.map(item => (
                <Link key={item.slug} href={`/docs/${item.slug}`} className={`block text-sm rounded-md px-2 py-1 ${item.slug === d.slug ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}>
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>
          <article className="prose prose-sm dark:prose-invert">
            <h1 className="mb-0">{d.title}</h1>
            <p className="text-muted-foreground mt-1">{d.excerpt}</p>
            {d.content}
          </article>
        </div>
      </Container>
    </div>
  )
}
