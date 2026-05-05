import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

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
  const { theme, toggle }       = useTheme()

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
      scrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-700/50 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-slate-900 dark:text-white text-sm tracking-tight">
          Visalakshi<span className="text-sky-500">.</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                active === l.href
                  ? 'text-sky-600 bg-sky-50 dark:bg-sky-900/30 dark:text-sky-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a href="mailto:visalakshisaminathan26@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors">
            Get in touch
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="px-4 py-3 space-y-0.5">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                {l.label}
              </a>
            ))}
            <a href="mailto:visalakshisaminathan26@gmail.com" onClick={() => setOpen(false)}
              className="block mt-2 text-center px-4 py-2.5 text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
