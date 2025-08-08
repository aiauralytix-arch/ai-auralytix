import { Container } from "@/components/container"

export const metadata = { title: "Webinars — Auralytix AI", description: "On-demand technical sessions." }

export default function WebinarsPage() {
  return (
    <Container className="py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Webinars</h1>
      <div className="prose prose-sm dark:prose-invert">
        <p>Browse recordings and slides. All content is viewable to    users only.</p>
      </div>
    </Container>
  )
}
