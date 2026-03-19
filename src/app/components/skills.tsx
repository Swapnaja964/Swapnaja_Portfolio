"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Code2,
  Brain,
  Layers,
  MessageSquare,
  Cpu,
  Flame,
  Boxes,
  Server,
  GitBranch,
  Container,
  Database,
  Network,
  Globe,
  Braces,
  FileCode,
  BarChart3,
} from "lucide-react"

import { cn } from "@/lib/utils"

type SkillItem = {
  name: string
  icon: React.ReactNode
}

const PROGRAMMING: SkillItem[] = [
  { name: "Java", icon: <Code2 className="size-5" /> },
  { name: "Python", icon: <Code2 className="size-5" /> },
  { name: "C", icon: <Braces className="size-5" /> },
  { name: "JavaScript", icon: <FileCode className="size-5" /> },
  { name: "R", icon: <BarChart3 className="size-5" /> },
]

const DATA_SCIENCE: SkillItem[] = [
  { name: "Machine Learning", icon: <Brain className="size-5" /> },
  { name: "Deep Learning", icon: <Layers className="size-5" /> },
  { name: "NLP", icon: <MessageSquare className="size-5" /> },
  { name: "TensorFlow", icon: <Cpu className="size-5" /> },
  { name: "PyTorch", icon: <Flame className="size-5" /> },
  { name: "Keras", icon: <Boxes className="size-5" /> },
]

const TOOLS_TECH: SkillItem[] = [
  { name: "MERN Stack", icon: <Server className="size-5" /> },
  { name: "Git & GitHub", icon: <GitBranch className="size-5" /> },
  { name: "Docker", icon: <Container className="size-5" /> },
  { name: "PostgreSQL", icon: <Database className="size-5" /> },
  { name: "MongoDB", icon: <Database className="size-5" /> },
  { name: "Apache Kafka", icon: <Network className="size-5" /> },
  { name: "REST APIs", icon: <Globe className="size-5" /> },
]

function SkillCard({
  item,
  accent = "cyan",
  index = 0,
}: {
  item: SkillItem
  accent?: "cyan" | "purple" | "blue"
  index?: number
}) {
  const glow =
    accent === "purple"
      ? "glow-purple border-neon-purple/25"
      : accent === "blue"
        ? "glow-blue border-neon-blue/25"
        : "glow-cyan border-neon-cyan/25"

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.03 }}
      style={{ willChange: "transform, opacity" }}
      className={cn(
        "glass group relative flex items-center gap-3 overflow-hidden rounded-2xl border bg-surface-2/40 p-4",
        glow
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10" />
        <div className="absolute inset-0 translate-y-2 bg-gradient-to-t from-white/[0.05] via-transparent to-transparent transition-transform duration-200 group-hover:translate-y-0" />
      </div>
      <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5">
        {item.icon}
      </div>
      <span className="text-sm font-medium">{item.name}</span>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="text-center text-3xl font-semibold tracking-tight"
      >
        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.08 }}
        className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
      >
        Core programming, data science, and tools — presented with interactive,
        neon-accented cards.
      </motion.p>

      <div className="mt-10 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-xl font-semibold tracking-tight">
            Programming
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMMING.map((item, i) => (
              <SkillCard key={item.name} item={item} index={i} accent="cyan" />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-xl font-semibold tracking-tight">Data Science</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DATA_SCIENCE.map((item, i) => (
              <SkillCard key={item.name} item={item} index={i} accent="purple" />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-xl font-semibold tracking-tight">
            Tools & Technologies
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS_TECH.map((item, i) => (
              <SkillCard key={item.name} item={item} index={i} accent="blue" />
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  )
}
