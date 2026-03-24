"use client"

import { useEffect, useRef } from "react"
import { useDict } from "@/lib/use-dict"

export function HeroSection() {
  const linesRef = useRef<HTMLSpanElement[]>([])
  const { dict } = useDict()

  useEffect(() => {
    linesRef.current.forEach((el, i) => {
      if (!el) return
      setTimeout(() => { el.style.transform = "translateY(0)" }, 200 + i * 130)
    })
  }, [])

  const addRef = (el: HTMLSpanElement | null, i: number) => {
    if (el) linesRef.current[i] = el
  }

  const subtitleLines = dict.hero.subtitle.split("\n")

  return (
    <section className="snap-section relative min-h-[100dvh] bg-[#06080F] text-[#F0EEE9] flex flex-col overflow-hidden">
      <div className="h-[70px] shrink-0" aria-hidden="true" />
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/40 mb-10">
            {dict.hero.tagline}
          </p>

          <h1
            className="font-serif font-light text-[#F0EEE9] mb-10"
            style={{ fontSize: "clamp(42px, 6.5vw, 96px)", letterSpacing: "-0.025em", lineHeight: 0.95 }}
          >
            {dict.hero.lines.map((line, i) => (
              <span key={i} className="line-mask block">
                <span ref={(el) => addRef(el, i)} className="line-inner block">
                  {i === 1 ? <span className="italic">{line}</span> : line}
                </span>
              </span>
            ))}
          </h1>

          <span className="line-mask block">
            <span ref={(el) => addRef(el, 3)} className="line-inner block">
              <p
                className="font-serif italic text-[#F0EEE9]/55 max-w-xl"
                style={{ fontSize: "clamp(18px, 2.2vw, 28px)", lineHeight: 1.45 }}
              >
                {subtitleLines[0]}
                <br />
                {subtitleLines[1]}
              </p>
            </span>
          </span>

          {/* Pillar nav */}
          <div className="flex items-center gap-8 md:gap-12 mt-16">
            {dict.hero.pillars.map(({ label, href }) => (
              <a key={label} href={href} className="group flex flex-col gap-1">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/40 group-hover:text-[#F0EEE9]/70 transition-colors">
                  {label}
                </span>
                <span className="block w-0 group-hover:w-full h-px bg-[#F0EEE9]/30 transition-all duration-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[70px] shrink-0" aria-hidden="true" />
    </section>
  )
}
