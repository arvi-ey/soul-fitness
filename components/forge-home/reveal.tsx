'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay, ease: 'easeOut' }} className={className}>{children}</motion.div>
}
