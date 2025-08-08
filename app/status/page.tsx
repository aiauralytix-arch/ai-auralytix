import { Container } from "@/components/container"

export const metadata = { title: "Status — Auralytix AI", description: "Static component statuses and past incidents." }

export default function StatusPage() {
  const components = [
    { name: "API", status: "Operational" },
    { name: "Docs", status: "Operational" },
    { name: "Web App", status: "Operational" },
    { name: "CI/CD", status: "Degraded Performance" },
  ]
  const incidents = [
    { date: "2025-08-01", title: "CI queue delays", impact: "Minor", summary: "Brief delays due to throttling. Resolved." },
    { date: "2025-07-20", title: "Docs CDN cache", impact: "Minor", summary: "Stale content served in one region. Purged." },
  ]
  return (
    <Container className="py-10 grid gap-8 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Current Status</h1>
        <ul className="space-y-3">
          {components.map(c => (
            <li key={c.name} className="rounded-2xl border p-4 bg-card shadow-glass flex items-center justify-between">
              <span className="font-medium">{c.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${c.status === "Operational" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"}`}>
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Past Incidents</h2>
        <ul className="space-y-3">
          {incidents.map(i => (
            <li key={i.title} className="rounded-2xl border p-4 bg-card shadow-glass">
              <div className="text-xs text-muted-foreground">{i.date} • {i.impact}</div>
              <div className="font-medium">{i.title}</div>
              <div className="text-sm">{i.summary}</div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
