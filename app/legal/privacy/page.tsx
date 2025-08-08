import { Container } from "@/components/container"

export const metadata = { title: "Privacy Policy — Auralytix AI", description: "Privacy practices." }

export default function PrivacyPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <div className="prose prose-sm dark:prose-invert">
        <p>This is a static privacy policy for demonstration purposes.</p>
      </div>
    </Container>
  )
}
