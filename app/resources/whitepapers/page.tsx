"use client"

import { useState } from "react"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"


type Whitepaper = {
  title: string
  summary: string
  topics: string[]
  date: string
  readingTime: string
  content: {
    executiveSummary: string
    pillars: string[]
    architecture: string[]
    highlights: string[]
  }
}

const whitepapers: Whitepaper[] = [
  {
    title: "Auralytix AI Platform Architecture 2025",
    summary:
      "A multi-tenant platform blueprint—from ingestion to inference to insights—built for reliability, observability, and scale.",
    topics: ["Multi-tenant SaaS", "Vector search", "Zero-downtime", "LLM orchestration"],
    date: "Aug 2025",
    readingTime: "12 min read",
    content: {
      executiveSummary:
        "This document outlines a layered architecture that separates ingestion, processing, retrieval, and inference. It details guardrails, isolation boundaries, and an observability-first posture. The goal: predictable latency, cost control, and safe model behavior across tenants.",
      pillars: [
        "Contract-first APIs & versioned schemas",
        "Provider-agnostic LLM routing with circuit breakers",
        "Vectorized retrieval with metadata pre-filtering",
        "Zero-downtime deploys via canaries & feature flags",
        "Full-fidelity audit trails with redaction",
      ],
      architecture: [
        "Edge → API Gateway → AuthZ → Rate Limits",
        "Ingestion Bus (Kafka/PubSub) → ETL/ELT → Object Store + Warehouse",
        "Embedding Service → pgvector/ANN Indexes → Retrieval API",
        "Policy Engine (guardrails) → Orchestrator → LLM Providers",
        "Metrics/Logs/Traces → SLOs → Auto-rollback hooks",
      ],
      highlights: [
        "Median p50 latency under 250ms for retrieval; <1.2s budget for RAG answers.",
        "Failure budgets per tenant; circuit trips isolate noisy neighbors.",
        "Observability: structured logs, RED/SUSE metrics, trace IDs end-to-end.",
      ],
    },
  },
  {
    title: "Cost-Optimized GenAI Infrastructure",
    summary:
      "How to cut inference spend without killing quality: caching, dynamic routing, and autoscaling playbooks.",
    topics: ["Autoscaling", "Cross-provider routing", "Prompt caching", "Benchmarks"],
    date: "Jun 2025",
    readingTime: "10 min read",
    content: {
      executiveSummary:
        "We combine prompt/result caching, tiered providers, and dynamic decoding controls to reduce cost while maintaining quality. Canary evals prevent silent regressions.",
      pillars: [
        "Hot-path caching with TTL + feature-key bucketing",
        "Dynamic temperature/top-p per intent",
        "Fallback providers with quality gates",
        "Workload-aware autoscaling (queue depth, GPU util)",
      ],
      architecture: [
        "API → Cache → (Hit? return) → Router → Provider A/B/C",
        "Async jobs for long-running tasks; SLA split by intent",
        "Cost dashboards: $/req, tokens/req, cache hit-rate, QoQ trends",
      ],
      highlights: [
        "Cache hit-rate 35–60% on repetitive workloads.",
        "Cost down ~40–50% with negligible quality loss (guarded by evals).",
      ],
    },
  },
  {
    title: "Security & Compliance Blueprint",
    summary:
      "Practical SOC 2/ISO patterns for AI workloads: data boundaries, key management, and privacy-preserving ML.",
    topics: ["Data residency", "Audit logging", "Encryption", "Privacy"],
    date: "Apr 2025",
    readingTime: "9 min read",
    content: {
      executiveSummary:
        "Security is baked into every layer: strict tenancy boundaries, least-privilege access, deterministic data flows, and continuous audit trails. We favor privacy-preserving transformations at the edge.",
      pillars: [
        "Tenant-scoped keys & KMS envelope encryption",
        "PII redaction at ingress; DLP on egress",
        "Immutable audit logs with tamper-evidence",
        "Data residency routing by policy",
      ],
      architecture: [
        "Ingress Filters → Tokenization/Redaction → Storage (KMS) → Access via ABAC",
        "Model I/O Gate with policy checks → Provider",
        "SIEM pipeline for alerts → Runbooks → Incident response",
      ],
      highlights: [
        "All secrets managed via KMS/HSM; rotation enforced.",
        "PII never leaves the residency region; cross-region via anonymized aggregates only.",
      ],
    },
  },
]

export default function WhitepapersPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <Container className="py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Whitepapers</h1>
        <p className="text-muted-foreground max-w-prose">
          In-depth research and architectural documentation from the Auralytix AI engineering team. Everything is viewable inline on this page.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-1">
        {whitepapers.map((w, i) => {
          const isActive = activeIdx === i
          return (
            <button
              key={w.title}
              type="button"
              onClick={() => setActiveIdx(isActive ? null : i)}
              aria-expanded={isActive}
              className={cn(
                "text-left rounded-xl border bg-card p-6 shadow-sm transition-all focus:outline-none",
                "hover:shadow-md focus:ring-2 focus:ring-primary/30",
                isActive && "ring-1 ring-primary/20 shadow-md"
              )}
            >
              <header>
                <h2 className="font-semibold text-lg">{w.title}</h2>
                <div className="text-xs text-muted-foreground mt-1">
                  {w.date} • {w.readingTime}
                </div>
              </header>

              <p className="text-sm text-muted-foreground mt-3">{w.summary}</p>

              <ul className="flex flex-wrap gap-2 mt-4">
                {w.topics.map((t) => (
                  <li key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 text-sm underline underline-offset-4">
                {isActive ? "Hide details" : "Read inline"}
              </div>

              {/* Expanded content (inline, no external links) */}
              {isActive && (
                <div className="mt-5 space-y-6 text-sm">
                  <section className="rounded-lg border bg-background/50 p-4">
                    <h3 className="font-medium text-base">Executive Summary</h3>
                    <p className="mt-2 text-foreground">{w.content.executiveSummary}</p>
                  </section>

                  <section className="rounded-lg border bg-background/50 p-4">
                    <h3 className="font-medium text-base">Architecture Pillars</h3>
                    <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                      {w.content.pillars.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-lg border bg-background/50 p-4">
                    <h3 className="font-medium text-base">High-Level Architecture</h3>
                    <div className="mt-2 grid gap-1 text-muted-foreground">
                      {w.content.architecture.map((line) => (
                        <div key={line}>• {line}</div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-lg border bg-background/50 p-4">
                    <h3 className="font-medium text-base">Key Highlights</h3>
                    <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                      {w.content.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Footer note (no external files) */}
      <p className="text-xs text-muted-foreground pt-2">
        These whitepapers are summarized on this page. Need a printable PDF? Email{" "}
        <a href="mailto:press@auralytix.ai" className="underline underline-offset-4">
          press@auralytix.ai
        </a>
        .
      </p>
    </Container>
  )
}