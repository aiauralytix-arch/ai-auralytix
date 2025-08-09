"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Map, Clock, Wrench, Warehouse, Truck, ShieldCheck, Rocket } from "lucide-react"
import { useMemo, useState } from "react"

// ---------- Data ----------
const kpis = [
  { label: "Route cost reduction", value: "-8–15%", hint: "Dynamic optimization" },
  { label: "On-time delivery rate", value: "≥ 96%", hint: "Live ETA recalcs" },
  { label: "Fleet downtime", value: "-20%", hint: "Predictive maintenance" },
  { label: "Warehouse throughput", value: "+12%", hint: "Bottleneck analysis" },
]

const pillars = [
  {
    title: "Multi-stop route optimization",
    desc: "Minimize travel time and fuel while meeting SLAs.",
    points: ["Dynamic re-routing", "Traffic & weather signals", "Fleet load balancing"],
    icon: Map
  },
  {
    title: "Accurate ETAs",
    desc: "Live recalculation using telematics & IoT data.",
    points: ["Signal fusion", "Delay alerts", "Customer notifications"],
    icon: Clock
  },
  {
    title: "Predictive maintenance",
    desc: "Avoid breakdowns with sensor-driven forecasts.",
    points: ["Engine & brake health", "Usage-based servicing", "Downtime scheduling"],
    icon: Wrench
  },
  {
    title: "Warehouse throughput",
    desc: "Identify and fix bottlenecks in real time.",
    points: ["Queue time analysis", "Slotting optimization", "Workforce allocation"],
    icon: Warehouse
  },
]

const useCases = [
  {
    id: "routing",
    title: "Dynamic Routing",
    bullets: [
      "Auto re-route in response to delays or cancellations.",
      "Load-based fleet balancing.",
      "Region-specific optimization rules."
    ],
    outcome: "Reduce fuel costs and delays simultaneously."
  },
  {
    id: "eta",
    title: "ETA Accuracy",
    bullets: [
      "Combine GPS, traffic, weather, and driver patterns.",
      "Real-time alerts to customers and ops.",
      "Historic delivery time learning."
    ],
    outcome: "Boost customer trust with reliable delivery windows."
  },
  {
    id: "maintenance",
    title: "Predictive Maintenance",
    bullets: [
      "Track part wear via IoT sensors.",
      "Maintenance scheduling by usage, not time.",
      "Downtime clustering to minimize disruptions."
    ],
    outcome: "Cut unexpected breakdowns and extend vehicle life."
  },
  {
    id: "warehouse",
    title: "Warehouse Optimization",
    bullets: [
      "Live dock and staging area monitoring.",
      "Bottleneck identification via throughput tracking.",
      "Optimized labor allocation during peaks."
    ],
    outcome: "Increase orders processed per hour."
  }
]

const playbooks = [
  {
    id: "routing-playbook",
    title: "Dynamic Routing Rollout in 3 Weeks",
    steps: [
      "Ingest delivery schedules & fleet data.",
      "Integrate GPS and traffic APIs.",
      "Run pilot in one region.",
      "Expand coverage with driver feedback loops."
    ]
  },
  {
    id: "eta-playbook",
    title: "ETA Accuracy Boost",
    steps: [
      "Pull historic delivery times & GPS data.",
      "Layer live traffic and weather feeds.",
      "Train models per route type.",
      "Deploy alerts to ops and customers."
    ]
  }
]

// ---------- Helpers ----------
function percent(num: number, den: number) {
  if (den === 0) return 0
  return Math.round((num / den) * 100)
}

// ---------- Components ----------
function PageHeader() {
  return (
    <header className="space-y-3">
      <Breadcrumbs />
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">Logistics</h1>
          <p className="text-muted-foreground max-w-prose">
            Optimize routes, ETAs, and fleet operations for reliability and cost efficiency.
          </p>
        </div>
        <Badge variant="outline" className="rounded-full px-3 py-1">Supply Chain AI</Badge>
      </div>
    </header>
  )
}

function StatStrip({ items }: { items: typeof kpis }) {
  if (!items?.length) return null
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((k) => (
        <Card key={k.label} className="rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">{k.label}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end justify-between">
            <span className="text-2xl font-semibold">{k.value}</span>
            {k.hint && <span className="text-xs text-muted-foreground">{k.hint}</span>}
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

function Pillars({ items }: { items: typeof pillars }) {
  if (!items?.length) return null
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Core Capabilities</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((p) => (
          <li key={p.title} className="rounded-xl border p-4">
            <div className="flex items-center gap-2 mb-2">
              <p.icon className="h-4 w-4" />
              <h3 className="font-medium">{p.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
            <ul className="space-y-1 text-sm">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

function UseCaseTabs({ items }: { items: typeof useCases }) {
  if (!items?.length) return null
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Use Cases</h2>
      <Tabs defaultValue={items[0].id}>
        <TabsList className="flex flex-wrap gap-2">
          {items.map((u) => (
            <TabsTrigger key={u.id} value={u.id}>{u.title}</TabsTrigger>
          ))}
        </TabsList>
        {items.map((u) => (
          <TabsContent key={u.id} value={u.id}>
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="text-base">{u.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-2">
                <ul className="space-y-2">
                  {u.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Truck className="h-4 w-4 mt-0.5" />
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
  const [deliveries, setDeliveries] = useState(1000)
  const [costPer, setCostPer] = useState(200)
  const [savings, setSavings] = useState(10)

  const baseline = useMemo(() => deliveries * costPer, [deliveries, costPer])
  const reduced = useMemo(() => Math.round(baseline * (savings / 100)), [baseline, savings])
  const projected = useMemo(() => baseline - reduced, [baseline, reduced])
  const progress = useMemo(() => percent(reduced, baseline), [reduced, baseline])

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Rocket className="h-4 w-4" /> Potential Cost Savings
      </h2>
      <Card className="rounded-xl">
        <CardContent className="grid gap-4 md:grid-cols-3 pt-6">
          <Metric label="Baseline Cost" value={`₹${baseline.toLocaleString()}`} />
          <Metric label="Estimated Savings" value={`₹${reduced.toLocaleString()}`} />
          <Metric label="Projected Cost" value={`₹${projected.toLocaleString()}`} />
          <Separator className="md:col-span-3" />
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

function Playbooks({ items }: { items: typeof playbooks }) {
  if (!items?.length) return null
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <ShieldCheck className="h-4 w-4" /> Implementation Playbooks
      </h2>
      <Accordion type="single" collapsible>
        {items.map((p) => (
          <AccordionItem key={p.id} value={p.id}>
            <AccordionTrigger>{p.title}</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                {p.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

function CTA() {
  return (
    <section className="rounded-2xl border p-6 md:p-8 bg-muted/40">
      <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Pilot in weeks, not months</h2>
          <p className="text-sm text-muted-foreground">
            Start with one depot or one region, prove ROI, then scale.
          </p>
        </div>
        <div className="flex gap-2">
          <Button>Book a walkthrough</Button>
          <Button variant="outline">See sample plan</Button>
        </div>
      </div>
    </section>
  )
}

// ---------- Page ----------
export default function LogisticsPage() {
  return (
    <Container className="py-10 space-y-10">
      <PageHeader />
      <StatStrip items={kpis} />
      <Pillars items={pillars} />
      <UseCaseTabs items={useCases} />
      <ROIBlock />
      <Playbooks items={playbooks} />
      <CTA />
    </Container>
  )
}