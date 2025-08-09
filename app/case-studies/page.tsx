"use client"

import { Container } from "@/components/container"
import { caseStudies } from "@/data/case-studies"
import { CaseStudyCard } from "@/components/case-study-card"
import { useMemo, useState } from "react"
import { SkeletonGrid } from "@/components/skeleton-grid"
import { Badge } from "@/components/ui/badge"

const industries = ["All", "Fintech", "Healthcare", "Retail", "Logistics"] as const

export default function CaseStudiesPage() {
  const [query, setQuery] = useState("")
  const [industry, setIndustry] = useState<typeof industries[number]>("All")

  const filtered = useMemo(() => {
    return caseStudies.filter(cs => {
      const matchesIndustry = industry === "All" || cs.industry === industry
      const matchesQuery = !query || cs.title.toLowerCase().includes(query.toLowerCase()) || cs.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchesIndustry && matchesQuery
    })
  }, [query, industry])

  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-2">Case Studies</h1>
      <p className="text-muted-foreground mb-6">Filter by industry or search keywords. Client-side only.</p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          aria-label="Search case studies"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-9 rounded-xl border bg-background px-3 text-sm w-full sm:w-64"
        />
        <div className="flex gap-2">
          {industries.map(i => (
            <button
              key={i}
              onClick={() => setIndustry(i)}
              className={`text-xs px-3 py-1 rounded-full border ${industry === i ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              aria-pressed={industry === i}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <SkeletonGrid rows={6} />

      {filtered.length === 0 ? (
        <div className="rounded-2xl border p-6 text-sm text-muted-foreground">
          No results. Try “fraud”, “personalization”, or “routing”.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map(cs => <CaseStudyCard key={cs.slug} {...cs} />)}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-2">
        <span className="text-xs text-muted-foreground">Popular tags:</span>
        {["GenAI", "ETL", "Observability", "Security"].map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
      </div>
    </Container>
  )
}
