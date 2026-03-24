"use client"

import { Reveal } from "@/components/reveal"
import { SectionNumber } from "@/components/section-number"
import { useDict } from "@/lib/use-dict"

export function WhatWeDoSection() {
  const { dict } = useDict()
  const { whatWeDo } = dict

  return (
    <section id="work" className="relative bg-[#000000] text-[#F5F5F0] py-32 md:py-48 overflow-hidden">
      <SectionNumber number="02" position="right" className="top-20" />
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <Reveal>
          <h2 className="font-serif font-light mb-24" style={{ fontSize: "clamp(36px, 5vw, 80px)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
            {whatWeDo.heading}
          </h2>
        </Reveal>

        <div className="border-t border-[#F5F5F0]/10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <Reveal className="md:col-span-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F5F5F0]/35">{whatWeDo.ventures.label}</span>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-4">
              <h3 className="font-serif italic font-light" style={{ fontSize: "clamp(28px, 3.5vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                {whatWeDo.ventures.heading}
              </h3>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-6">
              <p className="font-sans text-base text-[#F5F5F0]/65 leading-relaxed">{whatWeDo.ventures.body}</p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-[#F5F5F0]/10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <Reveal className="md:col-span-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F5F5F0]/35">{whatWeDo.advisory.label}</span>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-4">
              <h3 className="font-serif italic font-light" style={{ fontSize: "clamp(28px, 3.5vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                {whatWeDo.advisory.heading.split("\n").map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h3>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-6">
              <p className="font-sans text-base text-[#F5F5F0]/65 leading-relaxed">{whatWeDo.advisory.body}</p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-[#F5F5F0]/10" />
      </div>
    </section>
  )
}
