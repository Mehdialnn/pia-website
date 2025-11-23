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

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/images/piacall-logo.png"
            alt="pia Logo"
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]"
          />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
          Monetize Your Calls,{" "}
          <span className="font-normal bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            Grow Your Business
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          pia helps you get paid for your expertise. Schedule calls, set your
          rates, and manage everything in one seamless platform.
        </p>

        <div className="flex justify-center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://piacall.io/"
          >
            <ShimmerButton
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
              shimmerDuration="2s"
              borderRadius="9999px"
              background="linear-gradient(to right, #ec4899, #f43f5e)"
              className="shadow-2xl"
            >
              Try pia Now
            </ShimmerButton>
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-6 pb-8 lg:pb-16 mt-8 lg:mt-12 flex-wrap">
        {/* Left Phone - Dashboard */}
        <div className="hidden lg:flex relative group transform transition-all duration-500 hover:scale-110 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
          <div className="relative w-[260px] h-[530px]">
            <Image
              src="/images/app-dashboard.png"
              alt="pia Dashboard"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Center Phone - Splash Screen */}
        <div className="relative group transform transition-all duration-500 hover:scale-105 cursor-pointer scale-110">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative w-[280px] h-[570px]">
            <Image
              src="/images/app-splash.png"
              alt="pia Monetize Your Calls"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Phone - Settings */}
        <div className="hidden lg:flex relative group transform transition-all duration-500 hover:scale-110 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
          <div className="relative w-[260px] h-[530px]">
            <Image
              src="/images/app-settings.png"
              alt="pia Settings"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
