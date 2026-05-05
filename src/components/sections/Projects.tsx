import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import { projects } from '../../data/resume'

const statusStyle: Record<string, string> = {
  'In Progress': 'bg-amber-50 text-amber-700 border border-amber-200',
  'Coming Soon': 'bg-slate-100 text-slate-600 border border-slate-200',
  'Live':        'bg-emerald-50 text-emerald-700 border border-emerald-200',
}

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-50">
      <SectionHeader eyebrow="Projects" title="Personal projects"
        subtitle="AI-powered tools I'm building to optimise life at home — because a data leader never stops solving problems." />
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-6 pb-4 border-b border-slate-100">
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">{p.title}</h3>
                  <p className="text-slate-500 text-sm">{p.subtitle}</p>
                </div>
                <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${statusStyle[p.status]}`}>
                  {p.status}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 pt-4 flex-1 flex flex-col">
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{p.description}</p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-600 rounded-md">{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-sky-500 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View on GitHub <ExternalLink size={11} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
