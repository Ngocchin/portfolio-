"use client"

import { motion } from "framer-motion"
import { textVariant } from "@/lib/animation-variants"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        className="text-3xl font-bold"
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className={`h-1 w-20 bg-primary mt-4 ${centered ? "mx-auto" : ""}`}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

