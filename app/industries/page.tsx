import { Container } from "@/components/container"
import Link from "next/link"

export const metadata = {
  title: "Industries — Auralytix AI",
  description: "Vertical solutions crafted for fintech, healthcare, retail, and logistics.",
}

const items = [
  ["Fintech", "/industries/fintech", "Risk analytics, KYC, fraud, payments."],
  ["Healthcare", "/industries/healthcare", "Clinical data, PHI-ready platforms."],
  ["Retail", "/industries/retail", "Demand forecasting, personalization."],
  ["Logistics", "/industries/logistics", "Routing, ETA, fleet ops."],
]

export default function IndustriesPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-6">Industries</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(([title, href, desc]) => (
          <Link key={href} href={href} className="rounded-2xl border p-5 bg-card shadow-glass hover:shadow-md transition">
            <div className="font-medium">{title}</div>
            <div className="text-sm text-muted-foreground">{desc}</div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
