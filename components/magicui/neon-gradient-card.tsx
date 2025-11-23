import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface NeonGradientCardProps {
  children: ReactNode
  className?: string
  borderSize?: number
  borderRadius?: number
  neonColors?: {
    firstColor: string
    secondColor: string
  }
}

export function NeonGradientCard({
  children,
  className,
  borderSize = 5,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
}: NeonGradientCardProps) {
  return (
    <div
      className={cn("relative", className)}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 rounded-[var(--border-radius)] p-[var(--border-size)] bg-gradient-to-br from-[var(--neon-first-color)] via-transparent to-[var(--neon-second-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
      <div className={cn("relative rounded-[var(--border-radius)] bg-zinc-900 h-full", className)}>{children}</div>
    </div>
  )
}
