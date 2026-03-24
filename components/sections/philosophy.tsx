"use client"

import { useReveal } from "@/components/use-reveal"
import { useDict } from "@/lib/use-dict"

export function PhilosophySection() {
  const revealRef = useReveal<HTMLDivElement>()
  const { dict } = useDict()
  const { philosophy } = dict
  const headingLines = philosophy.heading.split("\n")

  return (
    <section id="philosophy" className="snap-section relative bg-[#E8E5DE] text-[#06080F] min-h-[100dvh] flex flex-col justify-center py-32 overflow-hidden">
      <div ref={revealRef} data-reveal className="px-6 md:px-12 lg:px-20">
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#06080F]/35 mb-12">{philosophy.label}</p>

        <div className="mb-20 max-w-3xl">
          <h2 className="font-serif font-light text-[#06080F]" style={{ fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.025em", lineHeight: 0.95 }}>
            {headingLines.map((line, i) => (
              <span key={i} className="block">{i === 1 ? <span className="italic">{line}</span> : line}</span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 border-t border-[#06080F]/12">
          {philosophy.values.map((v, i) => (
            <div key={`title-${i}`} className="pt-10 pb-4 border-r border-[#06080F]/10 last:border-r-0 pr-8 last:pr-0">
              <div className="flex items-baseline gap-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#06080F]/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif font-light text-[#06080F]" style={{ fontSize: "clamp(26px, 2.8vw, 42px)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {v.name}
                  <span className="italic text-[#06080F]/35 ml-2" style={{ fontSize: "0.65em" }}>/ {v.italian}</span>
                </h3>
              </div>
            </div>
          ))}
          {philosophy.values.map((v, i) => (
            <div key={`desc-${i}`} className="pt-6 pb-12 border-r border-[#06080F]/10 last:border-r-0 pr-8 last:pr-0">
              <p className="font-sans text-sm text-[#06080F]/60 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
