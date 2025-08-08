import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"

export const metadata = { title: "Retail — Auralytix AI", description: "Personalization, pricing, demand." }

export default function RetailPage() {
  return (
    <Container className="py-10 space-y-6">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold">Retail</h1>
      <p className="text-muted-foreground">Customer intelligence and supply chain optimization to grow margins.</p>
      <ul className="grid gap-3 md:grid-cols-2">
        <li className="rounded-xl border p-4">Next-best-action personalization</li>
        <li className="rounded-xl border p-4">Dynamic pricing & promos</li>
        <li className="rounded-xl border p-4">Demand planning & allocation</li>
        <li className="rounded-xl border p-4">Store ops analytics</li>
      </ul>
    </Container>
  )
}
