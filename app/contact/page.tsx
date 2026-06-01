 import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-4">Contact</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-tight mb-6">
          Let's talk about your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            global journey.
          </span>
        </h1>
        <p className="text-white/40 text-xl max-w-xl leading-relaxed">
          Have questions about global investing? We're here to help.
        </p>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left - Contact info */}
          <div className="flex flex-col gap-6">
            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-3">Email us</div>
              <div className="text-white font-medium text-lg mb-1">hello@springstreet.in</div>
              <div className="text-white/40 text-sm">We reply within 24 hours</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-3">Call us</div>
              <div className="text-white font-medium text-lg mb-1">+91 79 0189 7503</div>
              <div className="text-white/40 text-sm">Mon–Sun, whenever you want</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-3">Visit us</div>
              <div className="text-white font-medium text-lg mb-1">VIOS Tower, Wadala</div>
              <div className="text-white/40 text-sm">Mumbai, MH-400037, India</div>
            </div>

            {/* FAQ box */}
            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-3">Common questions</div>
              <div className="text-white font-medium mb-2">Looking for quick answers?</div>
              <div className="text-white/40 text-sm mb-4">Check our FAQ for answers about Prisma, GIFT City, funding, taxes, and getting started.</div>
              <a href="/faq" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                Visit FAQ →
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-white/30 text-xs uppercase tracking-widest mb-6">Send us a message</div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs mb-2 block">Your name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs mb-2 block">Phone (optional)</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs mb-2 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your investment goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-white text-black font-medium py-3.5 rounded-full hover:bg-white/90 transition-colors text-sm">
                Send message →
              </button>
              <p className="text-white/20 text-xs text-center">
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
