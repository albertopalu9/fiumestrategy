'use client'

import { useEffect, useState } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-fiume-dark/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-light text-fiume-cream tracking-wide">
          Fiume
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#what-we-do"
            className="text-sm font-light text-fiume-cream/80 hover:text-fiume-cream transition-colors"
          >
            What We Do
          </a>
          <a
            href="#ventures"
            className="text-sm font-light text-fiume-cream/80 hover:text-fiume-cream transition-colors"
          >
            Ventures
          </a>
          <a
            href="#how-we-work"
            className="text-sm font-light text-fiume-cream/80 hover:text-fiume-cream transition-colors"
          >
            How We Work
          </a>
          <a
            href="#contact"
            className="text-sm font-light text-fiume-cream/80 hover:text-fiume-cream transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
