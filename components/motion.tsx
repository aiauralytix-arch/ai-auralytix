"use client"

import { motion, useAnimation, type HTMLMotionProps } from "framer-motion"
import { useEffect, useRef } from "react"

export function MotionInView({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string } & HTMLMotionProps<"div">) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible")
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
