"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const HERO_PARTICLES = [
  { top: "12%", left: "18%" },
  { top: "22%", left: "72%" },
  { top: "48%", left: "30%" },
  { top: "64%", left: "66%" },
  { top: "78%", left: "44%" },
  { top: "36%", left: "52%" },
  { top: "18%", left: "46%" },
  { top: "82%", left: "18%" },
] as const

export function Hero() {
  const reduceMotion = useReducedMotion()
  const glowFloatA = reduceMotion
    ? undefined
    : { y: [0, -10, 0], x: [0, 8, 0] }
  const glowFloatB = reduceMotion
    ? undefined
    : { y: [0, 12, 0], x: [0, -10, 0] }

  return (
    <section
      className={cn(
        "relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0a0a0a] py-16"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={glowFloatA}
          transition={{
            duration: 7.5,
            ease: "easeInOut",
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: "mirror",
          }}
          className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient( circle, oklch(var(--neon-cyan)/0.18) 0%, transparent 60% )",
            willChange: "transform",
          }}
        />
        <motion.div
          animate={glowFloatB}
          transition={{
            duration: 8.5,
            ease: "easeInOut",
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: "mirror",
          }}
          className="absolute bottom-[-10rem] left-1/4 h-[40rem] w-[40rem] rounded-full blur-[90px]"
          style={{
            backgroundImage:
              "radial-gradient( circle, oklch(var(--neon-purple)/0.16) 0%, transparent 62% )",
            willChange: "transform",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {HERO_PARTICLES.map((pos, i) => (
          <span
            key={`${pos.top}-${pos.left}-${i}`}
            className="absolute block h-2 w-2 rounded-full opacity-[0.32]"
            style={{
              top: pos.top,
              left: pos.left,
              background:
                i % 2 === 0
                  ? "oklch(var(--neon-cyan) / 0.8)"
                  : "oklch(var(--neon-purple) / 0.8)",
              boxShadow:
                i % 2 === 0
                  ? "0 0 12px oklch(var(--neon-cyan) / 0.55)"
                  : "0 0 12px oklch(var(--neon-purple) / 0.55)",
              filter: "blur(0.3px)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-xl font-medium text-muted-foreground sm:text-3xl"
          style={{ willChange: "transform, opacity" }}
        >
          Swapnaja Magarde
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          style={{ willChange: "transform, opacity" }}
        >
          Building{" "}
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            intelligent systems
          </span>{" "}
          with data and AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="mt-4 text-pretty text-lg text-muted-foreground"
          style={{ willChange: "opacity" }}
        >
          AI & Data Science Engineer crafting scalable solutions — from NLP systems to full-stack platforms.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="mt-4 text-pretty text-sm text-muted-foreground"
          style={{ willChange: "opacity" }}
        >
          Published IEEE research • Full-stack + ML • Real-world data systems
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ willChange: "opacity" }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            style={{ willChange: "transform" }}
          >
            <Button
              asChild
              className={cn(
                "rounded-4xl bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground shadow-glow-cyan hover:shadow-glow-purple"
              )}
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            style={{ willChange: "transform" }}
          >
            <Button
              variant="outline"
              asChild
              className="rounded-4xl border-white/15 bg-white/5 text-foreground hover:bg-white/10"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
