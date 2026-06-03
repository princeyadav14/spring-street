'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import AnimatedSection from './AnimatedSection'

const data = [
  { year: 'Jan 20', prisma: 100, nifty: 100, sp500: 100 },
  { year: 'Jun 20', prisma: 108, nifty: 95, sp500: 110 },
  { year: 'Jan 21', prisma: 125, nifty: 118, sp500: 130 },
  { year: 'Jun 21', prisma: 138, nifty: 128, sp500: 142 },
  { year: 'Jan 22', prisma: 145, nifty: 132, sp500: 148 },
  { year: 'Jun 22', prisma: 135, nifty: 122, sp500: 128 },
  { year: 'Jan 23', prisma: 152, nifty: 138, sp500: 140 },
  { year: 'Jun 23', prisma: 168, nifty: 148, sp500: 158 },
  { year: 'Jan 24', prisma: 188, nifty: 158, sp500: 178 },
  { year: 'Jun 24', prisma: 205, nifty: 165, sp500: 195 },
  { year: 'Jan 25', prisma: 228, nifty: 170, sp500: 218 },
  { year: 'Jun 25', prisma: 248, nifty: 175, sp500: 235 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl p-4 text-sm" style={{
        backgroundColor: 'white',
        border: '1px solid rgba(37,99,235,0.15)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <p className="font-medium mb-2" style={{ color: '#0f172a' }}>{label}</p>
        {payload.map((entry: any, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span style={{ color: '#64748b' }}>{entry.name}:</span>
            <span className="font-semibold" style={{ color: '#0f172a' }}>{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function PerformanceChart() {
  return (
    <section className="py-32" style={{ backgroundColor: '#f0f4ff' }}>
      <div className="max-w-7xl mx-auto px-6">

        <AnimatedSection className="mb-16">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#2563eb' }}>
            Performance
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold max-w-lg leading-tight" style={{ color: '#0f172a' }}>
              The case for global investing is structural.
            </h2>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 rounded-full inline-block" style={{ backgroundColor: '#2563eb' }} />
                <span style={{ color: '#64748b' }}>Global Growth Prisma</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 rounded-full inline-block" style={{ backgroundColor: '#16a34a' }} />
                <span style={{ color: '#64748b' }}>S&P 500</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 rounded-full inline-block" style={{ backgroundColor: '#ea580c' }} />
                <span style={{ color: '#64748b' }}>Nifty 50</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Chart */}
        <AnimatedSection>
          <div className="rounded-2xl p-8" style={{
            backgroundColor: 'white',
            border: '1px solid rgba(37,99,235,0.1)',
            boxShadow: '0 4px 24px rgba(37,99,235,0.06)'
          }}>
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="prisma"
                    name="Global Growth Prisma"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5, fill: '#2563eb' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sp500"
                    name="S&P 500"
                    stroke="#16a34a"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: '#16a34a' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="nifty"
                    name="Nifty 50"
                    stroke="#ea580c"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: '#ea580c' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>

        {/* Caption */}
        <p className="text-center mt-6 text-xs" style={{ color: '#94a3b8' }}>
          Indexed to 100 at Jan 2020 · In INR terms · Past performance does not guarantee future results
        </p>

      </div>
    </section>
  )
}