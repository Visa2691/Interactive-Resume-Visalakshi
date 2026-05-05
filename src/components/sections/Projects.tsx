import { motion } from 'framer-motion'
import { ExternalLink, ChefHat, Plane } from 'lucide-react'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import Constellation from '../ui/Constellation'
import { projects } from '../../data/resume'
import { useTheme } from '../../context/ThemeContext'

/* ── SmartMeals mock app preview ───────────────────────── */
function SmartMealsPreview({ dark }: { dark: boolean }) {
  return (
    <div className={`w-full rounded-xl overflow-hidden border shadow-2xl text-[11px] font-mono select-none ${
      dark ? 'bg-slate-950 border-slate-700/60' : 'bg-slate-100 border-slate-300'
    }`}>
      {/* App header */}
      <div className={`flex items-center gap-2 px-3 py-2 border-b ${
        dark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className={`w-5 h-5 rounded flex items-center justify-center ${
          dark ? 'bg-sky-500/20 border border-sky-500/30' : 'bg-sky-100 border border-sky-200'
        }`}>
          <ChefHat size={10} className="text-sky-400" />
        </div>
        <span className={`font-semibold text-[10px] ${dark ? 'text-white' : 'text-slate-800'}`}>
          Smart<span className="text-sky-400">Meals</span>
        </span>
        <span className={`ml-auto border rounded px-1 text-[8px] ${
          dark ? 'text-slate-600 border-slate-700' : 'text-slate-400 border-slate-200'
        }`}>multi-agent</span>
      </div>
      {/* Baby age row */}
      <div className="px-3 pt-3 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span className={dark ? 'text-slate-500' : 'text-slate-400'}>Age</span>
          <span className="text-sky-400 font-semibold">8 months</span>
        </div>
        <div className={`h-1 rounded-full overflow-hidden ${dark ? 'bg-slate-800' : 'bg-slate-200'}`}>
          <div className="h-full w-[35%] bg-sky-500 rounded-full" />
        </div>
        <div className={`mt-1.5 px-2 py-1.5 rounded-lg border ${
          dark ? 'bg-sky-500/10 border-sky-500/20' : 'bg-sky-50 border-sky-200'
        }`}>
          <p className="text-sky-400 font-semibold text-[9px]">8–10 months (Mashed)</p>
          <p className={`text-[8px] mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Mashed and soft lumpy textures, 2–3 meals/day</p>
        </div>
      </div>
      {/* Agent pipeline */}
      <div className="px-3 pb-3 space-y-1.5">
        <p className={`text-[8px] uppercase tracking-widest mb-1 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>Agent pipeline</p>
        {[
          { icon: '🍽️', name: 'Meal Plan Agent', model: 'Claude Opus',  status: 'done',    color: 'text-emerald-400' },
          { icon: '🛒', name: 'Grocery Agent',   model: 'Claude Haiku', status: 'running', color: 'text-sky-400' },
        ].map(a => (
          <div key={a.name} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border ${
            dark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-200'
          }`}>
            <span>{a.icon}</span>
            <span className={`flex-1 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{a.name}</span>
            <span className={dark ? 'text-slate-600' : 'text-slate-400'}>{a.model}</span>
            <span className={`${a.color} text-[8px]`}>
              {a.status === 'done' ? '✓ done' : '⟳ running'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── FamilyTrip mock app preview ────────────────────────── */
function FamilyTripPreview({ dark }: { dark: boolean }) {
  return (
    <div className={`w-full rounded-xl overflow-hidden border shadow-2xl text-[11px] font-mono select-none ${
      dark ? 'bg-slate-950 border-slate-700/60' : 'bg-slate-100 border-slate-300'
    }`}>
      {/* App header */}
      <div className={`flex items-center gap-2 px-3 py-2 border-b ${
        dark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className={`w-5 h-5 rounded flex items-center justify-center ${
          dark ? 'bg-violet-500/20 border border-violet-500/30' : 'bg-violet-100 border border-violet-200'
        }`}>
          <Plane size={10} className="text-violet-400" />
        </div>
        <span className={`font-semibold text-[10px] ${dark ? 'text-white' : 'text-slate-800'}`}>
          Family<span className="text-violet-400">Trip</span>
        </span>
        <span className={`ml-auto border rounded px-1 text-[8px] ${
          dark ? 'text-slate-600 border-slate-700' : 'text-slate-400 border-slate-200'
        }`}>multi-agent</span>
      </div>
      {/* Destination row */}
      <div className="px-3 pt-3 pb-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className={dark ? 'text-slate-500' : 'text-slate-400'}>Destination</span>
          <span className="text-violet-400 font-semibold">Bali · 18mo Oliver</span>
        </div>
        <div className={`px-2 py-1.5 rounded-lg border ${
          dark ? 'bg-violet-500/10 border-violet-500/20' : 'bg-violet-50 border-violet-200'
        }`}>
          <p className="text-violet-400 font-semibold text-[9px]">Day 1 — Arrival & Beach</p>
          <div className="mt-1 space-y-0.5">
            {[
              { time: '10:00', label: 'Airport → Villa', nap: false },
              { time: '12:00', label: '🌙 Nap window',   nap: true  },
              { time: '15:00', label: 'Seminyak Beach',  nap: false },
            ].map(item => (
              <div key={item.time} className={`flex items-center gap-1.5 text-[8px] ${
                item.nap ? 'text-violet-400' : dark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <span className="w-8 shrink-0 font-medium">{item.time}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Agent pipeline */}
      <div className="px-3 pb-3 space-y-1.5">
        <p className={`text-[8px] uppercase tracking-widest mb-1 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>Agent pipeline</p>
        {[
          { icon: '🗺️', name: 'Itinerary Agent', model: 'Claude Opus',  status: 'done',    color: 'text-emerald-400' },
          { icon: '🧳', name: 'Packing Agent',   model: 'Claude Haiku', status: 'running', color: 'text-violet-400' },
        ].map(a => (
          <div key={a.name} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border ${
            dark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-slate-200'
          }`}>
            <span>{a.icon}</span>
            <span className={`flex-1 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{a.name}</span>
            <span className={dark ? 'text-slate-600' : 'text-slate-400'}>{a.model}</span>
            <span className={`${a.color} text-[8px]`}>
              {a.status === 'done' ? '✓ done' : '⟳ running'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main component ─────────────────────────────────────── */
const statusStyle: Record<string, string> = {
  'In Progress': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700',
  'Coming Soon': 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600',
  'Live':        'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700',
}

export default function Projects() {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [smartMeals, familyTrip] = projects

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Constellation — dark only */}
      {dark && (
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Constellation />
        </div>
      )}

      <div className="relative">
        <SectionHeader eyebrow="Projects" title="Personal projects"
          subtitle="AI-powered tools I'm building to optimise life at home, because a data leader never stops solving problems." />

        <div className="grid sm:grid-cols-2 gap-6 items-start">

          {/* ── SmartMeals — featured card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="animate-float bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-slate-950 overflow-hidden"
            style={{ willChange: 'transform' }}>

            {/* Preview area */}
            <div className="p-4 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700">
              <SmartMealsPreview dark={dark} />
            </div>

            {/* Card body */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg leading-tight">{smartMeals.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{smartMeals.subtitle}</p>
                </div>
                <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${statusStyle[smartMeals.status]}`}>
                  {smartMeals.status}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{smartMeals.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {smartMeals.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">{t}</span>
                ))}
              </div>

              <a href={smartMeals.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View on GitHub <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* ── FamilyTrip — featured card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-slate-950 overflow-hidden"
            style={{ willChange: 'transform' }}>

            {/* Preview area */}
            <div className="p-4 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700">
              <FamilyTripPreview dark={dark} />
            </div>

            {/* Card body */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg leading-tight">{familyTrip.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{familyTrip.subtitle}</p>
                </div>
                <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${statusStyle[familyTrip.status]}`}>
                  {familyTrip.status}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{familyTrip.description}</p>

              <ul className="space-y-1.5 mb-4">
                {familyTrip.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {familyTrip.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">{t}</span>
                ))}
              </div>

              <a href={familyTrip.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View on GitHub <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  )
}
