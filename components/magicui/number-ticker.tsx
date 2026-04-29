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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hasAnimatedRef = useRef(false)
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : startValue)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true
            const fromValue = direction === "down" ? value : startValue
            setDisplayValue(fromValue)

            timeoutRef.current = setTimeout(() => {
              const targetValue = direction === "down" ? startValue : value
              const duration = 2000
              const steps = 60
              const increment = (targetValue - fromValue) / steps
              let currentStep = 0
              let currentValue = fromValue

              intervalRef.current = setInterval(() => {
                currentStep++
                if (currentStep >= steps) {
                  setDisplayValue(targetValue)
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current)
                  }
                } else {
                  currentValue += increment
                  setDisplayValue(currentValue)
                }
              }, duration / steps)
            }, delay * 1000)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [value, direction, startValue, delay])

  return (
    <span className={cn("inline-block tabular-nums text-black dark:text-white tracking-wider", className)} ref={ref}>
      {Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(displayValue.toFixed(decimalPlaces)))}
    </span>
  )
}
