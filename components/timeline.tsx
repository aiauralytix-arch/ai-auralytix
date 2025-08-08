import { cn } from "@/lib/utils"

export function Timeline({
  items,
  className,
}: {
  items: { title: string; desc: string; date: string }[]
  className?: string
}) {
  return (
    <ol className={cn("relative border-l pl-6 space-y-6", className)}>
      {items.map((it, i) => (
        <li key={i} className="ml-2">
          <div className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-primary/80 ring-4 ring-primary/10" />
          <div className="text-sm text-muted-foreground">{it.date}</div>
          <div className="font-medium">{it.title}</div>
          <div className="text-sm">{it.desc}</div>
        </li>
      ))}
    </ol>
  )
}
