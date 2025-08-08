import Image from "next/image"
import { Container } from "@/components/container"

export const metadata = { title: "Security & Compliance — Auralytix AI", description: "Practices, controls, readiness." }

export default function SecurityPage() {
  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Security & Compliance</h1>
      <p className="text-muted-foreground">We employ secure SDLC, least privilege, and ongoing risk assessments. Static badges below are for illustration only.</p>
      <div className="flex items-center gap-4">
        <Image src="/images/badge-soc2.png" width={64} height={64} alt="SOC 2-like badge" />
        <Image src="/images/badge-iso27001.png" width={64} height={64} alt="ISO 27001-like badge" />
      </div>
      <ul className="grid gap-3 md:grid-cols-2">
        <li className="rounded-xl border p-4">Secure SDLC with automated checks</li>
        <li className="rounded-xl border p-4">Encryption in transit and at rest</li>
        <li className="rounded-xl border p-4">Vendor risk management</li>
        <li className="rounded-xl border p-4">Incident response runbooks</li>
      </ul>
    </Container>
  )
}
