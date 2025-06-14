"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import { Clock, ImageIcon, DollarSign, Check } from "lucide-react"

interface PackageDetailsProps {
  durationKey: string
  photoCountKey: string
  priceKey: string
  additionalDetails?: {
    key: string
    value: string
  }[]
}

export default function PackageDetails({
  durationKey,
  photoCountKey,
  priceKey,
  additionalDetails = [],
}: PackageDetailsProps) {
  const { language } = useLanguage()

  return (
    <ul className="space-y-4 my-6">
      <li className="flex items-start gap-3">
        <div className="bg-purple-100 p-2 rounded-full mt-1">
          <Clock className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-medium">{getTranslation(language, "duration")}</h3>
          <p className="text-gray-600">{getTranslation(language, durationKey)}</p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <div className="bg-purple-100 p-2 rounded-full mt-1">
          <ImageIcon className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-medium">{getTranslation(language, "photoCount")}</h3>
          <p className="text-gray-600">{getTranslation(language, photoCountKey)}</p>
        </div>
      </li>

      {additionalDetails.map((detail, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="bg-purple-100 p-2 rounded-full mt-1">
            <Check className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium">{getTranslation(language, detail.key)}</h3>
            <p className="text-gray-600">{getTranslation(language, detail.value)}</p>
          </div>
        </li>
      ))}

      <li className="flex items-start gap-3">
        <div className="bg-purple-100 p-2 rounded-full mt-1">
          <DollarSign className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-medium">{getTranslation(language, "price")}</h3>
          <p className="text-gray-600">{getTranslation(language, priceKey)}</p>
        </div>
      </li>
    </ul>
  )
}
