 'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Spring Street?',
        a: 'Spring Street is a global investment management platform built for Indian investors and NRIs to make global investing simple and easy. We build in-house products called "Prisma" that help you grow your wealth globally.',
      },
      {
        q: 'What is Prisma? What does Prisma invest in?',
        a: 'Prisma is our flagship product — a family of globally diversified ETF portfolios. Each Prisma is built on a systematic, factor-based methodology and rebalanced annually. They invest in global ETFs across equities, fixed income, and commodities.',
      },
      {
        q: 'What is the minimum investment size to invest in Prisma?',
        a: 'The minimum investment to get started with Prisma is $250 USD. You can top up your wallet at any time and switch between Prisma strategies without any lock-in period.',
      },
      {
        q: 'How does Spring Street enable resident Indians to invest globally?',
        a: 'Spring Street operates through GIFT City (Gujarat International Finance Tec-City), an IFSCA-regulated platform. Indian residents can remit up to $250,000 per year under the RBI Liberalised Remittance Scheme (LRS) to invest globally through us.',
      },
    ],
  },
  {
    category: 'Funding & Taxes',
    questions: [
      {
        q: 'How do I fund my Spring Street wallet?',
        a: 'You fund your USD wallet via your Indian bank account under the LRS scheme. The process is straightforward — you initiate a wire transfer from your bank, and the funds appear in your Spring Street wallet within 2-3 business days.',
      },
      {
        q: 'What are the tax implications of investing through Spring Street?',
        a: 'Gains from your Prisma investments are subject to capital gains tax in India. Long-term capital gains (held over 24 months) are taxed at 12.5% without indexation. Spring Street provides detailed tax statements to help you file your returns accurately.',
      },
      {
        q: 'Does Spring Street provide tax statements?',
        a: 'Yes. We provide comprehensive annual tax statements including your capital gains summary, dividend income, and foreign asset reporting data required for your ITR filing.',
      },
    ],
  },
  {
    category: 'Platform & Security',
    questions: [
      {
        q: 'Is Spring Street regulated?',
        a: 'Yes. Spring Street is an IFSCA Regulated Partner operating out of GIFT City. Your investments are held with our broker partner ViewTrade, which is SIPC-insured up to $500,000.',
      },
      {
        q: 'How secure is my data and money?',
        a: 'Your data is encrypted with AES-256 encryption. Your funds are held in segregated accounts — Spring Street never commingles client funds. We use bank-grade security protocols across all our systems.',
      },
      {
        q: 'Who do I contact for help?',
        a: 'You can reach us at hello@springstreet.in or call us at +91 79 0189 7503. Our team is available Mon-Sun to help with any questions about your account, investments, or platform.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b border-white/5 cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="text-white text-sm font-medium">{q}</span>
        <span className={`text-white/40 text-lg flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </div>
      {open && (
        <div className="pb-5 text-white/40 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-4">FAQ</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-tight mb-6">
          Common questions.
        </h1>
        <p className="text-white/40 text-xl max-w-xl leading-relaxed">
          Everything you need to know about Prisma, GIFT City, ViewTrade, funding, taxes, and getting started.
        </p>
      </section>

      {/* FAQ content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {faqs.map((category, i) => (
            <div key={i}>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-6">
                {category.category}
              </p>
              <div>
                {category.questions.map((item, j) => (
                  <FAQItem key={j} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-white/40 mb-8">Our team is happy to help you get started.</p>
          <a href="/contact" className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors text-sm inline-block">
            Contact us →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
