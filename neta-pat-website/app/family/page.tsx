"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import Gallery from "@/components/gallery"
import PackageDetails from "@/components/package-details"
import BuyNowButton from "@/components/buy-now-button"

// Sample gallery images
const familyImages = [
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Family portrait outdoors",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Family playing together",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Parents with children",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Family walking in nature",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Family candid moment",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Family group photo",
    width: 600,
    height: 800,
  },
]

export default function FamilyPage() {
  const { language } = useLanguage()

  return (
    <div className="page-container page-transition">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-center mb-2">{getTranslation(language, "familyTitle")}</h1>
        <h2 className="text-center text-xl text-gray-600 mb-8">{getTranslation(language, "familySubtitle")}</h2>

        <div className="card">
          <p className="text-lg">{getTranslation(language, "familyDescription")}</p>

          <PackageDetails durationKey="durationFamily" photoCountKey="photoCountFamily" priceKey="priceFamily" />
        </div>

        <div className="mt-12">
          <h3 className="text-center mb-6">{getTranslation(language, "viewGallery")}</h3>
          <Gallery images={familyImages} />
        </div>
      </section>

      <BuyNowButton />
    </div>
  )
}
