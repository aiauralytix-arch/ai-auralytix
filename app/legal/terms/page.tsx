import { Container } from "@/components/container"

export const metadata = { title: "Terms of Service — Auralytix AI", description: "Terms of service." }

export default function TermsPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
      <div className="prose prose-sm dark:prose-invert">
        <p>These terms are provided as static content for demonstration purposes.</p>
      </div>
    </Container>
  )
}
