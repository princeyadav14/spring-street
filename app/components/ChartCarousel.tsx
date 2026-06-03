'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function generateRealisticData(
  keys: string[],
  startValues: number[],
  endValues: number[],
  points: number,
  volatility: number = 0.03
) {
  const data: Record<string, number>[] = []
  const current: number[] = [...startValues]
  for (let i = 0; i < points; i++) {
    const t = i / (points - 1)
    const point: Record<string, number> = {}
    keys.forEach((key, idx) => {
      const start = startValues[idx] ?? 0
      const end = endValues[idx] ?? 0
      const cur = current[idx] ?? 0
      const target = start + (end - start) * t
      const noise = (Math.random() - 0.48) * target * volatility
      current[idx] = cur * 0.85 + target * 0.15 + noise
      point[key] = Math.round(Math.max(10, current[idx] ?? 0) * 100) / 100
    })
    data.push(point)
  }
  return data
}

const usData = generateRealisticData(['a', 'b', 'c'], [100, 100, 100], [2800, 1400, 580], 100, 0.04)
const divData = generateRealisticData(['a', 'b', 'c'], [100, 100, 100], [225, 138, 125], 80, 0.03)
const goldData = generateRealisticData(['a', 'b'], [100, 100], [285, 230], 60, 0.025)

function labelData(data: Record<string, number>[], xLabels: string[]) {
  const total = data.length
  return data.map((d, i) => {
    const labelIndex = Math.round((i / (total - 1)) * (xLabels.length - 1))
    const isLabelPoint = xLabels.some((_, li) =>
      Math.round((li / (xLabels.length - 1)) * (total - 1)) === i
    )
    return { ...d, x: isLabelPoint ? xLabels[labelIndex] : '' }
  })
}

const slides = [
  {
    tag: 'GLOBAL TECH VS INDIAN MARKETS',
    title: 'The US Advantage.',
    description: 'Global technology companies are driving the future. By limiting yourself to domestic markets, you miss out on this generational growth opportunity.',
    icon: '📈',
    data: labelData(usData, ['2011', '2015', '2019', '2023', '2026']),
    lines: [
      { key: 'a', name: 'US Tech (XLK)', color: '#3b82f6' },
      { key: 'b', name: 'S&P 500 (SPY)', color: '#10b981' },
      { key: 'c', name: 'NIFTY 50', color: '#f59e0b' },
    ],
  },
  {
    tag: "DON'T BET ON JUST ONE COUNTRY",
    title: 'Diversification across top economies.',
    description: 'Over the last two years, the two biggest economies after US — China and Germany — delivered over 70% Total Returns.',
    icon: '🌍',
    data: labelData(divData, ['Mar 23', 'Sep 23', 'Mar 24', 'Oct 24', 'Apr 26']),
    lines: [
      { key: 'a', name: 'Germany (DAX)', color: '#10b981' },
      { key: 'b', name: 'India (NIFTY)', color: '#f59e0b' },
      { key: 'c', name: 'China (MCHI)', color: '#ef4444' },
    ],
  },
  {
    tag: 'CASE STUDY: GOLD',
    title: 'The same asset, two different returns.',
    description: 'In July 2024, the Indian government cut import duty on gold from 15% to 6%. This resulted in 25% performance divergence between domestic and global gold.',
    icon: '🥇',
    data: labelData(goldData, ['Mar 24', 'Aug 24', 'Jan 25', 'Jun 25', 'Apr 26']),
    lines: [
      { key: 'a', name: 'GLDM (Global)', color: '#3b82f6' },
      { key: 'b', name: 'GOLDBEES (India)', color: '#f59e0b' },
    ],
  },
]

