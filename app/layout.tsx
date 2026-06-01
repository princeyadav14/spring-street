 import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spring Street',
  description: 'Global Stage for Indian Capital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
