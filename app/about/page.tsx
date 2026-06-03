import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#12151f' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>About Us</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
          Global Stage for{' '}
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Indian Capital.
          </span>
        </h1>
        <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Spring Street is a systematically driven investment management platform that brings clarity and expertise to global investing.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="rounded-2xl p-8" style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#60a5fa' }}>The Story</p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              The name "Spring Street" is inspired by our founder's first US address in Atlanta. It marked the beginning of his global journey — now reimagined for every Indian investor.
            </p>
          </div>
          <div className="rounded-2xl p-8" style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#60a5fa' }}>Our Mission</p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We combine deep global markets expertise and quantitative research with thoughtful product design to build trusted, intuitive investing experiences for Indian investors.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-12" style={{ color: '#60a5fa' }}>What We Believe</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: '01',
              title: 'Global by Design',
              description: 'Wealth without borders. We capture growth from the world\'s leading innovators and resilient economies to truly diversify your portfolio.',
            },
            {
              number: '02',
              title: 'Data-Driven at the Core',
              description: 'Evidence over intuition. We rely on advanced quantitative frameworks to drive every investment decision.',
            },
            {
              number: '03',
              title: 'Curated for Clarity',
              description: 'We bring clarity over the complete investment stack from remittance, portfolio management to tax planning and reporting.',
            },
          ].map((belief, i) => (
            <div key={i} className="rounded-2xl p-8 hover:translate-y-[-4px] transition-all duration-300" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div className="text-xs font-mono mb-4" style={{ color: '#60a5fa' }}>{belief.number}</div>
              <div className="text-white font-semibold text-xl mb-3">{belief.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{belief.description}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}