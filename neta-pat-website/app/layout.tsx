import type React from "react"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Rubik } from "next/font/google"

const rubik = Rubik({ subsets: ["hebrew", "latin"] })

export const metadata = {
  title: "Neta Pat Photography",
  description: "Professional photography services for pregnancy, family, and personal branding",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.className} bg-gradient-to-br from-rose-50 to-purple-50 min-h-screen flex flex-col`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
