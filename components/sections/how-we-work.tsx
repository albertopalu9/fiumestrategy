"use client"

import { Reveal } from "@/components/reveal"
import { SectionNumber } from "@/components/section-number"
import { useDict } from "@/lib/use-dict"

export function HowWeWorkSection() {
  const { dict } = useDict()
  const { howWeWork } = dict
  const headingLines = howWeWork.heading.split("\n")

  return (
    <section id="how-we-work" className="relative bg-[#F5F5F0] text-[#000000] py-32 md:py-48 overflow-hidden">
      <SectionNumber number="06" position="left" className="top-20 text-[#000000]" />
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <Reveal className="lg:col-span-6">
            <h2 className="font-serif font-light" style={{ fontSize: "clamp(36px, 5vw, 80px)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
              {headingLines[0]}
              <br />
              <span className="italic">{headingLines[1]}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-6 flex items-end">
            <p className="font-sans text-base text-[#000000]/60 leading-relaxed max-w-lg">{howWeWork.body}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#000000]/10">
          {howWeWork.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.12}
              className={`pt-10 pb-10 md:px-8 first:md:pl-0 last:md:pr-0 ${i < howWeWork.pillars.length - 1 ? "border-b md:border-b-0 md:border-r border-[#000000]/10" : ""}`}
            >
              <span className="font-serif text-[#000000]/10 text-6xl font-light block mb-8 leading-none">0{i + 1}</span>
              <h3 className="font-serif italic font-light mb-5" style={{ fontSize: "clamp(26px, 2.5vw, 40px)", lineHeight: 1 }}>
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-[#000000]/60 leading-relaxed">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
