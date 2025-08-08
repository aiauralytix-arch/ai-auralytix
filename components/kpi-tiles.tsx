import { Card, CardContent } from "@/components/ui/card"

export function KpiTiles() {
  const items = [
    { label: "Projects Delivered", value: "3,200+" },
    { label: "Customer Satisfaction", value: "98% CSAT" },
    { label: "Global Reach", value: "50+ Countries" },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((k) => (
        <Card key={k.label} className="rounded-2xl shadow-glass">
          <CardContent className="p-6">
            <div className="text-2xl font-semibold">{k.value}</div>
            <div className="text-sm text-muted-foreground">{k.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
