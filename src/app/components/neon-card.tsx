import * as React from "react"

import { cn } from "@/lib/utils"

type NeonCardProps = React.ComponentProps<"div"> & {
  title: string
  subtitle?: string
  accent?: "cyan" | "purple" | "blue"
}

export function NeonCard({
  title,
  subtitle,
  accent = "cyan",
  className,
  children,
  ...props
}: NeonCardProps) {
  const glow =
    accent === "purple"
      ? "glow-purple"
      : accent === "blue"
        ? "glow-blue"
        : "glow-cyan"

  const border =
    accent === "purple"
      ? "border-neon-purple/30"
      : accent === "blue"
        ? "border-neon-blue/30"
        : "border-neon-cyan/30"

  return (
    <div
      className={cn(
        "glass bg-grid relative overflow-hidden border p-6 sm:p-8",
        glow,
        border,
        "bg-surface-2/40",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-pretty text-xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-pretty text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  )
}
