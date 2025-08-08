import { Container } from "@/components/container"

export const metadata = { title: "Guides — Auralytix AI", description: "Step-by-step how we build." }

export default function GuidesPage() {
  return (
    <Container className="py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Guides</h1>
      <div className="prose prose-sm dark:prose-invert">
        <p>Explore opinionated practices for building reliable AI products and platforms using modern tooling.</p>
      </div>
    </Container>
  )
}
