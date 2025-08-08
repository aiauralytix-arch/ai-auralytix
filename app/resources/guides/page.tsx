"use client"

import { useState } from "react"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"

type GuideSection = {
  heading: string
  bullets?: string[]
  code?: { lang: "bash" | "ts" | "yaml" | "json"; snippet: string; caption?: string }
  callout?: string
}

type Guide = {
  title: string
  summary: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  sections: GuideSection[]
}

const guides: Guide[] = [
  {
    title: "Designing Resilient AI APIs",
    summary:
      "Fault-tolerant, observable AI APIs with TypeScript + Node.js on serverless. Timeouts, retries, fallbacks, and golden signals.",
    difficulty: "Intermediate",
    duration: "12 min read",
    sections: [
      {
        heading: "Guardrails & Timeouts",
        bullets: [
          "Set **hard** timeouts for model calls (e.g., 8s) and **softer** API timeouts (e.g., 10s).",
          "Apply circuit breakers on provider errors/timeouts to avoid cascading failures.",
          "Prefer idempotent endpoints; use request IDs for safe retries.",
        ],
        code: {
          lang: "ts",
          caption: "Minimal fetch with timeout + retry",
          snippet: `async function withTimeout<T>(p: Promise<T>, ms = 8000) {
  let t: ReturnType<typeof setTimeout>
  const timeout = new Promise<never>((_, rej) => (t = setTimeout(() => rej(new Error("Timeout")), ms)))
  try { return await Promise.race([p, timeout]) } finally { clearTimeout(t!) }
}

async function callModel(payload: unknown) {
  const attempt = async () =>
    fetch("https://api.provider.ai/infer", { method: "POST", body: JSON.stringify(payload) })
  for (let i = 0; i < 2; i++) {
    try { return await withTimeout(attempt(), 8000) } 
    catch (e) { if (i === 1) throw e }
  }
}`,
        },
      },
      {
        heading: "Observability (Golden Signals)",
        bullets: [
          "Log **latency**, **error rate**, **traffic**, **saturation** per endpoint & model provider.",
          "Emit structured logs (JSON) with `traceId`, `requestId`, and `model`.",
          "Sample full prompts only in dev; redact user PII in prod.",
        ],
      },
      {
        heading: "Degradation Paths",
        bullets: [
          "Fallback to cheaper/shorter models for non-critical paths.",
          "Return cached answers for repeated queries during provider brownouts.",
          "Gracefully degrade UX with partial responses + banner notice.",
        ],
      },
    ],
  },
  {
    title: "Setting Up CI/CD for AI Model Deployments",
    summary:
      "Automate builds, tests, and rollouts via GitHub Actions. Version every artifact, promote with canaries, and track lineage.",
    difficulty: "Advanced",
    duration: "15 min read",
    sections: [
      {
        heading: "Version Everything",
        bullets: [
          "Use `{modelName}:{semver}+{gitSha}` tags for images.",
          "Write a `MODEL_CARD.md` with inputs, expected ranges, and evaluation notes.",
        ],
      },
      {
        heading: "Pipeline",
        bullets: [
          "On PR: run unit tests, static checks, small eval suite.",
          "On main merge: build image, run full evals, push to registry.",
          "Promote to staging; run canary in prod (1–5%) with auto-rollback.",
        ],
        code: {
          lang: "yaml",
          caption: "actions/workflows/model-ci.yml (excerpt)",
          snippet: `name: Model CI
on: [push]
jobs:
  build-and-eval:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v5
        with: { python-version: "3.11" }
      - run: pip install -r requirements.txt
      - run: pytest -q
      - run: python scripts/run_evals.py --suite smoke
      - name: Build image
        run: docker build -t registry.io/model:${`{ 'github.sha' }`} .
      - name: Push image
        run: docker push registry.io/model:${`{ 'github.sha' }`}`,
        },
      },
      {
        heading: "Rollouts & Rollbacks",
        bullets: [
          "Use feature flags to route % of traffic to the new model.",
          "Track regressions with dashboards; rollback automatically on SLO breach.",
        ],
      },
    ],
  },
  {
    title: "Prompt Engineering Basics for GenAI",
    summary:
      "Get consistent outputs with clear instructions, role priming, few-shot examples, and deterministic decoding where needed.",
    difficulty: "Beginner",
    duration: "8 min read",
    sections: [
      {
        heading: "Prompt Structure",
        bullets: [
          "System: role, boundaries, tone. User: task + context. Assistant: style hints.",
          "Use **few-shot** examples to anchor style and structure.",
          "Constrain output with schemas (JSON) or templates.",
        ],
        code: {
          lang: "json",
          caption: "JSON schema for bounded outputs",
          snippet: `{
  "type": "object",
  "properties": {
    "summary": { "type": "string", "maxLength": 240 },
    "tags": { "type": "array", "items": { "type": "string" }, "maxItems": 5 }
  },
  "required": ["summary", "tags"],
  "additionalProperties": false
}`,
        },
      },
      {
        heading: "Decoding Controls",
        bullets: [
          "Lower temperature/top-p for consistency; raise for ideation.",
          "Set max tokens to avoid runaway responses.",
        ],
      },
    ],
  },
  {
    title: "Cost-Optimized Vector Search with PostgreSQL",
    summary:
      "Use pgvector for semantic search without a separate vector DB. Focus on ANN indexes, batching, and recall-quality balance.",
    difficulty: "Intermediate",
    duration: "11 min read",
    sections: [
      {
        heading: "Setup",
        bullets: [
          "Enable `pgvector` extension.",
          "Store embeddings as `vector(768)` (or model dim).",
        ],
        code: {
          lang: "sql" as any, // display only
          caption: "Create table + index (HNSW)",
          snippet: `CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE docs (id serial PRIMARY KEY, content text, embedding vector(768));
CREATE INDEX docs_embedding_hnsw ON docs USING hnsw (embedding vector_l2_ops);`,
        },
      },
      {
        heading: "Querying",
        bullets: [
          "Use ANN for speed; exact for small sets or evals.",
          "Pre-filter by metadata (tenant, type) before ANN to cut cost.",
        ],
        code: {
          lang: "sql" as any,
          caption: "KNN search",
          snippet: `SELECT id, content
FROM docs
ORDER BY embedding <-> '[0.12, 0.05, ...]'::vector
LIMIT 5;`,
        },
      },
      {
        heading: "Ops Tips",
        bullets: [
          "Batch inserts; reindex during low-traffic windows.",
          "Track recall vs. cost monthly; tune ef_search/ef_construction.",
        ],
      },
    ],
  },
]

