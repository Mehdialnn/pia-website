import Link from "next/link";
import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/fr/app/pia-monetize-your-calls/id6760731972";

function MinimalContent() {
  return (
    <div className="text-left px-4 sm:px-0">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
        Creator Operations
      </p>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
        Run Your Calls
        <br />
        <span className="text-zinc-400 font-light">Without Tool Sprawl</span>
      </h2>
      <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8 leading-relaxed max-w-xl">
        One app for scheduling, sessions, and payouts. No fragmented workflow,
        no manual handoffs, no missed revenue moments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 sm:mb-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-3">
          <p className="text-[11px] text-zinc-500">Bookings</p>
          <p className="text-sm text-white font-medium">Auto-managed</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-3">
          <p className="text-[11px] text-zinc-500">Calls</p>
          <p className="text-sm text-white font-medium">Voice + video</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-3">
          <p className="text-[11px] text-zinc-500">Payouts</p>
          <p className="text-sm text-white font-medium">Fast & secure</p>
        </div>
      </div>

      <Link target="_blank" rel="noopener noreferrer" href={APP_STORE_URL}>
        <button className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm sm:text-base font-medium rounded-lg hover:opacity-90 transition-all duration-300 w-full sm:w-auto">
          Download Pia for iOS
        </button>
      </Link>
    </div>
  );
}

function FeatureVisual() {
  return (
    <div className="relative px-4 sm:px-0">
      <div className="sm:hidden relative mx-auto max-w-sm space-y-4">
        <div className="absolute inset-x-6 top-6 h-40 bg-gradient-to-br from-pink-500 to-rose-600 rounded-[2rem] blur-3xl opacity-35" />
        <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-900 p-4">
          <Image
            src="/images/app-dashboard.png"
            alt="Pia App Dashboard"
            width={360}
            height={720}
            className="w-full h-auto object-contain rounded-[1.5rem]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2">
            <p className="text-[11px] text-zinc-500">Payouts</p>
            <p className="text-sm text-white font-medium">Fast & secure</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2">
            <p className="text-[11px] text-zinc-500">Calls</p>
            <p className="text-sm text-white font-medium">Voice + video</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block relative max-w-xl ml-auto">
        <div className="absolute right-4 top-10 w-56 h-56 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full blur-3xl opacity-35" />
        <div className="relative flex items-end justify-end gap-4">
          <div className="relative w-[230px] md:w-[250px] translate-y-6">
            <Image
              src="/images/app-settings.png"
              alt="Pia settings screen"
              width={250}
              height={520}
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.25)]"
            />
          </div>
          <div className="relative w-[260px] md:w-[290px]">
            <Image
              src="/images/app-dashboard.png"
              alt="Pia dashboard screen"
              width={290}
              height={600}
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.35)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <MinimalContent />
          <FeatureVisual />
        </div>
      </div>
    </section>
  );
}
