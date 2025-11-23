import Link from "next/link";
import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden text-center px-6">
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

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/images/piacall-logo.png"
            alt="pia Logo"
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]"
          />
        </div>

        <h1 className="text-8xl md:text-9xl font-bold mb-4 tracking-tighter">
          <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            404
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-white font-light mb-8">
          Page Not Found
        </h2>

        <p className="text-zinc-400 max-w-md mb-10 leading-relaxed font-light">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <ShimmerButton
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            shimmerDuration="2s"
            borderRadius="9999px"
            background="linear-gradient(to right, #ec4899, #f43f5e)"
            className="shadow-2xl"
          >
            Return Home
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
}