export default function GuidesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <Container className="py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Guides</h1>
        <p className="text-muted-foreground">
          Opinionated, battle-tested practices for building reliable AI products and platforms.
        </p>
      </div>

      {/* Guides */}
      <div className="grid gap-6 md:grid-cols-1">
        {guides.map((g, i) => {
          const isOpen = openIndex === i
          return (
            <section
              key={g.title}
              className={cn(
                "rounded-xl border bg-card p-6 shadow-sm transition-all",
                isOpen ? "ring-1 ring-primary/20 shadow-md" : "hover:shadow-md"
              )}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
                className="w-full text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-lg">{g.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{g.summary}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {g.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{g.duration}</span>
                  </div>
                </div>
              </button>

              {/* Expanded */}
              {isOpen && (
                <div className="mt-4 space-y-6 text-sm">
                  {g.sections.map((s, idx) => (
                    <div key={idx} className="rounded-lg border p-4 bg-background/50">
                      <h3 className="font-medium text-base">{s.heading}</h3>
                      {s.callout && (
                        <p className="mt-2 rounded-md bg-primary/5 p-3 text-primary">
                          {s.callout}
                        </p>
                      )}
                      {s.bullets?.length ? (
                        <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                          {s.bullets.map((b, k) => (
                            <li key={k} dangerouslySetInnerHTML={{ __html: b }} />
                          ))}
                        </ul>
                      ) : null}
                      {s.code ? (
                        <figure className="mt-3">
                          <pre className="overflow-x-auto rounded-lg border bg-muted/40 p-3 text-xs">
                            <code>{s.code.snippet}</code>
                          </pre>
                          {s.code.caption ? (
                            <figcaption className="mt-1 text-[11px] text-muted-foreground">
                              {s.code.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </Container>
  )
}