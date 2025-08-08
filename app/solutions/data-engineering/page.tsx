import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"

export const metadata = {
  title: "Data Engineering — Auralytix AI",
  description: "High-quality, governed data pipelines powering analytics and AI.",
  openGraph: { images: ["/images/solutions-data.png"] },
}

export default function DataEngineeringPage() {
  return (
    <Container className="py-10 space-y-8">
      <Breadcrumbs />
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Data Engineering</h1>
          <p className="text-muted-foreground">Design and operate robust pipelines with observability, governance, and quality baked-in.</p>
        </div>
        <div className="rounded-2xl overflow-hidden border shadow-glass">
          <Image src="https://img.freepik.com/free-psd/3d-rendering-graphic-design_23-2149642708.jpg?t=st=1754680136~exp=1754683736~hmac=40b5d8ce858bb9358ea0f8a122940addba5c4d7a1524218bd50b6e2ef8e22b29&w=2000" width={1200} height={800} alt="Data engineering visualization" />
        </div>
      </div>
    </Container>
  )
}
