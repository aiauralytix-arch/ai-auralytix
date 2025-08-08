import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, ShieldCheck, BadgeCheck, Globe } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container-base py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-mark.png" width={28} height={28} alt="Auralytix AI logo" className="rounded-lg" />
            <span className="font-semibold">Auralytix AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Enterprise AI, data engineering, and platform modernization.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="h-4 w-4" />
            50+ countries
          </div>
          <div className="flex items-center gap-2 text-sm">
            <BadgeCheck className="h-4 w-4" />
            3,200+ projects delivered
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4" />
            98% CSAT
          </div>
        </div>
        <FooterCol title="Solutions" links={[
          ["AI Product Development", "/solutions/ai-product-development"],
          ["Platform Modernization", "/solutions/platform-modernization"],
          ["Data Engineering", "/solutions/data-engineering"],
          ["MLOps & Observability", "/solutions/mlops-observability"],
        ]} />
        <FooterCol title="Company" links={[
          ["About", "/about"],
          ["Careers", "/careers"],
          ["Partners", "/partners"],
          ["Customers", "/customers"],
          ["Press", "/press"],
          ["Contact", "/contact"],
        ]} />
        <FooterCol title="Resources" links={[
          ["Blog", "/resources/blog"],
          ["Guides", "/resources/guides"],
          ["Whitepapers", "/resources/whitepapers"],
          ["Webinars", "/resources/webinars"],
          ["Docs", "/docs"],
          ["Changelog", "/changelog"],
          ["Status", "/status"],
          ["Security & Compliance", "/security"],
          ["Legal", "/legal/privacy"],
        ]} />
      </div>
      <div className="container-base border-t py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Image src="/images/badge-soc2.png" width={28} height={28} alt="SOC 2-like badge" />
          <Image src="/images/badge-iso27001.png" width={28} height={28} alt="ISO 27001-like badge" />
          <span className="text-xs">Compliance-ready (static badges)</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Link href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter/X" target="_blank" rel="noreferrer" className="hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Auralytix AI • 100 Market St, San Francisco, CA • All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link className="text-sm text-muted-foreground hover:text-foreground" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
