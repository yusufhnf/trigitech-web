import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './icons/SocialIcons'
import site from '../assets/data/site.json'

export default function Contact() {
  const { company } = site

  const contactItems = [
    {
      Icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: company.phone,
      href: `https://wa.me/${company.whatsapp}?text=Halo, saya ingin mengetahui lebih lanjut tentang paket CCTV Trigitech.`,
      color: 'text-green-400',
      bg: 'bg-green-950/40 border-green-900/50',
    },
    {
      Icon: ({ size, className }) => <Phone size={size} className={className} />,
      label: 'Telepon',
      value: company.phone,
      href: `tel:+${company.whatsapp}`,
      color: 'text-blue-400',
      bg: 'bg-blue-950/40 border-blue-900/50',
    },
    {
      Icon: InstagramIcon,
      label: 'Instagram',
      value: `@${company.instagram}`,
      href: company.instagramUrl,
      color: 'text-pink-400',
      bg: 'bg-pink-950/40 border-pink-900/50',
    },
    {
      Icon: FacebookIcon,
      label: 'Facebook',
      value: company.facebook,
      href: company.facebookUrl,
      color: 'text-blue-500',
      bg: 'bg-blue-950/40 border-blue-900/50',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Konsultasi Gratis<br />
              <span className="text-red-500">Sekarang Juga</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Tidak yakin paket mana yang cocok? Tim kami siap membantu Anda memilih solusi CCTV yang tepat sesuai kebutuhan dan budget Anda.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-sm">Area Pelayanan: Seluruh Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-sm">Jam Layanan: Senin – Sabtu, 08.00 – 20.00 WIB</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${company.whatsapp}?text=Halo, saya ingin konsultasi tentang pemasangan CCTV.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
            >
              <MessageCircle size={20} />
              Chat WhatsApp Sekarang
            </a>
          </div>

          {/* Right: Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item) => {
              const Icon = item.Icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl border ${item.bg} hover:scale-105 transition-all duration-200 group`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={item.color} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">{item.label}</div>
                    <div className="text-white font-semibold text-sm">{item.value}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
