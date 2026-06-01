 import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-4">About Us</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
          Global Stage for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Indian Capital.
          </span>
        </h1>
        <p className="text-white/40 text-xl max-w-2xl leading-relaxed">
          Spring Street is a systematically driven investment management platform that brings clarity and expertise to global investing.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-white/30 text-sm uppercase tracking-widest mb-6">The Story</p>
            <p className="text-white/60 text-lg leading-relaxed">
              The name "Spring Street" is inspired by our founder's first US address in Atlanta. It marked the beginning of his global journey — now reimagined for every Indian investor.
            </p>
          </div>
          <div>
            <p className="text-white/30 text-sm uppercase tracking-widest mb-6">Our Mission</p>
            <p className="text-white/60 text-lg leading-relaxed">
              We combine deep global markets expertise and quantitative research with thoughtful product design to build trusted, intuitive investing experiences for Indian investors.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-12">What We Believe</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          <div className="bg-black p-10">
            <div className="text-white/20 text-sm font-mono mb-4">01</div>
            <div className="text-white font-semibold text-xl mb-3">Global by Design</div>
            <div className="text-white/40 text-sm leading-relaxed">Wealth without borders. We capture growth from the world's leading innovators and resilient economies to truly diversify your portfolio.</div>
          </div>
          <div className="bg-black p-10">
            <div className="text-white/20 text-sm font-mono mb-4">02</div>
            <div className="text-white font-semibold text-xl mb-3">Data-Driven at the Core</div>
            <div className="text-white/40 text-sm leading-relaxed">Evidence over intuition. We rely on advanced quantitative frameworks to drive every investment decision.</div>
          </div>
          <div className="bg-black p-10">
            <div className="text-white/20 text-sm font-mono mb-4">03</div>
            <div className="text-white font-semibold text-xl mb-3">Curated for Clarity</div>
            <div className="text-white/40 text-sm leading-relaxed">We bring clarity over the complete investment stack from remittance, portfolio management to tax planning and reporting.</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
