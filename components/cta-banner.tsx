import { Particles } from "@/components/magicui/particles"

export default function CTABanner() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 text-center relative overflow-hidden">
          <Particles
            className="absolute inset-0"
            quantity={80}
            ease={70}
            color="#f43f5e"
            size={0.4}
            staticity={60}
            refresh={false}
          />

          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, transparent 48%, #444 49%, #444 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, #444 49%, #444 51%, transparent 52%)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Start Earning From
              <br />
              Your Expertise Today
            </h2>
            <p className="text-base sm:text-xl text-zinc-400 mb-8 sm:mb-10">
              Join thousands of professionals monetizing their time with PIA
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-center text-lg sm:text-2xl font-normal text-white">Get the app on iOS and Android</p>
              <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full sm:w-fit flex-row items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-zinc-700 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/50 text-white bg-zinc-900/50 backdrop-blur-sm"
                  href="https://www.apple.com/app-store/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-8 sm:size-10"
                  >
                    <path
                      fill="currentColor"
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"
                    />
                  </svg>
                  <div className="grid -space-y-1 text-left">
                    <p className="text-xs text-zinc-400">Download on the</p>
                    <p className="text-lg sm:text-xl font-semibold">App Store</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full sm:w-fit flex-row items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-zinc-700 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/50 text-white bg-zinc-900/50 backdrop-blur-sm"
                  href="https://play.google.com/store/apps"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-8 sm:size-10"
                  >
                    <path
                      fill="currentColor"
                      d="m3.637 3.434l8.74 8.571l-8.675 8.65a2.1 2.1 0 0 1-.326-.613a2.5 2.5 0 0 1 0-.755V4.567c-.026-.395.065-.79.26-1.133m12.506 4.833l-2.853 2.826L4.653 2.6c.28-.097.58-.124.873-.078c.46.126.899.32 1.302.573l7.816 4.325c.508.273 1.003.56 1.498.847M13.29 12.93l2.839 2.788l-2.058 1.146l-6.279 3.49c-.52.287-1.042.561-1.55.874a1.8 1.8 0 0 1-1.472.195zm7.36-.925a1.92 1.92 0 0 1-.99 1.72l-2.346 1.302l-3.087-3.022l3.1-3.074l2.333 1.302c.325.169.6.43.782.753c.182.324.268.695.208 1.019"
                    />
                  </svg>
                  <div className="grid -space-y-1 text-left">
                    <p className="text-xs text-zinc-400">GET IT ON</p>
                    <p className="text-lg sm:text-xl font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
