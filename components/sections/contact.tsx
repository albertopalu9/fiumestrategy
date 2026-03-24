"use client"

import { ArrowRight } from "lucide-react"
import { useReveal } from "@/components/use-reveal"
import { useDict } from "@/lib/use-dict"

export function ContactSection() {
  const revealRef = useReveal<HTMLDivElement>()
  const { dict, locale } = useDict()
  const { contact } = dict

  return (
    <section id="contact" className="snap-section relative bg-[#06080F] text-[#F0EEE9] min-h-[100dvh] flex flex-col justify-center py-32 overflow-hidden">
      <div ref={revealRef} data-reveal className="relative z-10 px-6 md:px-12 lg:px-20">
        <h2 className="font-serif italic font-light mb-6" style={{ fontSize: "clamp(42px, 6.5vw, 96px)", letterSpacing: "-0.025em", lineHeight: 0.95 }}>
          {contact.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16 pt-12 border-t border-[#F0EEE9]/10">
          <div className="lg:col-span-5">
            <p className="font-sans text-base text-[#F0EEE9]/60 leading-relaxed">{contact.body}</p>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8">
            <ContactLink href="mailto:albertopalu9@gmail.com" label={contact.emailLabel}>
              albertopalu9@gmail.com
            </ContactLink>
            <ContactLink href={`/${locale}/book`} label={contact.bookLabel}>
              {contact.bookText}
            </ContactLink>
          </div>
        </div>

        <div className="mt-40 pt-8 border-t border-[#F0EEE9]/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="Fiume Consulting" className="h-7 w-auto object-contain opacity-40" />
            <span className="font-sans text-[11px] text-[#F0EEE9]/30">{contact.copyright(new Date().getFullYear())}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/35 block mb-3">{label}</span>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group inline-flex items-center gap-4 font-sans text-lg text-[#F0EEE9] hover:text-[#F0EEE9]/60 transition-colors duration-300">
        {children}
        <span className="inline-flex items-center">
          <span className="w-6 group-hover:w-12 h-px bg-current transition-all duration-400" />
          <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </a>
    </div>
  )
}
