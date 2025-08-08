import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import Image from "next/image"
import { products } from "@/data/products"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = products.find(x => x.slug === params.slug)
  return {
    title: `${p?.name ?? "Product"} — Auralytix AI`,
    description: p?.excerpt ?? "Product detail",
    openGraph: { images: [p?.image ?? "/images/product-generic.jpg"] },
  }
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p = products.find(x => x.slug === params.slug)
  if (!p) return notFound()

  return (
    <Container className="py-10 space-y-6">
      <h1 className="text-3xl font-semibold">{p.name}</h1>
      <p className="text-muted-foreground">{p.excerpt}</p>
      <div className="rounded-2xl overflow-hidden border shadow-glass">
        <Image src={p.image || "/placeholder.svg"} alt={`${p.name} hero`} width={1200} height={800} />
      </div>
      <ul className="grid gap-3 md:grid-cols-2">
        {p.features.map(f => <li key={f} className="rounded-xl border p-4">{f}</li>)}
      </ul>
    </Container>
  )
}
