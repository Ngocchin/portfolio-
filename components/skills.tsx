"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Database, Palette, Globe, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/animation-variants"
import SectionHeading from "@/components/section-heading"

type Skill = {
  category: string
  icon: React.ReactNode
  items: string[]
}

export default function Skills() {
  const skills: Skill[] = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6" />,
      items: ["React.js", "TypeScript", "Next.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      category: "Design",
      icon: <Palette className="h-6 w-6" />,
      items: ["Figma", "UI/UX", "Responsive Design", "Accessibility", "Animation"],
    },
    {
      category: "Deployment",
      icon: <Globe className="h-6 w-6" />,
      items: ["Vercel", "Netlify", "Docker", "CI/CD", "AWS"],
    },
    {
      category: "Tools",
      icon: <Cpu className="h-6 w-6" />,
      items: ["Git", "GitHub", "VS Code", "Jest", "Webpack"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/40">
      <div className="container mx-auto">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      className="p-2 rounded-md bg-primary/10 text-primary"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-1">
                    {skill.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

