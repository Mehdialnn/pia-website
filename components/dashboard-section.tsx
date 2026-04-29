import Link from "next/link";
import Image from "next/image";

export default function DashboardSection() {
  return (
    <section className="bg-[#050505] py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-72 sm:w-80 rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/app-transactions.png"
                  alt="PIA Transactions Screen"
                  width={320}
                  height={650}
                  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                />
              </div>
            </div>
          </div>

          <div className="text-left px-4 sm:px-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              Track Your Earnings
              <br />
              <span className="text-zinc-400 font-extralight">
                —Real-Time Insights
              </span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8 leading-relaxed font-light">
              Monitor your call revenue, track bookings, and manage your
              schedule all from one beautiful dashboard
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://piacall.io/"
            >
              <button className="px-8 py-4 glass-strong text-white font-light rounded-lg neon-border hover:bg-zinc-900/50 transition-all duration-300 cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