const DURATION = 6000

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl p-3 text-xs shadow-lg" style={{
        backgroundColor: 'white',
        border: '1px solid rgba(37,99,235,0.15)',
      }}>
        {payload.map((entry: any, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-1 last:mb-0">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: entry.color }} />
            <span style={{ color: '#64748b' }}>{entry.name}:</span>
            <span className="font-bold" style={{ color: '#0f172a' }}>{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function ChartCarousel() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left')
  const [isAnimating, setIsAnimating] = useState(false)
  const [prevHovered, setPrevHovered] = useState(false)
  const [nextHovered, setNextHovered] = useState(false)
  const startTimeRef = useRef(Date.now())
  const pausedProgressRef = useRef(0)
  const rafRef = useRef<number>(0)
  const transitioningRef = useRef(false)

  const goTo = useCallback((index: number, direction: 'left' | 'right' = 'left') => {
    if (transitioningRef.current) return
    transitioningRef.current = true
    setSlideDirection(direction)
    setIsAnimating(true)
    setTimeout(() => {
      setActive(index)
      setProgress(0)
      pausedProgressRef.current = 0
      startTimeRef.current = Date.now()
      setIsAnimating(false)
      transitioningRef.current = false
    }, 350)
  }, [])

  const next = useCallback(() => {
    goTo((active + 1) % slides.length, 'left')
  }, [active, goTo])

  const prev = useCallback(() => {
    goTo((active - 1 + slides.length) % slides.length, 'right')
  }, [active, goTo])

  useEffect(() => {
    const animate = () => {
      if (!isPaused && !transitioningRef.current) {
        const elapsed = Date.now() - startTimeRef.current
        const p = Math.min((elapsed / DURATION) * 100, 100)
        setProgress(p)
        if (p >= 100 && !transitioningRef.current) {
          transitioningRef.current = true
          setSlideDirection('left')
          setIsAnimating(true)
          setTimeout(() => {
            setActive(prev => (prev + 1) % slides.length)
            setProgress(0)
            startTimeRef.current = Date.now()
            setIsAnimating(false)
            transitioningRef.current = false
          }, 350)
        }
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPaused])

  const slide = slides[active]!

  const allValues = slide.data.flatMap(d =>
    slide.lines.map(l => {
      const val = d[l.key]
      return typeof val === 'number' ? val : 0
    }).filter(v => v > 0)
  )
  const minVal = Math.floor(Math.min(...allValues) * 0.95)
  const maxVal = Math.ceil(Math.max(...allValues) * 1.05)

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(40px); }
        }
        .slide-in-left { animation: slideInLeft 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-in-right { animation: slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-out-left { animation: slideOutLeft 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-out-right { animation: slideOutRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      <section className="py-32" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#2563eb' }}>
              Why Global
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{
              fontFamily: "'Playfair Display', serif",
              color: '#0f172a'
            }}>
              The case for global investing is structural.
            </h2>
          </div>

          {/* Card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(37,99,235,0.1)',
              boxShadow: '0 20px 60px rgba(37,99,235,0.1)'
            }}
            onMouseEnter={() => {
              setIsPaused(true)
              pausedProgressRef.current = progress
            }}
            onMouseLeave={() => {
              setIsPaused(false)
              startTimeRef.current = Date.now() - (pausedProgressRef.current / 100) * DURATION
            }}
          >
            {/* Smooth Progress bar using CSS transition */}
            <div style={{ height: '3px', backgroundColor: 'rgba(37,99,235,0.08)', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
                transition: isPaused ? 'none' : 'width 0.1s linear',
              }} />
            </div>

            {/* Content with slide animation */}
            <div
              className={isAnimating
                ? (slideDirection === 'left' ? 'slide-out-left' : 'slide-out-right')
                : (slideDirection === 'left' ? 'slide-in-left' : 'slide-in-right')
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Left panel */}
                <div
                  className="md:col-span-2 p-12 flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(160deg, #f0f6ff 0%, #e8f0fe 40%, #ede9fe 100%)',
                    borderRight: '1px solid rgba(37,99,235,0.06)',
                    minHeight: '560px'
                  }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                        style={{
                          backgroundColor: 'rgba(37,99,235,0.12)',
                          boxShadow: '0 4px 12px rgba(37,99,235,0.15)'
                        }}
                      >
                        {slide.icon}
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#2563eb' }}>
                        {slide.tag}
                      </p>
                    </div>
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#0f172a',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {slide.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
                      {slide.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-10">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i, i > active ? 'left' : 'right')}
                        className="rounded-full"
                        style={{
                          width: active === i ? '24px' : '8px',
                          height: '8px',
                          backgroundColor: active === i ? '#2563eb' : 'rgba(37,99,235,0.25)',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right — Chart */}
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-6 mb-2 flex-wrap">
                      {slide.lines.map((line, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: line.color }} />
                          <span className="text-sm font-medium" style={{ color: '#475569' }}>{line.name}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs mb-6" style={{ color: '#94a3b8' }}>
                      Adjusted Closing Prices Rebased to 100, in INR currency
                    </p>
                  </div>

                  <div className="w-full h-[420px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={slide.data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                        <defs>
                          {slide.lines.map((line) => (
                            <linearGradient key={line.key} id={`g-${line.key}-${active}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={line.color} stopOpacity={0.3} />
                              <stop offset="100%" stopColor={line.color} stopOpacity={0.0} />
                            </linearGradient>
                          ))}
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                        <XAxis
                          dataKey="x"
                          tick={{ fill: '#94a3b8', fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          interval={0}
                        />
                        <YAxis
                          domain={[minVal, maxVal]}
                          tick={{ fill: '#94a3b8', fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          width={55}
                        />
                        <Tooltip
                          content={<CustomTooltip />}
                          cursor={{ stroke: 'rgba(37,99,235,0.15)', strokeWidth: 1 }}
                        />
                        {slide.lines.map((line) => (
                          <Area
                            key={`${line.key}-${active}`}
                            type="monotone"
                            dataKey={line.key}
                            name={line.name}
                            stroke={line.color}
                            strokeWidth={2}
                            fill={`url(#g-${line.key}-${active})`}
                            dot={false}
                            activeDot={{ r: 5, fill: line.color, strokeWidth: 0 }}
                            isAnimationActive={false}
                          />
                        ))}
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              onMouseEnter={() => setPrevHovered(true)}
              onMouseLeave={() => setPrevHovered(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium"
              style={{
                border: prevHovered ? '1px solid #2563eb' : '1px solid rgba(37,99,235,0.25)',
                color: prevHovered ? 'white' : '#2563eb',
                backgroundColor: prevHovered ? '#2563eb' : 'white',
                boxShadow: prevHovered ? '0 4px 20px rgba(37,99,235,0.35)' : '0 2px 8px rgba(37,99,235,0.1)',
                transform: prevHovered ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              ←
            </button>
            <button
              onClick={next}
              onMouseEnter={() => setNextHovered(true)}
              onMouseLeave={() => setNextHovered(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium"
              style={{
                border: nextHovered ? '1px solid #2563eb' : '1px solid rgba(37,99,235,0.25)',
                color: nextHovered ? 'white' : '#2563eb',
                backgroundColor: nextHovered ? '#2563eb' : 'white',
                boxShadow: nextHovered ? '0 4px 20px rgba(37,99,235,0.35)' : '0 2px 8px rgba(37,99,235,0.1)',
                transform: nextHovered ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              →
            </button>
          </div>

        </div>
      </section>
    </>
  )
}