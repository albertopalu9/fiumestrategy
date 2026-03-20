'use client'

import { AnimatedSection } from '@/components/animated-section'

export function ContactSection() {
  return (
    <section id="contact" className="bg-fiume-dark py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-fiume-cream tracking-tight">
            {"Let's talk."}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg font-light text-fiume-cream/80 leading-relaxed">
            Whether you have a venture idea, a strategic challenge, or just want to understand how we work — the first conversation is always free.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <a
            href="mailto:alberto@fiumestrategy.com?subject=Introductory%20Call"
            className="inline-block mt-12 px-8 py-4 bg-fiume-terracotta text-white text-sm font-medium tracking-wide hover:bg-fiume-terracotta/90 transition-colors"
          >
            Book an introductory call →
          </a>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <a
            href="mailto:alberto@fiumestrategy.com"
            className="block mt-8 text-sm font-light text-fiume-cream/60 hover:text-fiume-cream/80 transition-colors"
          >
            alberto@fiumestrategy.com
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
