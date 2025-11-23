import { Check } from "lucide-react";
import Link from "next/link";

export default function FeatureSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-left px-4 sm:px-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Easy Scheduling,
              <br />
              Zero Hassle
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8 leading-relaxed">
              Let clients book calls at your available times. Automatic
              reminders, calendar sync, and seamless payment processing.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-center gap-3 text-white text-base sm:text-lg">
                <Check className="w-5 h-5 text-pink-400" />
                Custom booking links
              </li>
              <li className="flex items-center gap-3 text-white text-base sm:text-lg">
                <Check className="w-5 h-5 text-pink-400" />
                Integrated payments
              </li>
              <li className="flex items-center gap-3 text-white text-base sm:text-lg">
                <Check className="w-5 h-5 text-pink-400" />
                Video & voice calls
              </li>
            </ul>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://piacall.io/"
            >
              <button className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 text-white text-sm sm:text-base font-medium rounded-lg border border-zinc-700 hover:bg-zinc-800 transition-all duration-300 hover:border-zinc-600 w-full sm:w-auto">
                Start Earning Today
              </button>
            </Link>
          </div>

          {/* MOCKUP SIDE */}
          <div className="relative perspective-1000 px-4 sm:px-0">
            {/* 👇 wrapper pour scroll horizontal sur mobile */}
            <div className="max-w-full overflow-x-auto">
              <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 transform rotate-2 hover:rotate-0 transition-transform duration-500 min-w-[420px] sm:min-w-0 mx-auto">
                <div className="bg-zinc-800 px-4 sm:px-6 py-4 flex items-center justify-between border-b border-zinc-700">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/piacall-logo.png"
                      alt="PIA"
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-white font-semibold">PIA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 sm:w-40 h-8 bg-zinc-700 rounded-lg px-3 flex items-center">
                      <span className="text-zinc-400 text-xs sm:text-sm">
                        Search...
                      </span>
                    </div>
                    <div className="w-8 h-8 bg-zinc-700 rounded-full" />
                  </div>
                </div>

                <div className="flex">
                  <div className="w-40 sm:w-48 bg-zinc-800 p-4 border-r border-zinc-700">
                    <div className="flex items-center gap-3 mb-6">
                      <img
                        src="/images/piacall-logo.png"
                        alt="PIA"
                        className="w-10 h-10 object-contain"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">
                          Your Profile
                        </p>
                      </div>
                    </div>

                    <nav className="space-y-2">
                      <div className="px-3 py-2 bg-pink-500/20 rounded-lg text-pink-400 text-sm font-medium">
                        Dashboard
                      </div>
                      <div className="px-3 py-2 text-zinc-400 text-sm hover:text-white transition-colors">
                        Bookings
                      </div>
                      <div className="px-3 py-2 text-zinc-400 text-sm hover:text-white transition-colors">
                        Earnings
                      </div>
                      <div className="px-3 py-2 text-zinc-400 text-sm hover:text-white transition-colors">
                        Settings
                      </div>
                    </nav>
                  </div>

                  <div className="flex-1 p-4 sm:p-6">
                    {/* 👇 1 colonne sur mobile, 2 colonnes à partir de sm */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
                        <p className="text-zinc-400 text-xs mb-1">This Week</p>
                        <p className="text-white text-xl font-bold">
                          12 <span className="text-pink-400">Calls</span>
                        </p>
                      </div>
                      <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
                        <p className="text-zinc-400 text-xs mb-1">Revenue</p>
                        <p className="text-white text-xl font-bold">
                          $840 <span className="text-pink-400">USD</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-zinc-400 text-sm mb-3">
                        Earnings Trend
                      </p>
                      <div className="h-32 bg-zinc-800/50 rounded-lg p-4 relative overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 200 80">
                          <polyline
                            fill="none"
                            stroke="#ec4899"
                            strokeWidth="2"
                            points="0,60 20,55 40,50 60,45 80,40 100,35 120,30 140,25 160,30 180,35 200,30"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END MOCKUP SIDE */}
        </div>
      </div>
    </section>
  );
}
