'use client'

import { AnimatedSection } from '@/components/animated-section'

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="bg-fiume-cream py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-fiume-dark tracking-tight">
            Two ways we work.
          </h2>
        </AnimatedSection>

        <div className="mt-20 grid md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection delay={100}>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-fiume-dark tracking-tight">
                Ventures
              </h3>
              <p className="mt-6 text-base sm:text-lg font-light text-fiume-dark/80 leading-relaxed">
                We originate and build our own businesses from scratch. We take equity stakes, stay hands-on, and grow them into sustainable companies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-fiume-dark tracking-tight">
                Advisory
              </h3>
              <p className="mt-6 text-base sm:text-lg font-light text-fiume-dark/80 leading-relaxed">
                {"We work with organisations facing strategic inflection points — market expansion, operational transformation, innovation programmes. We don't just advise. We implement."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
