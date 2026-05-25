import { useState } from 'react'
import packages from '../assets/data/packages.json'
import PackageCard from './PackageCard'

const FILTERS = [
  { label: 'Semua', value: 'all' },
  { label: 'Wired (NVR)', value: 'wired' },
  { label: 'Wireless', value: 'wireless' },
]

export default function Packages() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? packages
    : packages.filter((p) => p.type === activeFilter)

  return (
    <section id="packages" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Harga Terjangkau
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Paket CCTV Kami
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Pilih paket yang sesuai kebutuhan Anda. Semua paket sudah termasuk jasa instalasi profesional.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.value
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-red-800 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              featured={pkg.badge === 'Terlaris'}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Harga dapat berubah sewaktu-waktu. Hubungi kami untuk penawaran terbaik.
        </p>
      </div>
    </section>
  )
}
