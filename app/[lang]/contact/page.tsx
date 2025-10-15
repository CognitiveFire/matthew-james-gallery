'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage({ params }: { params: { lang: 'en' | 'no' } }) {
  const [dict, setDict] = useState<any>(null)
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

  useEffect(() => {
    // Load dictionary client-side
    import(`@/dictionaries/${params.lang}.json`).then((module) => {
      setDict(module.default)
    })
  }, [params.lang])

  if (!dict) return <div>Loading...</div>
  
  const t = dict.contact

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
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
              Thank You
            </h1>
            <p className="font-sans text-lg text-warm-gray mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Send Another Message
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6">
            Contact Us
          </h1>
          <p className="font-sans text-lg text-warm-gray max-w-2xl mx-auto">
            Interested in purchasing an artwork or have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-warm-gray mt-1" />
                    <div>
                      <p className="font-sans font-medium text-charcoal">Email</p>
                      <p className="font-sans text-warm-gray">info@matthewjames.no</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-warm-gray/20 pt-8">
                <h3 className="font-serif text-lg font-medium text-charcoal mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 font-sans text-warm-gray">
                  <p>Monday - Friday: 10:00 - 18:00</p>
                  <p>Saturday: 11:00 - 16:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-medium text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-sans text-sm font-medium text-charcoal mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+47 123 45 678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-sans text-sm font-medium text-charcoal mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a subject</option>
                      <option value="purchase-inquiry">Purchase Inquiry</option>
                      <option value="commission">Commission Request</option>
                      <option value="shipping">Shipping Information</option>
                      <option value="exhibition">Exhibition Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="artworkId" className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Artwork of Interest
                  </label>
                  <select
                    id="artworkId"
                    name="artworkId"
                    value={formData.artworkId}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select an artwork (optional)</option>
                    <option value="1">The Listener</option>
                    <option value="2">Winter Fox</option>
                    <option value="3">City Noise</option>
                    <option value="4">Still Waters Run Deep</option>
                    <option value="5">The Bird Who Knew Too Little</option>
                    <option value="6">Social Listening</option>
                    <option value="7">Sea Monster's Day Off</option>
                    <option value="8">London - A New Perspective</option>
                    <option value="9">It Seemed Like a Nice Neighborhood to Have Bad Habits In</option>
                    <option value="10">The Dog Walker</option>
                    <option value="11">It's Raining Again</option>
                    <option value="12">The Garden at Noon</option>
                    <option value="13">The Matador</option>
                    <option value="14">The Blue Chair</option>
                    <option value="15">The Mower</option>
                    <option value="16">Innsvømming</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                    placeholder={t.messagePlaceholder}
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
                      <span>{t.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.sendMessage}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
