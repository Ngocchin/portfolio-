"use client"

import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground">© {currentYear} Quang Phuc. All rights reserved.</p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {[
              { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "#" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
              { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
              { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

