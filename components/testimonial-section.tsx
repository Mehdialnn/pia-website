"use client"

const testimonials = [
  {
    quote: "Pia transformed how I monetize my consulting time without adding admin overhead.",
    name: "Sarah M.",
    role: "Business Consultant",
    initial: "S",
  },
  {
    quote: "Bookings, calls, and payouts finally happen in one clean workflow.",
    name: "Marcus C.",
    role: "Career Coach",
    initial: "M",
  },
  {
    quote: "I started getting paid for calls consistently instead of chasing invoices.",
    name: "Elena R.",
    role: "Marketing Strategist",
    initial: "E",
  },
  {
    quote: "My clients book faster, and I can track every call revenue in one place.",
    name: "David P.",
    role: "Tech Advisor",
    initial: "D",
  },
  {
    quote: "The onboarding was quick and I launched paid calls the same week.",
    name: "Jessica W.",
    role: "Legal Consultant",
    initial: "J",
  },
  {
    quote: "Pia helped me turn demand into real paid sessions, not just DMs.",
    name: "Ahmed H.",
    role: "Financial Advisor",
    initial: "A",
  },
]

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
          <p className="text-base sm:text-lg text-zinc-400">See what professionals are saying about Pia</p>
        </div>

        <div className="md:hidden -mx-4 px-4 overflow-x-auto pb-2">
          <div className="flex gap-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} className="w-[82vw] max-w-sm shrink-0 snap-start cursor-default" />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} className="w-full cursor-default" />
          ))}
        </div>
      </div>
    </section>
  )
}
