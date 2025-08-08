import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function TestimonialCard({ quote, author, role, avatar }: { quote: string; author: string; role: string; avatar: string }) {
  return (
    <Card className="rounded-2xl shadow-glass border-border/60">
      <CardContent className="p-6 space-y-4">
        <p className="text-sm leading-relaxed">“{quote}”</p>
        <div className="flex items-center gap-3">
          <Image src={avatar || "/placeholder.svg"} width={36} height={36} alt={`${author} avatar`} className="rounded-full" loading="lazy" />
          <div className="text-xs">
            <div className="font-medium">{author}</div>
            <div className="text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
