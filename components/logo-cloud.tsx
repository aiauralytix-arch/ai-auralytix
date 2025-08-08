import Image from "next/image"
import { Container } from "./container"
import { customers } from "@/data/customers"

export function LogoCloud() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {customers.slice(0, 12).map((c) => (
            <div key={c.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src={c.logo || "/placeholder.svg"}
                width={120}
                height={48}
                alt={`${c.name} logo`}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
