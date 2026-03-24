import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Reveal, StaggerReveal, StaggerItem } from "@/components/reveal"
import { ArrowLeft } from "lucide-react"
import { getDictionary } from "@/lib/i18n"

const slugs = [
  "leadership-vision-alignment",
  "okr-implementation",
  "governance-process-optimization",
  "market-sizing-fundraising",
  "talent-acquisition-strategy",
]

export default async function CasiDiStudioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const t = dict.casiDiStudio
  const studies = dict.caseStudy.studies
  const caseStudies = slugs.map((slug) => ({ slug, ...studies[slug] }))

  return (
    <main className="min-h-screen bg-[#06080F] text-[#F0EEE9]">
      <Navigation />
      <div className="pt-40 pb-32 px-6 md:px-12 lg:px-20">
        <Reveal>
          <Link href={`/${locale}`}
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#F0EEE9]/50 hover:text-[#F0EEE9] transition-colors duration-300 mb-20">
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.back}
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/35 mb-6">{t.label}</p>
          <h1 className="font-serif font-light text-[#F0EEE9] mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.025em", lineHeight: 0.95 }}>
            {t.heading}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-sans text-sm text-[#F0EEE9]/50 max-w-xl leading-relaxed mb-24">{t.body}</p>
        </Reveal>

        <StaggerReveal staggerDelay={0.07}>
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link href={`/${locale}/casi-di-studio/${study.slug}`}
                className="group flex items-baseline gap-6 md:gap-10 py-7 md:py-8 border-t border-[#F0EEE9]/10 hover:border-[#F0EEE9]/25 transition-colors duration-300 cursor-pointer">
                <span className="font-serif font-light text-[#F0EEE9]/18 shrink-0 select-none group-hover:text-[#F0EEE9]/40 transition-colors duration-300"
                  style={{ fontSize: "clamp(13px, 1.1vw, 16px)", letterSpacing: "0.05em", width: "2.5ch" }}>
                  {study.number}
                </span>
                <span className="font-serif font-light text-[#F0EEE9] flex-1 leading-snug group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "clamp(20px, 2.8vw, 38px)", letterSpacing: "-0.02em" }}>
                  {study.title}
                </span>
                <span className="hidden lg:block font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/30 shrink-0 group-hover:text-[#F0EEE9]/50 transition-colors duration-300 min-w-[180px] text-right">
                  {study.sector}
                </span>
                <span className="shrink-0 text-[#F0EEE9]/25 group-hover:text-[#F0EEE9] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block" aria-hidden="true">↗</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <div className="border-t border-[#F0EEE9]/10" />

        <div className="mt-24 pt-8 border-t border-[#F0EEE9]/08 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="Fiume Consulting" className="h-7 w-auto object-contain opacity-35" />
          <span className="font-sans text-[11px] text-[#F0EEE9]/25">{t.copyright(new Date().getFullYear())}</span>
        </div>
      </div>
    </main>
  )
}
