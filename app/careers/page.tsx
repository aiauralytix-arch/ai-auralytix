import { Container } from "@/components/container"
import Link from "next/link"
import { jobs } from "@/data/jobs"

export const metadata = { title: "Careers — Auralytix AI", description: "Join our global team. No apply forms on this site." }

export default function CareersPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-2">Careers</h1>
      <p className="text-muted-foreground mb-6">We&apos;re growing across engineering, product, and design.</p>
      <div className="space-y-3">
        {jobs.map(j => (
          <div key={j.slug} className="rounded-2xl border p-5 bg-card shadow-glass">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{j.title}</div>
                <div className="text-xs text-muted-foreground">{j.location} • {j.type}</div>
              </div>
              <Link href={`/careers/${j.slug}`} className="text-sm underline underline-offset-4">View role</Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
