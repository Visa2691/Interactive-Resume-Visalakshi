import { Mail, MapPin, ArrowDown } from "lucide-react"
import { profile, metrics } from '../../data/resume'
import MetricCounter from '../ui/MetricCounter'
import Constellation from '../ui/Constellation'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-white dark:bg-slate-950 flex flex-col overflow-hidden transition-colors duration-300">
      {/* Constellation — dark mode only */}
      <div className="hidden dark:block absolute inset-0">
        <Constellation />
      </div>
      {/* Light mode subtle gradient */}
      <div className="block dark:hidden absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e0f2fe,transparent)]" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/6 dark:bg-sky-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 pt-24 pb-16">
        {/* Status pill */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-white/60 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to senior analytics leadership roles · Sydney, AU
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-slate-900 dark:text-white leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          {profile.firstName}<br />
          <span className="text-sky-500 dark:text-sky-400">{profile.lastName}</span>
        </h1>

        {/* Title + tagline */}
        <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-medium mb-2 max-w-xl">
          {profile.title}
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-base max-w-lg leading-relaxed mb-10">
          {profile.tagline}
        </p>

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 text-sm transition-colors">
            <Mail size={14} /> {profile.email}
          </a>
          <span className="text-slate-300 dark:text-slate-700 text-xs">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 text-sm transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
          </a>
          <span className="text-slate-300 dark:text-slate-700 text-xs">·</span>
          <span className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-sm">
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
            className="px-6 py-3 bg-slate-900 dark:bg-white/5 hover:bg-slate-700 dark:hover:bg-white/10 border border-slate-900 dark:border-white/10 text-white dark:text-white/80 font-semibold text-sm rounded-lg transition-colors">
            View experience
          </a>
        </div>

        {/* Metrics */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {metrics.map(m => <MetricCounter key={m.label} {...m} />)}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative pb-8 flex justify-center">
        <a href="#about" className="flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-600 hover:text-sky-500 dark:hover:text-slate-400 transition-colors group">
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
