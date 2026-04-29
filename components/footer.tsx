import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-6 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/piacall-logo.png"
              alt="Pia Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white text-2xl font-bold">Pia</span>
          </div>

          <p className="text-zinc-400 text-sm text-center md:text-left">
            5, avenue Anatole-France, 75007 Paris
          </p>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">© Pia 2025</p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:marion@piacall.io"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
            <a
              href="/privacy-policy"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
