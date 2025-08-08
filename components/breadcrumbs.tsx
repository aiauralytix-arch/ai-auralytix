"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Breadcrumbs() {
  const pathname = usePathname()
  const parts = pathname.split("/").filter(Boolean)
  const crumbs = parts.map((p, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/")
    return { label: toTitle(p), href }
  })

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs.map((c, idx) => (
          <FragmentCrumb key={c.href} isLast={idx === crumbs.length - 1} {...c} />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function FragmentCrumb({ label, href, isLast }: { label: string; href: string; isLast: boolean }) {
  return (
    <>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        {isLast ? (
          <BreadcrumbPage>{label}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink asChild>
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    </>
  )
}

function toTitle(str: string) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
