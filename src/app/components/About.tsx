"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export function About({ className }: { className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("mx-auto w-full max-w-5xl px-6 py-20", className)}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            I’m Swapnaja Magarde, a final-year B.Tech student in Computer
            Engineering (AI & Data Science). I build intelligent systems using
            data, with a strong focus on Machine Learning, NLP, and full-stack
            development. As a full-stack intern, I work with ERP data, APIs, and
            automation to ship reliable workflows. I also built an NLP student
            guidance chatbot using TF-IDF and TensorFlow, achieving 98.6%
            accuracy in IEEE-published work. My strength is structured
            problem-solving and turning models into real-world applications with
            clean interfaces and scalable backends.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.06 }}
          className="relative"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="glass bg-grid relative overflow-hidden rounded-3xl border border-white/10 bg-surface-2/40 p-8">
            <div
              className="absolute -left-16 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(var(--neon-cyan) / 0.22), transparent 60%)",
              }}
            />
            <div
              className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(var(--neon-purple) / 0.20), transparent 62%)",
              }}
            />
            <div className="relative">
              <div className="h-44 w-full rounded-2xl border border-white/10 bg-white/5" />
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="h-10 rounded-xl border border-white/10 bg-white/5" />
                <div className="h-10 rounded-xl border border-white/10 bg-white/5" />
                <div className="h-10 rounded-xl border border-white/10 bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
