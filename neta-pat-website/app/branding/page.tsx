"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import Gallery from "@/components/gallery"
import PackageDetails from "@/components/package-details"
import BuyNowButton from "@/components/buy-now-button"

// Sample gallery images
const brandingImages = [
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Professional headshot",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Business casual portrait",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Professional in action",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Office environment portrait",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Professional with laptop",
    width: 600,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Casual professional portrait",
    width: 600,
    height: 800,
  },
]

export default function BrandingPage() {
  const { language } = useLanguage()

  return (
    <div className="page-container page-transition">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-center mb-2">{getTranslation(language, "brandingTitle")}</h1>
        <h2 className="text-center text-xl text-gray-600 mb-8">{getTranslation(language, "brandingSubtitle")}</h2>

        <div className="card">
          <p className="text-lg">{getTranslation(language, "brandingDescription")}</p>

          <PackageDetails
            durationKey="durationBranding"
            photoCountKey="photoCountBranding"
            priceKey="priceBranding"
            additionalDetails={[
              { key: "looks", value: "looks" },
              { key: "additionalPhoto", value: "additionalPhotoPrice" },
            ]}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-center mb-6">{getTranslation(language, "viewGallery")}</h3>
          <Gallery images={brandingImages} />
        </div>
      </section>

      <BuyNowButton />
    </div>
  )
}
