import { motion } from "framer-motion"
import { Github } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Project } from "@/lib/constants"

type Props = {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: Props) {
  const accent =
    project.category === "AI"
      ? "glow-cyan border-neon-cyan/30"
      : project.category === "Software"
        ? "glow-blue border-neon-blue/30"
        : "glow-purple border-neon-purple/30"

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: 0.06 * index }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.01 }}
      style={{ willChange: "transform, opacity" }}
      className={cn(
        "glass relative flex h-full flex-col justify-between rounded-3xl border bg-surface-2/40 p-6",
        accent
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-muted-foreground">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        {project.impact ? (
          <p className="text-xs text-foreground/80">
            {project.impact}
          </p>
        ) : null}

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} on GitHub`}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/40"
        >
          <Github className="size-4" />
          <span>GitHub</span>
        </a>
      </div>
    </motion.article>
  )
}
