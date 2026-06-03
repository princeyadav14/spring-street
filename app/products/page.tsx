'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const products = [
  {
    tag: 'FLEXI-CAP',
    category: 'Equity',
    name: 'Global Growth Prisma',
    description: 'A globally diversified equity allocation across developed and emerging markets. Built on a proprietary methodology, engineered to compound steadily across market cycles.',
    cagr: '16.62%',
    ytd: '+10.0%',
    since: 'Since Jan 2020',
    slug: 'global-growth-prisma',
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
    category: 'Multi-Asset',
    name: 'Global Core Prisma',
    description: 'A globally diversified allocation across equities, sovereign and corporate fixed income, and commodities. Risk-optimized by design, rebalanced periodically.',
    cagr: '16.45%',
    ytd: '+9.4%',
    since: 'Since Jan 2020',
    slug: 'global-core-prisma',
    data: [100, 105, 118, 128, 133, 125, 140, 155, 168, 182, 198, 212].map(v => ({ v })),
    allocation: [
      { region: 'North America', percent: '36.0%' },
      { region: 'Asia-Pacific', percent: '22.5%' },
      { region: 'South America', percent: '11.0%' },
      { region: 'Europe', percent: '15.5%' },
    ],
  },
  {
    tag: 'INCOME',
    category: 'Income',
    name: 'Global Advantage Prisma',
    description: 'A concentrated, high-conviction portfolio of global growth equities anchored in US mega-caps and diversified across Europe, Japan, and China.',
    cagr: '—',
    ytd: '+35.4%',
    since: 'Since Jan 2026',
    slug: 'global-advantage-prisma',
    data: [100, 112, 125, 135, 148, 135, 142, 158, 175, 195, 218, 235].map(v => ({ v })),
    allocation: [
      { region: 'North America', percent: '41.5%' },
      { region: 'Global / Commodity', percent: '21.5%' },
      { region: 'Asia-Pacific', percent: '19.5%' },
      { region: 'Europe', percent: '17.5%' },
    ],
  },
]

const steps = [
  { number: '01', title: 'Top-up wallet', description: 'Fund a USD wallet via your Indian bank under LRS.' },
  { number: '02', title: 'Pick a Prisma', description: 'Choose by risk appetite and time horizon. Switch anytime.' },
  { number: '03', title: 'Auto-allocate', description: 'Spring Street buys the underlying ETFs at target weights.' },
  { number: '04', title: 'Annual rebalance', description: "We optimise the basket once a year — you don't lift a finger." },
]

const FILTERS = ['All', 'Equity', 'Multi-Asset', 'Income'] as const
type Filter = typeof FILTERS[number]

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered = activeFilter === 'All'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <main style={{ backgroundColor: '#12151f' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>Products</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
          Prisma: Global investing,{' '}
          <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            treated as a scientific problem.
          </span>
        </h1>
        <p className="text-xl max-w-2xl leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Global portfolios built from systematic investing grounded in economic theory. The discipline is the edge.
        </p>
        <p className="text-xl font-semibold max-w-2xl mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
          The discipline is the edge.
        </p>
        <div className="flex gap-4">
          <Link href="/about" className="font-medium px-8 py-3.5 rounded-full text-white text-sm"
            style={{ backgroundColor: '#2563eb', boxShadow: '0 4px 15px rgba(37,99,235,0.4)', transition: 'all 0.2s' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = '#1d4ed8'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 25px rgba(37,99,235,0.5)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = '#2563eb'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 15px rgba(37,99,235,0.4)'
            }}
          >
            Read the methodology →
          </Link>
          <Link href="/contact" className="font-medium px-8 py-3.5 rounded-full text-white text-sm"
            style={{ border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.2s' }}
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
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <p className="text-sm uppercase tracking-widest" style={{ color: '#60a5fa' }}>The Prisma Family</p>

          {/* Filter tabs — with hover effect */}
          <div style={{ display: 'flex', gap: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 999, padding: 4 }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '6px 18px', borderRadius: 999, fontSize: 13,
                  fontWeight: 600, border: 'none', cursor: 'pointer',
                  backgroundColor: activeFilter === f ? 'white' : 'transparent',
                  color: activeFilter === f ? '#111827' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  if (activeFilter !== f) {
                    el.style.backgroundColor = 'rgba(255,255,255,0.15)'
                    el.style.color = 'rgba(255,255,255,0.9)'
                    el.style.transform = 'translateY(-1px)'
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  if (activeFilter !== f) {
                    el.style.backgroundColor = 'transparent'
                    el.style.color = 'rgba(255,255,255,0.5)'
                    el.style.transform = 'translateY(0)'
                  }
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div key={i} className="rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(37,99,235,0.3)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-widest px-3 py-1 rounded-full" style={{ color: '#60a5fa', backgroundColor: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.2)' }}>
                  {product.tag}
                </span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2563eb' }} />
              </div>

              <div>
                <h3 className="text-white font-bold text-2xl mb-3">{product.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>CAGR (INR)</div>
                  <div className="text-white font-bold text-2xl">{product.cagr}</div>
                </div>
                <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>YTD (INR)</div>
                  <div className="font-bold text-2xl" style={{ color: '#4ade80' }}>{product.ytd}</div>
                </div>
              </div>

              <div>
                <div className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>{product.since}</div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={product.data}>
                    <Line type="monotone" dataKey="v" stroke="#2563eb" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.allocation.map((a, j) => (
                  <span key={j} className="text-xs px-3 py-1 rounded-full" style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    {a.region} {a.percent}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto pt-2">
                <button className="flex-1 font-semibold py-3 rounded-full text-sm text-white"
                  style={{ backgroundColor: '#2563eb', transition: 'all 0.2s' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1d4ed8'
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2563eb'
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                  }}
                >
                  Invest now
                </button>
                <Link href={`/products/prisma/${product.slug}`}
                  className="flex-1 font-semibold py-3 rounded-full text-sm text-white text-center"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.2s' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.08)'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                  }}
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#2563eb' }}>How it works</p>
            <h2 className="text-4xl font-bold" style={{ color: '#0f172a', fontFamily: "'Playfair Display', serif" }}>
              Four steps to global wealth.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="rounded-2xl p-8 relative"
                style={{ backgroundColor: 'white', border: '1px solid rgba(37,99,235,0.1)', boxShadow: '0 4px 24px rgba(37,99,235,0.06)', transition: 'all 0.2s' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(37,99,235,0.12)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(37,99,235,0.06)'
                }}
              >
                <div className="text-3xl font-bold mb-6" style={{ color: 'rgba(37,99,235,0.15)' }}>{step.number}</div>
                <div className="text-lg font-semibold mb-2" style={{ color: '#0f172a' }}>{step.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}