"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export default function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/80 backdrop-blur-md shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Neta Pat Photography. {getTranslation(language, "copyright")}
            </p>
          </div>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors" />
            </Link>
            <Link href="mailto:info@netapat.com" aria-label="Email">
              <Mail className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors" />
            </Link>
            <Link href="tel:+972501234567" aria-label="Phone">
              <Phone className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
