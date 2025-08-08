import { Container } from "@/components/container"
import Image from "next/image"
import { GlobalPresenceMap } from "@/components/global-map"

export const metadata = { title: "About — Auralytix AI", description: "Mission, values, leadership, presence." }

export default function AboutPage() {
  const leaders = [
    { name: "Alex Morgan", role: "CEO", avatar: "/images/leader-1.jpg" },
    { name: "Jordan Patel", role: "CTO", avatar: "/images/leader-2.jpg" },
    { name: "Riley Chen", role: "CPO", avatar: "/images/leader-3.png" },
  ]
  return (
    <Container className="py-10 space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">About Auralytix AI</h1>
        <p className="text-muted-foreground">We exist to help enterprises build AI-first products and resilient platforms.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {["Customer Obsession", "Reliability by Design", "Outcomes Over Output"].map(v => (
          <div key={v} className="rounded-2xl border p-6 bg-card shadow-glass">
            <div className="font-medium">{v}</div>
            <div className="text-sm text-muted-foreground">We focus on impact, not just shipping features.</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Leadership</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {leaders.map(l => (
            <div key={l.name} className="rounded-2xl border p-4 bg-card shadow-glass">
              <Image src={l.avatar || "/placeholder.svg"} alt={`${l.name} headshot`} width={80} height={80} className="rounded-full mb-3" />
              <div className="font-medium">{l.name}</div>
              <div className="text-sm text-muted-foreground">{l.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Global Presence</h2>
        <GlobalPresenceMap />
      </div>
    </Container>
  )
}
