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

      {/* Contact content - Light background */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left - Contact info */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl p-6 transition-all hover:-translate-y-1" style={{
              backgroundColor: 'white',
              border: '1px solid rgba(37,99,235,0.1)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.06)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#2563eb' }}>Email us</div>
              <div className="font-semibold text-lg mb-1" style={{ color: '#0f172a' }}>hello@springstreet.in</div>
              <div className="text-sm" style={{ color: '#64748b' }}>We reply within 24 hours</div>
            </div>

            <div className="rounded-2xl p-6 transition-all hover:-translate-y-1" style={{
              backgroundColor: 'white',
              border: '1px solid rgba(37,99,235,0.1)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.06)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#2563eb' }}>Call us</div>
              <div className="font-semibold text-lg mb-1" style={{ color: '#0f172a' }}>+91 79 0189 7503</div>
              <div className="text-sm" style={{ color: '#64748b' }}>Mon–Sun, whenever you want</div>
            </div>

            <div className="rounded-2xl p-6 transition-all hover:-translate-y-1" style={{
              backgroundColor: 'white',
              border: '1px solid rgba(37,99,235,0.1)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.06)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#2563eb' }}>Visit us</div>
              <div className="font-semibold text-lg mb-1" style={{ color: '#0f172a' }}>VIOS Tower, Wadala</div>
              <div className="text-sm" style={{ color: '#64748b' }}>Mumbai, MH-400037, India</div>
            </div>

            <div className="rounded-2xl p-6" style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%)',
              border: '1px solid rgba(37,99,235,0.15)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.06)'
            }}>
              <div className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#2563eb' }}>Common questions</div>
              <div className="font-semibold mb-2" style={{ color: '#0f172a' }}>Looking for quick answers?</div>
              <div className="text-sm mb-4" style={{ color: '#64748b' }}>Check our FAQ for answers about Prisma, GIFT City, funding, taxes, and getting started.</div>
              <a href="/faq" className="text-sm font-medium hover:underline" style={{ color: '#2563eb' }}>
                Visit FAQ →
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl p-8" style={{
            backgroundColor: 'white',
            border: '1px solid rgba(37,99,235,0.1)',
            boxShadow: '0 4px 24px rgba(37,99,235,0.06)'
          }}>
            <div className="text-xs uppercase tracking-widest mb-6 font-medium" style={{ color: '#2563eb' }}>Send us a message</div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Your name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full px-4 py-3 text-sm focus:outline-none rounded-xl transition-all"
                    style={{
                      backgroundColor: '#f8faff',
                      border: '1px solid rgba(37,99,235,0.15)',
                      color: '#0f172a'
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 text-sm focus:outline-none rounded-xl transition-all"
                    style={{
                      backgroundColor: '#f8faff',
                      border: '1px solid rgba(37,99,235,0.15)',
                      color: '#0f172a'
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Phone (optional)</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 text-sm focus:outline-none rounded-xl transition-all"
                  style={{
                    backgroundColor: '#f8faff',
                    border: '1px solid rgba(37,99,235,0.15)',
                    color: '#0f172a'
                  }}
                />
              </div>
              <div>
                <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your investment goals..."
                  className="w-full px-4 py-3 text-sm focus:outline-none resize-none rounded-xl transition-all"
                  style={{
                    backgroundColor: '#f8faff',
                    border: '1px solid rgba(37,99,235,0.15)',
                    color: '#0f172a'
                  }}
                />
              </div>
              <button
                className="w-full font-medium py-3.5 rounded-full text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  boxShadow: '0 4px 15px rgba(37,99,235,0.3)'
                }}
              >
                Send message →
              </button>
              <p className="text-xs text-center" style={{ color: '#94a3b8' }}>
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