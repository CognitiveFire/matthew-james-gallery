import { Truck, Shield, Clock, Globe, Package, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ShippingPage({ params }: { params: { lang: 'en' | 'no' } }) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6">
            Shipping & Returns
          </h1>
          <p className="font-sans text-lg text-warm-gray max-w-2xl mx-auto">
            All artworks are shipped safely, fully insured, and carefully packed from Bergen, Norway. Each piece includes a certificate of authenticity and arrives ready to hang.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Shipping Zones */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              Shipping Zones
            </h2>
            <p className="font-sans text-warm-gray mb-8">
              All shipments include tracking, full-value insurance, and secure protective packaging. Larger works are sent in custom art boxes or wooden crates for extra safety.
            </p>
            
            <div className="bg-white border border-warm-gray/20 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-cream">
                    <tr>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">Zone</th>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">Large Works<br/><span className="text-sm font-sans text-warm-gray">(over 50 × 50 cm)</span></th>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">Small Works<br/><span className="text-sm font-sans text-warm-gray">(up to 50 × 50 cm)</span></th>
                      <th className="px-6 py-4 text-left font-serif text-lg font-medium text-charcoal">Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-gray/10">
                    <tr>
                      <td className="px-6 py-4 font-sans font-medium text-charcoal">Norway</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">1 200 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">650 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">3–5 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans font-medium text-charcoal">Europe</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">2 800 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">1 400 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">5–10 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans font-medium text-charcoal">Rest of the World</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">4 500 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">2 200 NOK</td>
                      <td className="px-6 py-4 font-sans text-warm-gray">10–20 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Insurance & Packaging */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              Insurance & Packaging
            </h2>
            
            <div className="bg-white p-8 border border-warm-gray/20">
              <p className="font-sans text-lg text-warm-gray leading-relaxed">
                Every artwork is fully insured for its sale value and packed to gallery standards, foam-lined, reinforced, and moisture-protected.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              What's Included
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                  Certificate of Authenticity
                </h3>
                <p className="font-sans text-warm-gray">
                  Each artwork comes with a signed certificate proving its authenticity and provenance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                  Ready to Hang
                </h3>
                <p className="font-sans text-warm-gray">
                  All paintings arrive with hanging hardware attached and ready for immediate display.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                  Professional Care
                </h3>
                <p className="font-sans text-warm-gray">
                  Each piece is handled with the same care and attention as gallery exhibitions.
                </p>
              </div>
            </div>
          </div>

          {/* Returns */}
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
              Returns
            </h2>
            
            <div className="bg-warm-gray/5 p-8 border border-warm-gray/20">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
                <div>
                  <p className="font-sans text-warm-gray leading-relaxed">
                    If your artwork arrives damaged, please get in touch within 7 days with photos of the packaging and piece. I handle each case personally and make sure replacements or refunds are arranged smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center py-12 border-t border-warm-gray/20">
            <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
              Questions About Shipping?
            </h3>
            <p className="font-sans text-warm-gray mb-8 max-w-2xl mx-auto">
              Contact me directly for any shipping questions, custom arrangements, or special delivery requirements.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}