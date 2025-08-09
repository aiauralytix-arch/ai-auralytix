"use client"

// app/(site)/retail/page.tsx
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, TrendingUp, Sparkles, BarChart3, Gauge, Layers, Boxes, ShieldCheck, Rocket } from "lucide-react"
import { useMemo, useState } from "react"


// ---------- Types ----------
type KPI = { label: string; value: string; hint?: string }
type Pillar = { title: string; desc: string; points: string[] }
type UseCase = { id: string; title: string; bullets: string[]; outcome: string }
type Playbook = { id: string; title: string; steps: string[] }
type Tool = { name: string; tag?: string }
type FAQ = { q: string; a: string }

// ---------- Data ----------
const kpis: KPI[] = [
  { label: "Lift in AOV", value: "+7–15%", hint: "Personalized bundles" },
  { label: "Promo Waste", value: "-12–20%", hint: "Elasticity-aware pricing" },
  { label: "Forecast MAPE", value: "≤ 12%", hint: "SKU × store granularity" },
  { label: "Time-to-Value", value: "≤ 6 weeks", hint: "Start with a pilot" },
]

const pillars: Pillar[] = [
  { title: "Next-best-action", desc: "Offers that adapt per session & channel.", points: ["Propensity & lifetime value", "Bundles & upsell ladders", "Guardrails for margin"] },
  { title: "Dynamic pricing", desc: "Elasticity-driven price & promo planning.", points: ["Elasticity curves", "Cannibalization control", "Markdown optimization"] },
  { title: "Demand planning", desc: "SKU/store forecasts and allocation.", points: ["Cold-start SKUs", "Event/holiday uplift", "Safety stock tuning"] },
  { title: "Store ops analytics", desc: "Turn raw events into decisions.", points: ["Queue & conversion", "Planogram compliance", "Associate productivity"] },
]

const useCases: UseCase[] = [
  {
    id: "personalization",
    title: "Personalization",
    bullets: [
      "Session-based recommenders (no login required).",
      "Cross-channel frequency caps and burn rules.",
      "Explainable rankings for compliance.",
    ],
    outcome: "Lift CTR and AOV without spamming users.",
  },
  {
    id: "pricing",
    title: "Pricing & Promotions",
    bullets: [
      "Price tests with elasticity modeling.",
      "Promo depth suggestions by segment.",
      "Markdown timing for long-tail SKUs.",
    ],
    outcome: "Cut promo waste while holding volume.",
  },
  {
    id: "planning",
    title: "Demand & Allocation",
    bullets: [
      "Weekly SKU × store forecasts with events.",
      "New-item analogs and hierarchy borrowing.",
      "Auto PO triggers with safety-stock bounds.",
    ],
    outcome: "Reduce stockouts and excess inventory.",
  },
  {
    id: "ops",
    title: "Store & Ops Intelligence",
    bullets: [
      "Footfall → basket conversion funnels.",
      "Queue alerts and labor right-sizing.",
      "Planogram gap detection from scans.",
    ],
    outcome: "Higher conversion with fewer headaches.",
  },
]

const playbooks: Playbook[] = [
  {
    id: "nba",
    title: "Launch next-best-action in 14 days",
    steps: [
      "Ingest catalog + events via API/CSV.",
      "Cold-start model with heuristics day 1.",
      "Turn on A/B flag for 10% traffic.",
      "Tune guardrails for margin and brand.",
      "Rollout + weekly drift monitoring.",
    ],
  },
  {
    id: "pricing",
    title: "Elasticity-aware pricing in 4 sprints",
    steps: [
      "Collect price/volume/promo history.",
      "Estimate cross-elasticities by cluster.",
      "Simulate promo depth & cannibalization.",
      "Publish price files to POS/OMS.",
    ],
  },
  {
    id: "planning",
    title: "Demand planning pilot (3 categories)",
    steps: [
      "Pick 3 representative categories.",
      "Build weekly SKU/store forecasts.",
      "Backtest + exception rules.",
      "Integrate with replenishment.",
    ],
  },
]

const tools: Tool[] = [
  { name: "Batch & streaming pipelines", tag: "Data" },
  { name: "Feature store", tag: "ML" },
  { name: "Retrieval-augmented models", tag: "AI" },
  { name: "Explainability & guardrails", tag: "Governance" },
  { name: "A/B experimentation", tag: "Product" },
  { name: "API & scheduled jobs", tag: "Integration" },
]

const faqs: FAQ[] = [
  { q: "Do we need a data warehouse?", a: "No. We can start with flat files or API pulls and evolve to your warehouse later." },
  { q: "Is PII required?", a: "Not for session personalization. We work with anonymized events and optional hashed IDs." },
  { q: "How do you measure impact?", a: "Controlled experiments with pre/post baselines, plus holdouts for long-term effects." },
  { q: "What’s the hosting model?", a: "Your cloud, ours, or hybrid. Data residency and isolation respected." },
]

// ---------- Helpers (pure) ----------
function percent(num: number, den: number) {
  if (den === 0) return 0 // guard clause
  return Math.round((num / den) * 100)
}

// ---------- Components (single-responsibility + guard clauses) ----------
function PageHeader() {
  return (
    <header className="space-y-3">
      <Breadcrumbs />
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Retail</h1>
          <p className="text-muted-foreground max-w-prose">
            Customer intelligence and supply chain optimization to grow margins.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="rounded-full px-3 py-1">B2C & B2B2C</Badge>
          <Badge variant="outline" className="rounded-full px-3 py-1">PII-Optional</Badge>
        </div>
      </div>
    </header>
  )
}

