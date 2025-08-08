import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import { jobs } from "@/data/jobs"
import type { Metadata } from "next"
import { Mail } from "lucide-react"

export async function generateStaticParams() {
  return jobs.map(j => ({ slug: j.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const j = jobs.find(x => x.slug === params.slug)
  return {
    title: `${j?.title ?? "Role"} — Auralytix AI`,
    description: j?.summary ?? "Role detail"
  }
}

export default function JobDetail({ params }: { params: { slug: string } }) {
  const j = jobs.find(x => x.slug === params.slug)
  if (!j) return notFound()

  return (
    <Container className="py-16 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{j.title}</h1>
        <div className="text-sm text-muted-foreground">
          {j.location} • {j.type}
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">{j.summary}</p>
      </header>

      {/* Role Details */}
      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What you&apos;ll do</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {j.responsibilities.map(r => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What you&apos;ll bring</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {j.requirements.map(r => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-2xl border bg-card shadow-glass p-8 flex flex-col items-center text-center space-y-4">
        <Mail className="w-10 h-10 text-primary" />
        <h3 className="text-xl font-semibold">Ready to Apply?</h3>
        <p className="text-muted-foreground max-w-md">
          If you&apos;re excited about this opportunity, send us your resume and a short
          note about why you&apos;re a great fit for this role.
        </p>
        <a
          href="mailto:aiauralytix@gmail.com?subject=Job Application: ${encodeURIComponent(j.title)}"
          className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Email us at aiauralytix@gmail.com
        </a>
      </section>
    </Container>
  )
}