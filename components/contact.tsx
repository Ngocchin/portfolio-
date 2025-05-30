"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, buttonVariants } from "@/lib/animation-variants"
import SectionHeading from "@/components/section-heading"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend or a service like Formspree
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/40">
      <div className="container mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Reach out to me!" />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="p-2 rounded-md bg-primary/10 text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p>phucq474@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="p-2 rounded-md bg-primary/10 text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Phone className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p>096 2775924</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="p-2 rounded-md bg-primary/10 text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MapPin className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p>District 9</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[120px]"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

