import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import { experience, type Role } from '../../data/resume'

const accent: Record<string, string> = {
  sky:     'border-sky-400 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-400',
  violet:  'border-violet-400 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400',
  emerald: 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400',
  amber:   'border-amber-400 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400',
  rose:    'border-rose-400 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400',
}
const dot: Record<string, string> = {
  sky: 'bg-sky-400', violet: 'bg-violet-400', emerald: 'bg-emerald-400', amber: 'bg-amber-400', rose: 'bg-rose-400',
}

function RoleCard({ role, index }: { role: Role; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const ac = accent[role.accent] ?? accent.sky
  const dc = dot[role.accent] ?? dot.sky

  return (
    <motion.div initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative pl-8">
      <div className={`absolute left-0 top-6 w-3 h-3 rounded-full ring-2 ring-white dark:ring-slate-950 ring-offset-1 ${dc}`} />

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors overflow-hidden shadow-sm">
        <button onClick={() => setOpen(!open)}
          className="w-full text-left p-5 sm:p-6 flex items-center gap-4 group"
          aria-expanded={open}>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <span className="font-display font-bold text-slate-900 dark:text-white text-base">{role.title}</span>
              {role.current && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />Current
                </span>
              )}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{role.company}</p>
            <p className="text-slate-400 dark:text-slate-500 text-xs font-mono mt-0.5">{role.period}</p>
          </div>

          <div className={`hidden sm:block shrink-0 text-center px-4 py-2.5 rounded-lg border text-sm ${ac}`}>
            <div className="font-display font-bold text-lg leading-none">{role.stat.value}</div>
            <div className="text-xs mt-0.5 opacity-80">{role.stat.label}</div>
          </div>

          <ChevronDown size={18} className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden">
              <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{role.summary}</p>
                <ul className="space-y-2 mb-5">
                  {role.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-2 w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {role.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">{t}</span>
                  ))}
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
    <Section id="experience" className="bg-slate-50 dark:bg-slate-950">
      <SectionHeader eyebrow="Experience" title="Career timeline"
        subtitle="10+ years building analytics capability across banking, technology, and higher education." />
      <div className="relative">
        <div className="absolute left-[5px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
        <div className="space-y-5">
          {experience.map((r, i) => <RoleCard key={r.id} role={r} index={i} />)}
        </div>
      </div>
    </Section>
  )
}
