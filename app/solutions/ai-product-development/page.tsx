import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"
import { Timeline } from "@/components/timeline"

export const metadata = {
  title: "AI Product Development — Auralytix AI",
  description: "Ship AI-first experiences with robust MLOps and measurable impact.",
  openGraph: { images: ["/images/solutions-ai.png"] },
}

export default function AiProductPage() {
  return (
    <Container className="py-10 space-y-8">
      <Breadcrumbs />
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">AI Product Development</h1>
          <p className="text-muted-foreground">From discovery to launch, we build AI-first products that delight users and drive outcomes.</p>
        </div>
        <div className="rounded-2xl overflow-hidden border shadow-glass">
          <Image src="https://img.freepik.com/free-photo/person-working-animation-porject_23-2149269908.jpg?t=st=1754680045~exp=1754683645~hmac=55ebb37a81369ea712ba51cd0b2f93e6185f881da7c768472a3d098192089298&w=2000" width={1200} height={800} alt="AI product development visualization" />
        </div>
      </div>
      <Timeline items={[
        { date: "Week 1–2", title: "Discovery & Scoping", desc: "Define value, KPIs, and target users." },
        { date: "Week 3–6", title: "MVP Build", desc: "Iterate on AI features and UX." },
        { date: "Week 7+", title: "Hardening & Launch", desc: "Reliability, guardrails, monitoring." },
      ]} />
    </Container>
  )
}
