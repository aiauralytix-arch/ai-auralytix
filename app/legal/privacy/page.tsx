import { Container } from "@/components/container"

export const metadata = {
  title: "Privacy Policy — Auralytix AI",
  description: "Privacy practices and data protection commitments.",
}

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      points: [
        "Contact details (name, email, phone) when you engage with us.",
        "Usage data from our website and products to improve performance.",
        "Technical logs for security and compliance purposes.",
      ],
    },
    {
      title: "How We Use Your Information",
      points: [
        "To deliver and improve our AI products and services.",
        "To respond to inquiries, provide customer support, and send updates.",
        "To comply with legal, regulatory, and contractual obligations.",
      ],
    },
    {
      title: "Data Sharing & Security",
      points: [
        "We do not sell your personal data.",
        "Data may be shared with trusted service providers under strict confidentiality.",
        "All data is encrypted in transit and at rest.",
      ],
    },
    {
      title: "Your Rights",
      points: [
        "Access, correct, or delete your personal information.",
        "Opt out of marketing communications at any time.",
        "Request a copy of your stored data.",
      ],
    },
    {
      title: "Contact Us",
      points: [
        "Email: privacy@auralytix.ai",
        "We aim to respond to privacy-related requests within 7 business days.",
      ],
    },
  ]

  return (
    <Container className="py-12 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground max-w-prose">
          We respect your privacy and are committed to protecting your personal data.
          This policy outlines how we collect, use, and safeguard your information.
        </p>
        <p className="text-xs text-muted-foreground">Last updated: August 2025</p>
      </div>

      {/* Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((sec) => (
          <div
            key={sec.title}
            className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg mb-3">{sec.title}</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {sec.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}