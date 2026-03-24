"use client"

import { usePathname } from "next/navigation"
import en from "./translations/en"
import it from "./translations/it"

export function useDict() {
  const pathname = usePathname()
  const locale = pathname.startsWith("/it") ? "it" : "en"
  return { dict: locale === "it" ? it : en, locale }
}
