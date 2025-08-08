import Image from "next/image"
import { Container } from "./container"
import TechStackCarousel from "@/app/tech-stack/page"

export function LogoCloud() {
  return (
    <section className="py-12">
      <Container>
        <TechStackCarousel />
      </Container>
    </section>
  )
}
