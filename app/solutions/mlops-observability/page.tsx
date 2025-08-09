import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"

export const metadata = {
  title: "MLOps & Observability — Auralytix AI",
  description: "Operate reliable models with CI/CD, monitoring, and governance.",
  openGraph: { images: ["/images/solutions-mlops.png"] },
}

export default function MlopsPage() {
  return (
    <Container className="py-10 space-y-8">
      <Breadcrumbs />
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">MLOps & Observability</h1>
          <p className="text-muted-foreground">Automate model lifecycle, monitor drift, and ensure safe, compliant operations.</p>
        </div>
        <div className="rounded-2xl overflow-hidden border shadow-glass">
          <Image src="https://img.freepik.com/free-photo/body-temperature-coronavirus-pandemic-thermal-image_53876-96156.jpg" width={1200} height={800} alt="MLOps visualization" />
        </div>
      </div>
    </Container>
  )
}
