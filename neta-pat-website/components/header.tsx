"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import LanguageToggle from "./language-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { language, direction } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-purple-800">
              Neta Pat
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, "home")}
            </Link>
            <Link href="/pregnancy" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, "pregnancy")}
            </Link>
            <Link href="/branding" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, "branding")}
            </Link>
            <Link href="/family" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, "family")}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, "contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "home")}
            </Link>
            <Link
              href="/pregnancy"
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "pregnancy")}
            </Link>
            <Link
              href="/branding"
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "branding")}
            </Link>
            <Link
              href="/family"
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "family")}
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {getTranslation(language, "contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
