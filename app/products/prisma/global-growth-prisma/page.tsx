'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'

const TIME_FILTERS = ['1M', '6M', '1Y', '3Y', '5Y', 'ALL'] as const
type TF = typeof TIME_FILTERS[number]

// Generate weekly data points (more granular = better curves for short periods)
const generateData = () => {
  const start = new Date('2020-01-01')
  const result: { date: string; flexi: number; acwi: number; aor: number; nifty: number }[] = []
  let flexi = 100, acwi = 100, aor = 100, nifty = 100
  for (let i = 0; i < 330; i++) { // ~330 weeks = ~6.3 years
    const d = new Date(start)
    d.setDate(start.getDate() + i * 7)
    flexi *= 1 + (Math.random() * 0.025 - 0.006)
    acwi  *= 1 + (Math.random() * 0.020 - 0.005)
    aor   *= 1 + (Math.random() * 0.018 - 0.005)
    nifty *= 1 + (Math.random() * 0.022 - 0.006)
    result.push({
      date: d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' }),
      flexi: +flexi.toFixed(2),
      acwi:  +acwi.toFixed(2),
      aor:   +aor.toFixed(2),
      nifty: +nifty.toFixed(2),
    })
  }
  const last = result[result.length - 1]
  const scale = last ? 267.78 / last.flexi : 1
  result.forEach(r => {
    r.flexi = +(r.flexi * scale).toFixed(2)
    r.acwi  = +(r.acwi  * scale * 0.78).toFixed(2)
    r.aor   = +(r.aor   * scale * 0.80).toFixed(2)
    r.nifty = +(r.nifty * scale * 0.72).toFixed(2)
  })
  return result
}

const ALL_DATA = generateData()

// Weekly slices: 1M=4w, 6M=26w, 1Y=52w, 3Y=156w, 5Y=260w
const sliceData = (tf: TF) => {
  const n = { '1M': 4, '6M': 26, '1Y': 52, '3Y': 156, '5Y': 260, 'ALL': 9999 }[tf]
  return ALL_DATA.slice(-Math.min(n, ALL_DATA.length))
}

const regionData = [
  { name: 'North America', value: 40,    color: '#2563eb' },
  { name: 'Asia-Pacific',  value: 30,    color: '#0ea5e9' },
  { name: 'Europe',        value: 15,    color: '#f59e0b' },
  { name: 'South America', value: 15,    color: '#10b981' },
]

const marketCapData = [
  { name: 'Mega Cap',     value: 55.25, color: '#2563eb' },
  { name: 'Large Cap',    value: 20.44, color: '#10b981' },
  { name: 'Mid Cap',      value: 21.99, color: '#f59e0b' },
  { name: 'Small (<10B)', value: 2.32,  color: '#60a5fa' },
]

const holdings = [
  { ticker: 'SPMO', name: 'Invesco S&P 500 Momentum ETF', category: 'Large Cap Growth ETF', weight: '40.00%', ret1y: '+60.61%', ret3y: '+49.50%', blurred: false },
  { ticker: 'FEZ',  name: 'SPDR EURO STOXX 50 ETF',       category: 'Europe Equities',      weight: '15.00%', ret1y: '+31.11%', ret3y: '+23.82%', blurred: false },
  { ticker: '···',  name: 'iShares China Large-Cap ETF',  category: 'Asia-Pacific',         weight: '15.00%', ret1y: '+18.3%',  ret3y: '+12.4%',  blurred: true },
  { ticker: '···',  name: 'Invesco QQQ Trust',            category: 'North America',        weight: '15.00%', ret1y: '+22.1%',  ret3y: '+31.7%',  blurred: true },
  { ticker: '···',  name: 'iShares MSCI Japan ETF',       category: 'Asia-Pacific',         weight: '8.00%',  ret1y: '+14.2%',  ret3y: '+9.8%',   blurred: true },
  { ticker: '···',  name: 'iShares MSCI Germany ETF',     category: 'Europe',               weight: '7.00%',  ret1y: '+11.5%',  ret3y: '+8.2%',   blurred: true },
]

const trailingReturns = [
  { period: '1M',      prisma: '+2.41%',  acwi: '+8.69%'  },
  { period: '3M',      prisma: '+4.79%',  acwi: '+12.83%' },
  { period: '6M',      prisma: '+13.07%', acwi: '+19.67%' },
  { period: 'YTD',     prisma: '+10.04%', acwi: '+17.48%' },
  { period: '1Y',      prisma: '+33.40%', acwi: '+42.34%' },
  { period: '3Y CAGR', prisma: '+28.25%', acwi: '+25.49%' },
  { period: '5Y CAGR', prisma: '+17.44%', acwi: '+15.52%' },
]

const ChartTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 14px', fontSize: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
      <div style={{ color: '#6b7280', marginBottom: 6, fontWeight: 600 }}>{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} style={{ display: 'flex', justifyContent: 'space-between', gap: 24, color: p.color }}>
          <span>{p.name}</span>
          <span style={{ fontWeight: 700 }}>{p.value}</span>
        </div>
      ))}
    </div>
  )
}

const DonutLegend = ({ data }: { data: { name: string; value: number; color: string }[] }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    {data.map(d => (
      <div key={d.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 11, height: 11, borderRadius: 2, backgroundColor: d.color, flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: '#374151' }}>{d.name}</span>
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{d.value.toFixed(2)}%</span>
      </div>
    ))}
  </div>
)

const btnPrimary: React.CSSProperties = {
  width: '100%', padding: '12px 0', borderRadius: 10,
  backgroundColor: '#2563eb', color: 'white',
  fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer',
  marginBottom: 8, transition: 'all 0.2s ease',
}
const btnSecondary: React.CSSProperties = {
  width: '100%', padding: '12px 0', borderRadius: 10,
  backgroundColor: 'white', color: '#111827',
  fontWeight: 600, fontSize: 14,
  border: '1px solid #d1d5db', cursor: 'pointer',
  transition: 'all 0.2s ease',
}

export default function PrismaDetailPage() {
  const [activeFilter, setActiveFilter] = useState<TF>('ALL')
  const chartData = sliceData(activeFilter)

  return (
    <main style={{ backgroundColor: '#f5f5f3', minHeight: '100vh' }}>
      <Navbar forceScrolled={true} />

      <div style={{ paddingTop: 88 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 24px 0' }}>
          <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111827')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
          >
            ← All products
          </Link>
        </div>
      </div>

      {/* Hero + Sidebar */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: 16, padding: '36px 40px 32px', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#4ade80' }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>LIVE</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(251,191,36,0.5)', color: '#fbbf24', backgroundColor: 'rgba(251,191,36,0.1)' }}>● Moderate-High</span>
            </div>
            <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 12, lineHeight: 1.2, fontFamily: "'Playfair Display', Georgia, serif" }}>Global Growth Prisma</h1>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: 28, maxWidth: 500 }}>
              A globally diversified equity allocation across developed and emerging markets. Built on a proprietary methodology, rebalanced periodically, engineered to compound steadily across market cycles.
            </p>
            <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.08)', marginBottom: 24 }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {[
                { label: 'CAGR (INR)',   value: '16.62%', sub: 'Since Jan 2020',              color: '#4ade80' },
                { label: 'YTD (INR)',    value: '+10.0%', sub: 'NIFTY 50 TRI: -10.29%',       color: '#4ade80' },
                { label: 'VS NIFTY 50', value: '+62%',   sub: '+3% vs ACWI (Since Jan 2020)', color: '#4ade80' },
              ].map((s, i) => (
                <div key={i} style={{ paddingRight: i < 2 ? 20 : 0, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? 20 : 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 26, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'white', borderRadius: 16, padding: '24px 24px 20px', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#9ca3af', letterSpacing: '0.08em', marginBottom: 6 }}>PRICING</div>
              <div style={{ marginBottom: 2 }}>
                <span style={{ fontSize: 30, fontWeight: 700, color: '#111827' }}>1.25%</span>
                <span style={{ fontSize: 13, color: '#6b7280', marginLeft: 6 }}>per annum</span>
              </div>
              <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 20 }}>Data as of 29 May 2026</div>
              <button style={btnPrimary}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1d4ed8'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(37,99,235,0.4)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2563eb'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
                }}
              >Sign in to invest</button>
              <button style={btnSecondary}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f9fafb'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#9ca3af'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'white'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db'
                }}
              >Explore All Prisma</button>
            </div>

            <div
  style={{ background: 'white', borderRadius: 16, padding: '18px 20px', border: '1px solid #e5e7eb', transition: 'all 0.2s', cursor: 'default' }}
  onMouseEnter={e => {
    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'
    ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
  }}
  onMouseLeave={e => {
    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
    ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
  }}
