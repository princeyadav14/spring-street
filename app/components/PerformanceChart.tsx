'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

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
      <div className="bg-black/90 border border-white/10 rounded-xl p-4 text-sm">
        <p className="text-white/40 mb-2">{label}</p>
        {payload.map((entry: any, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span className="text-white/60">{entry.name}:</span>
            <span className="text-white font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function PerformanceChart() {
  return (
    <section className="bg-black py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-4">
            Performance
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
              The case for global investing is structural.
            </h2>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-blue-400 inline-block" />
                <span className="text-white/40">Global Growth Prisma</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-green-400 inline-block" />
                <span className="text-white/40">S&P 500</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-orange-400 inline-block" />
                <span className="text-white/40">Nifty 50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
              <XAxis
                dataKey="year"
                stroke="#ffffff20"
                tick={{ fill: '#ffffff40', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="#ffffff20"
                tick={{ fill: '#ffffff40', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="prisma"
                name="Global Growth Prisma"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#60a5fa' }}
              />
              <Line
                type="monotone"
                dataKey="sp500"
                name="S&P 500"
                stroke="#4ade80"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#4ade80' }}
              />
              <Line
                type="monotone"
                dataKey="nifty"
                name="Nifty 50"
                stroke="#fb923c"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#fb923c' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Caption */}
        <p className="text-white/20 text-xs mt-6 text-center">
          Indexed to 100 at Jan 2020 · In INR terms · Past performance does not guarantee future results
        </p>

      </div>
    </section>
  )
}