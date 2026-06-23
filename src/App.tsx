import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import ServiceArea from './components/ServiceArea'
import Works from './components/Works'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <ServiceArea />
        <Works />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
