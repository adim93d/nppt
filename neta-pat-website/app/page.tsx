"use client"

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"
import Image from "next/image"

export default function Home() {
  const { language } = useLanguage()

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Hero Image" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{getTranslation(language, "heroTitle")}</h1>
          <p className="text-xl md:text-2xl">{getTranslation(language, "heroSubtitle")}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="page-container section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">{getTranslation(language, "about")}</h2>

          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Neta Pat"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            <div className="prose max-w-2xl">
              {language === "he" ? (
                <p>
                  שלום, אני נטע פת, צלמת מקצועית המתמחה בצילומי הריון, משפחה ותדמית. אני מאמינה שצילום הוא לא רק תיעוד
                  של רגע, אלא יצירת חוויה שתישאר איתכם לתמיד. הגישה שלי לצילום היא טבעית ואותנטית, עם דגש על יצירת
                  אווירה נעימה ורגועה שתאפשר לכם להיות הכי אתם.
                </p>
              ) : (
                <p>
                  Hello, I'm Neta Pat, a professional photographer specializing in pregnancy, family, and personal
                  branding photography. I believe that photography is not just documenting a moment, but creating an
                  experience that will stay with you forever. My approach to photography is natural and authentic, with
                  an emphasis on creating a pleasant and relaxed atmosphere that will allow you to be your most
                  authentic self.
                </p>
              )}

              {language === "he" ? (
                <p>
                  אני עובדת עם לקוחות בכל הארץ, ומתאימה את הצילומים לצרכים ולרצונות שלכם. אשמח ללוות אתכם ברגעים
                  המיוחדים בחייכם וליצור יחד זכרונות מרגשים.
                </p>
              ) : (
                <p>
                  I work with clients all over the country, and tailor the photoshoots to your needs and desires. I
                  would be happy to accompany you in the special moments of your life and create touching memories
                  together.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
