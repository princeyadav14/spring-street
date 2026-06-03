'use client'
import Link from 'next/link'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import AnimatedSection from './AnimatedSection'

const products = [
  {
    tag: 'FLEXI-CAP',
    name: 'Global Growth Prisma',
    description: 'A globally diversified equity allocation across developed and emerging markets. Engineered to compound steadily across market cycles.',
    cagr: '16.62%',
    ytd: '+10.0%',
    since: 'Since Jan 2020',
    data: [100, 108, 125, 138, 145, 135, 152, 168, 188, 205, 228, 248].map(v => ({ v })),
    allocation: [
      { region: 'North America', percent: '40.0%' },
      { region: 'Asia-Pacific', percent: '30.0%' },
      { region: 'South America', percent: '15.0%' },
      { region: 'Europe', percent: '15.0%' },
    ],
  },
  {
    tag: 'MULTI-ASSET',
    name: 'Global Core Prisma',
    description: 'A globally diversified allocation across equities, sovereign and corporate fixed income, and commodities. Risk-optimized by design.',
    cagr: '16.45%',
    ytd: '+9.4%',
    since: 'Since Jan 2020',
    data: [100, 105, 118, 128, 133, 125, 140, 155, 168, 182, 198, 212].map(v => ({ v })),
    allocation: [
      { region: 'North America', percent: '36.0%' },
      { region: 'Asia-Pacific', percent: '22.5%' },
      { region: 'South America', percent: '11.0%' },
      { region: 'Europe', percent: '15.5%' },
    ],
  },
  {
    tag: 'AGGRESSIVE',
    name: 'Global Advantage Prisma',
    description: 'A concentrated, high-conviction portfolio of global growth equities anchored in US mega-caps and diversified across Europe, Japan, and China.',
    cagr: '—',
    ytd: '+35.4%',
    since: 'Since Jan 2026',
    data: [100, 112, 125, 135, 148, 135, 142, 158, 175, 195, 218, 235].map(v => ({ v })),
    allocation: [
      { region: 'North America', percent: '41.5%' },
      { region: 'Global / Commodity', percent: '21.5%' },
      { region: 'Asia-Pacific', percent: '19.5%' },
      { region: 'Europe', percent: '17.5%' },
    ],
  },
]

export default function Products() {
  return (
    <section className="py-32" style={{ backgroundColor: '#12151f' }}>
      <div className="max-w-7xl mx-auto px-6">

        <AnimatedSection className="mb-16">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
            The Prisma Family
          </p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
              Global investing, treated as a scientific problem.
            </h2>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
              View all products →
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div
                className="rounded-2xl p-6 flex flex-col gap-5 h-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 8px 40px rgba(37,99,235,0.2), 0 0 0 1px rgba(37,99,235,0.2)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.border = '1px solid rgba(37,99,235,0.3)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)'
                  el.style.transform = 'translateY(0)'
                  el.style.border = '1px solid rgba(255,255,255,0.08)'
                }}
              >
                {/* Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest px-3 py-1 rounded-full" style={{
                    color: '#60a5fa',
                    backgroundColor: 'rgba(37,99,235,0.15)',
                    border: '1px solid rgba(37,99,235,0.2)'
                  }}>
                    {product.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                {/* Name + Description */}
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {product.description}
                  </p>
                </div>

                {/* Performance */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                    <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>CAGR (INR)</div>
                    <div className="text-white font-semibold text-xl">{product.cagr}</div>
                  </div>
                  <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                    <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>YTD (INR)</div>
                    <div className="font-semibold text-xl" style={{ color: '#4ade80' }}>{product.ytd}</div>
                  </div>
                </div>

                {/* Sparkline */}
                <div>
                  <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>{product.since}</div>
                  <ResponsiveContainer width="100%" height={50}>
                    <LineChart data={product.data}>
                      <Line type="monotone" dataKey="v" stroke="#2563eb" strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Allocation tags */}
                <div className="flex flex-wrap gap-2">
                  {product.allocation.map((a, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full" style={{
                      color: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                      {a.region} {a.percent}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <button
                    className="flex-1 font-medium py-2.5 rounded-full text-sm text-white"
                    style={{
                      backgroundColor: '#2563eb',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2563eb')}
                  >
                    Invest now
                  </button>
                  <Link
                    href="/products"
                    className="flex-1 font-medium py-2.5 rounded-full text-sm text-center text-white"
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Explore
                  </Link>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}