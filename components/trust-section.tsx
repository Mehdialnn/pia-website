"use client"

import { Lock, CheckCircle2, Radio } from "lucide-react"
import Image from "next/image"

export default function TrustSection() {
  return (
    <section className="relative py-8 sm:py-12 border-y border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Trust Headline */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              Trusted by thousands of professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 items-center justify-items-center w-full max-w-4xl">
            {/* Stripe */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <Image src="/images/stripe-logo.png" alt="Stripe" width={80} height={32} className="h-8 w-auto" />
              </div>
              <p className="text-xs text-zinc-500">Secure Payments</p>
            </div>

            <div className="flex flex-col items-center gap-2 group">
              <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                <Radio className="w-5 h-5" />
                <span className="text-sm font-semibold">TLS</span>
              </div>
              <p className="text-xs text-zinc-500">Communications</p>
            </div>

            <div className="flex flex-col items-center gap-2 group">
              <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                <Lock className="w-5 h-5" />
                <span className="text-sm font-semibold">256-bit</span>
              </div>
              <p className="text-xs text-zinc-500">Encrypted Calls</p>
            </div>

            {/* PCI Compliant */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-semibold">PCI DSS</span>
              </div>
              <p className="text-xs text-zinc-500">Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
