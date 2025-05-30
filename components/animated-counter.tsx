"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { counterVariants, numberVariants } from "@/lib/animation-variants"

interface AnimatedCounterProps {
  end: number
  duration?: number
  label: string
  icon?: React.ReactNode
}

export default function AnimatedCounter({ end, duration = 2, label, icon }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center p-6"
      variants={counterVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {icon && (
        <motion.div
          className="text-primary mb-4 text-3xl"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1, rotate: [0, 10, -10, 0] } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      <motion.div className="text-4xl font-bold" variants={numberVariants}>
        {count}+
      </motion.div>
      <motion.div className="text-muted-foreground mt-2 text-center" variants={numberVariants}>
        {label}
      </motion.div>
    </motion.div>
  )
}

