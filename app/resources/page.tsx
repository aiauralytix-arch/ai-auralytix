import { Container } from "@/components/container"
import Link from "next/link"

export const metadata = { title: "Resources — Auralytix AI", description: "Blogs, guides, whitepapers, webinars." }

export default function ResourcesPage() {
  const items = [
    ["Blog", "Engineering insights and product stories.", "/resources/blog"],
    ["Guides", "Step-by-step how we build.", "/resources/guides"],
    ["Whitepapers", "Architectural deep dives.", "/resources/whitepapers"],
    ["Webinars", "On-demand technical sessions.", "/resources/webinars"],
  ] as const
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-2">Resources</h1>
      <p className="text-muted-foreground mb-6">All static, read-only content. No downloads or forms.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(([title, desc, href]) => (
          <Link key={href} href={href} className="rounded-2xl border p-5 bg-card shadow-glass hover:shadow-md transition">
            <div className="font-medium">{title}</div>
            <div className="text-sm text-muted-foreground">{desc}</div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
