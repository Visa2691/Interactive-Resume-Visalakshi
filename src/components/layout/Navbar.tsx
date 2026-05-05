import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Hobbies',    href: '#hobbies' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      let cur = ''
      links.forEach(({ href }) => {
        const el = document.querySelector(href)
        if (el && window.scrollY >= (el as HTMLElement).offsetTop - 130) cur = href
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-slate-900 text-sm tracking-tight">
          Visalakshi<span className="text-sky-500">.</span>
        </a>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                active === l.href ? 'text-sky-600 bg-sky-50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="mailto:visalakshisaminathan26@gmail.com"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors">
          Get in touch
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-500 hover:text-slate-900">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-3 space-y-0.5">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                {l.label}
              </a>
            ))}
            <a href="mailto:visalakshisaminathan26@gmail.com" onClick={() => setOpen(false)}
              className="block mt-2 text-center px-4 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-lg">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
