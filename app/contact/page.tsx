import { Container } from "@/components/container"

export const metadata = { title: "Contact — Auralytix AI", description: "Get in touch. No forms—static details only." }

export default function ContactPage() {
  return (
    <Container className="py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-sm text-muted-foreground">For new engagements and partnerships, email hello@auralytix.ai</p>
      <ul className="text-sm">
        <li>Email: hello@auralytix.ai</li>
        <li>Address: 100 Market St, San Francisco, CA</li>
      </ul>
    </Container>
  )
}
