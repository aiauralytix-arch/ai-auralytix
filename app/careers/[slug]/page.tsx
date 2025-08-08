import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import { jobs } from "@/data/jobs"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return jobs.map(j => ({ slug: j.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const j = jobs.find(x => x.slug === params.slug)
  return { title: `${j?.title ?? "Role"} — Auralytix AI`, description: j?.summary ?? "Role detail" }
}

export default function JobDetail({ params }: { params: { slug: string } }) {
  const j = jobs.find(x => x.slug === params.slug)
  if (!j) return notFound()

  return (
    <Container className="py-10 space-y-4">
      <h1 className="text-3xl font-semibold">{j.title}</h1>
      <div className="text-xs text-muted-foreground">{j.location} • {j.type}</div>
      <div className="prose prose-sm dark:prose-invert">
        <p>{j.summary}</p>
        <h3>What you&apos;ll do</h3>
        <ul>{j.responsibilities.map(r => <li key={r}>{r}</li>)}</ul>
        <h3>What you&apos;ll bring</h3>
        <ul>{j.requirements.map(r => <li key={r}>{r}</li>)}</ul>
      </div>
    </Container>
  )
}
