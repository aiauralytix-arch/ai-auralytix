import { cn } from "@/lib/utils"
import styles from "./techstack-carousel.module.css"

type Logo = {
    name: string
    src: string
    href?: string
}

type Props = {
    logos?: Logo[]
    height?: number
    durationSeconds?: number
    direction?: "left" | "right"
    pauseOnHover?: boolean
    className?: string
}

/**
 * TechStackCarousel
 * - Continuous, seamless, auto-scrolling carousel.
 * - Uses remote image URLs (no next/image required).
 * - Pauses on hover (optional).
 * - Direction and speed configurable.
 */
export default function TechStackCarousel({
    logos = defaultLogos,
    height = 48,
    durationSeconds = 28,
    direction = "left",
    pauseOnHover = true,
    className,
}: Props) {
    // Duplicate the array to create a seamless loop.
    const looped = [...logos, ...logos]
    const animationDirection = direction === "right" ? "reverse" : "normal"

    return (
        <div
            className={cn(
                styles.container,
                pauseOnHover && styles.pauseOnHover,
                "w-full",
                className,
            )}
            style={
                {
                    "--duration": `${durationSeconds}s`,
                    "--direction": animationDirection,
                } as React.CSSProperties
            }
            aria-label="Tech stack carousel"
        >
            <ul className={cn(styles.track)} role="list" aria-label="Technologies">
                {looped.map((logo, idx) => {
                    const content = (
                        <div
                            className={cn(
                                "flex items-center gap-3 rounded-xl border bg-white/90 px-4 py-3 shadow-sm",
                                "transition-[transform,box-shadow] duration-200 hover:shadow-md hover:-translate-y-0.5",
                                "dark:bg-white/5 dark:border-white/10",
                            )}
                            style={{ height: Math.max(40, height + 12) }}
                        >
                            <img
                                src={logo.src || "/placeholder.svg"}
                                alt={logo.name}
                                width={height}
                                height={height}
                                className="h-10 w-auto object-contain md:h-12"
                                loading={idx < logos.length ? "eager" : "lazy"}
                                decoding="async"
                            />
                            <span className="text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-100">
                                {logo.name}
                            </span>
                        </div>
                    )

                    return (
                        <li key={`${logo.name}-${idx}`} className={styles.item} aria-label={logo.name}>
                            {logo.href ? (
                                <a
                                    href={logo.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50 rounded-lg"
                                    aria-label={`Open ${logo.name} website`}
                                >
                                    {content}
                                </a>
                            ) : (
                                content
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const defaultLogos: Logo[] = [
    { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB", href: "https://react.dev" },
    { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000", href: "https://nextjs.org" },
    { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6", href: "https://www.typescriptlang.org" },
    { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", href: "https://tailwindcss.com" },
    { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/339933", href: "https://nodejs.org" },
    { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/000000", href: "https://vercel.com" },
    { name: "Supabase", src: "https://cdn.simpleicons.org/supabase/3FCF8E", href: "https://supabase.com" },
    { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1", href: "https://www.postgresql.org" },
    { name: "GitHub", src: "https://cdn.simpleicons.org/github/181717", href: "https://github.com" },
]