>
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
    <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>💬</div>
    <div>
      <div style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>Need help?</div>
      <div style={{ fontSize: 12, color: '#9ca3af' }}>Schedule a call with our team</div>
    </div>
  </div>
  <Link
    href="/contact"
    style={{ display: 'block', textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#2563eb', textDecoration: 'none', padding: '8px 0', borderTop: '1px solid #f3f4f6', transition: 'all 0.2s', borderRadius: '0 0 8px 8px' }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLAnchorElement).style.color = '#1d4ed8'
      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f0f4ff'
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLAnchorElement).style.color = '#2563eb'
      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
    }}
  >
    Contact Us →
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* Performance Chart */}
      <section style={{ maxWidth: 1100, margin: '24px auto 0', padding: '0 24px' }}>
        <div style={{ background: 'white', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          <div style={{ padding: '28px 32px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', letterSpacing: '0.1em', marginBottom: 6 }}>
                PERFORMANCE <span style={{ fontStyle: 'italic', fontWeight: 400 }}>(in INR, as of 29 May 2026)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 30, fontWeight: 700, color: '#111827' }}>₹267.78</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#16a34a' }}>+167.78%</span>
                <span style={{ fontSize: 13, color: '#9ca3af' }}>· Since inception</span>
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[
                  { color: '#2563eb', label: 'Flexi-Cap',             dashed: false },
                  { color: '#10b981', label: 'ACWI · MSCI All World', dashed: true  },
                  { color: '#f59e0b', label: 'AOR · 60/40',           dashed: true  },
                  { color: '#6b7280', label: 'Nifty 50 TR (INR)',      dashed: true  },
                ].map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="20" height="4"><line x1="0" y1="2" x2="20" y2="2" stroke={l.color} strokeWidth="2.5" strokeDasharray={l.dashed ? '5 3' : 'none'} /></svg>
                    <span style={{ fontSize: 12, color: '#6b7280' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Time filter buttons with proper hover */}
            <div style={{ display: 'flex', gap: 2, background: '#f3f4f6', borderRadius: 10, padding: 3 }}>
              {TIME_FILTERS.map(tf => (
                <button key={tf} onClick={() => setActiveFilter(tf)}
                  style={{
                    padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                    border: 'none', cursor: 'pointer',
                    backgroundColor: activeFilter === tf ? 'white' : 'transparent',
                    color: activeFilter === tf ? '#111827' : '#9ca3af',
                    boxShadow: activeFilter === tf ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    if (activeFilter !== tf) {
                      el.style.backgroundColor = 'rgba(0,0,0,0.06)'
                      el.style.color = '#374151'
                    }
                    el.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    if (activeFilter !== tf) {
                      el.style.backgroundColor = 'transparent'
                      el.style.color = '#9ca3af'
                    }
                    el.style.transform = 'translateY(0)'
                  }}
                >{tf}</button>
              ))}
            </div>
          </div>

          <div style={{ padding: '16px 8px 0' }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} interval={Math.floor(chartData.length / 6)} />
                <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} domain={['auto', 'auto']} width={40} />
                <Tooltip content={<ChartTooltip />} />
                <Line dataKey="flexi" name="Flexi-Cap"   stroke="#2563eb" strokeWidth={2.5} dot={false} />
                <Line dataKey="acwi"  name="ACWI"        stroke="#10b981" strokeWidth={1.5} dot={false} strokeDasharray="6 3" />
                <Line dataKey="aor"   name="AOR 60/40"   stroke="#f59e0b" strokeWidth={1.5} dot={false} strokeDasharray="6 3" />
                <Line dataKey="nifty" name="Nifty 50 TR" stroke="#6b7280" strokeWidth={1.5} dot={false} strokeDasharray="6 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #f3f4f6', marginTop: 8 }}>
            {[
              { label: 'RETURN P.A.',  value: '16.62%',  color: '#2563eb' },
              { label: 'VOLATILITY',   value: '21.83%',  color: '#111827' },
              { label: 'SHARPE',       value: '0.67',    color: '#111827' },
              { label: 'MAX DRAWDOWN', value: '-28.86%', color: '#dc2626' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '18px 28px', borderRight: i < 3 ? '1px solid #f3f4f6' : 'none', transition: 'background 0.2s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#fafafa')}
                onMouseLeave={e => (e.currentTarget.style.background = 'white')}
              >
                <div style={{ fontSize: 10, fontWeight: 600, color: '#9ca3af', letterSpacing: '0.08em', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailing Returns */}
      <section style={{ maxWidth: 1100, margin: '20px auto 0', padding: '0 24px' }}>
        <div style={{ background: 'white', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          <div style={{ padding: '20px 32px 0' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', letterSpacing: '0.1em' }}>TRAILING RETURNS (VS ACWI)</div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <th style={{ padding: '10px 32px', textAlign: 'left', fontSize: 12, color: '#9ca3af', fontWeight: 500 }}></th>
                  {trailingReturns.map(r => (
                    <th key={r.period} style={{ padding: '10px 16px', textAlign: 'center', fontSize: 12, color: '#9ca3af', fontWeight: 600 }}>{r.period}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {([
                  { label: 'Flexi-Cap', key: 'prisma' as const },
                  { label: 'ACWI',      key: 'acwi'   as const },
                ] as const).map(row => (
                  <tr key={row.label} style={{ borderBottom: '1px solid #f9fafb', transition: 'background 0.15s', cursor: 'default' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'white')}
                  >
                    <td style={{ padding: '12px 32px', fontSize: 13, fontWeight: 600, color: '#374151' }}>{row.label}</td>
                    {trailingReturns.map(r => (
                      <td key={r.period} style={{ padding: '12px 16px', textAlign: 'center', fontSize: 13, fontWeight: 600, color: row.key === 'prisma' ? (r[row.key].startsWith('+') ? '#16a34a' : '#dc2626') : '#6b7280' }}>
                        {r[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Composition Pie Charts */}
      <section style={{ maxWidth: 1100, margin: '36px auto 0', padding: '0 24px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#2563eb', letterSpacing: '0.12em', marginBottom: 6 }}>COMPOSITION</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111827', marginBottom: 20 }}>What's inside</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { title: 'Exposure by Region',            data: regionData    },
            { title: 'Equity Exposure by Market Cap', data: marketCapData },
          ].map(chart => (
            <div key={chart.title} style={{ background: 'white', borderRadius: 16, border: '1px solid #e5e7eb', padding: '24px 28px', transition: 'box-shadow 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 20 }}>{chart.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <PieChart width={150} height={150}>
                  <Pie data={chart.data} cx={70} cy={70} innerRadius={44} outerRadius={66} paddingAngle={2} dataKey="value" strokeWidth={0}>
                    {chart.data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                </PieChart>
                <div style={{ flex: 1 }}><DonutLegend data={chart.data} /></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Holdings Table */}
      <section style={{ maxWidth: 1100, margin: '20px auto 0', padding: '0 24px' }}>
        <div style={{ background: '#f9fafb', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          <div style={{ padding: '24px 32px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Holdings</h3>
            <span style={{ fontSize: 12, color: '#9ca3af' }}>Returns in INR</span>
          </div>
          <div style={{ padding: '12px 0', position: 'relative' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  {['Ticker', 'Asset', 'Category', 'Weight ↓', '1Y', '3Y CAGR'].map((h, i) => (
                    <th key={h} style={{ padding: '10px 28px', textAlign: i >= 3 ? 'right' : 'left', fontSize: 12, color: i === 3 ? '#2563eb' : '#9ca3af', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {holdings.map((h, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f3f4f6', filter: h.blurred ? 'blur(4px)' : 'none', userSelect: h.blurred ? 'none' : 'auto', backgroundColor: 'white', transition: 'background 0.15s' }}
                    onMouseEnter={e => { if (!h.blurred) (e.currentTarget as HTMLTableRowElement).style.background = '#f9fafb' }}
                    onMouseLeave={e => { if (!h.blurred) (e.currentTarget as HTMLTableRowElement).style.background = 'white' }}
                  >
                    <td style={{ padding: '14px 28px' }}>
                      {!h.blurred
                        ? <span style={{ display: 'inline-block', backgroundColor: '#111827', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 5, fontFamily: 'monospace' }}>{h.ticker}</span>
                        : <div style={{ width: 40, height: 22, borderRadius: 5, backgroundColor: '#d1d5db' }} />}
                    </td>
                    <td style={{ padding: '14px 28px', fontSize: 14, fontWeight: 500, color: '#111827' }}>{h.name}</td>
                    <td style={{ padding: '14px 28px', fontSize: 13, color: '#6b7280' }}>{h.category}</td>
                    <td style={{ padding: '14px 28px', fontSize: 14, fontWeight: 600, color: '#111827', textAlign: 'right' }}>{h.weight}</td>
                    <td style={{ padding: '14px 28px', fontSize: 13, fontWeight: 600, color: '#16a34a', textAlign: 'right' }}>{h.ret1y}</td>
                    <td style={{ padding: '14px 28px', fontSize: 13, fontWeight: 600, color: '#16a34a', textAlign: 'right' }}>{h.ret3y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, rgba(249,250,251,0.85) 40%, #f9fafb 70%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 24 }}>
              <div style={{ background: 'white', borderRadius: 12, border: '1px solid #e5e7eb', padding: '14px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 14, color: '#374151', marginBottom: 10 }}>🔒 +4 more holdings</div>
                <button style={{ backgroundColor: '#2563eb', color: 'white', fontWeight: 600, fontSize: 14, padding: '9px 24px', borderRadius: 8, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1d4ed8'
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(37,99,235,0.4)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2563eb'
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
                  }}
                >Sign in to see all 6 →</button>
                <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 8 }}>New here? Create an account</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ maxWidth: 1100, margin: '40px auto 0', padding: '0 24px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#2563eb', letterSpacing: '0.12em', marginBottom: 6 }}>METHODOLOGY</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111827', marginBottom: 20 }}>How we build a Prisma?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {[
            { n: '01', title: 'What it owns?',          desc: 'US Listed ETFs that provide exposure across markets and asset classes, screened for AUM, cost, risk and other performance thresholds.' },
            { n: '02', title: "How it's sized?",        desc: 'Weighted on a proprietary methodology that balances historical risk and performance attributes with conviction.' },
            { n: '03', title: 'How it stays on track?', desc: 'Rebalanced periodically based on evolving market conditions and aimed to deliver superior performance while optimizing tax.' },
          ].map(c => (
            <div key={c.n} style={{ background: 'white', borderRadius: 14, border: '1px solid #e5e7eb', padding: '24px 24px 28px', transition: 'all 0.2s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: '#2563eb', marginBottom: 12 }}>{c.n}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who this is for + Disclosures */}
      <section style={{ maxWidth: 1100, margin: '20px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div style={{ background: 'white', borderRadius: 14, border: '1px solid #e5e7eb', padding: '24px 28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>Who this is for?</div>
              <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 999, border: '1px solid rgba(251,191,36,0.5)', color: '#d97706', backgroundColor: 'rgba(251,191,36,0.1)' }}>● Moderate-High</span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: 'linear-gradient(to right, #16a34a, #facc15, #dc2626)', position: 'relative', marginBottom: 8 }}>
              <div style={{ position: 'absolute', top: -3, left: '62%', width: 14, height: 14, borderRadius: '50%', backgroundColor: 'white', border: '3px solid #d97706', transform: 'translateX(-50%)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {['Conservative', 'Moderate', 'Aggressive'].map(l => <span key={l} style={{ fontSize: 11, color: '#9ca3af' }}>{l}</span>)}
            </div>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, marginTop: 14 }}>
              Built for investors with 5+ year horizon and tolerance for double digit drawdowns in stressed years. Currency exposure in unhedged USD.
            </p>
          </div>
          <div style={{ background: 'white', borderRadius: 14, border: '1px solid #e5e7eb', padding: '24px 28px' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 14 }}>Disclosures</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Past performance is not indicative of future returns.', 'Investments are subject to market and currency risk.', 'Data as of 29-05-2026.'].map(d => (
                <li key={d} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>
                  <span style={{ color: '#d1d5db', marginTop: 2 }}>•</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ maxWidth: 1100, margin: '32px auto 0', padding: '0 24px 64px' }}>
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', borderRadius: 16, padding: '36px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#60a5fa', letterSpacing: '0.12em', marginBottom: 8 }}>GET STARTED</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 6 }}>Add Flexi-Cap to your global portfolio</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Transparent fees. Daily liquidity. No exit penalties.</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <button style={{ padding: '11px 24px', borderRadius: 8, backgroundColor: '#2563eb', color: 'white', fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1d4ed8'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(37,99,235,0.5)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2563eb'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
              }}
            >Invest now</button>
            <button style={{ padding: '11px 24px', borderRadius: 8, backgroundColor: 'transparent', color: 'white', fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.08)'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
              }}
            >View all Products</button>
          </div>
        </div>
      </section>

      <Footer hideCTA={true} />
    </main>
  )
}