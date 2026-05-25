import { Check, MessageCircle } from 'lucide-react'
import site from '../assets/data/site.json'

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export default function PackageCard({ pkg, featured = false }) {
  const waText = encodeURIComponent(
    `Halo, saya tertarik dengan ${pkg.name} seharga ${formatPrice(pkg.price)}. Bisa info lebih lanjut?`
  )
  const waUrl = `https://wa.me/${site.company.whatsapp}?text=${waText}`

  return (
    <div className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
      featured
        ? 'bg-gradient-to-b from-red-950/80 to-black border-red-600 shadow-xl shadow-red-900/30 hover:shadow-red-600/40'
        : 'bg-gray-900/50 border-gray-800 hover:border-red-800/60 hover:shadow-gray-900/50'
    }`}>

      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wider ${
              pkg.type === 'wireless'
                ? 'bg-blue-950 text-blue-400'
                : 'bg-green-950 text-green-400'
            }`}>
              {pkg.type === 'wireless' ? 'Wireless' : 'Wired'}
            </span>
            {pkg.brand !== 'Generic' && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-800 text-gray-400 uppercase tracking-wider">
                {pkg.brand}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white mt-2">{pkg.name}</h3>
          <p className="text-gray-400 text-sm">{pkg.subtitle}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className={`text-3xl font-black ${featured ? 'text-red-400' : 'text-white'}`}>
            {formatPrice(pkg.price)}
          </div>
          <div className="text-gray-500 text-sm mt-1">sudah termasuk instalasi</div>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl text-sm transition-all ${
            featured
              ? 'bg-red-600 hover:bg-red-500 text-white hover:shadow-lg hover:shadow-red-600/30'
              : 'bg-gray-800 hover:bg-red-600 text-gray-200 hover:text-white border border-gray-700 hover:border-red-600'
          }`}
        >
          <MessageCircle size={16} />
          Pesan Sekarang
        </a>
      </div>
    </div>
  )
}
