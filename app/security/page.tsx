import { ShieldCheck, Lock, AlertTriangle, Server } from "lucide-react"
import { Container } from "@/components/container"

export const metadata = {
  title: "Security & Compliance — Auralytix AI",
  description: "Practices, controls, readiness.",
}

export default function SecurityPage() {
  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Security & Compliance</h1>
      <p className="text-muted-foreground">
        We employ secure SDLC, least privilege, and ongoing risk assessments.
        The icons below illustrate our focus on trust and resilience.
      </p>

      {/* Badge-style icons */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
            <ShieldCheck className="h-8 w-8 text-green-700 dark:text-green-300" />
          </div>
          <span className="mt-1 text-xs text-muted-foreground">SOC 2 Ready</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
            <Lock className="h-8 w-8 text-blue-700 dark:text-blue-300" />
          </div>
          <span className="mt-1 text-xs text-muted-foreground">ISO 27001 Aligned</span>
        </div>
      </div>

      {/* Security principles */}
      <ul className="grid gap-3 md:grid-cols-2">
        <li className="rounded-xl border p-4 flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-primary" />
          Secure SDLC with automated checks
        </li>
        <li className="rounded-xl border p-4 flex items-center gap-3">
          <Lock className="h-5 w-5 text-primary" />
          Encryption in transit and at rest
        </li>
        <li className="rounded-xl border p-4 flex items-center gap-3">
          <Server className="h-5 w-5 text-primary" />
          Vendor risk management
        </li>
        <li className="rounded-xl border p-4 flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-primary" />
          Incident response runbooks
        </li>
      </ul>
    </Container>
  )
}