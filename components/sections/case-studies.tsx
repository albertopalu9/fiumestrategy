"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { useReveal } from "@/components/use-reveal"
import { useDict } from "@/lib/use-dict"

const slugs = [
  "leadership-vision-alignment",
  "okr-implementation",
  "governance-process-optimization",
  "market-sizing-fundraising",
  "talent-acquisition-strategy",
]

export function CaseStudiesSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const { dict, locale } = useDict()
  const { caseStudies: t } = dict
  const caseStudies = slugs.map((slug) => ({ slug, ...dict.caseStudy.studies[slug] }))

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cs-row--visible")
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    )
    rowRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="snap-section relative bg-[#06080F] text-[#F0EEE9] min-h-[100dvh] flex flex-col justify-center py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div ref={headerRef} data-reveal className="mb-20 md:mb-28">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#F0EEE9]/38 mb-8">{t.label}</p>
          <h2 className="font-serif font-light text-[#F0EEE9]" style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.025em" }}>
            {t.heading}
          </h2>
        </div>

        <ol className="list-none m-0 p-0">
          {caseStudies.map((study, i) => (
            <li key={study.slug}>
              <Link
                ref={(el) => { rowRefs.current[i] = el }}
                href={`/${locale}/casi-di-studio/${study.slug}`}
                className="cs-row group flex items-baseline gap-6 md:gap-10 py-7 md:py-8 border-t border-[#F0EEE9]/10 hover:border-[#F0EEE9]/30 transition-colors duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif font-light text-[#F0EEE9]/20 shrink-0 select-none group-hover:text-[#F0EEE9]/45 transition-colors duration-300"
                  style={{ fontSize: "clamp(13px, 1.1vw, 17px)", letterSpacing: "0.05em", width: "2.5ch" }}>
                  {study.number}
                </span>
                <span className="font-serif font-light text-[#F0EEE9] flex-1 leading-snug group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "clamp(20px, 2.8vw, 38px)", letterSpacing: "-0.02em" }}>
                  {study.title}
                </span>
                <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/35 shrink-0 group-hover:text-[#F0EEE9]/55 transition-colors duration-300 min-w-[200px] text-right">
                  {study.sector}
                </span>
                <span className="shrink-0 text-[#F0EEE9]/30 group-hover:text-[#F0EEE9] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="border-t border-[#F0EEE9]/10 pt-10 flex justify-end">
          <Link href={`/${locale}/casi-di-studio`}
            className="group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.25em] text-[#F0EEE9]/45 hover:text-[#F0EEE9] transition-colors duration-300">
            {t.viewAll}
            <span className="inline-block w-6 group-hover:w-10 h-px bg-current transition-all duration-300" />
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </Link>
        </div>
      </div>

      <style>{`
        .cs-row { opacity: 0; transform: translateY(16px); transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease; }
        .cs-row--visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}
