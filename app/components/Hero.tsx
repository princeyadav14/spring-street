'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#12151f' }}>

      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-40 md:pt-48">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest mb-8"
          style={{ color: '#60a5fa' }}
        >
          Global Stage for Indian Capital
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-12"
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

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-16 h-px mx-auto mb-12 origin-center"
          style={{ backgroundColor: 'rgba(37,99,235,0.5)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Your wealth was concentrated in a single country — one currency, one business cycle, one regime.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          It's time to align your wealth with the world. Global portfolios, designed to provide systematic exposure across geographies, factors, and asset classes.
        </motion.p>

        {/* CTA Buttons — Get Started first, Request access second */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/login"
            className="font-medium px-8 py-3.5 rounded-full text-sm text-white"
            style={{
              backgroundColor: '#2563eb',
              boxShadow: '0 4px 15px rgba(37,99,235,0.4)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = '#1d4ed8'
              el.style.boxShadow = '0 6px 20px rgba(37,99,235,0.6)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = '#2563eb'
              el.style.boxShadow = '0 4px 15px rgba(37,99,235,0.4)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Get Started with invite code
          </Link>
          <Link
            href="/contact"
            className="font-medium px-8 py-3.5 rounded-full text-sm text-white"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = 'rgba(255,255,255,0.08)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = 'transparent'
              el.style.transform = 'translateY(0)'
            }}
          >
            Request access
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
          />
        </motion.div>

      </div>
    </section>
  )
}