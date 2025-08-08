import { Container } from "@/components/container"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/data/products"

export const metadata = { title: "Products — Auralytix AI", description: "Internal accelerators and tools." }

export default function ProductsPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold mb-2">Products</h1>
      <p className="text-muted-foreground mb-6">Accelerate delivery with our internal accelerators and reference stacks.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map(p => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-2xl border bg-card shadow-glass hover:shadow-md transition overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image src={p.image || "/placeholder.svg"} alt={`${p.name} preview`} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-muted-foreground">{p.excerpt}</div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
