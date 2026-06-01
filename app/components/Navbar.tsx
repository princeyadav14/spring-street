'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-semibold text-lg tracking-tight">
            Spring Street
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
            Products
          </Link>
          <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
            About Us
          </Link>
          <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
            Sign in
          </Link>
          <Link href="/contact" className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors duration-200">
            Request access
          </Link>
        </div>

      </div>
    </nav>
  )
}