"use client"

import { useEffect } from "react"

export function PageEffects() {
  // Page-wide cursor glow
  useEffect(() => {
    const root = document.documentElement
    const handleMove = (e: MouseEvent) => {
      root.style.setProperty("--cx", `${e.clientX}px`)
      root.style.setProperty("--cy", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", handleMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  // Section reveal — rAF ensures all client components have mounted
  useEffect(() => {
    const register = () => {
      const els = document.querySelectorAll<HTMLElement>("[data-reveal]")
      if (!els.length) return

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed")
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0, rootMargin: "0px 0px -60px 0px" }
      )

      els.forEach((el) => obs.observe(el))
      return () => obs.disconnect()
    }

    const raf = requestAnimationFrame(register)
    return () => cancelAnimationFrame(raf)
  }, [])

  return null
}
