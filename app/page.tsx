import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Products from './components/Products'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
    </main>
  )
}