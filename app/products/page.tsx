import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const products = [
  {
    tag: 'FLEXI-CAP',
    name: 'Global Growth Prisma',
    description: 'A globally diversified equity allocation across developed and emerging markets. Built on a proprietary methodology, engineered to compound steadily across market cycles.',
    cagr: '16.62%',
    ytd: '+10.0%',
    since: 'Since Jan 2020',
    slug: 'global-growth-prisma',
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
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-4">Products</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
          Prisma: Global investing,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            treated as a scientific problem.
          </span>
        </h1>
        <p className="text-white/40 text-xl max-w-2xl leading-relaxed mb-10">
          Global portfolios built from systematic investing grounded in economic theory. The discipline is the edge.
        </p>
        <div className="flex gap-4">
          <Link href="/contact" className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors text-sm">
            Request access →
          </Link>
          <Link href="#products" className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors text-sm">
            View all products
          </Link>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-12">The Prisma Family</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-xs font-medium tracking-widest">{product.tag}</span>
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">{product.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{product.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-white/30 text-xs mb-1">CAGR (INR)</div>
                  <div className="text-white font-semibold text-xl">{product.cagr}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-white/30 text-xs mb-1">YTD (INR)</div>
                  <div className="text-green-400 font-semibold text-xl">{product.ytd}</div>
                </div>
              </div>
              <div className="text-white/20 text-xs">{product.since}</div>
              <div className="flex flex-wrap gap-2">
                {product.allocation.map((a, j) => (
                  <span key={j} className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1">
                    {a.region} {a.percent}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 bg-white text-black text-sm font-medium py-2.5 rounded-full hover:bg-white/90 transition-colors">
                  Invest now
                </button>
                <Link href={`/products/prisma/${product.slug}`} className="flex-1 border border-white/10 text-white text-sm font-medium py-2.5 rounded-full hover:bg-white/5 transition-colors text-center">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-12">How it works</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, i) => (
            <div key={i} className="bg-black p-8">
              <div className="text-white/20 text-sm font-mono mb-4">{step.number}</div>
              <div className="text-white font-semibold text-lg mb-2">{step.title}</div>
              <div className="text-white/40 text-sm leading-relaxed">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}