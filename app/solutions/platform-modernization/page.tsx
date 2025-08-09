import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"

export const metadata = {
  title: "Platform Modernization — Auralytix AI",
  description: "Cloud-native platforms built for scale, security, and cost efficiency.",
  openGraph: { images: ["/images/solutions-platform.png"] },
}

export default function PlatformModernizationPage() {
  return (
    <Container className="py-10 space-y-8">
      <Breadcrumbs />
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Platform Modernization</h1>
          <p className="text-muted-foreground">Decompose monoliths, adopt containers, and automate delivery to move faster with confidence.</p>
        </div>
        <div className="rounded-2xl overflow-hidden border shadow-glass">
          <Image src="https://img.freepik.com/free-vector/application-development-banner-with-mobile-phone-conveyor-line_39422-598.jpg" width={1200} height={800} alt="Platform modernization visualization" />
        </div>
      </div>
    </Container>
  )
}
