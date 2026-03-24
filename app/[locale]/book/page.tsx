"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import emailjs from "@emailjs/browser"
import { getDictionary } from "@/lib/i18n"

const EMAILJS_SERVICE_ID = "service_b95u8fq"
const EMAILJS_TEMPLATE_ID = "template_lkfjakp"
const EMAILJS_PUBLIC_KEY = "RfNBUZx15P83dDJbj"

export default function BookPage() {
  const params = useParams()
  const locale = (params?.locale as string) ?? "en"
  const t = getDictionary(locale).book

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [slot, setSlot] = useState(t.slots[0])
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSending(true)
    setError("")
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_email: email.trim(), message: `Name: ${name.trim()}\nCall type: ${slot}\n\n${message.trim()}` },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch {
      setError(t.error)
    } finally {
      setSending(false)
    }
  }

  return (
    <main style={{ height: "100dvh", overflowY: "scroll" }}>
      <section className="relative min-h-[100dvh] bg-[#06080F] text-[#F0EEE9] flex flex-col overflow-hidden">
        <div className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 pt-8">
          <Link href={`/${locale}`} className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/40 hover:text-[#F0EEE9]/70 transition-colors">
            {t.backLabel}
          </Link>
          <Link href={locale === "en" ? "/it/book" : "/en/book"}
            className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F0EEE9]/40 hover:text-[#F0EEE9] transition-colors">
            {locale === "en" ? "IT" : "EN"}
          </Link>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-[8%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/38 mb-8">{t.label}</p>
              <h1 className="font-serif font-light text-[#F0EEE9] mb-6" style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.025em", lineHeight: 0.95 }}>
                {t.heading.split("\n").map((line, i) => (
                  <span key={i} className="block">{i === 1 ? <span className="italic">{line}</span> : line}</span>
                ))}
              </h1>
              <p className="font-sans text-sm text-[#F0EEE9]/50 leading-relaxed max-w-sm mt-4">{t.body}</p>
              <div className="mt-12 space-y-4 border-t border-[#F0EEE9]/08 pt-8">
                {t.stats.map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 max-w-xs">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F0EEE9]/30">{label}</span>
                    <span className="font-serif italic text-[#F0EEE9]/60 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/38">{t.nameLabel}</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                        placeholder={t.namePlaceholder}
                        className="intake-textarea px-4 py-3 font-sans text-[14px] text-[#F0EEE9] focus:outline-none" style={{ resize: "none" }} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/38">{t.emailLabel}</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                        placeholder={t.emailPlaceholder}
                        className="intake-textarea px-4 py-3 font-sans text-[14px] text-[#F0EEE9] focus:outline-none" style={{ resize: "none" }} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/38">{t.slotLabel}</label>
                    <div className="flex flex-wrap gap-3">
                      {t.slots.map((s) => (
                        <button key={s} type="button" onClick={() => setSlot(s)}
                          className="font-sans text-[11px] uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-200"
                          style={{
                            borderColor: slot === s ? "rgba(240,238,233,0.65)" : "rgba(240,238,233,0.18)",
                            color: slot === s ? "#F0EEE9" : "rgba(240,238,233,0.45)",
                            background: slot === s ? "rgba(240,238,233,0.06)" : "transparent",
                          }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F0EEE9]/38">
                      {t.messageLabel} <span className="normal-case tracking-normal opacity-60">{t.messageOptional}</span>
                    </label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
                      placeholder={t.messagePlaceholder}
                      className="intake-textarea px-4 py-3 font-sans text-[14px] text-[#F0EEE9] leading-relaxed resize-none focus:outline-none" />
                  </div>

                  {error && <p className="font-sans text-[12px] text-red-400/80">{error}</p>}

                  <div className="pt-2">
                    <button type="submit" disabled={sending} className="btn-book disabled:opacity-50">
                      {sending ? t.sending : t.submit}
                      {!sending && <span>→</span>}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col justify-center h-full min-h-[320px]">
                  <div className="intake-confirmed px-8 py-12">
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F0EEE9]/38 mb-6">{t.confirmedLabel}</p>
                    <p className="font-serif italic text-[#F0EEE9]/80 mb-4" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", lineHeight: 1.3 }}>
                      {t.confirmed(name.split(" ")[0])}
                    </p>
                    <p className="font-sans text-sm text-[#F0EEE9]/40 leading-relaxed">{t.confirmedBody}</p>
                    <Link href={`/${locale}/casi-di-studio`}
                      className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#F0EEE9]/45 hover:text-[#F0EEE9] transition-colors mt-8">
                      {t.confirmedLink}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
