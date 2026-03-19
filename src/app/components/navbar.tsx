"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { navLinks, siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -6 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/40"
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan/70 shadow-glow-cyan transition-opacity group-hover:opacity-100 sm:opacity-60" />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  "relative text-muted-foreground hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                <Link href={link.href}>
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-1 h-px bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </Link>
              </Button>
            )
          })}
        </nav>

        <div className="sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="border-t border-white/10 bg-background/60 backdrop-blur-xl sm:hidden"
            style={{ willChange: "height, opacity" }}
          >
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: reduceMotion
                    ? undefined
                    : { staggerChildren: 0.06, delayChildren: 0.04 },
                },
              }}
              className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-6 py-4"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: -6 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "glass-strong flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors",
                        active
                          ? "border-neon-cyan/30 text-foreground glow-cyan"
                          : "border-white/10 text-muted-foreground hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/40"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-medium">{link.label}</span>
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          active
                            ? "bg-neon-cyan/80 shadow-glow-cyan"
                            : "bg-white/20"
                        )}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
