'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6" style={{ backgroundColor: '#0d1021' }}>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Problem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-10"
            style={{
              backgroundColor: 'rgba(239,68,68,0.06)',
              border: '1px solid rgba(239,68,68,0.15)'
            }}
          >
            <div className="text-4xl mb-6">🇮🇳</div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#ef4444' }}>
              The old way
            </p>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              One country. One currency. One regime.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Your wealth was concentrated in a single country with a benchmark that captured a narrow opportunity set. India is only 5% of the global economy.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {['Single market risk', 'INR currency exposure', 'Limited growth universe'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl p-10"
            style={{
              backgroundColor: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.2)'
            }}
          >
            <div className="text-4xl mb-6">🌍</div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
              The Spring Street way
            </p>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Global portfolios. Built to compound.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Systematic exposure across geographies, factors, and asset classes. Align your wealth with the world — diversify risk, protect against currency volatility.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {['195+ countries exposure', 'Multi-currency diversification', 'Institutional-grade ETFs'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}