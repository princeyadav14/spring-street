'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  { q: 'What is a Prisma?', a: 'A Prisma is a globally diversified portfolio of US-listed ETFs, built on a proprietary methodology. Each Prisma targets a specific risk-return profile and is rebalanced periodically to maintain target allocations.' },
  { q: 'How do I fund my account?', a: 'You fund your account via the Liberalised Remittance Scheme (LRS). Spring Street integrates with your Indian bank to transfer up to USD 250,000 per year into your global investment account.' },
  { q: 'What are the fees?', a: 'Spring Street charges 1.25% per annum on assets under management. There are no entry or exit loads, no lock-in periods, and no hidden charges. You can switch or cancel anytime.' },
  { q: 'Is my money safe?', a: 'Your investments are held in your own brokerage account with a US-registered custodian. Spring Street never holds your funds directly. All ETFs are exchange-listed and highly liquid.' },
  { q: 'How are taxes handled?', a: 'Spring Street provides detailed tax reports for filing under Indian tax law. The strategy is structured to minimise tax drag through careful rebalancing and DTAA benefits where applicable.' },
  { q: 'What is the minimum investment?', a: 'There is no strict minimum, but we recommend starting with at least USD 5,000 to benefit from full diversification across all ETFs in a Prisma.' },
  { q: 'Can I withdraw anytime?', a: 'Yes. There are no lock-in periods. You can redeem your investments at any time. Proceeds are repatriated to your Indian bank account within a few business days.' },
  { q: 'What is GIFT City and does Spring Street use it?', a: "GIFT City is India's international financial services centre. Spring Street currently operates through the LRS route. We are actively exploring GIFT City structures for future product offerings." },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(37,99,235,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#0f172a', lineHeight: 1.4 }}>{q}</span>
        <span style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, backgroundColor: open ? '#2563eb' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', fontSize: 16, color: open ? 'white' : '#64748b' }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.8, paddingBottom: 20, marginTop: -4 }}>{a}</p>
      )}
    </div>
  )
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#12151f' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>Contact</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-tight mb-6">
          Let's talk about your{' '}
          <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            global journey.
          </span>
        </h1>
        <p className="text-xl max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Have questions about global investing? We're here to help.
        </p>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left - Contact info */}
          <div className="flex flex-col gap-5">
            {[
              { label: 'Email us', value: 'hello@springstreet.in', sub: 'We reply within 24 hours' },
              { label: 'Call us', value: '+91 79 0189 7503', sub: 'Mon–Sun, whenever you want' },
              { label: 'Visit us', value: 'VIOS Tower, Wadala', sub: 'Mumbai, MH-400037, India' },
            ].map(item => (
              <div key={item.label}
                className="rounded-2xl p-6"
                style={{ backgroundColor: 'white', border: '1px solid rgba(37,99,235,0.1)', boxShadow: '0 4px 20px rgba(37,99,235,0.06)', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(37,99,235,0.12)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(37,99,235,0.06)'
                }}
              >
                <div className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#2563eb' }}>{item.label}</div>
                <div className="font-semibold text-lg mb-1" style={{ color: '#0f172a' }}>{item.value}</div>
                <div className="text-sm" style={{ color: '#64748b' }}>{item.sub}</div>
              </div>
            ))}

            {/* FAQ card — single location, with both buttons */}
            <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%)', border: '1px solid rgba(37,99,235,0.15)', boxShadow: '0 4px 20px rgba(37,99,235,0.06)' }}>
              <div className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#2563eb' }}>FAQ</div>
              <div className="font-semibold mb-2" style={{ color: '#0f172a' }}>Common Questions</div>
              <div className="text-sm mb-5" style={{ color: '#64748b' }}>Looking for quick answers? Check our FAQ for answers about Prisma, GIFT City, funding, taxes, and getting started.</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href="/faq"
                  style={{ fontSize: 13, fontWeight: 600, padding: '9px 18px', borderRadius: 999, backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1d4ed8'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2563eb'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                  }}
                >
                  Visit Help Center
                </a>
                <a href="/contact"
                  style={{ fontSize: 13, fontWeight: 600, padding: '9px 18px', borderRadius: 999, border: '1px solid rgba(37,99,235,0.3)', color: '#2563eb', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(37,99,235,0.06)'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                  }}
                >
                  Request access
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'white', border: '1px solid rgba(37,99,235,0.1)', boxShadow: '0 4px 24px rgba(37,99,235,0.06)' }}>
            <div className="text-xs uppercase tracking-widest mb-6 font-medium" style={{ color: '#2563eb' }}>Send us a message</div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Your name</label>
                  <input type="text" placeholder="Rahul Sharma" className="w-full px-4 py-3 text-sm focus:outline-none rounded-xl transition-all"
                    style={{ backgroundColor: '#f8faff', border: '1px solid rgba(37,99,235,0.15)', color: '#0f172a' }}
                    onFocus={e => (e.currentTarget.style.border = '1px solid #2563eb')}
                    onBlur={e => (e.currentTarget.style.border = '1px solid rgba(37,99,235,0.15)')} />
                </div>
                <div>
                  <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 text-sm focus:outline-none rounded-xl transition-all"
                    style={{ backgroundColor: '#f8faff', border: '1px solid rgba(37,99,235,0.15)', color: '#0f172a' }}
                    onFocus={e => (e.currentTarget.style.border = '1px solid #2563eb')}
                    onBlur={e => (e.currentTarget.style.border = '1px solid rgba(37,99,235,0.15)')} />
                </div>
              </div>
              <div>
                <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Phone (optional)</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 text-sm focus:outline-none rounded-xl transition-all"
                  style={{ backgroundColor: '#f8faff', border: '1px solid rgba(37,99,235,0.15)', color: '#0f172a' }}
                  onFocus={e => (e.currentTarget.style.border = '1px solid #2563eb')}
                  onBlur={e => (e.currentTarget.style.border = '1px solid rgba(37,99,235,0.15)')} />
              </div>
              <div>
                <label className="text-xs mb-2 block font-medium" style={{ color: '#475569' }}>Message</label>
                <textarea rows={5} placeholder="Tell us about your investment goals..." className="w-full px-4 py-3 text-sm focus:outline-none resize-none rounded-xl transition-all"
                  style={{ backgroundColor: '#f8faff', border: '1px solid rgba(37,99,235,0.15)', color: '#0f172a' }}
                  onFocus={e => (e.currentTarget.style.border = '1px solid #2563eb')}
                  onBlur={e => (e.currentTarget.style.border = '1px solid rgba(37,99,235,0.15)')} />
              </div>
              <button className="w-full font-medium py-3.5 rounded-full text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', boxShadow: '0 4px 15px rgba(37,99,235,0.3)', transition: 'all 0.2s' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 25px rgba(37,99,235,0.45)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(37,99,235,0.3)'
                }}
              >
                Send message →
              </button>
              <p className="text-xs text-center" style={{ color: '#94a3b8' }}>By submitting, you agree to our Privacy Policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion — single clean section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-3xl mx-auto" style={{ borderTop: '1px solid rgba(37,99,235,0.1)', paddingTop: 48 }}>
          <p className="text-sm uppercase tracking-widest mb-4 font-medium" style={{ color: '#2563eb' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#0f172a' }} className="text-4xl font-bold mb-3">Common Questions</h2>
          <p className="text-base mb-10" style={{ color: '#64748b' }}>Everything you need to know about global investing with Spring Street.</p>
          <div>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}