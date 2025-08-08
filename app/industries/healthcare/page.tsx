import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"

export const metadata = { title: "Healthcare — Auralytix AI", description: "Clinical data, PHI-ready systems." }

export default function HealthcarePage() {
  return (
    <Container className="py-10 space-y-6">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold">Healthcare</h1>
      <p className="text-muted-foreground">Clinical data platforms with privacy by design and operational reliability.</p>
      <ul className="grid gap-3 md:grid-cols-2">
        <li className="rounded-xl border p-4">PHI-safe data pipelines</li>
        <li className="rounded-xl border p-4">Clinical NLP & summarization</li>
        <li className="rounded-xl border p-4">Patient journey analytics</li>
        <li className="rounded-xl border p-4">Provider network optimization</li>
      </ul>
    </Container>
  )
}