function StatStrip({ items }: { items: KPI[] }) {
  if (!items?.length) return null // guard clause
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((k) => (
        <Card key={k.label} className="rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">{k.label}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end justify-between">
            <span className="text-2xl font-semibold">{k.value}</span>
            {k.hint ? <span className="text-xs text-muted-foreground">{k.hint}</span> : null}
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

function Pillars({ items }: { items: Pillar[] }) {
  if (!items?.length) return null // guard clause
  const icons = [Sparkles, TrendingUp, Boxes, Gauge]
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">What you get</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((p, idx) => {
          const Icon = icons[idx % icons.length]
          return (
            <li key={p.title} className="rounded-xl border p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="h-4 w-4" aria-hidden />
                <h3 className="font-medium">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
              <ul className="space-y-1 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function UseCaseTabs({ items }: { items: UseCase[] }) {
  if (!items?.length) return null // guard clause
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-4 w-4" aria-hidden />
        <h2 className="text-xl font-semibold">Use cases</h2>
      </div>
      <Tabs defaultValue={items[0].id} className="w-full">
        <TabsList className="flex flex-wrap gap-2">
          {items.map((u) => (
            <TabsTrigger key={u.id} value={u.id} className="data-[state=active]:font-semibold">
              {u.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {items.map((u) => (
          <TabsContent key={u.id} value={u.id} className="mt-3">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="text-base">{u.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-2">
                <ul className="space-y-2">
                  {u.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Layers className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg border p-4">
                  <h4 className="text-sm font-medium mb-1">Outcome</h4>
                  <p className="text-sm text-muted-foreground">{u.outcome}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

function ROIBlock() {
  // single responsibility: lightweight ROI toy calc (client-side only)
  const [orders, setOrders] = useState<number>(5000)
  const [aov, setAov] = useState<number>(1200)
  const [lift, setLift] = useState<number>(10)

  const baseline = useMemo(() => orders * aov, [orders, aov])
  const uplift = useMemo(() => Math.round(baseline * (lift / 100)), [baseline, lift])
  const projected = useMemo(() => baseline + uplift, [baseline, uplift])
  const progress = useMemo(() => percent(projected - baseline, Math.max(projected, 1)), [projected, baseline])

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <Rocket className="h-4 w-4" aria-hidden />
        <h2 className="text-xl font-semibold">Back-of-the-napkin ROI</h2>
      </div>

      <Card className="rounded-xl">
        <CardContent className="grid gap-4 md:grid-cols-3 pt-6">
          <div className="space-y-2">
            <Label htmlFor="orders">Monthly Orders</Label>
            <Input id="orders" type="number" min={0} value={orders} onChange={(e) => setOrders(parseInt(e.target.value || "0"))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aov">Avg Order Value (₹)</Label>
            <Input id="aov" type="number" min={0} value={aov} onChange={(e) => setAov(parseInt(e.target.value || "0"))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lift">% Lift from Personalization</Label>
            <Input id="lift" type="number" min={0} max={100} value={lift} onChange={(e) => setLift(parseInt(e.target.value || "0"))} />
          </div>
          <Separator className="md:col-span-3" />
          <div className="md:col-span-3 grid gap-3 sm:grid-cols-3">
            <Metric label="Baseline Revenue" value={`₹${baseline.toLocaleString()}`} />
            <Metric label="Projected Uplift" value={`₹${uplift.toLocaleString()}`} />
            <Metric label="Projected Revenue" value={`₹${projected.toLocaleString()}`} />
          </div>
          <div className="md:col-span-3">
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  )
}

function Playbooks({ items }: { items: Playbook[] }) {
  if (!items?.length) return null // guard clause
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4" aria-hidden />
        <h2 className="text-xl font-semibold">Proven playbooks</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((p) => (
          <AccordionItem key={p.id} value={p.id}>
            <AccordionTrigger className="text-left">{p.title}</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                {p.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

function Tools({ items }: { items: Tool[] }) {
  if (!items?.length) return null // guard clause
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">What’s under the hood</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <Badge key={t.name} variant="outline" className="rounded-full">
            {t.name}{t.tag ? <span className="ml-2 text-muted-foreground text-[10px] uppercase tracking-wide">{t.tag}</span> : null}
          </Badge>
        ))}
      </div>
    </section>
  )
}

function FAQList({ items }: { items: FAQ[] }) {
  if (!items?.length) return null // guard clause
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">FAQs</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((f) => (
          <li key={f.q} className="rounded-xl border p-4">
            <h3 className="font-medium mb-1">{f.q}</h3>
            <p className="text-sm text-muted-foreground">{f.a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CTA() {
  return (
    <section className="rounded-2xl border p-6 md:p-8 bg-muted/40">
      <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Pilot in weeks, not quarters</h2>
          <p className="text-sm text-muted-foreground">
            Start with one category or one channel. Keep your stack. Prove impact quickly.
          </p>
        </div>
        <div className="flex gap-2">
        </div>
      </div>
    </section>
  )
}

// ---------- Page ----------
export default function RetailPage() {
  // single responsibility: rendering the page by composing sections
  return (
    <Container className="py-10 space-y-10">
      <PageHeader />
      <StatStrip items={kpis} />
      <Pillars items={pillars} />
      <UseCaseTabs items={useCases} />
      <ROIBlock />
      <Playbooks items={playbooks} />
      <Tools items={tools} />
      <FAQList items={faqs} />
      <CTA />
    </Container>
  )
}