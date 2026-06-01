'use client'
import { useEffect, useRef, useState } from 'react'
import AnimatedSection from './AnimatedSection'

const stats = [
  {
    number: 99,
    suffix: '%',
    label: 'Domestic Concentration',
    description: 'Your portfolio is likely heavily weighted towards a single economy.',
  },
  {
    number: 5,
    suffix: '%',
    label: 'Share of Global Economy',
    description: 'India represents only ~5% of the global economy. Explore the remaining 95%.',
  },
  {
    number: 2,
    suffix: 'x',
    label: 'Superior Growth',
    description: 'US markets have historically delivered ~2x returns compared to NIFTY50.',
  },
]

function AnimatedNumber({ number, suffix }: { number: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry?.isIntersecting && !started) {
          setStarted(true)
        }
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
    <div ref={ref} className="text-6xl md:text-7xl font-bold text-white">
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-black py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-white/30 text-sm uppercase tracking-widest mb-16 text-center">
            The case for global investing
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-black p-12 flex flex-col gap-4">
                <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                <div className="text-white font-medium text-lg">{stat.label}</div>
                <div className="text-white/40 text-sm leading-relaxed">{stat.description}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}