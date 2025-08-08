import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"

export const metadata = { title: "Fintech — Auralytix AI", description: "Risk, KYC, AML, fraud, payments." }

export default function FintechPage() {
  return (
    <Container className="py-10 space-y-6">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold">Fintech</h1>
      <p className="text-muted-foreground">Solutions across risk analytics, KYC/AML, fraud detection, and real-time payments.</p>
      <ul className="grid gap-3 md:grid-cols-2">
        <li className="rounded-xl border p-4">Real-time fraud models with explainability</li>
        <li className="rounded-xl border p-4">Bank-grade KYC/KYB workflows</li>
        <li className="rounded-xl border p-4">High-throughput payment rails</li>
        <li className="rounded-xl border p-4">Portfolio risk & stress testing</li>
      </ul>
    </Container>
  )
}
