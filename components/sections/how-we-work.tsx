'use client'

import { AnimatedSection } from '@/components/animated-section'

export function HowWeWorkSection() {
  const principles = [
    {
      title: 'Clarity',
      description: 'we help you see the problem before we solve it',
    },
    {
      title: 'Speed',
      description: 'decisions made fast, implementation started immediately',
    },
    {
      title: 'Ownership',
      description: 'we take responsibility for outcomes, not just recommendations',
    },
  ]

  return (
    <section id="how-we-work" className="bg-fiume-cream py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-fiume-dark tracking-tight">
            Straight to the point.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="mt-10 max-w-3xl text-base sm:text-lg font-light text-fiume-dark/80 leading-relaxed">
            We keep engagements small and focused. No large teams, no unnecessary process. You work directly with Alberto — from the first call to the last deliverable.
          </p>
        </AnimatedSection>

        <div className="mt-20 grid sm:grid-cols-3 gap-12 sm:gap-8">
          {principles.map((principle, index) => (
            <AnimatedSection key={principle.title} delay={200 + index * 100}>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-fiume-dark tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-4 text-base font-light text-fiume-dark/70 leading-relaxed">
                  — {principle.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
