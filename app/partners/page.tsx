import Image from "next/image"
import { Container } from "@/components/container"
import { partners } from "@/data/partners"

export const metadata = { title: "Partners — Auralytix AI", description: "Ecosystem, tiers, and benefits." }

export default function PartnersPage() {
  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Partners</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {partners.map(p => (
          <div key={p.name} className="rounded-2xl border p-6 bg-card shadow-glass">
            <div className="mb-4 h-10 relative">
              <Image src={p.logo || "/placeholder.svg"} alt={`${p.name} logo`} fill className="object-contain" />
            </div>
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-muted-foreground">{p.tier}</div>
            <ul className="mt-3 text-sm list-disc pl-4">
              {p.benefits.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
