'use client'
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

      {/* Story — premium cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div
            className="rounded-2xl p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.08) 100%)',
              border: '1px solid rgba(37,99,235,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = '0 20px 60px rgba(37,99,235,0.2)'
              el.style.borderColor = 'rgba(37,99,235,0.4)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
              el.style.borderColor = 'rgba(37,99,235,0.2)'
            }}
          >
            {/* Decorative glow */}
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 160, height: 160, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <p className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: '#60a5fa' }}>The Story</p>
            <p className="text-xl leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
              "The name Spring Street is inspired by our founder's first US address in Atlanta. It marked the beginning of his global journey — now reimagined for every Indian investor."
            </p>
          </div>

          <div
            className="rounded-2xl p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(37,99,235,0.08) 100%)',
              border: '1px solid rgba(16,185,129,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = '0 20px 60px rgba(16,185,129,0.15)'
              el.style.borderColor = 'rgba(16,185,129,0.4)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
              el.style.borderColor = 'rgba(16,185,129,0.2)'
            }}
          >
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 160, height: 160, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <p className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: '#10b981' }}>Our Mission</p>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We combine deep global markets expertise and quantitative research with thoughtful product design to build trusted, intuitive investing experiences for Indian investors.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>What We Believe</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl font-bold text-white mb-12">Our Core Beliefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: '01',
              icon: '🌐',
              title: 'Global by Design',
              description: 'Wealth without borders. We capture growth from the world\'s leading innovators and resilient economies to truly diversify your portfolio.',
            },
            {
              number: '02',
              icon: '⚙️',
              title: 'Data-Driven at the Core',
              description: 'Evidence over intuition. We rely on advanced quantitative frameworks to drive every investment decision.',
            },
            {
              number: '03',
              icon: '✦',
              title: 'Curated for Clarity',
              description: 'We bring clarity over the complete investment stack from remittance, portfolio management to tax planning and reporting.',
            },
          ].map((belief, i) => (
            <div
              key={i}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-6px)'
                el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'
                el.style.borderColor = 'rgba(37,99,235,0.3)'
                el.style.backgroundColor = 'rgba(37,99,235,0.06)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.backgroundColor = 'rgba(255,255,255,0.04)'
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-xs font-mono font-semibold" style={{ color: '#60a5fa' }}>{belief.number}</div>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  backgroundColor: 'rgba(37,99,235,0.15)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18
                }}>{belief.icon}</div>
              </div>
              <div className="text-white font-bold text-xl mb-3">{belief.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{belief.description}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}