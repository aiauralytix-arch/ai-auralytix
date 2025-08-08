import Image from "next/image"
import { Container } from "@/components/container"
import { customers } from "@/data/customers"

export const metadata = { title: "Customers — Auralytix AI", description: "Logo wall, quotes, KPI tiles." }

export default function CustomersPage() {
  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Customers</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
        {customers.map(c => (
          <div key={c.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition">
            <Image src={c.logo || "/placeholder.svg"} alt={`${c.name} logo`} width={140} height={48} className="object-contain" />
          </div>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Tile value="3,200+" label="Projects Delivered" />
        <Tile value="98%" label="CSAT" />
        <Tile value="50+" label="Countries" />
      </div>
    </Container>
  )
}
function Tile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border p-6 bg-card shadow-glass">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
