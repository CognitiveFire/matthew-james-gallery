import { Truck, Shield, Clock, Globe, Package, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'

export default async function ShippingPage({ params }: { params: { lang: 'en' | 'no' } }) {
  const dict = await getDictionary(params.lang)
  const t = dict.shipping
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

      {/* Main Content */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Shipping Zones */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              {t.shippingZones}
            </h2>
            <p className="font-sans text-warm-gray mb-8">
              {t.shippingDescription}
            </p>
            
            <div className="bg-white border border-warm-gray/20 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-cream">
                    <tr>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">{t.zone}</th>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">{t.largeWorks}<br/><span className="text-sm font-sans text-warm-gray">{t.largeWorksDesc}</span></th>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">{t.smallWorks}<br/><span className="text-sm font-sans text-warm-gray">{t.smallWorksDesc}</span></th>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">{t.deliveryTime}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-gray/10">
                    <tr>
                      <td className="px-6 py-4 font-sans font-medium text-charcoal">{t.norway}</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">1 200 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">650 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">{t.norwayDelivery}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans font-medium text-charcoal">{t.europe}</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">2 800 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">1 400 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">{t.europeDelivery}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans font-medium text-charcoal">{t.restOfWorld}</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">4 500 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">2 200 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">{t.worldDelivery}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Insurance & Packaging */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              {t.insurancePackaging}
            </h2>
            
            <div className="bg-white p-8 border border-warm-gray/20">
              <p className="font-sans text-lg text-warm-gray leading-relaxed">
                {t.insuranceDescription}
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              {t.whatsIncluded}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                  {t.certificateTitle}
                </h3>
                <p className="font-sans text-warm-gray">
                  {t.certificateDesc}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                  {t.readyToHangTitle}
                </h3>
                <p className="font-sans text-warm-gray">
                  {t.readyToHangDesc}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                  {t.professionalCareTitle}
                </h3>
                <p className="font-sans text-warm-gray">
                  {t.professionalCareDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Returns */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              {t.returns}
            </h2>
            
            <div className="bg-warm-gray/5 p-8 border border-warm-gray/20">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
                <div>
                  <p className="font-sans text-warm-gray leading-relaxed">
                    {t.returnsDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center py-12 border-t border-warm-gray/20">
            <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
              {t.questionsTitle}
            </h3>
            <p className="font-sans text-warm-gray mb-8 max-w-2xl mx-auto">
              {t.questionsText}
            </p>
            <Link href={`/${params.lang}/contact`} className="btn-primary inline-block">
              {t.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}