import { useEffect, useState } from 'react'
import { Mail, MapPin, ArrowDown } from "lucide-react"
import { profile, metrics } from '../../data/resume'
import MetricCounter from '../ui/MetricCounter'
import Constellation from '../ui/Constellation'
import { useTheme } from '../../context/ThemeContext'
import { onNameClick } from '../ui/EasterEggs'

interface HeroProps {
  addToast: (msg: string, emoji: string, color: string) => void
}

export default function Hero({ addToast }: HeroProps) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [rocketProgress, setRocketProgress] = useState(0)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const onScroll = () => {
      const rect = hero.getBoundingClientRect()
      // scrolled = how many px we've moved past the top of the hero
      const scrolled = -rect.top
      const travelDistance = rect.height * 0.8
      const progress = Math.max(0, Math.min(1, scrolled / travelDistance))
      setRocketProgress(progress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: dark ? '#020617' : '#ffffff' }}>

      {/* Constellation — dark only */}
      {dark && (
        <div className="absolute inset-0">
          <Constellation />
        </div>
      )}

      {/* Light mode gradient */}
      {!dark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e0f2fe,transparent)]" />
      )}

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 pt-24 pb-16">
        {/* Status pill */}
        <div className="mb-10">
          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${
            dark
              ? 'border-white/10 bg-white/5 text-white/60'
              : 'border-slate-200 bg-slate-50 text-slate-500'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to senior analytics leadership roles · Sydney, AU
          </span>
        </div>

        {/* Name — click 3× or 7× for easter eggs */}
        <h1
          className="font-display font-extrabold leading-[0.95] tracking-tight mb-4 cursor-default"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: dark ? '#ffffff' : '#0f172a' }}
          onClick={() => onNameClick(addToast)}>
          {profile.firstName}<br />
          <span style={{ color: dark ? '#38bdf8' : '#0ea5e9' }}>{profile.lastName}</span>
        </h1>

        {/* Rocket scroll track — under the name */}
        <div className="relative mb-8 flex items-center gap-3">
          {/* track line */}
          <div
            className="relative flex-1 h-px rounded-full overflow-visible"
            style={{ backgroundColor: dark ? 'rgba(255,255,255,0.08)' : '#e2e8f0' }}>
            {/* progress fill */}
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-none"
              style={{
                width: `${rocketProgress * 100}%`,
                backgroundColor: dark ? 'rgba(56,189,248,0.25)' : 'rgba(14,165,233,0.2)',
              }}
            />
            {/* rocket emoji — rotated to point right */}
            <span
              className="absolute top-1/2 -translate-y-1/2 text-xl sm:text-2xl select-none leading-none transition-none"
              style={{
                left: `${rocketProgress * 100}%`,
                transform: `translateX(-50%) translateY(-50%) rotate(90deg)`,
                filter: rocketProgress > 0.98 ? 'brightness(1.5)' : 'none',
              }}>
              🚀
            </span>
            {/* moon at far right */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 text-base select-none leading-none"
              style={{ opacity: 0.3 + rocketProgress * 0.7 }}>
              🌙
            </span>
          </div>
        </div>

        {/* Title + tagline */}
        <p style={{ color: dark ? '#94a3b8' : '#475569' }}
          className="text-lg sm:text-xl font-medium mb-2 max-w-xl">
          {profile.title}
        </p>
        <p style={{ color: dark ? '#64748b' : '#64748b' }}
          className="text-base max-w-lg leading-relaxed mb-10">
          {profile.tagline}
        </p>

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a href={`mailto:${profile.email}`}
            className={`flex items-center gap-1.5 text-sm transition-colors hover:text-sky-500 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            <Mail size={14} /> {profile.email}
          </a>
          <span style={{ color: dark ? '#334155' : '#cbd5e1' }} className="text-xs">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm transition-colors hover:text-sky-500 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <span style={{ color: dark ? '#334155' : '#cbd5e1' }} className="text-xs">·</span>
          <span className={`flex items-center gap-1.5 text-sm ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
            <MapPin size={14} /> {profile.location}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-20">
          <a href="#contact"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-sky-500/20">
            Get in touch
          </a>
          <a href="#experience"
            className={`px-6 py-3 font-semibold text-sm rounded-lg transition-colors border ${
              dark
                ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80'
                : 'bg-slate-900 hover:bg-slate-700 border-slate-900 text-white'
            }`}>
            View experience
          </a>
        </div>

        {/* Metrics */}
        <div
          className="border-t pt-10"
          style={{ borderColor: dark ? 'rgba(255,255,255,0.05)' : '#e2e8f0' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {metrics.map(m => <MetricCounter key={m.label} {...m} />)}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative pb-8 flex justify-center">
        <a href="#about"
          className={`flex flex-col items-center gap-1.5 transition-colors group hover:text-sky-500 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
