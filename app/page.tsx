import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { WhatWeDoSection } from '@/components/sections/what-we-do'
import { VenturesSection } from '@/components/sections/ventures'
import { HowWeWorkSection } from '@/components/sections/how-we-work'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function FiumePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <VenturesSection />
      <HowWeWorkSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
