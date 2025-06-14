"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "he" | "en"
type Direction = "rtl" | "ltr"

interface LanguageContextType {
  language: Language
  direction: Direction
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("he")
  const [direction, setDirection] = useState<Direction>("rtl")

  useEffect(() => {
    // Set direction based on language
    setDirection(language === "he" ? "rtl" : "ltr")
    // Set dir attribute on html element
    document.documentElement.dir = language === "he" ? "rtl" : "ltr"
    // Set lang attribute on html element
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === "he" ? "en" : "he")
  }

  return <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
