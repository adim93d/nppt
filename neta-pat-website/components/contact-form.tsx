"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/translations"

export default function ContactForm() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string) => {
    // Simple validation for Israeli phone numbers
    const re = /^0\d{8,9}$/
    return re.test(phone.replace(/[-\s]/g, ""))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors = {
      name: formData.name ? "" : getTranslation(language, "required"),
      email: !formData.email
        ? getTranslation(language, "required")
        : !validateEmail(formData.email)
          ? getTranslation(language, "invalidEmail")
          : "",
      phone: !formData.phone
        ? getTranslation(language, "required")
        : !validatePhone(formData.phone)
          ? getTranslation(language, "invalidPhone")
          : "",
    }

    setErrors(newErrors)

    // If no errors, submit form
    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1500)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {getTranslation(language, "name")} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input ${errors.name ? "border-red-500" : ""}`}
          dir="auto"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {getTranslation(language, "email")} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input ${errors.email ? "border-red-500" : ""}`}
          dir="ltr"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          {getTranslation(language, "phone")} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`input ${errors.phone ? "border-red-500" : ""}`}
          dir="ltr"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {getTranslation(language, "message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="input"
          dir="auto"
        />
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex justify-center items-center">
          {isSubmitting ? (
            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          ) : null}
          {getTranslation(language, "submit")}
        </button>

        {isSubmitted && (
          <p className="mt-4 text-green-600 text-center">
            {language === "he" ? "ההודעה נשלחה בהצלחה!" : "Message sent successfully!"}
          </p>
        )}
      </div>
    </form>
  )
}
