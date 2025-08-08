import { redirect } from "next/navigation"
import { docs } from "@/data/docs"

export default function DocsIndex() {
  // Redirect to the first doc slug
  const first = docs[0]?.slug ?? "getting-started"
  redirect(`/docs/${first}`)
}
