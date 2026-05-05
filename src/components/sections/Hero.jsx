import { Mail, Phone, MapPin, Download, ArrowDown } from 'lucide-react'

function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
import { profile, metrics } from '../../data/resume'
import MetricCounter from '../ui/MetricCounter'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ede9fe 0%, #fce7f3 35%, #dbeafe 70%, #ecfdf5 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-violet-200 rounded-full text-violet-700 text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Open to opportunities · Sydney, AU
          </span>
        </div>

        {/* Name & title */}
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-slate-900 mb-4 leading-tight">
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ')[1]}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 font-medium mb-2">
            {profile.title}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm">
            <MapPin size={14} />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Contact icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full text-slate-700 text-sm font-medium hover:bg-violet-50 hover:border-violet-300 transition-all shadow-sm"
          >
            <Mail size={15} className="text-violet-600" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full text-slate-700 text-sm font-medium hover:bg-violet-50 hover:border-violet-300 transition-all shadow-sm"
          >
            <LinkedInIcon size={15} className="text-violet-600" />
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full text-slate-700 text-sm font-medium hover:bg-violet-50 hover:border-violet-300 transition-all shadow-sm"
          >
            <Phone size={15} className="text-violet-600" />
            {profile.phone}
          </a>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="px-7 py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="flex items-center gap-2 px-7 py-3.5 bg-white/80 backdrop-blur-sm border border-violet-200 text-slate-700 font-semibold rounded-full hover:bg-white hover:-translate-y-0.5 transition-all shadow-sm"
          >
            <Download size={16} />
            View Experience
          </a>
        </div>

        {/* Metric counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(m => (
            <MetricCounter key={m.label} {...m} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs">
        <span>Scroll to explore</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
