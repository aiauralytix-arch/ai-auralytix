import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function CaseStudyCard({ title, slug, image, industry, tech, excerpt }: {
  title: string; slug: string; image: string; industry: string; tech: string[]; excerpt: string;
}) {
  return (
    <Link href={`/case-studies/${slug}`} className="block">
      <Card className="rounded-2xl overflow-hidden shadow-glass h-full">
        <div className="relative aspect-[16/9]">
          <Image src={image || "/placeholder.svg"} alt={`${title} cover`} fill className="object-cover" loading="lazy" />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <p className="text-sm text-muted-foreground">{excerpt}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{industry}</Badge>
            {tech.slice(0, 2).map((t) => (
              <Badge key={t} variant="outline">{t}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
