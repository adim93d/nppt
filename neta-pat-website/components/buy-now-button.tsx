"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function BuyNowButton() {
  const { language } = useLanguage()

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link href="/contact" className="btn-primary flex items-center gap-2 shadow-lg hover:shadow-xl">
        <ShoppingCart className="h-5 w-5" />
        <span>{getTranslation(language, "buyNow")}</span>
      </Link>
    </div>
  )
}
