'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0d18' }}>

      {/* CTA Banner */}
      <div className="py-20 px-6" style={{ backgroundColor: '#12151f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto rounded-2xl p-12 text-center" style={{
          background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.2) 100%)',
          border: '1px solid rgba(37,99,235,0.2)'
        }}>
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>Get Started</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start your global journey.
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Free to start. No lock-in. Cancel or switch strategies anytime.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="font-medium px-8 py-3.5 rounded-full text-sm text-white hover:opacity-90 hover:-translate-y-0.5 transition-all" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', boxShadow: '0 4px 15px rgba(37,99,235,0.4)' }}>
              Request access →
            </Link>
            <Link href="/products" className="font-medium px-8 py-3.5 rounded-full text-sm text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              View products
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <img src="/springstreet-wordmark.png" alt="Spring Street" className="h-8 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Global Stage for Indian Capital.
            </p>
            <div className="flex gap-3">
              {/* Twitter/X */}
              <a href="https://twitter.com" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-all" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.7">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-all" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.7">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>Company</div>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>Home</Link>
              <Link href="/about" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>About Us</Link>
              <Link href="/products" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>Products</Link>
              <Link href="/contact" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</div>
            <div className="flex flex-col gap-3">
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>hello@springstreet.in</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>+91 79 0189 7503</span>
              <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>VIOS Tower, Wadala<br />Mumbai, MH-400037</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>Legal</div>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>Privacy Policy</Link>
              <Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>Terms & Conditions</Link>
              <Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>Risk Disclosure</Link>
              <Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>Grievance Redressal</Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 Spring Street. All rights reserved.</p>
          <p className="text-xs text-center md:text-right max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            All investing involves risk, including loss of capital. Past performance does not guarantee future performance.
          </p>
        </div>
      </div>

    </footer>
  )
}