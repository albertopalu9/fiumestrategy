"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useDict } from "@/lib/use-dict"

function useScrollReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".line-inner").forEach((span, i) => {
            setTimeout(() => { (span as HTMLElement).style.transform = "translateY(0)" }, i * 100)
          })
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold])
}

function ServicePanel({ service, bookHref }: { service: ReturnType<typeof useDict>["dict"]["services"][0]; bookHref: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref as React.RefObject<HTMLElement>)

  return (
    <section
      id={service.id}
      ref={ref}
      className="snap-section relative min-h-screen flex flex-col justify-between py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-[#F0EEE9]/15"
      style={{ background: "#06080F" }}
    >
      <div className="flex items-center justify-between mb-16">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/30">
          {service.number} — {service.verb}
        </span>
        <span
          className="font-serif italic text-[#F0EEE9]/04 select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(80px, 12vw, 180px)" }}
          aria-hidden
        >
          {service.verb}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="font-serif font-light text-[#F0EEE9] mb-8" style={{ fontSize: "clamp(38px, 5.5vw, 80px)", letterSpacing: "-0.025em", lineHeight: 0.95 }}>
            {service.headline.split("\n").map((line, i) => (
              <span key={i} className="line-mask block">
                <span className="line-inner block" style={{ transitionDelay: `${i * 80}ms` }}>
                  {i === 0 ? line : <span className="italic">{line}</span>}
                </span>
              </span>
            ))}
          </h2>

          <span className="line-mask block">
            <span className="line-inner block" style={{ transitionDelay: "200ms" }}>
              <p className="font-sans text-base text-[#F0EEE9]/60 max-w-md leading-relaxed mb-10">{service.body}</p>
            </span>
          </span>

          <span className="line-mask block">
            <span className="line-inner block" style={{ transitionDelay: "280ms" }}>
              <a href={bookHref} className="btn-book-ghost">
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </span>
          </span>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center lg:pl-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/30 mb-8">{service.areasLabel}</p>
          <ul className="space-y-0">
            {service.areas.map((area, i) => (
              <li key={area} className="flex items-center gap-4 py-4 border-b border-[#F0EEE9]/08 last:border-0">
                <span className="font-sans text-[10px] text-[#F0EEE9]/20 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-sans text-base text-[#F0EEE9]/70">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const { dict, locale } = useDict()
  const bookHref = `/${locale}/book`

  return (
    <>
      {dict.services.map((s) => (
        <ServicePanel key={s.id} service={s} bookHref={bookHref} />
      ))}
    </>
  )
}
