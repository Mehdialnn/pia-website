"use client"

import { useRef } from "react"
import NumberTicker from "@/components/magicui/number-ticker"

interface StatItemProps {
  label: string
  value: number
  suffix: string
  description: string
}

function StatItem({ label, value, suffix, description }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="text-left p-8 glass-strong rounded-2xl neon-border hover:scale-105 transition-transform duration-300"
    >
      <p className="text-sm text-zinc-400 mb-2 tracking-wider font-light">{label}</p>

      {/* 🔥 tracking resserré uniquement pour les chiffres */}
      <p className="text-6xl md:text-7xl font-light text-white mb-3 drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">
        <span className="tracking-[-0.02em]">
          <NumberTicker value={value} className="text-white" />
        </span>
        {suffix}
      </p>

      <p className="text-sm text-zinc-400 font-light">{description}</p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-[#050505] py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 sm:mb-6 tracking-tight">
            Built with Professionals
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Co-created with real experts to monetize time instantly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          <StatItem label="Waitlist" value={350} suffix="+" description="Already signed up." />
          <StatItem label="Beta Seats" value={100} suffix="" description="Limited early access." />
          <StatItem label="Goal 2025" value={10} suffix="K" description="Experts empowered." />
          <StatItem label="Payments" value={0} suffix="%" description="No fees for early users." />
        </div>
      </div>
    </section>
  )
}
