import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Reveal } from "@/components/reveal"
import { ArrowLeft } from "lucide-react"
import { getDictionary } from "@/lib/i18n"

const BOOKING_URL = "/book"

const slugs = [
  "leadership-vision-alignment",
  "okr-implementation",
  "governance-process-optimization",
  "market-sizing-fundraising",
  "talent-acquisition-strategy",
]

export async function generateStaticParams() {
  const locales = ["en", "it"]
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

export default async function CaseStudyPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const t = getDictionary(locale).caseStudy
  const study = t.studies[slug]
  if (!study) notFound()

  const bookHref = `/${locale}${BOOKING_URL}`

  return (
    <main className="min-h-screen bg-[#06080F] text-[#F0EEE9]">
      <Navigation />

      <section className="pt-36 pb-16 px-6 md:px-12 lg:px-20">
        <Reveal>
          <Link href={`/${locale}/casi-di-studio`}
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#F0EEE9]/45 hover:text-[#F0EEE9] transition-colors duration-300 mb-16">
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.backLink}
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/30 block mb-5">
                {study.number} — {study.sector}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif font-light text-[#F0EEE9] leading-tight"
                style={{ fontSize: "clamp(30px, 4.5vw, 64px)", letterSpacing: "-0.025em", lineHeight: 0.95 }}>
                {study.title}
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-8 lg:gap-5 pb-1">
            {[
              { label: t.clientLabel, value: study.clientProfile },
              { label: t.durationLabel, value: study.duration },
            ].map((item, i) => (
              <Reveal key={item.label} delay={0.15 + i * 0.08}>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/35 block mb-1">{item.label}</span>
                <span className="font-sans text-sm text-[#F0EEE9]/75">{item.value}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-14 border-t border-[#F0EEE9]/08">
        <Reveal>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/30 mb-6">{t.challengeLabel}</p>
          <p className="font-serif italic text-[#F0EEE9]/85 max-w-4xl"
            style={{ fontSize: "clamp(22px, 3vw, 40px)", lineHeight: 1.3, letterSpacing: "-0.015em" }}>
            {study.challenge}
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-14 border-t border-[#F0EEE9]/08">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/30 mb-6">{t.contextLabel}</p>
            <p className="font-sans text-[15px] text-[#F0EEE9]/60 leading-relaxed">{study.context}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/30 mb-6">{t.approachLabel}</p>
            <p className="font-sans text-[15px] text-[#F0EEE9]/60 leading-relaxed">{study.approach}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-14 border-t border-[#F0EEE9]/08">
        <Reveal>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/30 mb-10">{t.impactLabel}</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F0EEE9]/08">
          {study.impact.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-[#06080F] p-8">
                <span className="font-serif text-[#F0EEE9]/15 text-4xl font-light block mb-4 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-[15px] text-[#F0EEE9]/75 leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#F0EEE9]/08">
        <Reveal>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/30 mb-6">{t.ctaLabel}</p>
          <p className="font-serif italic text-[#F0EEE9]/70 mb-10 max-w-2xl"
            style={{ fontSize: "clamp(20px, 2.5vw, 32px)", lineHeight: 1.3, letterSpacing: "-0.015em" }}>
            {t.ctaHeading}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <a href={bookHref} className="btn-book">{t.ctaBook} <span>→</span></a>
            <a href="mailto:albertopalu9@gmail.com" className="btn-book-ghost">{t.ctaEmail} <span>→</span></a>
          </div>
        </Reveal>
      </section>

      <div className="px-6 md:px-12 lg:px-20 pb-12 border-t border-[#F0EEE9]/08">
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="Fiume Consulting" className="h-7 w-auto object-contain opacity-35" />
          <span className="font-sans text-[11px] text-[#F0EEE9]/25">{t.copyright(new Date().getFullYear())}</span>
        </div>
      </div>
    </main>
  )
}
