"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/site-mode-toggle"
import { cn } from "@/lib/utils"

/* ── Guards ──────────────────────────────────────────────────────────────── */
function assertNonEmpty(str: string, label: string) {
  if (!str?.trim()) throw new Error(`${label} cannot be empty`)
}

/* ── Simple building blocks (single responsibility each) ─────────────────── */
function Logo() {
  const alt = "Auralytix AI logo mark"
  assertNonEmpty(alt, "Logo alt text")

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/auralytics logo.png"
        width={28}
        height={28}
        alt={alt}
        className="rounded-lg"
        priority
      />
      <span className="font-semibold tracking-tight">Auralytix AI</span>
    </Link>
  )
}

function HeaderActions() {
  return (
    <div className="hidden md:flex items-center gap-2">
      <ModeToggle />
      <Link href="/pricing">
        <Button size="sm" className="rounded-2xl">Get Started</Button>
      </Link>
    </div>
  )
}

function DesktopNav() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[640px] grid-cols-2 gap-4 p-4 bg-white dark:bg-popover">
              <MegaLink href="/solutions" title="Overview" desc="AI, data, and platform outcomes." />
              <MegaLink href="/solutions/ai-product-development" title="AI Product Development" desc="Ship AI-first experiences." />
              <MegaLink href="/solutions/platform-modernization" title="Platform Modernization" desc="Cloud-native, cost-optimized." />
              <MegaLink href="/solutions/data-engineering" title="Data Engineering" desc="Pipelines, quality, governance." />
              <MegaLink href="/solutions/mlops-observability" title="MLOps & Observability" desc="Reliable models at scale." />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[540px] grid-cols-2 gap-4 p-4 bg-white dark:bg-popover">
              <MegaLink href="/industries" title="Overview" desc="Vertical expertise." />
              <MegaLink href="/industries/fintech" title="Fintech" desc="Risk, KYC, payments." />
              <MegaLink href="/industries/healthcare" title="Healthcare" desc="Clinical data, PHI ready." />
              <MegaLink href="/industries/retail" title="Retail" desc="Personalization, demand." />
              <MegaLink href="/industries/logistics" title="Logistics" desc="Routing, ETA, fleets." />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[620px] grid-cols-3 gap-4 p-4 bg-white dark:bg-popover">
              <MegaLink href="/resources" title="Resources" desc="Guides, webinars." />
              <MegaLink href="/resources/guides" title="Guides" desc="How we build." />
              <MegaLink href="/resources/whitepapers" title="Whitepapers" desc="Deep dives." />
              <MegaLink href="/resources/webinars" title="Webinars" desc="On-demand talks." />
              <MegaLink href="/changelog" title="Changelog" desc="What changed." />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/products" className={cn("px-3 py-2 text-sm", isActive("/products") && "text-primary font-medium")}>
            Products
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[560px] grid-cols-2 gap-4 p-4 bg-white dark:bg-popover">
              <MegaLink href="/about" title="About" desc="Mission, values, leadership." />
              <MegaLink href="/careers" title="Careers" desc="Build with us." />
              <MegaLink href="/partners" title="Partners" desc="Ecosystem & tiers." />
              <MegaLink href="/tech-stack" title="Tech Stack" desc="Logo wall & quotes." />
              <MegaLink href="/press" title="Press" desc="Press kit & bios." />
              <MegaLink href="/security" title="Security & Compliance" desc="SOC 2-like practices." />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/pricing" className={cn("px-3 py-2 text-sm", isActive("/pricing") && "text-primary font-medium")}>
            Pricing
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" className={cn("px-3 py-2 text-sm", isActive("/contact") && "text-primary font-medium")}>
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  // Single responsibility: render a collapsible nav inside a sheet for <md
  const sections = [
    {
      label: "Solutions",
      links: [
        { href: "/solutions", title: "Overview" },
        { href: "/solutions/ai-product-development", title: "AI Product Development" },
        { href: "/solutions/platform-modernization", title: "Platform Modernization" },
        { href: "/solutions/data-engineering", title: "Data Engineering" },
        { href: "/solutions/mlops-observability", title: "MLOps & Observability" },
      ],
    },
    {
      label: "Industries",
      links: [
        { href: "/industries", title: "Overview" },
        { href: "/industries/fintech", title: "Fintech" },
        { href: "/industries/healthcare", title: "Healthcare" },
        { href: "/industries/retail", title: "Retail" },
        { href: "/industries/logistics", title: "Logistics" },
      ],
    },
    {
      label: "Resources",
      links: [
        { href: "/resources", title: "Resources" },
        { href: "/resources/guides", title: "Guides" },
        { href: "/resources/whitepapers", title: "Whitepapers" },
        { href: "/resources/webinars", title: "Webinars" },
        { href: "/changelog", title: "Changelog" },
      ],
    },
    {
      label: "Company",
      links: [
        { href: "/about", title: "About" },
        { href: "/careers", title: "Careers" },
        { href: "/partners", title: "Partners" },
        { href: "/tech-stack", title: "Tech Stack" },
        { href: "/press", title: "Press" },
        { href: "/security", title: "Security & Compliance" },
      ],
    },
  ]

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[70vw] p-0 bg-white">
          <SheetHeader className="px-4 py-3 border-b">
            <SheetTitle className="text-base">Menu</SheetTitle>
          </SheetHeader>

          <nav className="px-2 py-2">
            <Link href="/products" className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent">
              <span>Products</span>
            </Link>

            <Accordion type="multiple" className="mt-1">
              {sections.map((s) => (
                <AccordionItem key={s.label} value={s.label} className="border-b-0">
                  <AccordionTrigger className="px-3 py-2 text-sm hover:no-underline">
                    {s.label}
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pb-2">
                    <ul className="grid gap-1">
                      {s.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                            {l.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-2 grid gap-1">
              <Link href="/pricing" className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent">
                <span>Pricing</span>
              </Link>
              <Link href="/contact" className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent">
                <span>Contact</span>
              </Link>
            </div>

            <div className="px-3 pt-3">
              <ModeToggle />
            </div>

            <div className="px-3 py-3">
              <Link href="/pricing" className="block">
                <Button className="w-full rounded-2xl">Get Started</Button>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/70 supports-[backdrop-filter]:bg-background/60">
      <div className="container-base flex h-16 items-center justify-between">
        <Logo />
        <DesktopNav />
        <HeaderActions />
        <MobileNav />
      </div>
    </header>
  )
}

function MegaLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  assertNonEmpty(href, "MegaLink href")
  assertNonEmpty(title, "MegaLink title")

  return (
    <Link href={href} className="rounded-xl p-3 hover:bg-accent transition-colors">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
    </Link>
  )
}