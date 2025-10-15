import Image from 'next/image'
import { getDictionary } from '@/lib/dictionaries'

export default async function AboutPage({ params }: { params: { lang: 'en' | 'no' } }) {
  const dict = await getDictionary(params.lang)
  const t = dict.about
  return (
    <div className="pt-20">
      {/* Hero Section */}
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

      {/* Artist Statement */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-warm-gray/20 p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-4">
                {t.artistStatement}
              </h2>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">
                {t.artistName}
              </h3>
              <p className="font-sans text-warm-gray">
                {t.artistLocation}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-lg text-charcoal leading-relaxed mb-6">
                {t.statement1}
              </p>

              <blockquote className="border-l-4 border-accent pl-6 my-8">
                <p className="font-serif text-xl text-charcoal italic leading-relaxed">
                  "{t.quote}"
                </p>
                <cite className="font-sans text-sm text-warm-gray mt-4 block">, Matthew James</cite>
              </blockquote>

              <p className="font-sans text-lg text-charcoal leading-relaxed">
                {t.statement2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 lg:px-8 bg-warm-gray/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light text-charcoal mb-4">
              {t.processTitle}
            </h2>
            <p className="font-sans text-lg text-warm-gray">
              {t.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cream font-serif text-2xl font-bold">1</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                {t.step1Title}
              </h3>
              <p className="font-sans text-warm-gray">
                {t.step1Text}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cream font-serif text-2xl font-bold">2</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                {t.step2Title}
              </h3>
              <p className="font-sans text-warm-gray">
                {t.step2Text}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cream font-serif text-2xl font-bold">3</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                {t.step3Title}
              </h3>
              <p className="font-sans text-warm-gray">
                {t.step3Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bergen Inspiration */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-light text-charcoal mb-6">
                {t.bergenTitle}
              </h2>
              <p className="font-sans text-lg text-warm-gray leading-relaxed mb-6">
                {t.bergen1}
              </p>
              <p className="font-sans text-lg text-warm-gray leading-relaxed">
                {t.bergen2}
              </p>
            </div>
            
            <div className="bg-warm-gray/10 p-8 text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="https://i.ibb.co/5Wj164Y1/IMG-5698.jpg"
                  alt="Matthew James - Artist Portrait"
                  fill
                  className="object-cover rounded-full"
                  sizes="192px"
                  priority
                  unoptimized
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
                {t.artistName}
              </h3>
              <p className="font-sans text-warm-gray mb-4">
                {t.artistLocation}
              </p>
              <div className="space-y-2 text-sm text-warm-gray">
                <p>{t.modernExpressionism}</p>
                <p>{t.boldColour}</p>
                <p>{t.spontaneousProcess}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-warm-gray/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal mb-6">
            {t.exploreTitle}
          </h2>
          <p className="font-sans text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
            {t.exploreText}
          </p>
          <a 
            href={`/${params.lang}`} 
            className="btn-primary inline-block"
          >
            {t.viewGallery}
          </a>
        </div>
      </section>
    </div>
  )
}
