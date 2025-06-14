"use client"

import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1.5 rounded-2xl bg-white/80 hover:bg-white shadow-sm transition-all duration-300 text-sm font-medium"
      aria-label={language === "he" ? "Switch to English" : "עבור לעברית"}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "he" ? "English" : "עברית"}</span>
    </button>
  )
}
