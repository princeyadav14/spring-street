'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const products = [
  {
    tag: 'FLEXI-CAP',
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
    tag: 'AGGRESSIVE',
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
  { number: '04', title: 'Annual rebalance', description: 'We optimise the basket once a year — you don\'t lift a finger.' },
]

export default function ProductsPage() {
  return (
    <main style={{ backgroundColor: '#12151f' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>Products</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
          Prisma: Global investing,{' '}
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            treated as a scientific problem.
          </span>
        </h1>
        <p className="text-xl max-w-2xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Global portfolios built from systematic investing grounded in economic theory. The discipline is the edge.
        </p>
        <div className="flex gap-4">
          <Link href="/contact" className="font-medium px-8 py-3.5 rounded-full text-white text-sm" style={{ backgroundColor: '#2563eb' }}>
            Request access →
          </Link>
          <Link href="#products" className="font-medium px-8 py-3.5 rounded-full text-white text-sm" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
            View all products
          </Link>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest mb-12" style={{ color: '#60a5fa' }}>The Prisma Family</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="rounded-2xl p-6 flex flex-col gap-5 hover:translate-y-[-4px] transition-all duration-300" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
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
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">{product.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{product.description}</p>
              </div>
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
              <div>
                <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>{product.since}</div>
                <ResponsiveContainer width="100%" height={50}>
                  <LineChart data={product.data}>
                    <Line type="monotone" dataKey="v" stroke="#2563eb" strokeWidth={1.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
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
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 font-medium py-2.5 rounded-full text-sm text-white" style={{ backgroundColor: '#2563eb' }}>
                  Invest now
                </button>
                <Link href={`/products/prisma/${product.slug}`} className="flex-1 font-medium py-2.5 rounded-full text-sm text-white text-center" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 max-w-7xl mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-sm uppercase tracking-widest mb-12" style={{ color: '#60a5fa' }}>How it works</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl p-8" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div className="text-sm font-mono mb-4" style={{ color: '#60a5fa' }}>{step.number}</div>
              <div className="text-white font-semibold text-lg mb-2">{step.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}