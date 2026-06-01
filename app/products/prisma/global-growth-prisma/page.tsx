 import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
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
  { region: 'North America', percent: 40, color: 'bg-blue-500' },
  { region: 'Asia-Pacific', percent: 30, color: 'bg-blue-400' },
  { region: 'South America', percent: 15, color: 'bg-blue-300' },
  { region: 'Europe', percent: 15, color: 'bg-blue-200' },
]

export default function PrismaDetailPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-400 text-xs font-medium tracking-widest border border-blue-400/30 rounded-full px-3 py-1">
                FLEXI-CAP
              </span>
              <span className="text-white/20 text-xs">Since Jan 2020</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Global Growth Prisma
            </h1>
            <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
              A globally diversified equity allocation across developed and emerging markets. Built on a proprietary methodology, rebalanced periodically, engineered to compound steadily across market cycles.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors text-sm">
              Invest now
            </button>
            <Link href="/contact" className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors text-sm">
              Request access
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-b border-white/5">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-8">Performance Metrics</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/5">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-black p-6">
              <div className="text-white/30 text-xs mb-2">{metric.label}</div>
              <div className={`text-2xl font-bold ${
                metric.positive === true ? 'text-green-400' :
                metric.positive === false ? 'text-red-400' :
                'text-white'
              }`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Allocation + Holdings */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Allocation */}
          <div>
            <p className="text-white/30 text-sm uppercase tracking-widest mb-8">Geographic Allocation</p>
            <div className="flex flex-col gap-4">
              {allocation.map((a, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{a.region}</span>
                    <span className="text-white/40 text-sm">{a.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${a.color} rounded-full`}
                      style={{ width: `${a.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div>
            <p className="text-white/30 text-sm uppercase tracking-widest mb-8">Methodology</p>
            <div className="flex flex-col gap-6">
              <div className="border-l border-blue-500/40 pl-4">
                <div className="text-white font-medium mb-1">Factor-Based Selection</div>
                <div className="text-white/40 text-sm leading-relaxed">ETFs selected based on value, momentum, and quality factors across global markets.</div>
              </div>
              <div className="border-l border-blue-500/40 pl-4">
                <div className="text-white font-medium mb-1">Annual Rebalancing</div>
                <div className="text-white/40 text-sm leading-relaxed">Portfolio rebalanced once per year to maintain target allocations and capture rebalancing alpha.</div>
              </div>
              <div className="border-l border-blue-500/40 pl-4">
                <div className="text-white font-medium mb-1">Tax Optimisation</div>
                <div className="text-white/40 text-sm leading-relaxed">Strategy accounts for LRS remittance limits and DTAA benefits for Indian investors.</div>
              </div>
              <div className="border-l border-blue-500/40 pl-4">
                <div className="text-white font-medium mb-1">Risk Management</div>
                <div className="text-white/40 text-sm leading-relaxed">Drawdown limits and volatility targets embedded in the construction process.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Holdings Table */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-b border-white/5">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-8">Current Holdings</p>
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left text-white/30 text-xs uppercase tracking-widest px-6 py-4">ETF Name</th>
                <th className="text-left text-white/30 text-xs uppercase tracking-widest px-6 py-4">Ticker</th>
                <th className="text-left text-white/30 text-xs uppercase tracking-widest px-6 py-4">Region</th>
                <th className="text-right text-white/30 text-xs uppercase tracking-widest px-6 py-4">Weight</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-white text-sm">{holding.name}</td>
                  <td className="px-6 py-4">
                    <span className="text-blue-400 text-xs font-mono border border-blue-400/20 rounded px-2 py-1">
                      {holding.ticker}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/40 text-sm">{holding.region}</td>
                  <td className="px-6 py-4 text-white text-sm text-right font-medium">{holding.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to invest globally?</h2>
          <p className="text-white/40 mb-8">Join Indian investors building globally diversified portfolios with Spring Street.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors text-sm">
              Invest now
            </button>
            <Link href="/contact" className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors text-sm">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
