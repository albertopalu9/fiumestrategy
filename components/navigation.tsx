"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useDict } from "@/lib/use-dict"

const BOOKING_URL = "/book"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { dict, locale } = useDict()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Build alternate locale link
  const otherLocale = locale === "en" ? "it" : "en"
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`

  const homeHref = `/${locale}`
  const bookHref = `/${locale}/book`

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled || menuOpen ? "rgba(6,8,15,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(240,238,233,0.06)" : "none",
          transition: "background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s",
        }}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
          {/* Logo */}
          <Link href={homeHref} aria-label="Fiume Consulting — home">
            <Image
              src="/logo-white.png"
              alt="Fiume Consulting"
              width={120}
              height={42}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {dict.nav.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#F0EEE9]/50 hover:text-[#F0EEE9] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <Link
              href={otherPath}
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F0EEE9]/40 hover:text-[#F0EEE9] transition-colors duration-300 hidden sm:block"
            >
              {otherLocale}
            </Link>

            <a href={bookHref} className="btn-book hidden sm:inline-flex">
              {dict.nav.book}
              <span>→</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`block h-px w-5 bg-[#F0EEE9] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px w-5 bg-[#F0EEE9] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-[#F0EEE9] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#06080F]/97 backdrop-blur-md border-b border-[#F0EEE9]/06 px-6 pb-8 pt-6 flex flex-col gap-6"
          >
            {dict.nav.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-[13px] uppercase tracking-[0.2em] text-[#F0EEE9]/60 hover:text-[#F0EEE9] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <a href={bookHref} className="btn-book self-start" onClick={() => setMenuOpen(false)}>
                {dict.nav.book} <span>→</span>
              </a>
              <Link
                href={otherPath}
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F0EEE9]/40 hover:text-[#F0EEE9] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {otherLocale}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
