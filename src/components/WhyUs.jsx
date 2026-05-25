import { Shield, Wrench, Smartphone, Headphones, BadgeCheck, Volume2 } from 'lucide-react'
import site from '../assets/data/site.json'

const ICON_MAP = { Shield, Wrench, Smartphone, Headphones, BadgeCheck, Volume2 }

export default function WhyUs() {
  const { whyUs } = site

  return (
    <section id="why-us" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Mengapa Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Keunggulan Trigitech CCTV
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan produk berkualitas tinggi dan tim profesional yang berpengalaman.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <div
                key={i}
                className="group bg-black/50 border border-gray-800 rounded-2xl p-6 hover:border-red-800/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-red-950/60 border border-red-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-900/60 transition-colors">
                  {Icon && <Icon size={22} className="text-red-400" />}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
