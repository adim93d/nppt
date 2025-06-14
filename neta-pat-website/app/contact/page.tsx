"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import ContactForm from "@/components/contact-form"
import { Phone, Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <div className="page-container page-transition">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-center mb-2">{getTranslation(language, "contactTitle")}</h1>
        <p className="text-center text-lg text-gray-600 mb-12">{getTranslation(language, "contactDescription")}</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="card">
            <h2 className="text-xl font-bold mb-6">{language === "he" ? "פרטי התקשרות" : "Contact Information"}</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">{language === "he" ? "טלפון" : "Phone"}</h3>
                  <Link href="tel:+972501234567" className="text-purple-600 hover:underline">
                    050-123-4567
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">{language === "he" ? "אימייל" : "Email"}</h3>
                  <Link href="mailto:info@netapat.com" className="text-purple-600 hover:underline">
                    info@netapat.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Instagram</h3>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    @netapat_photography
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Facebook className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Facebook</h3>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    Neta Pat Photography
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold mb-6">{language === "he" ? "שלחו הודעה" : "Send a Message"}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
