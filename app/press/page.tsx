import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/container"

export const metadata = { title: "Press — Auralytix AI", description: "Press kit: logos, colors, founder bios." }

export default function PressPage() {
  return (
    <Container className="py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Press Kit</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6 bg-card shadow-glass">
          <h2 className="font-medium mb-3">Logos</h2>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/logo-mark.png" alt="Logo mark" width={160} height={160} className="rounded-lg" />
            <Image src="/images/brand-lockup.png" alt="Brand lockup" width={160} height={160} className="rounded-lg" />
          </div>
        </div>
        <div className="rounded-2xl border p-6 bg-card shadow-glass">
          <h2 className="font-medium mb-3">Brand Colors</h2>
          <div className="flex gap-3">
            <Swatch name="Primary" className="bg-primary" />
            <Swatch name="Foreground" className="bg-foreground" />
            <Swatch name="Muted" className="bg-muted" />
          </div>
        </div>
      </section>
      <section className="rounded-2xl border p-6 bg-card shadow-glass">
        <h2 className="font-medium mb-3">Founder Bios</h2>
        <p className="text-sm">Short bios and headshots included in the About page.</p>
      </section>
      <div className="text-sm">
        Media inquiries: <Link href="mailto:press@auralytix.ai" className="underline underline-offset-4">press@auralytix.ai</Link>
      </div>
    </Container>
  )
}

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 rounded-lg border ${className}`} />
      <div className="text-xs">{name}</div>
    </div>
  )
}
