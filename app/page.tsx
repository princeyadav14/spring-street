import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyGlobal from './components/WhyGlobal'
import ChartCarousel from './components/ChartCarousel'
import Products from './components/Products'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#12151f' }} className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <WhyGlobal />
      <ChartCarousel />
      <Products />
      <Footer />
    </main>
  )
}