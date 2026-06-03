'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    up: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  }

  const variant = variants[direction]

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={isInView ? variant.animate : variant.initial}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}