import { Mail, Phone, MapPin } from 'lucide-react'
import { getDictionary } from '@/lib/dictionaries'
import ContactForm from '@/components/ContactForm'

export default async function ContactPage({ params }: { params: { lang: 'en' | 'no' } }) {
  const dict = await getDictionary(params.lang)
  
  if (!dict || !dict.contact) {
    console.error('Dictionary or contact section is undefined:', { dict, lang: params.lang })
    return <div>Loading...</div>
  }
  
  const t = dict.contact

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6">
            {t.title}
          </h1>
          <p className="font-sans text-lg text-warm-gray max-w-2xl mx-auto">
            {t.subtitle}
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
                  {t.getInTouch}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-warm-gray mt-1" />
                    <div>
                      <p className="font-sans font-medium text-charcoal">{t.email}</p>
                      <p className="font-sans text-warm-gray">info@matthewjames.no</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-warm-gray/20 pt-8">
                <h3 className="font-serif text-lg font-medium text-charcoal mb-4">
                  {t.businessHours}
                </h3>
                <div className="space-y-2 font-sans text-warm-gray">
                  <p>{t.mondayFriday}</p>
                  <p>{t.saturday}</p>
                  <p>{t.sunday}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm translations={t} lang={params.lang} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}