import Navbar from '../../../../app/components/Navbar'
import Footer from '../../../../app/components/Footer'
import Link from 'next/link'

const holdings = [
  { name: 'Vanguard Total World Stock ETF', ticker: 'VT', weight: '22.0%', region: 'Global' },
  { name: 'iShares Core S&P 500 ETF', ticker: 'IVV', weight: '18.0%', region: 'North America' },
  { name: 'Vanguard FTSE Developed Markets', ticker: 'VEA', weight: '15.0%', region: 'Developed' },
  { name: 'iShares MSCI Emerging Markets', ticker: 'EEM', weight: '12.0%', region: 'Emerging' },
  { name: 'Invesco QQQ Trust', ticker: 'QQQ', weight: '10.0%', region: 'North America' },
  { name: 'iShares MSCI Germany ETF', ticker: 'EWG', weight: '8.0%', region: 'Europe' },
  { name: 'iShares MSCI Japan ETF', ticker: 'EWJ', weight: '8.0%', region: 'Asia-Pacific' },
  { name: 'iShares China Large-Cap ETF', ticker: 'FXI', weight: '7.0%', region: 'Asia-Pacific' },
]

const metrics = [
  { label: 'CAGR (INR)', value: '16.62%', positive: true },
  { label: 'YTD Return', value: '+10.0%', positive: true },
  { label: 'Sharpe Ratio', value: '1.24', positive: true },
  { label: 'Max Drawdown', value: '-18.3%', positive: false },
  { label: 'Volatility', value: '12.4%', positive: null },
  { label: 'Beta', value: '0.87', positive: null },
]

const allocation = [
  { region: 'North America', percent: 40 },
  { region: 'Asia-Pacific', percent: 30 },
  { region: 'South America', percent: 15 },
  { region: 'Europe', percent: 15 },
]

export default function PrismaDetailPage() {
  return (
    <main style={{ backgroundColor: '#12151f' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium tracking-widest px-3 py-1 rounded-full" style={{
                color: '#60a5fa',
                backgroundColor: 'rgba(37,99,235,0.15)',
                border: '1px solid rgba(37,99,235,0.2)'
              }}>
                FLEXI-CAP
              </span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Since Jan 2020</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-6xl font-bold text-white mb-4">
              Global Growth Prisma
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              A globally diversified equity allocation across developed and emerging markets. Built on a proprietary methodology, rebalanced periodically, engineered to compound steadily across market cycles.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="font-medium px-8 py-3.5 rounded-full text-white text-sm" style={{ backgroundColor: '#2563eb' }}>
              Invest now
            </button>
            <Link href="/contact" className="font-medium px-8 py-3.5 rounded-full text-white text-sm" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              Request access
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-xs uppercase tracking-widest mb-8" style={{ color: '#60a5fa' }}>Performance Metrics</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="rounded-2xl p-6" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>{metric.label}</div>
              <div className="text-2xl font-bold" style={{
                color: metric.positive === true ? '#4ade80' :
                  metric.positive === false ? '#f87171' : 'white'
              }}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Allocation + Methodology */}
      <section className="py-16 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Allocation */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-8" style={{ color: '#60a5fa' }}>Geographic Allocation</p>
            <div className="flex flex-col gap-4">
              {allocation.map((a, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{a.region}</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{a.percent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-full rounded-full" style={{
                      width: `${a.percent}%`,
                      background: 'linear-gradient(90deg, #2563eb, #60a5fa)'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-8" style={{ color: '#60a5fa' }}>Methodology</p>
            <div className="flex flex-col gap-6">
              {[
                { title: 'Factor-Based Selection', desc: 'ETFs selected based on value, momentum, and quality factors across global markets.' },
                { title: 'Annual Rebalancing', desc: 'Portfolio rebalanced once per year to maintain target allocations and capture rebalancing alpha.' },
                { title: 'Tax Optimisation', desc: 'Strategy accounts for LRS remittance limits and DTAA benefits for Indian investors.' },
                { title: 'Risk Management', desc: 'Drawdown limits and volatility targets embedded in the construction process.' },
              ].map((item, i) => (
                <div key={i} className="pl-4" style={{ borderLeft: '2px solid rgba(37,99,235,0.4)' }}>
                  <div className="text-white font-medium mb-1">{item.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holdings Table */}
      <section className="py-16 px-6 max-w-7xl mx-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-xs uppercase tracking-widest mb-8" style={{ color: '#60a5fa' }}>Current Holdings</p>
        <div className="rounded-2xl overflow-hidden" style={{
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>ETF Name</th>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Ticker</th>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Region</th>
                <th className="text-right px-6 py-4 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Weight</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors" style={{
                  borderBottom: i < holdings.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none'
                }}>
                  <td className="px-6 py-4 text-white text-sm">{holding.name}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono px-2 py-1 rounded" style={{
                      color: '#60a5fa',
                      backgroundColor: 'rgba(37,99,235,0.15)',
                      border: '1px solid rgba(37,99,235,0.2)'
                    }}>
                      {holding.ticker}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{holding.region}</td>
                  <td className="px-6 py-4 text-sm text-right font-medium text-white">{holding.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-2xl p-12 text-center" style={{
          background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.2) 100%)',
          border: '1px solid rgba(37,99,235,0.2)'
        }}>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to invest globally?</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Join Indian investors building globally diversified portfolios with Spring Street.</p>
          <div className="flex gap-4 justify-center">
            <button className="font-medium px-8 py-3.5 rounded-full text-white text-sm" style={{ backgroundColor: '#2563eb' }}>
              Invest now
            </button>
            <Link href="/contact" className="font-medium px-8 py-3.5 rounded-full text-white text-sm" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}