"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollFadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function ScrollFadeIn({ children, delay = 0, className = "" }: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const currentRef = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}
