'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(window.scrollY / totalHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-[60] h-[2px]" style={{
        background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
        width: `${scrollProgress * 100}%`,
        transition: 'width 0.1s ease'
      }} />

      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{
        backgroundColor: scrolled ? 'rgba(18,21,31,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none'
      }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/springstreet-wordmark.png" 
              alt="Spring Street" 
              className="h-10 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Products
            </Link>
            <Link href="/about" className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.6)' }}>
              About Us
            </Link>
            <Link href="/contact" className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Sign in
            </Link>
            <Link href="/contact" className="text-sm font-medium px-4 py-2 rounded-full text-white transition-colors" style={{ backgroundColor: '#2563eb' }}>
              Request access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-white transition-all duration-300" style={{
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
            }} />
            <span className="w-6 h-0.5 bg-white transition-all duration-300" style={{
              opacity: menuOpen ? 0 : 1
            }} />
            <span className="w-6 h-0.5 bg-white transition-all duration-300" style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
            }} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16" style={{ backgroundColor: '#12151f' }}>
          <div className="flex flex-col gap-2 p-6">
            <Link href="/products" onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-medium py-4 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              Products
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-medium py-4 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-medium py-4 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              Contact
            </Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-medium py-4 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              FAQ
            </Link>
            <div className="flex flex-col gap-3 mt-8">
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                className="text-center font-medium py-3.5 rounded-full text-white text-sm"
                style={{ backgroundColor: '#2563eb' }}>
                Request access
              </Link>
              <Link href="/login" onClick={() => setMenuOpen(false)}
                className="text-center font-medium py-3.5 rounded-full text-white text-sm"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}