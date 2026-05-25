import { useState, useEffect } from 'react'
import { Menu, X, Camera } from 'lucide-react'
import site from '../assets/data/site.json'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Paket', href: '#packages' },
  { label: 'Keunggulan', href: '#why-us' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNav(e, '#hero')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
              <Camera size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Trigi<span className="text-red-500">tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-gray-300 hover:text-red-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${site.company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white p-1"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/98 border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-gray-300 hover:text-red-400 font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${site.company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-lg text-center transition-colors"
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  )
}
