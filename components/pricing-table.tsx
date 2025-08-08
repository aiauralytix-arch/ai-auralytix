import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { pricingPlans } from "@/data/pricing"
import Link from "next/link"

export function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pricingPlans.map((p) => (
        <Card key={p.name} className="rounded-2xl shadow-glass border-border/60">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {p.name}
              {p.popular ? <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Popular</span> : null}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-3xl font-semibold">{p.price}</div>
              <div className="text-xs text-muted-foreground">{p.caption}</div>
            </div>
            <ul className="text-sm space-y-2">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <Link href="/contact">
              <Button className="w-full rounded-xl">Talk to Sales</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
