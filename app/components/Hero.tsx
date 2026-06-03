'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#12151f' }}>
      
      {/* Background grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{
       background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)'
      }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ backgroundColor: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-sm">Early Access · IFSCA Regulated</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6"
        >
          Wealth now has a{' '}
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 50%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            global benchmark.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Institutional-grade global portfolios for Indian investors.
          Systematic. Tax-optimised. Built to compound.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <Link href="/contact"
            className="font-medium px-8 py-3.5 rounded-full text-sm transition-all duration-200 text-white"
            style={{ backgroundColor: '#2563eb' }}
          >
            Request access →
          </Link>
          <Link href="/products"
            className="font-medium px-8 py-3.5 rounded-full text-sm transition-all duration-200 text-white"
            style={{ border: '1px solid rgba(255,255,255,0.2)' }}
          >
            View products
          </Link>
        </motion.div>

        {/* Floating Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto max-w-2xl rounded-2xl overflow-hidden"
          style={{
            backgroundColor: '#1e2235',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
          }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white text-sm font-medium">Global Growth Prisma</span>
            </div>
            <span className="text-green-400 text-sm font-medium">+16.62% CAGR</span>
          </div>

          {/* Card Body */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Portfolio Value</div>
                <div className="text-white font-bold text-xl">₹24,85,000</div>
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Total Return</div>
                <div className="text-green-400 font-bold text-xl">+₹4,85,000</div>
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>YTD</div>
                <div className="text-green-400 font-bold text-xl">+10.0%</div>
              </div>
            </div>

            {/* Fake chart bars */}
            <div className="flex items-end gap-1 h-16">
              {[40, 55, 45, 60, 50, 70, 65, 80, 72, 85, 78, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 11 ? '#2563eb' : 'rgba(37,99,235,0.3)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <div className="flex gap-3">
              {['North America 40%', 'Asia-Pacific 30%', 'Europe 15%'].map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Since Jan 2020</span>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-8 mt-12 pb-12 text-sm"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          <span>IFSCA Regulated</span>
          <span>·</span>
          <span>SIPC $500K Protected</span>
          <span>·</span>
          <span>AES-256 Encrypted</span>
        </motion.div>

      </div>
    </section>
  )
}