"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/site-mode-toggle"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/70 supports-[backdrop-filter]:bg-background/60">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-mark.png"
            width={28}
            height={28}
            alt="Auralytix AI logo mark"
            className="rounded-lg"
            priority
          />
          <span className="font-semibold tracking-tight">Auralytix AI</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[640px] grid-cols-2 gap-4 p-4">
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
                <div className="grid w-[540px] grid-cols-2 gap-4 p-4">
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
                <div className="grid w-[620px] grid-cols-3 gap-4 p-4">
                  <MegaLink href="/resources" title="Resources" desc="Blogs, guides, webinars." />
                  <MegaLink href="/resources/blog" title="Blog" desc="Engineering insights." />
                  <MegaLink href="/resources/guides" title="Guides" desc="How we build." />
                  <MegaLink href="/resources/whitepapers" title="Whitepapers" desc="Deep dives." />
                  <MegaLink href="/resources/webinars" title="Webinars" desc="On-demand talks." />
                  <MegaLink href="/changelog" title="Changelog" desc="What changed." />
                  <MegaLink href="/docs" title="Docs" desc="Developer docs." />
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
                <div className="grid w-[560px] grid-cols-2 gap-4 p-4">
                  <MegaLink href="/about" title="About" desc="Mission, values, leadership." />
                  <MegaLink href="/careers" title="Careers" desc="Build with us." />
                  <MegaLink href="/partners" title="Partners" desc="Ecosystem & tiers." />
                  <MegaLink href="/customers" title="Customers" desc="Logo wall & quotes." />
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
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/docs">
            <Button variant="ghost" size="sm">Docs</Button>
          </Link>
          <Link href="/pricing">
            <Button size="sm" className="rounded-2xl">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

function MegaLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="rounded-xl p-3 hover:bg-accent transition-colors">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
    </Link>
  )
}
