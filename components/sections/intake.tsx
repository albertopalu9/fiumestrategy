"use client"

import { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import { useReveal } from "@/components/use-reveal"
import { useDict } from "@/lib/use-dict"

const EMAILJS_SERVICE_ID = "service_b95u8fq"
const EMAILJS_TEMPLATE_ID = "template_lkfjakp"
const EMAILJS_PUBLIC_KEY = "RfNBUZx15P83dDJbj"

export function IntakeSection() {
  const revealRef = useReveal<HTMLDivElement>()
  const formRef = useRef<HTMLFormElement>(null)
  const { dict, locale } = useDict()
  const t = dict.intake

  const [displayed, setDisplayed] = useState(t.prompts[0])
  const [fading, setFading] = useState(false)
  const [email, setEmail] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let index = 0
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        index = (index + 1) % t.prompts.length
        setDisplayed(t.prompts[index])
        setFading(false)
      }, 450)
    }, 3600)
    return () => clearInterval(id)
  }, [t.prompts])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || !email.trim()) return
    setSending(true)
    setError("")
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_email: email.trim(), message: inputValue.trim() },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch {
      setError(t.error)
    } finally {
      setSending(false)
    }
  }

  const all = [...t.marquee, ...t.marquee]
  const bookHref = `/${locale}/book`

  return (
    <section className="snap-section relative bg-[#06080F] min-h-[100dvh] flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center py-20 px-6 md:px-12 lg:px-20">
        <div ref={revealRef} data-reveal className="w-full max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#F0EEE9]/38 mb-10">{t.label}</p>

          <div className="mb-12 flex items-center justify-center" style={{ minHeight: "calc(clamp(28px, 4.5vw, 64px) * 1.1 * 2)" }}>
            <h2 className="font-serif italic text-[#F0EEE9]"
              style={{ fontSize: "clamp(28px, 4.5vw, 64px)", letterSpacing: "-0.02em", lineHeight: 1.1, opacity: fading ? 0 : 1, transition: "opacity 0.45s ease" }}>
              {displayed}
            </h2>
          </div>

          {!submitted ? (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                placeholder={t.emailPlaceholder}
                className="intake-textarea w-full max-w-2xl font-sans text-[15px] text-[#F0EEE9] leading-relaxed px-6 py-4 focus:outline-none" />
              <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} required rows={4}
                placeholder={t.messagePlaceholder}
                className="intake-textarea w-full max-w-2xl font-sans text-[15px] text-[#F0EEE9] leading-relaxed px-6 py-5 resize-none focus:outline-none text-left" />
              {error && <p className="font-sans text-[12px] text-red-400/80 max-w-2xl text-left w-full">{error}</p>}
              <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
                <button type="submit" disabled={sending} className="btn-book disabled:opacity-50">
                  {sending ? t.sending : t.submit}
                  {!sending && <span>→</span>}
                </button>
                <span className="font-sans text-[11px] text-[#F0EEE9]/38">
                  {t.or}{" "}
                  <a href={bookHref} target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-[#F0EEE9]/70 transition-colors">
                    {t.bookLink}
                  </a>
                </span>
              </div>
            </form>
          ) : (
            <div className="intake-confirmed px-6 py-10 max-w-xl mx-auto">
              <p className="font-serif italic text-[#F0EEE9]/75" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.4 }}>
                {t.confirmed}
              </p>
              <p className="font-sans text-xs text-[#F0EEE9]/35 mt-4">
                {t.confirmedBook}{" "}
                <a href={bookHref} target="_blank" rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[#F0EEE9]/60 transition-colors">
                  {t.confirmedBookLink}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full overflow-hidden bg-[#F0EEE9] py-4 shrink-0">
        <div className="marquee-inner">
          {all.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="font-serif italic text-[#06080F] text-lg font-light tracking-tight whitespace-nowrap">{item}</span>
              <span className="text-[#06080F]/20 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
