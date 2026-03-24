"use client"

import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { SectionNumber } from "@/components/section-number"
import { ArrowUpRight } from "lucide-react"
import { useDict } from "@/lib/use-dict"

export function VenturesSection() {
  const { dict } = useDict()
  const { ventures } = dict

  return (
    <section className="relative bg-[#000D18] text-[#F5F5F0] py-32 md:py-48 overflow-hidden">
      <SectionNumber number="03" position="left" className="top-20" />
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <Reveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#F5F5F0]/40 mb-6">{ventures.label}</p>
          <h2 className="font-serif font-light mb-24" style={{ fontSize: "clamp(36px, 5vw, 80px)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
            {ventures.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Link href="https://belli.health" target="_blank" rel="noopener noreferrer"
            className="group block border-t border-[#F5F5F0]/10 py-12 md:py-16 hover:bg-[#F5F5F0]/[0.02] transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              <div className="md:col-span-1">
                <span className="font-serif text-[#F5F5F0]/10 text-4xl font-light">01</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-serif font-light text-[#F5F5F0]" style={{ fontSize: "clamp(28px, 3vw, 52px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                  Belli
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="font-sans text-base text-[#F5F5F0]/70 leading-relaxed mb-6">{ventures.belli.body}</p>
                <div className="flex flex-wrap gap-3">
                  {ventures.belli.tags.map((tag) => (
                    <span key={tag} className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F5F5F0]/40 border border-[#F5F5F0]/10 px-3 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3 flex justify-end items-start">
                <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#F5F5F0]/40 group-hover:text-[#F5F5F0] transition-colors">
                  <span>{ventures.belli.status}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="border-t border-[#F5F5F0]/10 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="md:col-span-1">
                <span className="font-serif text-[#F5F5F0]/10 text-4xl font-light">02</span>
              </div>
              <div className="md:col-span-11">
                <p className="font-serif italic text-[#F5F5F0]/20" style={{ fontSize: "clamp(24px, 3vw, 48px)", lineHeight: 0.95 }}>
                  {ventures.placeholder}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-[#F5F5F0]/10" />
      </div>
    </section>
  )
}
