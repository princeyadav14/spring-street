import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#12151f' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>Contact</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-tight mb-6">
          Let's talk about your{' '}
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            global journey.
          </span>
        </h1>
        <p className="text-xl max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Have questions about global investing? We're here to help.
        </p>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left - Contact info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-6 hover:border-white/20 transition-colors" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#60a5fa' }}>Email us</div>
              <div className="text-white font-medium text-lg mb-1">hello@springstreet.in</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>We reply within 24 hours</div>
            </div>
            <div className="rounded-2xl p-6 transition-colors" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#60a5fa' }}>Call us</div>
              <div className="text-white font-medium text-lg mb-1">+91 79 0189 7503</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Mon–Sun, whenever you want</div>
            </div>
            <div className="rounded-2xl p-6 transition-colors" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#60a5fa' }}>Visit us</div>
              <div className="text-white font-medium text-lg mb-1">VIOS Tower, Wadala</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Mumbai, MH-400037, India</div>
            </div>
            <div className="rounded-2xl p-6" style={{
              backgroundColor: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.2)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#60a5fa' }}>Common questions</div>
              <div className="text-white font-medium mb-2">Looking for quick answers?</div>
              <div className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Check our FAQ for answers about Prisma, GIFT City, funding, taxes, and getting started.</div>
              <a href="/faq" style={{ color: '#60a5fa' }} className="text-sm hover:underline">
                Visit FAQ →
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl p-8" style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div className="text-xs uppercase tracking-widest mb-6" style={{ color: '#60a5fa' }}>Send us a message</div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>Your name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full px-4 py-3 text-white text-sm focus:outline-none transition-colors rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white'
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 text-white text-sm focus:outline-none transition-colors rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>Phone (optional)</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white'
                  }}
                />
              </div>
              <div>
                <label className="text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your investment goals..."
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors resize-none rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white'
                  }}
                />
              </div>
              <button className="w-full font-medium py-3.5 rounded-full text-white text-sm" style={{ backgroundColor: '#2563eb' }}>
                Send message →
              </button>
              <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>
                By submitting, you agree to our Privacy Policy
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}