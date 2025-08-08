import { Container } from "@/components/container"
import { changelog } from "@/data/changelog"

export const metadata = { title: "Changelog — Auralytix AI", description: "Versioned entries with tags." }

export default function ChangelogPage() {
  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Changelog</h1>
      <div className="space-y-4">
        {changelog.map(e => (
          <div key={e.version} className="rounded-2xl border p-5 bg-card shadow-glass">
            <div className="flex items-center justify-between">
              <div className="font-medium">{e.version}</div>
              <div className="text-xs text-muted-foreground">{e.date}</div>
            </div>
            <ul className="mt-3 text-sm space-y-2">
              {e.items.map((it, i) => (
                <li key={i}>
                  <span className={`mr-2 px-2 py-0.5 rounded-full text-xs ${it.tag === "Added" ? "bg-emerald-500/10 text-emerald-600" : it.tag === "Improved" ? "bg-blue-500/10 text-blue-600" : "bg-amber-500/10 text-amber-600"}`}>
                    {it.tag}
                  </span>
                  {it.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
