import { Navigation } from "@/components/navigation"
import { PageEffects } from "@/components/page-effects"
import { HeroSection } from "@/components/sections/hero"
import { IntakeSection } from "@/components/sections/intake"
import { ServicesSection } from "@/components/sections/services"
import { PhilosophySection } from "@/components/sections/philosophy"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { ContactSection } from "@/components/sections/contact"

export default function FiumePage() {
  return (
    <main>
      <PageEffects />
      <Navigation />
      <HeroSection />
      <IntakeSection />
      <ServicesSection />
      <PhilosophySection />
      <CaseStudiesSection />
      <ContactSection />
    </main>
  )
}
