import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { KpiTiles } from "@/components/kpi-tiles"
import { LogoCloud } from "@/components/logo-cloud"
import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/data/testimonials"
import { CaseStudyCard } from "@/components/case-study-card"
import { caseStudies } from "@/data/case-studies"
import { MotionInView } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Briefcase, Database, LineChart, Shield, Globe } from 'lucide-react'

export const metadata = {
  title: "Auralytix AI — Enterprise AI, Data & Platform Engineering",
  description: "Build AI-first products, modernize platforms, and scale data. 3,200+ projects delivered.",
  openGraph: { images: ["/images/og-hero.png"] },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b bg-muted/30">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                Build AI Products Faster. Modernize Your Platform. Scale with Confidence.
              </h1>
              <p className="text-muted-foreground">
                Auralytix AI partners with global enterprises to deliver AI-first experiences, resilient data platforms, and
                measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/solutions/ai-product-development">
                  <Button className="rounded-2xl">Explore Solutions</Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" className="rounded-2xl">See Case Studies</Button>
                </Link>
              </div>
              <KpiTiles />
            </div>
            <MotionInView>
              <Card className="rounded-3xl overflow-hidden shadow-glass border-border/60">
                <CardContent className="p-0">
                  <Image
                    src="/images/hero-3d.png"
                    width={1200}
                    height={800}
                    alt="Abstract 3D visualization representing AI systems"
                    className="w-full h-auto"
                    priority
                  />
                </CardContent>
              </Card>
            </MotionInView>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-4">
            <ServiceCard icon={<Rocket className="h-5 w-5" />} title="AI Product Development" desc="Ship AI-first web & native apps." href="/solutions/ai-product-development" />
            <ServiceCard icon={<Database className="h-5 w-5" />} title="Data Engineering" desc="Pipelines, quality, governance." href="/solutions/data-engineering" />
            <ServiceCard icon={<LineChart className="h-5 w-5" />} title="MLOps & Observability" desc="Operate reliable models at scale." href="/solutions/mlops-observability" />
            <ServiceCard icon={<Shield className="h-5 w-5" />} title="Platform Modernization" desc="Secure, cloud-native, cost-optimized." href="/solutions/platform-modernization" />
          </div>
        </Container>
      </section>

      <LogoCloud />

      {/* Case study previews */}
      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Impact Highlights</h2>
              <p className="text-muted-foreground text-sm">Problem → Approach → Impact</p>
            </div>
            <Link href="/case-studies" className="text-sm underline underline-offset-4">View all</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map(cs => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials carousel (static next/prev) */}
      <section className="py-16 bg-muted/30 border-y">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">What Leaders Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map(t => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Awards/Certifications */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <BadgeCard icon={<Briefcase className="h-5 w-5" />} title="Trusted Delivery" text="3,200+ projects delivered with 98% CSAT." />
            <BadgeCard icon={<Globe className="h-5 w-5" />} title="Global Scale" text="Operating across 50+ countries." />
            <BadgeCard icon={<Shield className="h-5 w-5" />} title="Security Mindset" text="Security-by-design across our practices." />
          </div>
        </Container>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc: string; href: string }) {
  return (
    <Link href={href}>
      <div className="rounded-2xl border bg-card p-5 shadow-glass hover:shadow-md transition">
        <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
    </Link>
  )
}
function BadgeCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-glass">
      <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{text}</div>
    </div>
  )
}
