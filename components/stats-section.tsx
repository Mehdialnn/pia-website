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
    <section className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 sm:mb-6 tracking-tight">
            Built for Professionals
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Designed to help experts monetize every call with clarity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          <StatItem label="Early Users" value={350} suffix="+" description="Professionals already onboarded." />
          <StatItem label="Monthly Onboarding" value={100} suffix="" description="Priority setup slots available." />
          <StatItem label="2026 Goal" value={10} suffix="K" description="Calls monetized through Pia." />
          <StatItem label="Intro Platform Fee" value={0} suffix="%" description="For selected early creators." />
        </div>
      </div>
    </section>
  )
}
