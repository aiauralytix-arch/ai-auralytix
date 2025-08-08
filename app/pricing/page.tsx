import { Container } from "@/components/container"
import { PricingTable } from "@/components/pricing-table"

export const metadata = { title: "Pricing — Auralytix AI", description: "Transparent plans with enterprise support." }

export default function PricingPage() {
  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="text-muted-foreground">Choose a starting point. We tailor scopes to outcomes, not hours.</p>
      <PricingTable />
    </Container>
  )
}
