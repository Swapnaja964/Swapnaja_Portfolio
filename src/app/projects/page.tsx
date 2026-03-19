"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { projects, type ProjectCategory } from "@/lib/constants"
import { ProjectCard } from "@/app/components/project-card"
import { cn } from "@/lib/utils"

const categories: ProjectCategory[] = ["AI", "Web", "Software"]

export default function ProjectsPage() {
  const [active, setActive] = React.useState<ProjectCategory | "All">("All")

  const filtered = React.useMemo(() => {
    if (active === "All") return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-3xl font-semibold tracking-tight"
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.08 }}
        className="mt-4 max-w-2xl text-muted-foreground"
      >
        Explore selected projects. Filter by category to focus on AI, Web, or Software.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="mt-8 flex flex-wrap gap-2"
        style={{ willChange: "transform, opacity" }}
      >
        {(["All", ...categories] as const).map((c) => {
          const glow =
            c === "AI" ? "glow-cyan" : c === "Software" ? "glow-blue" : "glow-purple"
          const activeState = active === c
          return (
            <motion.button
              key={c}
              type="button"
              className={cn(
                "glass-strong rounded-2xl border px-3 py-2 text-sm transition",
                glow,
                activeState
                  ? "border-white/20 text-foreground"
                  : "border-white/10 text-muted-foreground hover:text-foreground"
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.18 }}
              onClick={() => setActive(c)}
              aria-pressed={activeState}
            >
              {c}
            </motion.button>
          )
        })}
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        style={{ willChange: "transform, opacity" }}
      >
        {filtered.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </motion.div>
    </main>
  )
}
