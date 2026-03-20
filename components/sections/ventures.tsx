'use client'

import { AnimatedSection } from '@/components/animated-section'

export function VenturesSection() {
  return (
    <section id="ventures" className="bg-fiume-dark py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-fiume-cream tracking-tight">
            {"What we're building."}
          </h2>
        </AnimatedSection>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={100}>
            <div className="bg-muted/30 border border-fiume-cream/10 p-8 sm:p-12 h-full">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-fiume-cream tracking-tight">
                Belli
              </h3>
              <p className="mt-6 text-base sm:text-lg font-light text-fiume-cream/80 leading-relaxed">
                AI-powered gut health tracking for dietologists and their patients. Replacing paper food diaries with objective, real-time clinical data.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-fiume-cream/60 tracking-wide">
                  Healthcare
                </span>
                <span className="text-fiume-cream/30">·</span>
                <span className="text-xs font-medium text-fiume-cream/60 tracking-wide">
                  SaaS
                </span>
                <span className="text-fiume-cream/30">·</span>
                <span className="text-xs font-medium text-fiume-cream/60 tracking-wide">
                  Italy & Switzerland
                </span>
              </div>
              <a
                href="#"
                className="inline-block mt-8 text-sm font-medium text-fiume-terracotta hover:text-fiume-terracotta/80 transition-colors"
              >
                Learn more →
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="border-2 border-dashed border-fiume-cream/20 p-8 sm:p-12 h-full flex items-center justify-center">
              <p className="font-serif text-xl sm:text-2xl font-light text-fiume-cream/40 tracking-tight">
                More coming.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
