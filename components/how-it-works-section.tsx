import { Link as LinkIcon, CreditCard, Video } from "lucide-react"
import { StripedPattern } from "@/components/magicui/striped-pattern"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: LinkIcon,
      title: "Set Rates & Share Link",
      description:
        "Get a custom link (pia.com/yourname) for your social bios. Set your exact availability and define your per-minute or flat rate.",
    },
    {
      number: "2",
      icon: CreditCard,
      title: "Clients Pay Upfront",
      description:
        "No more chasing invoices. Clients pick a time slot and pay seamlessly via Stripe or Apple Pay before the booking is confirmed.",
    },
    {
      number: "3",
      icon: Video,
      title: "Connect & Cash Out",
      description:
        "Host high-quality voice or video calls effortlessly. Once the call ends, your funds are instantly available to withdraw.",
    },
  ]

  return (
    <section className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight tracking-tight">
            How{" "}
            <span className="font-normal bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
              Pia
            </span>{" "}
            Works
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Start monetizing your audience in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] bg-zinc-900/40 border border-zinc-800/50 p-8 pt-12 flex flex-col items-center text-center transition-all duration-300 hover:bg-zinc-900/80 hover:border-pink-500/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.1)]"
              >
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                  <StripedPattern className="fill-zinc-600 group-hover:fill-pink-500/20 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/90 pointer-events-none" />

                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-medium text-base shadow-xl group-hover:border-pink-500/50 group-hover:text-pink-400 transition-colors duration-300 z-20">
                  {step.number}
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-pink-500/30 group-hover:bg-pink-500/10 transition-all duration-300 backdrop-blur-sm">
                    <Icon className="w-10 h-10 text-zinc-400 group-hover:text-pink-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
