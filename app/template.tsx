'use client'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Next.js App Router template — re-mounts on every navigation,
 * giving each route a soft fade + lift transition.
 * Honours prefers-reduced-motion.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
