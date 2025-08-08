import { Container } from "@/components/container"
import Link from "next/link"
import { blogPosts } from "@/data/blog"

export const metadata = { title: "Blog — Auralytix AI", description: "Engineering insights and product stories." }

export default function BlogIndex() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      <div className="space-y-4">
        {blogPosts.map(b => (
          <article key={b.slug} className="rounded-2xl border p-5 bg-card shadow-glass">
            <h2 className="text-lg font-semibold">
              <Link href={`/resources/blog/${b.slug}`} className="hover:underline">{b.title}</Link>
            </h2>
            <p className="text-sm text-muted-foreground">{b.excerpt}</p>
          </article>
        ))}
      </div>
    </Container>
  )
}
