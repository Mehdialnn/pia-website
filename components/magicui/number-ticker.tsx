"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  startValue = 0,
}: {
  value: number
  direction?: "up" | "down"
  className?: string
  delay?: number
  decimalPlaces?: number
  startValue?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : startValue)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            setTimeout(() => {
              const targetValue = direction === "down" ? startValue : value
              const duration = 2000
              const steps = 60
              const increment = (targetValue - displayValue) / steps
              let currentStep = 0

              const timer = setInterval(() => {
                currentStep++
                if (currentStep >= steps) {
                  setDisplayValue(targetValue)
                  clearInterval(timer)
                } else {
                  setDisplayValue((prev) => prev + increment)
                }
              }, duration / steps)

              return () => clearInterval(timer)
            }, delay * 1000)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, direction, startValue, delay, displayValue, hasAnimated])

  return (
    <span className={cn("inline-block tabular-nums text-black dark:text-white tracking-wider", className)} ref={ref}>
      {Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(displayValue.toFixed(decimalPlaces)))}
    </span>
  )
}
