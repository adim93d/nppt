export const translations = {
  he: {
    // Navigation
    home: "דף הבית",
    pregnancy: "חבילת צילומי הריון",
    branding: "חבילת צילומי תדמית",
    family: "חבילת צילומי משפחה",
    contact: "צור קשר",

    // Homepage
    heroTitle: "Neta Pat Photography",
    heroSubtitle: "צילום הריון | משפחה | תדמית",
    about: "אודות",

    // Pregnancy Package
    pregnancyTitle: "חבילת צילומי הריון",
    pregnancySubtitle: "צילום הריון – בטבע או בבית הלקוחה",
    pregnancyDescription:
      "חווית צילום אישית ומרגשת המתעדת את הציפייה לתינוק החדש. הצילומים מתקיימים בטבע או בבית הלקוחה, בהתאם להעדפתכם. בסיום הצילומים תקבלו גלריה של תמונות ערוכות.",
    duration: "משך הצילום",
    durationPregnancy: "כ-60–90 דקות",
    photoCount: "כמות התמונות",
    photoCountPregnancy: "100–150 תמונות ערוכות באיכות גבוהה",
    price: "מחיר",
    pricePregnancy: '800 ₪ (כולל מע"מ)',

    // Branding Package
    brandingTitle: "חבילת צילומי תדמית",
    brandingSubtitle: "צילום תדמית אישי",
    brandingDescription:
      "מותאם לעסקים, יזמים ואנשי מקצוע. הצילומים כוללים הכנה מוקדמת, ייעוץ לגבי לבוש ומיקום, ובחירת תמונות ביחד.",
    durationBranding: "עד 90 דקות",
    looks: "2 לוקים",
    photoCountBranding: "10 תמונות ערוכות לבחירה",
    priceBranding: '950 ₪ (כולל מע"מ)',
    additionalPhoto: "כל תמונה ערוכה נוספת",
    additionalPhotoPrice: "50 ₪",

    // Family Package
    familyTitle: "חבילת צילומי משפחה",
    familySubtitle: "צילום משפחה",
    familyDescription:
      "תיעוד דינמי ומשמח של המשפחה שלכם. הצילומים מתקיימים בלוקיישן חיצוני לבחירתכם, באווירה טבעית ונעימה.",
    durationFamily: "כ-60 דקות",
    photoCountFamily: "80–120 תמונות ערוכות",
    priceFamily: '750 ₪ (כולל מע"מ)',

    // Contact
    contactTitle: "צור קשר",
    contactDescription: "אשמח לענות על כל שאלה ולתאם איתכם צילומים",
    name: "שם מלא",
    email: "אימייל",
    phone: "טלפון",
    message: "הודעה",
    submit: "שליחה",
    required: "שדה חובה",
    invalidEmail: "אימייל לא תקין",
    invalidPhone: "מספר טלפון לא תקין",

    // Common
    buyNow: "הזמינו עכשיו",
    copyright: "כל הזכויות שמורות",
    viewGallery: "צפייה בגלריה",
    close: "סגור",
    next: "הבא",
    previous: "הקודם",
  },
  en: {
    // Navigation
    home: "Home",
    pregnancy: "Pregnancy Photography",
    branding: "Personal Branding",
    family: "Family Photography",
    contact: "Contact",

    // Homepage
    heroTitle: "Neta Pat Photography",
    heroSubtitle: "Pregnancy | Family | Personal Branding",
    about: "About",

    // Pregnancy Package
    pregnancyTitle: "Pregnancy Photography Package",
    pregnancySubtitle: "Pregnancy Photography - In Nature or at Home",
    pregnancyDescription:
      "A personal and emotional photography experience documenting the anticipation of your new baby. The photoshoot takes place in nature or at your home, according to your preference. After the session, you'll receive a gallery of edited photos.",
    duration: "Duration",
    durationPregnancy: "About 60-90 minutes",
    photoCount: "Number of Photos",
    photoCountPregnancy: "100-150 high-quality edited photos",
    price: "Price",
    pricePregnancy: "800 ILS (including VAT)",

    // Branding Package
    brandingTitle: "Personal Branding Package",
    brandingSubtitle: "Personal Branding Photography",
    brandingDescription:
      "Tailored for businesses, entrepreneurs, and professionals. The photoshoot includes preparation, advice on clothing and location, and collaborative photo selection.",
    durationBranding: "Up to 90 minutes",
    looks: "2 looks",
    photoCountBranding: "10 edited photos to choose from",
    priceBranding: "950 ILS (including VAT)",
    additionalPhoto: "Each additional edited photo",
    additionalPhotoPrice: "50 ILS",

    // Family Package
    familyTitle: "Family Photography Package",
    familySubtitle: "Family Photography",
    familyDescription:
      "Dynamic and joyful documentation of your family. The photoshoot takes place at an outdoor location of your choice, in a natural and pleasant atmosphere.",
    durationFamily: "About 60 minutes",
    photoCountFamily: "80-120 edited photos",
    priceFamily: "750 ILS (including VAT)",

    // Contact
    contactTitle: "Contact Us",
    contactDescription: "I'll be happy to answer any questions and schedule a photoshoot with you",
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Submit",
    required: "Required field",
    invalidEmail: "Invalid email",
    invalidPhone: "Invalid phone number",

    // Common
    buyNow: "Book Now",
    copyright: "All Rights Reserved",
    viewGallery: "View Gallery",
    close: "Close",
    next: "Next",
    previous: "Previous",
  },
}

export type TranslationKey = keyof typeof translations.he

export function getTranslation(language: "he" | "en", key: TranslationKey): string {
  return translations[language][key]
}
