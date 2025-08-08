import { Container } from "@/components/container"

export const metadata = { title: "Data Processing Addendum — Auralytix AI", description: "DPA." }

export default function DpaPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-4">Data Processing Addendum</h1>
      <div className="prose prose-sm dark:prose-invert">
        <p>Static DPA content for demonstration purposes.</p>
      </div>
    </Container>
  )
}
