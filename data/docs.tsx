import type { ReactNode } from "react"

export const docs: { slug: string; title: string; excerpt: string; content: ReactNode }[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    excerpt: "Overview of Auralytix AI docs.",
    content: (
      <>
        <p>Welcome to the Auralytix AI docs. Everything here is static and ships with the site.</p>
      </>
    ),
  },
  {
    slug: "architecture",
    title: "Architecture",
    excerpt: "How we think about systems and boundaries.",
    content: (
      <>
        <p>We design for reliability, observability, and cost efficiency first.</p>
      </>
    ),
  },
  {
    slug: "security",
    title: "Security",
    excerpt: "Security practices and controls.",
    content: (
      <>
        <p>Security-by-design with least privilege, encryption, and continuous monitoring.</p>
      </>
    ),
  },
]
