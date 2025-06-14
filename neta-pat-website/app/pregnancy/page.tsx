"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import Gallery from "@/components/gallery"
import PackageDetails from "@/components/package-details"
import BuyNowButton from "@/components/buy-now-button"

// Sample gallery images
const pregnancyImages = [
  {
    src: "/images/pregnancy-beach-couple.jpg",
    alt: "Beautiful pregnancy photoshoot on the beach at golden hour with couple",
    width: 800,
    height: 600,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Pregnancy photoshoot at home",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Pregnancy portrait",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Pregnancy photoshoot with partner",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Pregnancy silhouette",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Pregnancy photoshoot in studio",
    width: 600,
    height: 800,
  },
]

export default function PregnancyPage() {
  const { language } = useLanguage()

  return (
    <div className="page-container page-transition">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-center mb-2">{getTranslation(language, "pregnancyTitle")}</h1>
        <h2 className="text-center text-xl text-gray-600 mb-8">{getTranslation(language, "pregnancySubtitle")}</h2>

        <div className="card">
          <p className="text-lg">{getTranslation(language, "pregnancyDescription")}</p>

          <PackageDetails
            durationKey="durationPregnancy"
            photoCountKey="photoCountPregnancy"
            priceKey="pricePregnancy"
          />
        </div>

        <div className="mt-12">
          <h3 className="text-center mb-6">{getTranslation(language, "viewGallery")}</h3>
          <Gallery images={pregnancyImages} />
        </div>
      </section>

      <BuyNowButton />
    </div>
  )
}
