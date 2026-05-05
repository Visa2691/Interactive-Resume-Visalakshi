import { Mail, MapPin, ArrowDown } from "lucide-react"
import { profile, metrics } from '../../data/resume'
import MetricCounter from '../ui/MetricCounter'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-slate-950 flex flex-col">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full" />

      <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 pt-24 pb-16">
        {/* Status pill */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to senior analytics leadership roles · Sydney, AU
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          {profile.firstName}<br />
          <span className="text-sky-400">{profile.lastName}</span>
        </h1>

        {/* Title + tagline */}
        <p className="text-slate-400 text-lg sm:text-xl font-medium mb-2 max-w-xl">
          {profile.title}
        </p>
        <p className="text-slate-500 text-base max-w-lg leading-relaxed mb-10">
          {profile.tagline}
        </p>

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-sm transition-colors">
            <Mail size={14} /> {profile.email}
          </a>
          <span className="text-slate-700 text-xs">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-sm transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
          </a>
          <span className="text-slate-700 text-xs">·</span>
          <span className="flex items-center gap-1.5 text-slate-500 text-sm">
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
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-semibold text-sm rounded-lg transition-colors">
            View experience
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {metrics.map(m => <MetricCounter key={m.label} {...m} />)}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative pb-8 flex justify-center">
        <a href="#about" className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors group">
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
