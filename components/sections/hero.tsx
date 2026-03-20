'use client'

import { AnimatedSection } from '@/components/animated-section'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-fiume-dark px-6">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-fiume-cream leading-tight tracking-tight text-balance">
            A studio that builds, invests, implements, and advises.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="mt-8 text-lg sm:text-xl font-light text-fiume-cream/90 tracking-wide">
            We build, advise, and implement.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg font-light text-fiume-cream/70 leading-relaxed text-pretty">
            We work with founders and organisations to turn ambitious ideas into real businesses — then stay involved to make them grow.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <a
            href="#contact"
            className="inline-block mt-12 px-8 py-4 bg-fiume-terracotta text-white text-sm font-medium tracking-wide hover:bg-fiume-terracotta/90 transition-colors"
          >
            Start a conversation →
          </a>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-fiume-cream/50" />
      </div>
    </section>
  )
}
