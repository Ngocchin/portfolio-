"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, cardVariants, buttonVariants } from "@/lib/animation-variants"
import SectionHeading from "@/components/section-heading"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that displays current conditions and forecasts for multiple locations with data visualization.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Chart.js", "Weather API", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading title="Featured Projects" subtitle="Check out some of my recent work" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card className="overflow-hidden flex flex-col h-full">
                <motion.div
                  className="relative h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform"
                  />
                </motion.div>
                <CardContent className="pt-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-0">
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

