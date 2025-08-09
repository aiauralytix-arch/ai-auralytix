import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export const metadata = { title: "Fintech — Auralytix AI", description: "Risk, KYC, AML, fraud, payments." }

// —————————————————————————————————————————————————————————
// Small, single-responsibility UI helpers
// —————————————————————————————————————————————————————————
function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  // Guard clauses
  if (!title) return null
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  if (!label || !value) return null
  return (
    <div className="rounded-xl border p-3">
      <div className="text-2xl font-semibold leading-none">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
      {hint ? <div className="mt-2 text-[11px] text-muted-foreground/80">{hint}</div> : null}
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  if (!children) return null
  return <span className="inline-flex items-center rounded-md border px-2 py-1 text-xs bg-muted/30">{children}</span>
}

function KeyValue({ k, v }: { k: string; v: string }) {
  if (!k || !v) return null
  return (
    <TableRow>
      <TableCell className="w-56 font-medium">{k}</TableCell>
      <TableCell className="text-muted-foreground">{v}</TableCell>
    </TableRow>
  )
}

// —————————————————————————————————————————————————————————
// Page
// —————————————————————————————————————————————————————————
export default function FintechPage() {
  return (
    <Container className="py-10 space-y-10">
      <Breadcrumbs />

      {/* Hero */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Industry</Badge>
          <Badge>Fintech</Badge>
          <Badge variant="outline">KYC • AML • Fraud • Payments</Badge>
        </div>
        <h1 className="text-3xl font-semibold">Fintech</h1>
        <p className="text-muted-foreground">Solutions across risk analytics, KYC/AML, fraud detection, and real-time payments.</p>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="rounded-xl border p-4">Real-time fraud models with explainability</li>
          <li className="rounded-xl border p-4">Bank-grade KYC/KYB workflows</li>
          <li className="rounded-xl border p-4">High-throughput payment rails</li>
          <li className="rounded-xl border p-4">Portfolio risk & stress testing</li>
        </ul>
      </div>

      {/* Snapshot metrics */}
      <Section title="Snapshot" description="Operational and risk outcomes our systems are designed to drive.">
        <div className="grid gap-3 md:grid-cols-4">
          <Stat label="Chargeback reduction" value="18–35%" hint="via streaming features + adaptive thresholds" />
          <Stat label="Manual reviews" value="↓ 50–80%" hint="triage with explainable flags" />
          <Stat label="KYC pass-through" value="> 92%" hint="smart fallbacks and doc QA" />
          <Stat label="Decision latency" value="< 150 ms" hint="p95 end-to-end for hot path" />
        </div>
      </Section>

      <Separator />

      {/* Capabilities */}
      <Section title="Core capabilities" description="Composable building blocks that slot into existing stacks.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Risk & Fraud</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="grid gap-2">
                <Pill>Device + behavior signals</Pill>
                <Pill>Graph features (entity resolution)</Pill>
                <Pill>Model monitoring & drift alerts</Pill>
                <Pill>Adversarial testing harness</Pill>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">KYC / KYB</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="grid gap-2">
                <Pill>Adaptive identity verification</Pill>
                <Pill>Document QA & OCR sanity</Pill>
                <Pill>Sanctions & PEP screening</Pill>
                <Pill>Case management queues</Pill>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="grid gap-2">
                <Pill>Routing across multiple PSPs</Pill>
                <Pill>Soft declines recovery</Pill>
                <Pill>Ledger integrity checks</Pill>
                <Pill>Reconciliation workflows</Pill>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Solution tabs */}
      <Section title="Solution blueprints" description="Opinionated defaults with room to customize.">
        <Tabs defaultValue="fraud" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fraud">Fraud</TabsTrigger>
            <TabsTrigger value="kyc">KYC/KYB</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="fraud" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Real-time Fraud Pipeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Ingest events (auth, capture, device, behavior) to a streaming bus.</li>
                  <li>Enrich with features (graph, velocity, geo-consistency).</li>
                  <li>Score via trained ensemble with explainability attached.</li>
                  <li>Route to allow/step-up/deny with audit trail.</li>
                </ol>
                <div className="space-y-2">
                  <div className="text-xs">p95 latency budget</div>
                  <Progress value={84} />
                  <div className="text-[11px] text-muted-foreground">84% of budget used; room for additional checks.</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kyc" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Adaptive KYC/KYB</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <ul className="grid gap-2 md:grid-cols-2">
                  <li className="rounded-xl border p-3">Tiered verification flows based on risk</li>
                  <li className="rounded-xl border p-3">Auto-extract + validate doc fields</li>
                  <li className="rounded-xl border p-3">PEP/sanctions screening with fuzzy match</li>
                  <li className="rounded-xl border p-3">Escalation queues with notes & tags</li>
                </ul>
                <div className="flex items-center justify-between rounded-xl border p-3">
                  <div>
                    <div className="text-sm font-medium">Strict mode</div>
                    <div className="text-xs text-muted-foreground">Increase false negatives sensitivity</div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Smart Payment Routing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Optimize approval rates and fees by routing based on issuer, BIN, amount, and historical success.</p>
                <div className="grid gap-2 md:grid-cols-3">
                  <Pill>BIN-level success models</Pill>
                  <Pill>Fallbacks on soft declines</Pill>
                  <Pill>A/B routing experiments</Pill>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      <Separator />

      {/* Operating model */}
      <Section title="Operating model" description="How we build, ship, and keep risk under control.">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Model lifecycle</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div className="rounded-xl border p-3">Data contracts for stable features</div>
              <div className="rounded-xl border p-3">Shadow deployments before promote</div>
              <div className="rounded-xl border p-3">Champion–challenger rotation</div>
              <div className="rounded-xl border p-3">Bias, drift, and stability monitors</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Controls & audits</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div className="rounded-xl border p-3">Immutable decision logs</div>
              <div className="rounded-xl border p-3">Explainability for every decision</div>
              <div className="rounded-xl border p-3">Separation of duties in prod</div>
              <div className="rounded-xl border p-3">PII minimization & masking</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Architecture sketch (text-only) */}
      <Section title="Reference architecture" description="Text-only sketch for where components sit.">
        <Card>
          <CardContent className="p-4">
            <pre className="text-xs leading-5 whitespace-pre-wrap">
              {`[Clients]
  └─ SDKs → Event Bus → Stream Enrichment → Feature Store → Online Models → Decisions API
                                        └→ Monitoring → Alerts → Casework Queues`}
            </pre>
          </CardContent>
        </Card>
      </Section>

      {/* Compliance profile (no links) */}
      <Section title="Compliance profile" description="Standards and practices aligned with financial services.">
        <Table>
          <TableBody>
            <KeyValue k="Data residency" v="Region-locked storage with scoped access" />
            <KeyValue k="Access" v="RBAC + just-in-time elevation, audited" />
            <KeyValue k="PII processing" v="Minimize, mask, expire; purpose-bound" />
            <KeyValue k="Change control" v="Peer review, traceable releases" />
            <KeyValue k="Incident response" v=">= Quarterly drills; defined SLAs" />
          </TableBody>
        </Table>
      </Section>

      {/* Workflow details */}
      <Section title="Workflows" description="Prebuilt flows you can adopt as-is or tweak.">
        <Accordion type="single" collapsible>
          <AccordionItem value="wf1">
            <AccordionTrigger>Card-not-present fraud triage</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Score → auto-approve if clean; else step-up with additional signals; escalate to queue for analyst notes and replay.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="wf2">
            <AccordionTrigger>Business onboarding (KYB)</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Registry checks, UBO discovery, sanctions screening, document QA; risk-tiered verification with periodic refresh.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="wf3">
            <AccordionTrigger>Payment recovery</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Retry strategy across PSPs for soft declines, intelligent delay, and BIN-aware routing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* KPIs table */}
      <Section title="KPIs we track" description="Make impact measurable from day one.">
        <Table>
          <TableBody>
            <KeyValue k="Approval rate (auth)" v=">= +2.5pp net without risk drift" />
            <KeyValue k="False positives" v="-10% to -25% in 60–90 days" />
            <KeyValue k="Average decision time" v="< 150 ms p95 (hot path)" />
            <KeyValue k="Analyst handle time" v="-30% with explainability + templates" />
            <KeyValue k="KYC pass-through" v="> 92% on consumer; > 85% on SMB" />
          </TableBody>
        </Table>
      </Section>

      {/* Case notes (text only) */}
      <Section title="Representative results" description="Illustrative outcomes from past deployments.">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border p-4 text-sm">
            <div className="font-medium">Card payments</div>
            <div className="text-muted-foreground mt-1">18% fewer false positives; review volume down 70%.</div>
          </div>
          <div className="rounded-xl border p-4 text-sm">
            <div className="font-medium">Crypto onramp</div>
            <div className="text-muted-foreground mt-1">p95 latency under 120 ms with expanded checks.</div>
          </div>
          <div className="rounded-xl border p-4 text-sm">
            <div className="font-medium">SMB onboarding</div>
            <div className="text-muted-foreground mt-1">KYB completion +14pp with tiered flows.</div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="FAQs" description="Straight answers, no fluff.">
        <Accordion type="single" collapsible>
          <AccordionItem value="f1">
            <AccordionTrigger>Can this slot into our stack without replatforming?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Yes. Everything ships as modular services with clear interfaces; adopt piece by piece.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="f2">
            <AccordionTrigger>How do you keep models from overfitting?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Strict train/serve parity, out-of-time validation, and ongoing challenger evaluations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="f3">
            <AccordionTrigger>What about data privacy?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              PII minimization, masking, regional residency, and purpose-bound processing by default.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Final note — no links, no images */}
      <div className="rounded-xl border p-4 text-sm text-muted-foreground">
        Built to be pragmatic: start with a single flow, measure impact, expand only when value is clear.
      </div>
    </Container>
  )
}
