import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const menu = [
    { name: 'Beranda', path: '/' },
    {
      name: 'Produk', submenu: [
        { name: 'Mesin Pertanian', path: '/mesinpertanian' },
        { name: 'Mesin Jalan', path: '/mesinjalan' },
        { name: 'Alat Uji', path: '/alatujilab' },
      ]
    },
    { name: 'Berita', path: '/berita' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ]

  // 🔹 Efek scroll: transparan di atas, solid + bayangan saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) setShowNavbar(true)
      else setShowNavbar(false)
      setScrolled(window.scrollY > 40)
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // 🔹 Hover delay agar submenu tidak langsung hilang
  const handleMouseEnter = (menuName) => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setHoveredMenu(menuName)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setHoveredMenu(null), 250)
    setHoverTimeout(timeout)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-none
      ${showNavbar ? 'translate-y-0 opacity-100 animate-navbar-fade' : '-translate-y-20 opacity-0'}
      ${scrolled 
        ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]' 
        : 'bg-transparent shadow-none'}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
      <img
        src="/images/logo.png"
        
      />

        <h1 className={`text-xl font-bold bg-blue-600 transition-colors duration-300 text-orange-500` }>
        
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          {menu.map((item, index) => (
            <div
              key={item.name}
              className="relative animate-main-stagger"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`font-bold px-3 py-1 transition-all duration-300 rounded-none border-none ${
                  scrolled
                    ? 'text-lime-800 hover:bg-lime-800 hover:text-white'
                    : 'text-lime-600 hover:bg-lime-800 hover:text-white'
                }`}
              >
                {item.name}
              </Link>

              {/* Desktop Submenu */}
              {item.submenu && hoveredMenu === item.name && (
                <div className="absolute top-full left-0 bg-gray-100 mt-1 overflow-hidden z-50 border border-gray-200 rounded-none animate-shadow-fade">
                  {item.submenu.map((sub, i) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className={`block px-4 py-2 text-lime-800 font-bold hover:bg-lime-800 hover:text-white transition-all duration-300 whitespace-nowrap
                        ${i !== item.submenu.length - 1 ? 'border-b border-gray-200' : ''}
                        animate-stagger`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'text-lime-800' : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden flex flex-col space-y-2 p-4 animate-shadow-fade border-t border-gray-200 ${
            scrolled ? 'bg-white' : 'bg-blue-900 bg-opacity-90'
          }`}
        >
          {menu.map((item, index) => (
            <div
              key={item.name}
              className="animate-main-stagger"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-bold px-3 py-2 rounded-none transition-all duration-300 ${
                  scrolled
                    ? 'text-blue-600 hover:bg-blue-600 hover:text-white'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.name}
              </Link>

              {/* Mobile Submenu */}
              {item.submenu && (
                <div className="pl-4 flex flex-col space-y-1 bg-gray-50 border border-gray-200 rounded-none overflow-hidden animate-shadow-fade">
                  {item.submenu.map((sub, i) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setOpen(false)}
                      className={`font-bold px-3 py-2 text-blue-600 rounded-none hover:bg-blue-600 hover:text-white transition-all duration-300 border-b border-gray-200 animate-stagger`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
