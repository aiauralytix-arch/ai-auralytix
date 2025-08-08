import Link from "next/link"
import { Container } from "@/components/container"

export const metadata = { title: "Press — Auralytix AI", description: "Press kit: brand guidelines, colors, founder bios." }

export default function PressPage() {
  return (
    <Container className="py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Press Kit</h1>

      {/* Brand Assets */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Logos */}
        <div className="rounded-2xl border p-6 bg-card shadow-glass">
          <h2 className="font-medium mb-3">Logos</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Vector and PNG versions of our logo are available upon request.
          </p>
          <Link
            href="mailto:press@auralytix.ai?subject=Request%20for%20Auralytix%20Logo%20Assets"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request Logo Files
          </Link>
        </div>

        {/* Brand Colors */}
        <div className="rounded-2xl border p-6 bg-card shadow-glass">
          <h2 className="font-medium mb-3">Brand Colors</h2>
          <div className="flex flex-wrap gap-4">
            <Swatch name="Primary" className="bg-primary" hex="#6D28D9" />
            <Swatch name="Foreground" className="bg-foreground" hex="#111827" />
            <Swatch name="Muted" className="bg-muted" hex="#9CA3AF" />
          </div>
        </div>
      </section>

      {/* Founder Bios */}
      <section className="rounded-2xl border p-6 bg-card shadow-glass">
        <h2 className="font-medium mb-3">Founder Bios</h2>
        <p className="text-sm text-muted-foreground">
          Detailed bios and background information are available on our{" "}
          <Link href="/about" className="underline underline-offset-4">
            About
          </Link>{" "}
          page.
        </p>
      </section>

      {/* Contact */}
      <div className="text-sm">
        Media inquiries:{" "}
        <Link
          href="mailto:press@auralytix.ai"
          className="underline underline-offset-4"
        >
          press@auralytix.ai
        </Link>
      </div>
    </Container>
  )
}

function Swatch({
  name,
  className,
  hex,
}: {
  name: string
  className: string
  hex: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 rounded-lg border ${className}`} />
      <div className="text-xs">
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground">{hex}</div>
      </div>
    </div>
  )
}