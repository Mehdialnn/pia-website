"use client"

import Marquee from "@/components/magicui/marquee"

const testimonials = [
  {
    quote: "PiaCall has completely transformed how I monetize my consulting expertise",
    name: "Sarah Mitchell",
    role: "Business Consultant",
    initial: "S",
  },
  {
    quote: "The best platform for coaching calls I've ever used",
    name: "Marcus Chen",
    role: "Career Coach",
    initial: "M",
  },
  {
    quote: "Increased my monthly revenue by 3x in just 2 months",
    name: "Elena Rodriguez",
    role: "Marketing Strategist",
    initial: "E",
  },
  {
    quote: "My clients love how easy it is to book time with me",
    name: "David Park",
    role: "Tech Advisor",
    initial: "D",
  },
  {
    quote: "Finally, a platform that handles everything seamlessly",
    name: "Jessica Wong",
    role: "Legal Consultant",
    initial: "J",
  },
  {
    quote: "The instant payments feature is a game changer",
    name: "Ahmed Hassan",
    role: "Financial Advisor",
    initial: "A",
  },
]

const firstRow = testimonials.slice(0, testimonials.length / 2)
const secondRow = testimonials.slice(testimonials.length / 2)

const TestimonialCard = ({
  quote,
  name,
  role,
  initial,
  className = "",
}: {
  quote: string
  name: string
  role: string
  initial: string
  className?: string
}) => {
  return (
    <figure className={`relative w-80 cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-[#1A1A1A] p-6 hover:bg-[#1F1F1F] transition-colors ${className}`}>
      <div className="flex flex-col gap-4">
        <blockquote className="text-white text-lg font-medium leading-relaxed">{quote}</blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">{initial}</span>
          </div>
          <div>
            <figcaption className="text-white font-semibold text-sm">{name}</figcaption>
            <p className="text-zinc-400 text-xs">{role}</p>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default function TestimonialSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Loved by Experts,
            <br />
            Trusted by Clients
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">See what professionals are saying about PIA</p>
        </div>

        <div className="md:hidden -mx-4 px-4 overflow-x-auto pb-2">
          <div className="flex gap-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} className="w-[82vw] max-w-sm shrink-0 snap-start cursor-default" />
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:48s]">
            {firstRow.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:48s] mt-4">
            {secondRow.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0A0A0A]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0A0A0A]"></div>
        </div>
      </div>
    </section>
  )
}
