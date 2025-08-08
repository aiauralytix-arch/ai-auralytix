import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"
import { solutions } from "@/data/solutions"

export const metadata = {
  title: "Solutions — Auralytix AI",
  description: "AI product development, data engineering, MLOps, and platform modernization.",
  openGraph: { images: ["/images/solutions-og.png"] },
}

export default function SolutionsPage() {
  return (
    <Container className="py-10">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold mb-2">Solutions</h1>
      <p className="text-muted-foreground mb-8">Outcomes-first engagements across AI, data, and platforms.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {solutions.map(s => (
          <Link key={s.slug} href={`/solutions/${s.slug}`} className="rounded-2xl border bg-card shadow-glass hover:shadow-md transition overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image src={s.image || "/placeholder.svg"} alt={`${s.title} image`} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-muted-foreground">{s.excerpt}</div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
