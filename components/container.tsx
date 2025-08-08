import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export function Container({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("container-base", className)}>{children}</div>
}
