import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Auralytix AI — B2B Software Development, AI & Platform Engineering",
  description:
    "Auralytix AI builds enterprise-grade products with AI, data engineering, and platform modernization. 3,200+ projects delivered across 50+ countries.",
  openGraph: {
    title: "Auralytix AI — B2B Software Development",
    description:
      "Enterprise AI, Data, and Platform Engineering. 3,200+ projects delivered. 98% CSAT. Trusted across 50+ countries.",
    images: ["/images/og-hero.png"],
    type: "website",
    url: "https://auralytix.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auralytix AI — B2B Software Development",
    description:
      "Enterprise AI, Data, and Platform Engineering.",
    images: ["/images/og-hero.png"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-dvh bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
