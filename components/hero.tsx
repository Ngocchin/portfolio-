"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, buttonVariants } from "@/lib/animation-variants"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I'm a Back-End Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn("up")}
        className="pt-16" // Add padding to account for navbar
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm{" "}
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Quang Phuc
          </motion.span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.h2>
        <motion.p
          className="max-w-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Using the latest web technologies, I develop high-performance applications that are both user-friendly and accessible to everyone.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }}>
        <Button variant="ghost" size="icon" className="absolute bottom-8 animate-bounce" onClick={scrollToAbout}>
          <ArrowDown />
        </Button>
      </motion.div>
    </section>
  )
}

