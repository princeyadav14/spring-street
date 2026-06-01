import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-semibold text-lg mb-4">Spring Street</div>
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Global Stage for Indian Capital.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all text-xs">
                X
              </a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all text-xs">
                in
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-white/50 text-xs uppercase tracking-widest mb-4">Company</div>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/about" className="text-white/40 hover:text-white text-sm transition-colors">About Us</Link>
              <Link href="/products" className="text-white/40 hover:text-white text-sm transition-colors">Products</Link>
              <Link href="/contact" className="text-white/40 hover:text-white text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white/50 text-xs uppercase tracking-widest mb-4">Contact</div>
            <div className="flex flex-col gap-3">
              <span className="text-white/40 text-sm">hello@springstreet.in</span>
              <span className="text-white/40 text-sm">+91 79 0189 7503</span>
              <span className="text-white/40 text-sm leading-relaxed">VIOS Tower, Wadala<br />Mumbai, MH-400037</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-white/50 text-xs uppercase tracking-widest mb-4">Legal</div>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms & Conditions</Link>
              <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Risk Disclosure</Link>
              <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Grievance Redressal</Link>
            </div>
          </div>

        </div>

        {/* Bottom section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2026 Spring Street. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center md:text-right max-w-xl">
            All investing involves risk, including loss of capital. Past performance does not guarantee future performance. Historical and expected returns are for illustrative purposes only.
          </p>
        </div>

      </div>
    </footer>
  )
}