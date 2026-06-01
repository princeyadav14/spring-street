'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-white/60 text-sm">Early Access · IFSCA Regulated</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6">
          Wealth now has a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            global benchmark.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/50 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Institutional-grade global portfolios for Indian investors. 
          Systematic. Tax-optimised. Built to compound.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Link href="/contact" className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 text-sm">
            Request access →
          </Link>
          <Link href="/products" className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-all duration-200 text-sm">
            View products
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-8 mt-16 text-white/30 text-sm">
          <span>IFSCA Regulated</span>
          <span>·</span>
          <span>SIPC $500K Protected</span>
          <span>·</span>
          <span>AES-256 Encrypted</span>
        </div>

      </div>
    </section>
  )
}