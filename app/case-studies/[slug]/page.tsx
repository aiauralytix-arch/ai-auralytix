import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import Image from "next/image"
import { caseStudies } from "@/data/case-studies"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return caseStudies.map(c => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find(x => x.slug === params.slug)
  return {
    title: `${c?.title ?? "Case Study"} — Auralytix AI`,
    description: c?.excerpt ?? "Case study",
    openGraph: { images: [c?.image ?? "/images/case-generic.jpg"] },
  }
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const c = caseStudies.find(x => x.slug === params.slug)
  if (!c) return notFound()

  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">{c.title}</h1>
      <div className="rounded-2xl overflow-hidden border shadow-glass">
        <Image src={c.image || "/placeholder.svg"} alt={`${c.title} cover`} width={1200} height={800} />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Tile title="Problem" text={c.problem} />
        <Tile title="Approach" text={c.approach} />
        <Tile title="Impact" text={c.impact} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {c.kpis.map(k => (
          <div key={k.label} className="rounded-2xl border p-4 bg-card shadow-glass">
            <div className="text-2xl font-semibold">{k.value}</div>
            <div className="text-xs text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function Tile({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-4 bg-card shadow-glass">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{text}</div>
    </div>
  )
}
