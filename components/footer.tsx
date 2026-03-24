import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-fiume-dark border-t border-fiume-cream/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a href="#" aria-label="Fiume Consulting — back to top">
          <Image
            src="/logos/logo-white.png"
            alt="Fiume Consulting"
            width={100}
            height={34}
            className="h-8 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-200"
          />
        </a>

        {/* Tagline */}
        <p className="font-mono text-xs text-fiume-cream/40 tracking-widest uppercase text-center">
          Building ventures. Advising organisations.
        </p>

        {/* Email + copyright */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <a
            href="mailto:alberto@fiumestrategy.com"
            className="font-mono text-xs text-fiume-cream/50 hover:text-fiume-cream/80 transition-colors duration-200 cursor-pointer"
          >
            alberto@fiumestrategy.com
          </a>
          <p className="font-mono text-xs text-fiume-cream/30">
            © 2026 Fiume. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
