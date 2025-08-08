import { Container } from "@/components/container"

export const metadata = { title: "Whitepapers — Auralytix AI", description: "Architectural deep dives." }

export default function WhitepapersPage() {
  return (
    <Container className="py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Whitepapers</h1>
      <div className="prose prose-sm dark:prose-invert">
        <p>Read-only PDFs and summaries are available. No forms required.</p>
      </div>
    </Container>
  )
}
