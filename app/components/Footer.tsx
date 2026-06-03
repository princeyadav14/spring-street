import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d1021' }}>

      {/* CTA Banner */}
      <div className="py-20 px-6" style={{ backgroundColor: '#12151f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto rounded-2xl p-12 text-center" style={{
          background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.2) 100%)',
          border: '1px solid rgba(37,99,235,0.2)'
        }}>
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
            Get Started
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start your global journey.
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Free to start. No lock-in. Cancel or switch strategies anytime.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="font-medium px-8 py-3.5 rounded-full text-sm text-white transition-colors" style={{ backgroundColor: '#2563eb' }}>
              Request access →
            </Link>
            <Link href="/products" className="font-medium px-8 py-3.5 rounded-full text-sm text-white transition-colors" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              View products
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-semibold text-lg mb-4">Spring Street</div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Global Stage for Indian Capital.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com" className="w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>X</a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>in</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Company</div>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
              <Link href="/about" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>About Us</Link>
              <Link href="/products" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Products</Link>
              <Link href="/contact" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Contact</div>
            <div className="flex flex-col gap-3">
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>hello@springstreet.in</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>+91 79 0189 7503</span>
              <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>VIOS Tower, Wadala<br />Mumbai, MH-400037</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Legal</div>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Privacy Policy</Link>
              <Link href="#" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Terms & Conditions</Link>
              <Link href="#" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Risk Disclosure</Link>
              <Link href="#" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Grievance Redressal</Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2026 Spring Street. All rights reserved.
          </p>
          <p className="text-xs text-center md:text-right max-w-xl" style={{ color: 'rgba(255,255,255,0.2)' }}>
            All investing involves risk, including loss of capital. Past performance does not guarantee future performance.
          </p>
        </div>
      </div>

    </footer>
  )
}