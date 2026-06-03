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
  },
  {
    number: 5,
    suffix: '%',
    label: 'Share of Global Economy',
    description: 'India represents only ~5% of the global economy. Explore the remaining 95% of opportunity.',
    icon: '📊',
  },
  {
    number: 2,
    suffix: 'x',
    label: 'Superior Growth',
    description: 'US markets have historically delivered ~2x returns compared to NIFTY50 over the last decade.',
    icon: '📈',
  },
]

function AnimatedNumber({ number, suffix }: { number: number; suffix: string }) {
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
    <div ref={ref} className="text-5xl md:text-6xl font-bold" style={{ color: '#1e3a8a' }}>
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
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0f172a' }}>
            Why your wealth needs the world.
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="rounded-2xl p-8 h-full" style={{
                backgroundColor: 'white',
                border: '1px solid rgba(37,99,235,0.1)',
                boxShadow: '0 4px 24px rgba(37,99,235,0.06)'
              }}>
                <div className="text-3xl mb-4">{stat.icon}</div>
                <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                <div className="text-lg font-semibold mt-2 mb-3" style={{ color: '#0f172a' }}>
                  {stat.label}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                  {stat.description}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}