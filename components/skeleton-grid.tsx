"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"

export function SkeletonGrid({ rows = 6 }: { rows?: number }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])
  if (!loading) return null
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-4 w-3/5" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      ))}
    </div>
  )
}
