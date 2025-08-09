import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


// ────────────────────────────────────────────────────────────────────────────────
// Helpers (single responsibility + guard clauses)
// ────────────────────────────────────────────────────────────────────────────────
function formatStat(value: number, suffix: string) {
  if (Number.isNaN(value)) return "—" // guard: invalid number
  return `${value.toLocaleString()}${suffix}`
}

function nonEmpty(str?: string) {
  if (!str || !str.trim()) return "—" // guard: missing text
  return str
}

// ────────────────────────────────────────────────────────────────────────────────
// Small UI building blocks (each does one thing)
// ────────────────────────────────────────────────────────────────────────────────
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}

function StatCard({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-3xl">{formatStat(value, suffix)}</CardTitle>
      </CardHeader>
    </Card>
  )
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function ChecklistRow({ id, label, defaultChecked = false }: { id: string; label: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2">
      <Label htmlFor={id} className="text-sm">{label}</Label>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}

function LabeledField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────────────────────
export default function HealthcarePage() {
  return (
    <Container className="py-10 space-y-10">
      {/* Hero */}
      <header className="space-y-3">
        <Badge variant="secondary" className="rounded-full">Healthcare</Badge>
        <h1 className="text-3xl font-semibold">Clinical data platforms with privacy by design</h1>
        <p className="text-muted-foreground max-w-2xl">
          Build PHI-safe analytics and AI that clinicians actually trust. From ingestion and de‑identification
          to audit-ready observability, Auralytix AI keeps your workflows reliable and compliant.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Badge>PHI-safe</Badge>
          <Badge variant="outline">HIPAA-aligned</Badge>
          <Badge variant="outline">SOC 2-conscious</Badge>
          <Badge variant="outline">On-prem or VPC</Badge>
        </div>
      </header>

      <Separator />

      {/* Capabilities */}
      <section className="space-y-6">
        <SectionTitle
          title="Core capabilities"
          subtitle="Each module is standalone and can be adopted incrementally."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem title="PHI-safe data pipelines" desc="Tokenization, de‑ID, reversible pseudonyms, lineage, and access controls." />
          <FeatureItem title="Clinical NLP & summarization" desc="ICD/CPT extraction, discharge summary drafting, SOAP note clean‑up, prompt safety." />
          <FeatureItem title="Patient journey analytics" desc="Care-path analytics, cohorting, readmission risk, and LOS predictions." />
          <FeatureItem title="Provider network optimization" desc="Referral leakage, schedule utilization, and staffing insights for ops." />
          <FeatureItem title="Quality & safety monitors" desc="Near‑real‑time triggers for HACs, CDI opportunities, and medication risks." />
          <FeatureItem title="Governed feature store" desc="Reusable, versioned clinical features with approvals and audit trails." />
        </div>
      </section>

      {/* Reference Architecture */}
      <section className="space-y-6">
        <SectionTitle title="Reference workflow" subtitle="A simple, auditable path from source to signal." />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">1) Ingest</CardTitle>
              <CardDescription>HL7/FHIR, EHR exports, claims, device streams.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Schema validation</li>
                <li>PII/PHI tagging</li>
                <li>Idempotent loads</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">2) Protect</CardTitle>
              <CardDescription>De‑identify, tokenize, segregate secrets.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Role‑based access</li>
                <li>KMS backed keys</li>
                <li>Column‑level masking</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">3) Activate</CardTitle>
              <CardDescription>Features → models → measurable KPIs.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Versioned features</li>
                <li>Shadow deploys</li>
                <li>Clinician feedback loops</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Readiness Checklist */}
      <section className="space-y-6">
        <SectionTitle title="Readiness checklist" subtitle="Quick self‑assessment before integrating." />
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <ChecklistRow id="baa" label="Business Associate Agreement prepared" defaultChecked />
                <ChecklistRow id="dtm" label="Data transfer mapping documented" defaultChecked />
                <ChecklistRow id="rtr" label="Right‑to‑request deletion process" />
                <ChecklistRow id="dsar" label="DSAR workflow validated" />
              </div>
              <div>
                <ChecklistRow id="audit" label="Audit log retention policy defined" defaultChecked />
                <ChecklistRow id="drr" label="Disaster recovery runbooks tested" />
                <ChecklistRow id="sra" label="Security risk assessment completed" />
                <ChecklistRow id="phi" label="Column‑level PHI classification in place" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Outcome Metrics */}
      <section className="space-y-6">
        <SectionTitle title="Outcome metrics" subtitle="Illustrative metrics teams track with Auralytix AI." />
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Sepsis alert precision" value={0.82 * 100} suffix="%" />
          <StatCard label="LOS reduction" value={0.9} suffix=" days" />
          <StatCard label="CDI capture lift" value={18} suffix="%" />
          <StatCard label="Time‑to‑summary" value={35} suffix="s" />
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Deployment progress</CardTitle>
            <CardDescription>Typical 8‑week rollout milestones.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm"><span>Week 2: Data ingress</span><span>100%</span></div>
              <Progress value={100} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Week 4: PHI protection</span><span>80%</span></div>
              <Progress value={80} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Week 6: Model shadowing</span><span>60%</span></div>
              <Progress value={60} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Week 8: Clinician sign‑off</span><span>30%</span></div>
              <Progress value={30} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sample Data Model */}
      <section className="space-y-6">
        <SectionTitle title="Minimal data model" subtitle="A small, pragmatic subset to start." />
        <Card>
          <Table>
            <TableCaption>Core entities for patient‑centric analytics.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Entity</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Required Fields</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Patient</TableCell>
                <TableCell>patient_id</TableCell>
                <TableCell>dob, sex, mrn_hash</TableCell>
                <TableCell>Store MRN as token only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Encounter</TableCell>
                <TableCell>encounter_id</TableCell>
                <TableCell>admit_ts, discharge_ts, type</TableCell>
                <TableCell>Join to patient_id</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Observation</TableCell>
                <TableCell>observation_id</TableCell>
                <TableCell>code, value, unit, ts</TableCell>
                <TableCell>Map to LOINC where possible</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Note</TableCell>
                <TableCell>note_id</TableCell>
                <TableCell>category, author_role, text</TableCell>
                <TableCell>De‑ID on write path</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Risk & Compliance */}
      <section className="space-y-6">
        <SectionTitle title="Risk & compliance" subtitle="Make audits boring again." />
        <div className="grid gap-4 md:grid-cols-3">
          <Alert>
            <AlertTitle>Least‑privilege defaults</AlertTitle>
            <AlertDescription>Every service account scoped to the minimal dataset; quarterly reviews enforced.</AlertDescription>
          </Alert>
          <Alert>
            <AlertTitle>Full auditability</AlertTitle>
            <AlertDescription>Immutable logs, data lineage, and model version pinning across environments.</AlertDescription>
          </Alert>
          <Alert>
            <AlertTitle>Safe prompts</AlertTitle>
            <AlertDescription>Prompt libraries ship with PHI filters and redaction rules pre‑applied.</AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Request a Demo (no links) */}
      <section className="space-y-6">
        <SectionTitle title="Request a demo" subtitle="No external links or images — just a simple form." />
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <LabeledField label="Organization">
                <Input placeholder="e.g., Northside Health" />
              </LabeledField>
              <LabeledField label="Work Email">
                <Input type="email" placeholder="name@company.com" />
              </LabeledField>
              <LabeledField label="Role">
                <Input placeholder="e.g., Clinical Informatics Lead" />
              </LabeledField>
              <LabeledField label="Region">
                <Input placeholder="e.g., APAC" />
              </LabeledField>
              <div className="md:col-span-2">
                <LabeledField label="What problem should we prioritize?">
                  <Textarea placeholder="Short context…" rows={4} />
                </LabeledField>
              </div>
              <div className="md:col-span-2 flex gap-3">
                <Button type="button" variant="default">Save</Button>
                <Button type="button" variant="secondary">Reset</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footnote */}
      <footer className="pt-2 text-xs text-muted-foreground">
        All content here is illustrative and intentionally free of external links or images.
      </footer>
    </Container>
  )
}
