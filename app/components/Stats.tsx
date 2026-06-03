'use client'
import { useEffect, useRef, useState } from 'react'
import AnimatedSection from './AnimatedSection'

const stats = [
  {
    number: 99,
    suffix: '%',
    label: 'Domestic Concentration',
    description: 'Your portfolio is likely heavily weighted towards a single economy. Diversify to safeguard your wealth.',
    icon: '🌍',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    number: 5,
    suffix: '%',
    label: 'Share of Global Economy',
    description: 'India represents only ~5% of the global economy. Explore the remaining 95% of opportunity.',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
  },
  {
    number: 2,
    suffix: 'x',
    label: 'Superior Growth',
    description: 'US markets have historically delivered ~2x returns compared to NIFTY50 over the last decade.',
    icon: '📈',
    gradient: 'linear-gradient(135deg, #059669 0%, #2563eb 100%)',
  },
]

function AnimatedNumber({ number, suffix, gradient }: { number: number; suffix: string; gradient: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry?.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const increment = number / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, number])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold" style={{
      background: gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-32" style={{ backgroundColor: '#f0f4ff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#2563eb' }}>
            The case for global investing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0f172a', fontFamily: "'Playfair Display', serif" }}>
            Why your wealth needs the world.
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(37,99,235,0.1)',
                  boxShadow: '0 4px 24px rgba(37,99,235,0.06)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = '0 20px 50px rgba(37,99,235,0.15)'
                  el.style.border = '1px solid rgba(37,99,235,0.25)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 4px 24px rgba(37,99,235,0.06)'
                  el.style.border = '1px solid rgba(37,99,235,0.1)'
                }}
              >
                {/* Icon with gradient bg */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{
                  background: stat.gradient,
                  boxShadow: '0 4px 12px rgba(37,99,235,0.2)'
                }}>
                  {stat.icon}
                </div>

                <AnimatedNumber number={stat.number} suffix={stat.suffix} gradient={stat.gradient} />

                <div className="text-lg font-semibold mt-2 mb-3" style={{ color: '#0f172a' }}>
                  {stat.label}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                  {stat.description}
                </div>

                {/* Bottom gradient line */}
                <div className="mt-6 h-0.5 rounded-full" style={{ background: stat.gradient, opacity: 0.3 }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}