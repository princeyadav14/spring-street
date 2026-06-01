import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyGlobal from './components/WhyGlobal'
import PerformanceChart from './components/PerformanceChart'
import Products from './components/Products'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <WhyGlobal />
      <PerformanceChart />
      <Products />
      <Footer />
    </main>
  )
}