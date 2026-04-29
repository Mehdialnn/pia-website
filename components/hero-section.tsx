import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color="#ec4899"
        size={0.4}
        staticity={50}
        refresh={false}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,63,94,0.05)_0%,_transparent_40%)]" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6 animate-fade-in">
              <Image
                src="/images/piacall-logo.png"
                alt="Pia Logo"
                width={128}
                height={128}
                className="w-24 h-24 md:w-28 md:h-28 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]"
              />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
              Monetize Your Calls,{" "}
              <span className="font-normal bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                Grow Your Business
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Pia helps you get paid for your expertise. Schedule calls, set your
              rates, and manage everything in one seamless platform.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/fr/app/pia-monetize-your-calls/id6760731972"
              >
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  shimmerDuration="2s"
                  borderRadius="9999px"
                  background="linear-gradient(to right, #ec4899, #f43f5e)"
                  className="shadow-2xl"
                >
                  Download on the App Store
                </ShimmerButton>
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-500">Now live on iOS.</p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full blur-3xl opacity-35" />
            <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
              <Image
                src="/images/app-wallet.png"
                alt="Pia Wallet Screen"
                width={360}
                height={760}
                className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(236,72,153,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
