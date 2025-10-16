'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

interface ContactFormProps {
  translations: any
  lang: 'en' | 'no'
}

export default function ContactForm({ translations, lang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    artworkId: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          lang,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        artworkId: '',
        message: '',
      })
    } catch (error) {
      console.error('Error sending message:', error)
      alert(lang === 'no' ? 'Det oppstod en feil ved sending av meldingen. Prøv igjen.' : 'There was an error sending the message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-cream" />
            </div>
            <h1 className="font-serif text-4xl font-light text-charcoal mb-4">
              {translations.thankYou}
            </h1>
            <p className="font-sans text-lg text-warm-gray mb-8">
              {translations.messageSent}
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              {translations.sendAnother}
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-sans text-sm font-medium text-charcoal mb-2">
            {translations.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder={translations.namePlaceholder}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-sans text-sm font-medium text-charcoal mb-2">
            {translations.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder={translations.emailPlaceholder}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block font-sans text-sm font-medium text-charcoal mb-2">
            {translations.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder={translations.phonePlaceholder}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block font-sans text-sm font-medium text-charcoal mb-2">
            {translations.subject} *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">{translations.selectSubject}</option>
            <option value="purchase-inquiry">{translations.purchaseInquiry}</option>
            <option value="commission">{translations.commission}</option>
            <option value="shipping">{translations.shipping}</option>
            <option value="exhibition">{translations.exhibition}</option>
            <option value="other">{translations.other}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="artworkId" className="block font-sans text-sm font-medium text-charcoal mb-2">
          {translations.artworkInterest}
        </label>
        <select
          id="artworkId"
          name="artworkId"
          value={formData.artworkId}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">{translations.artworkOptions.selectArtwork}</option>
          <option value="1">{translations.artworkOptions["1"]}</option>
          <option value="2">{translations.artworkOptions["2"]}</option>
          <option value="3">{translations.artworkOptions["3"]}</option>
          <option value="4">{translations.artworkOptions["4"]}</option>
          <option value="5">{translations.artworkOptions["5"]}</option>
          <option value="6">{translations.artworkOptions["6"]}</option>
          <option value="7">{translations.artworkOptions["7"]}</option>
          <option value="8">{translations.artworkOptions["8"]}</option>
          <option value="9">{translations.artworkOptions["9"]}</option>
          <option value="10">{translations.artworkOptions["10"]}</option>
          <option value="11">{translations.artworkOptions["11"]}</option>
          <option value="12">{translations.artworkOptions["12"]}</option>
          <option value="13">{translations.artworkOptions["13"]}</option>
          <option value="14">{translations.artworkOptions["14"]}</option>
          <option value="15">{translations.artworkOptions["15"]}</option>
          <option value="16">{translations.artworkOptions["16"]}</option>
          <option value="17">{translations.artworkOptions["17"]}</option>
          <option value="18">{translations.artworkOptions["18"]}</option>
          <option value="19">{translations.artworkOptions["19"]}</option>
          <option value="20">{translations.artworkOptions["20"]}</option>
          <option value="21">{translations.artworkOptions["21"]}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-charcoal mb-2">
          {translations.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="input-field resize-none"
          placeholder={translations.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
            <span>{translations.sending}</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>{translations.sendMessage}</span>
          </>
        )}
      </button>
    </form>
  )
}
