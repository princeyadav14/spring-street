import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
    </main>
  )
}