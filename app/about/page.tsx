import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6">
            About the Artist
          </h1>
          <p className="font-sans text-lg text-warm-gray max-w-2xl mx-auto">
            Discover the story behind Matthew James Gallery
          </p>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-warm-gray/20 p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-4">
                Artist Statement
              </h2>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">
                Matthew James
              </h3>
              <p className="font-sans text-warm-gray">
                English artist based in Bergen, Norway
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-lg text-charcoal leading-relaxed mb-6">
                Matthew James is an English artist based in Bergen, Norway. His work blends modern expressionism with a dry sense of humour, capturing the strange beauty of everyday life. Faces, cities, and fleeting moments appear in bold colour and loose form, always honest, sometimes ironic but never overthought.
              </p>

              <blockquote className="border-l-4 border-accent pl-6 my-8">
                <p className="font-serif text-xl text-charcoal italic leading-relaxed">
                  "I paint because I have to. Most of the time I start without knowing how it will finish. The process decides the outcome, I just follow where the colour leads."
                </p>
                <cite className="font-sans text-sm text-warm-gray mt-4 block">, Matthew James</cite>
              </blockquote>

              <p className="font-sans text-lg text-charcoal leading-relaxed">
                Each painting carries a touch of spontaneity and wit, often revealing its story only after it's finished. The result is a body of work that feels alive, human, and slightly unpredictable, much like the artist himself.
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
              The Process
            </h2>
            <p className="font-sans text-lg text-warm-gray">
              Spontaneous creation guided by intuition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cream font-serif text-2xl font-bold">1</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                Start Without Knowing
              </h3>
              <p className="font-sans text-warm-gray">
                Each painting begins without a predetermined outcome, allowing the process to guide the creation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cream font-serif text-2xl font-bold">2</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                Follow the Colour
              </h3>
              <p className="font-sans text-warm-gray">
                Bold colours and loose forms emerge naturally, revealing the story as the painting develops.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cream font-serif text-2xl font-bold">3</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-3">
                Reveal the Story
              </h3>
              <p className="font-sans text-warm-gray">
                The true meaning and narrative often becomes clear only after the work is complete.
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
                Inspired by Bergen
              </h2>
              <p className="font-sans text-lg text-warm-gray leading-relaxed mb-6">
                Bergen, Norway serves as both home and muse for Matthew James. The city's dramatic landscapes, 
                ever-changing weather, and vibrant cultural scene provide endless inspiration for his work.
              </p>
              <p className="font-sans text-lg text-warm-gray leading-relaxed">
                Much like his paintings, Bergen is alive, human, and slightly unpredictable, a perfect 
                match for an artist who embraces spontaneity and follows where the colour leads.
              </p>
            </div>
            
            <div className="bg-warm-gray/10 p-8 text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/images/profile.png"
                  alt="Matthew James - Artist Portrait"
                  fill
                  className="object-cover rounded-full"
                  sizes="192px"
                  priority
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
                Matthew James
              </h3>
              <p className="font-sans text-warm-gray mb-4">
                English artist living in Bergen, Norway
              </p>
              <div className="space-y-2 text-sm text-warm-gray">
                <p>Modern Expressionism</p>
                <p>Bold Colour & Loose Form</p>
                <p>Spontaneous Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-warm-gray/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal mb-6">
            Explore the Collection
          </h2>
          <p className="font-sans text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
            Discover the spontaneous beauty and honest expression in Matthew James's artwork collection.
          </p>
          <a 
            href="/" 
            className="btn-primary inline-block"
          >
            View Gallery
          </a>
        </div>
      </section>
    </div>
  )
}
