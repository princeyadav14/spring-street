'use client'
import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

const reasons = [
  {
    number: '01',
    title: 'Global Diversification',
    description: 'Access institutional-grade portfolios across world markets — not just one home country. Capture growth from the US, Europe, Asia-Pacific and beyond.',
    stat: '195+',
    statLabel: 'Countries in global markets',
    detail: 'Spread your wealth across the world\'s fastest growing economies and most innovative companies.',
  },
  {
    number: '02',
    title: 'Tax Optimised',
    description: 'Strategies designed around local tax regulations, so the gross return you see is closer to net. We handle the complexity so you don\'t have to.',
    stat: '25%',
    statLabel: 'Typical tax drag eliminated',
    detail: 'We account for DTAA benefits and LRS regulations to maximize your actual take-home returns.',
  },
  {
    number: '03',
    title: 'Long-term Growth',
    description: 'Build wealth for generations with proven ETF strategies, rebalanced annually on your behalf. Discipline is the edge.',
    stat: '16.6%',
    statLabel: 'CAGR since inception',
    detail: 'Our systematic approach removes emotion from investing — just consistent, compounding returns.',
  },
]

export default function WhyGlobal() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-32" style={{ backgroundColor: '#12151f' }}>
      <div className="max-w-7xl mx-auto px-6">

        <AnimatedSection className="mb-16">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
            Why Spring Street
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
            Investing without borders.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — Clickable tabs */}
          <div className="flex flex-col gap-2">
            {reasons.map((reason, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="cursor-pointer rounded-2xl p-6 transition-all duration-300"
                style={{
                  backgroundColor: active === i ? 'rgba(37,99,235,0.15)' : 'rgba(255,255,255,0.03)',
                  border: active === i ? '1px solid rgba(37,99,235,0.4)' : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-mono" style={{ color: active === i ? '#60a5fa' : 'rgba(255,255,255,0.2)' }}>
                    {reason.number}
                  </span>
                  <h3 className="font-semibold" style={{ color: active === i ? 'white' : 'rgba(255,255,255,0.5)' }}>
                    {reason.title}
                  </h3>
                </div>
                {active === i && (
                  <p className="text-sm leading-relaxed ml-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {reason.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right — Active stat display */}
          <AnimatedSection>
            <div className="rounded-2xl p-10 text-center" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div className="text-7xl md:text-8xl font-bold mb-4" style={{
                background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {reasons[active].stat}
              </div>
              <div className="text-white font-medium text-xl mb-6">
                {reasons[active].statLabel}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {reasons[active].detail}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}