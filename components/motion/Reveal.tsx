'use client'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { CSSProperties, ReactNode, ElementType } from 'react'

/* Slow, soft, editorial easing — an expo-style easeOut. Luxurious, never bouncy. */
const EASE = [0.22, 1, 0.36, 1] as const

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

interface RevealProps {
  children: ReactNode
  /** Entrance direction (default: fade up) */
  direction?: Direction
  /** Stagger / sequencing delay in seconds */
  delay?: number
  /** Duration in seconds (default 0.8) */
  duration?: number
  as?: ElementType
  style?: CSSProperties
  className?: string
  /** How far into the viewport before triggering */
  margin?: string
  id?: string
}

/**
 * Scroll-triggered reveal. Fades + lifts content into view once.
 * Honours prefers-reduced-motion (renders instantly, no transform).
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  as = 'div',
  style,
  className,
  margin = '-80px',
  id,
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div
  const { x, y } = offset[direction]

  if (reduce) {
    const Tag = as as ElementType
    return (
      <Tag style={style} className={className} id={id}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/* ---- Staggered groups (for grids, lists, timelines) ---- */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

interface StaggerProps {
  children: ReactNode
  as?: ElementType
  style?: CSSProperties
  className?: string
  margin?: string
}

/** Wraps a group whose direct <StaggerItem> children reveal in sequence. */
export function Stagger({ children, as = 'div', style, className, margin = '-60px' }: StaggerProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  if (reduce) {
    const Tag = as as ElementType
    return (
      <Tag style={style} className={className}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin }}
    >
      {children}
    </MotionTag>
  )
}

interface StaggerItemProps {
  children: ReactNode
  as?: ElementType
  style?: CSSProperties
  className?: string
}

/** A single item inside <Stagger>. */
export function StaggerItem({ children, as = 'div', style, className }: StaggerItemProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  if (reduce) {
    const Tag = as as ElementType
    return (
      <Tag style={style} className={className}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag className={className} style={style} variants={itemVariants}>
      {children}
    </MotionTag>
  )
}

export { EASE }
