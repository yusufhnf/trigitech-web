import { Camera, MessageCircle, Heart } from 'lucide-react'
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './icons/SocialIcons'
import site from '../assets/data/site.json'

export default function Footer() {
  const { company } = site

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
                <Camera size={20} className="text-white" />
              </div>
              <span className="font-bold text-white text-xl tracking-tight">
                Trigi<span className="text-red-500">tech</span> CCTV
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Solusi CCTV profesional untuk keamanan rumah dan bisnis Anda. Instalasi cepat, harga terjangkau, monitoring via smartphone.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} className="text-gray-300" />
              </a>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} className="text-gray-300" />
              </a>
              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Beranda', href: '#hero' },
                { label: 'Paket CCTV', href: '#packages' },
                { label: 'Keunggulan', href: '#why-us' },
                { label: 'Kontak', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>{company.phone}</li>
              <li>@{company.instagram}</li>
              <li>{company.facebook}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trigitech CCTV. Hak cipta dilindungi.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Dibuat dengan <Heart size={12} className="text-red-600" /> untuk keamanan Anda
          </p>
        </div>
      </div>
    </footer>
  )
}
