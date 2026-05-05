import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper'
import { experience } from '../../data/resume'

const colorMap = {
  violet:  { dot: 'bg-violet-500',  border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700',  highlight: 'bg-violet-50 border-violet-200 text-violet-800',  pill: 'bg-violet-100 text-violet-700' },
  cyan:    { dot: 'bg-cyan-500',    border: 'border-cyan-200',   badge: 'bg-cyan-100 text-cyan-700',      highlight: 'bg-cyan-50 border-cyan-200 text-cyan-800',        pill: 'bg-cyan-100 text-cyan-700' },
  emerald: { dot: 'bg-emerald-500', border: 'border-emerald-200',badge: 'bg-emerald-100 text-emerald-700',highlight: 'bg-emerald-50 border-emerald-200 text-emerald-800',pill: 'bg-emerald-100 text-emerald-700' },
  orange:  { dot: 'bg-orange-500',  border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700',  highlight: 'bg-orange-50 border-orange-200 text-orange-800',  pill: 'bg-orange-100 text-orange-700' },
  rose:    { dot: 'bg-rose-500',    border: 'border-rose-200',   badge: 'bg-rose-100 text-rose-700',      highlight: 'bg-rose-50 border-rose-200 text-rose-800',        pill: 'bg-rose-100 text-rose-700' },
}

function RoleCard({ role, index }) {
  const [open, setOpen] = useState(index === 0)
  const c = colorMap[role.color] || colorMap.violet

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-6 w-5 h-5 rounded-full border-2 border-white shadow-md z-10 ${c.dot}`} />

      <div
        className={`bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
      >
        {/* Card header — always visible */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-5 sm:p-6 flex items-start gap-4"
          aria-expanded={open}
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
                {role.title}
              </h3>
              {role.current && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Present
                </span>
              )}
            </div>
            <p className="font-semibold text-slate-600 text-sm mb-1">{role.company}</p>
            <p className="text-slate-400 text-xs font-mono">{role.period}</p>
            {!open && (
              <p className="text-slate-500 text-sm mt-2 line-clamp-2">{role.summary}</p>
            )}
          </div>

          {/* Highlight metric */}
          <div className={`hidden sm:flex flex-col items-center text-center px-4 py-3 rounded-xl border ${c.highlight} min-w-[90px]`}>
            <div className="font-display font-bold text-2xl">{role.highlight.value}</div>
            <div className="text-xs leading-tight mt-0.5">{role.highlight.label}</div>
          </div>

          <ChevronDown
            size={20}
            className={`text-slate-400 transition-transform duration-300 shrink-0 mt-1 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6 border-t border-slate-100 pt-4">
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{role.summary}</p>

                {/* Achievements */}
                <ul className="space-y-2.5 mb-5">
                  {role.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Zap size={14} className="text-violet-400 mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div>
                  <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map(t => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium ${c.pill}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-emerald-50/40">
      <SectionHeader
        eyebrow="Career"
        title="Professional Experience"
        subtitle="10+ years building analytics capability across Tier-1 banking, digital banking, and enterprise technology."
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="timeline-line" />

        <div className="space-y-6">
          {experience.map((role, i) => (
            <RoleCard key={role.id} role={role} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
