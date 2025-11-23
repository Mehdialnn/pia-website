import type React from "react"
import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
          "--border-radius": borderRadius,
          "--background": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-10 py-4 text-lg font-medium text-white [background:var(--background)] [border-radius:var(--border-radius)] transition-all duration-300 hover:scale-105",
        "before:absolute before:inset-0 before:z-[-1] before:translate-x-[-150%] before:translate-y-[-150%] before:scale-[2.5] before:rounded-[100%] before:bg-[radial-gradient(circle,var(--shimmer-color)_0%,transparent_70%)] before:opacity-0 before:transition-transform before:duration-[var(--shimmer-duration)] before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:translate-x-[50%] hover:before:translate-y-[50%] hover:before:opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
