"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/lib/animation-variants"
import SectionHeading from "@/components/section-heading"
import AnimatedCounter from "@/components/animated-counter"
import { Code, Users, Clock, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my experience" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="flex justify-center"
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="https://minhtuanmobile.com/uploads/blog/mang-doraemon-dang-yeu-ve-tren-man-hinh-dien-thoai-back-up-240531043828.jpg" alt="Profile" fill className="object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card>
              <CardContent className="pt-6">
                <motion.p className="mb-4" variants={slideIn("left", "tween", 0.2, 0.5)}>
                 I am a fresher .NET Backend Developer with a strong interest in building robust, scalable, 
                 and efficient server-side systems. During my academic journey and hands-on practice, 
                 I have worked with technologies such as ASP.NET Core, Entity Framework, and SQL Server, 
                 and have a basic understanding of APIs, RESTful services, and the MVC pattern.
                </motion.p>
                <motion.p className="mb-4" variants={slideIn("left", "tween", 0.4, 0.5)}>
                  <b>Short-term goal: </b>
                  I aim to work in a professional environment where I can learn from experienced developers,
                  strengthen my programming skills, understand real-world software development processes, 
                  and gradually improve my problem-solving abilities in actual projects.
                </motion.p>
                <motion.p variants={slideIn("left", "tween", 0.6, 0.5)}>
                  <b>Long-term goal: </b>
                  In the next 3–5 years, I aspire to become a solid backend developer capable of designing system architecture,
                  optimizing performance, and ensuring the security of large-scale applications. 
                  I also hope to develop DevOps skills and mentor future freshers, just as I was when I started.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* <AnimatedCounter end={1} label="Years Experience" icon={<Clock />} />
          <AnimatedCounter end={10} label="Projects Completed" icon={<Code />} />
          <AnimatedCounter end={15} label="Happy Clients" icon={<Users />} />
          <AnimatedCounter end={3} label="Awards" icon={<Award />} /> */}
        </motion.div>
      </div>
    </section>
  )
}

