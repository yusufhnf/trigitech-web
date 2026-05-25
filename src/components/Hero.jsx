import { Shield, ChevronDown, Phone } from 'lucide-react'
import site from '../assets/data/site.json'

export default function Hero() {
  const { hero, company, stats } = site

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(220,38,38,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,38,38,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-red-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <Shield size={14} />
            <span>Solusi CCTV Profesional Terpercaya</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight">
            {hero.heading}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-red-500">{hero.subheading}</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollTo('#packages')}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
            >
              {hero.ctaText}
            </button>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-red-950/30"
            >
              <Phone size={20} />
              {hero.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-red-500 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#packages')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-red-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
