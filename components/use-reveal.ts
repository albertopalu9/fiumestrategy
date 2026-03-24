import { useEffect, useRef } from "react"

export function useReveal<T extends HTMLElement>(rootMargin = "0px 0px -80px 0px") {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Double rAF: first frame paints opacity:0, second frame triggers transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add("revealed")
            })
          })
          obs.disconnect()
        }
      },
      { threshold: 0, rootMargin }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])

  return ref
}
