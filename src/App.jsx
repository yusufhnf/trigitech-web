import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
