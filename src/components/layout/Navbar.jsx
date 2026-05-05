import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About',       href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Hobbies',     href: '#hobbies' },
  { label: 'Education',   href: '#education' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navItems.map(i => document.querySelector(i.href))
      let current = ''
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = '#' + sec.id
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-violet-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-lg text-violet-700 tracking-tight"
        >
          VS
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === item.href
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-slate-600 hover:text-violet-700 hover:bg-violet-50'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-full hover:bg-violet-700 transition-colors"
        >
          Get in Touch
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-violet-700 hover:bg-violet-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-violet-100 shadow-lg">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active === item.href
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-slate-600 hover:bg-violet-50 hover:text-violet-700'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
