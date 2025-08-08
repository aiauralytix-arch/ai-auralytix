import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"

export const metadata = { title: "Logistics — Auralytix AI", description: "Routing, ETA, fleets." }

export default function LogisticsPage() {
  return (
    <Container className="py-10 space-y-6">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold">Logistics</h1>
      <p className="text-muted-foreground">Optimize routes, ETAs, and fleet operations for reliability and cost efficiency.</p>
      <ul className="grid gap-3 md:grid-cols-2">
        <li className="rounded-xl border p-4">Multi-stop route optimization</li>
        <li className="rounded-xl border p-4">Accurate ETAs with live signals</li>
        <li className="rounded-xl border p-4">Predictive maintenance</li>
        <li className="rounded-xl border p-4">Warehouse throughput</li>
      </ul>
    </Container>
  )
}
