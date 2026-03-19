"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

import { siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

type SocialLinkProps = {
  href: string
  label: string
  icon: React.ReactNode
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label={label}
      className={cn(
        "glass-strong inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
        "border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/40"
      )}
    >
      <span aria-hidden="true">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="border-t border-white/10 bg-background/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <span className="h-1.5 w-1.5 rounded-full bg-neon-purple/60 shadow-glow-purple" />
          </div>
          <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
          <p className="text-xs text-muted-foreground/70">© {year}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <SocialLink
            href="https://github.com/Swapnaja964"
            label="GitHub"
            icon={<Github className="size-4" />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/swapnaja-magarde/"
            label="LinkedIn"
            icon={<Linkedin className="size-4" />}
          />
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="swapnajamagarde2004@gmail.com"
              className="glass-strong glow-blue inline-flex items-center rounded-2xl border border-neon-blue/25 bg-surface-2/40 px-3 py-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/40"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
