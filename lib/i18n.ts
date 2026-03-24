import en from "./translations/en"
import it from "./translations/it"

export type Locale = "en" | "it"
export const locales: Locale[] = ["en", "it"]
export const defaultLocale: Locale = "en"

export function getDictionary(locale: string) {
  return locale === "it" ? it : en
}
