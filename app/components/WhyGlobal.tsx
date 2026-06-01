import AnimatedSection from './AnimatedSection'
const reasons = [
  {
    number: '01',
    title: 'Global Diversification',
    description: 'Access institutional-grade portfolios across world markets — not just one home country. Capture growth from the US, Europe, Asia-Pacific and beyond.',
    stat: '195+',
    statLabel: 'Countries in global markets',
  },
  {
    number: '02',
    title: 'Tax Optimised',
    description: 'Strategies designed around local tax regulations, so the gross return you see is closer to net. We handle the complexity so you don\'t have to.',
    stat: '25%',
    statLabel: 'Typical tax drag eliminated',
  },
  {
    number: '03',
    title: 'Long-term Growth',
    description: 'Build wealth for generations with proven ETF strategies, rebalanced annually on your behalf. Discipline is the edge.',
    stat: '16.6%',
    statLabel: 'CAGR since inception',
  },
]

export default function WhyGlobal() {
  return (
    <section className="bg-black py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-20">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-4">
            Why Spring Street
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
            Investing without borders.
          </h2>
        </AnimatedSection>
        <div className="flex flex-col gap-px bg-white/5">
          {reasons.map((reason, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-black grid grid-cols-1 md:grid-cols-3 gap-8 p-10 hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-start gap-4">
                  <span className="text-white/20 text-sm font-mono mt-1">{reason.number}</span>
                  <h3 className="text-white font-semibold text-xl">{reason.title}</h3>
                </div>
                <div className="md:col-span-1">
                  <p className="text-white/40 text-sm leading-relaxed">{reason.description}</p>
                </div>
                <div className="flex items-center justify-start md:justify-end gap-3">
                  <div className="text-right">
                    <div className="text-white font-bold text-3xl">{reason.stat}</div>
                    <div className="text-white/30 text-xs">{reason.statLabel}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}