import { UserPlus, Phone, DollarSign } from "lucide-react"
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Sign Up",
      description:
        "Create your account in minutes. Customize your offerings, set your availability, and you're ready to go.",
    },
    {
      number: "2",
      icon: Phone,
      title: "Take Calls",
      description:
        "Connect with clients through secure voice and video calls. Scheduling and hosting has never been easier.",
    },
    {
      number: "3",
      icon: DollarSign,
      title: "Get Paid",
      description:
        "Manage earnings seamlessly with built-in payment processing. Track invoices and watch your business grow.",
    },
  ]

  return (
    <section className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">Get started with Pia in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <NeonGradientCard
                key={index}
                className="group"
                borderSize={2}
                borderRadius={24}
                neonColors={{
                  firstColor: "#ec4899",
                  secondColor: "#f43f5e",
                }}
              >
                <div className="relative p-8 flex flex-col items-center text-center h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-500/20 z-10">
                    {step.number}
                  </div>

                  {/* Icon container */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-12 h-12 text-pink-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </NeonGradientCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
