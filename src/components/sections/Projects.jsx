import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'

function GithubIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper'
import { projects } from '../../data/resume'

const colorMap = {
  violet: {
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    pill: 'bg-violet-100 text-violet-700',
    badge: { amber: '', violet: 'bg-amber-100 text-amber-700' },
  },
  cyan: {
    gradient: 'from-cyan-500 to-teal-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    pill: 'bg-cyan-100 text-cyan-700',
  },
}

const statusColor = {
  'In Progress':   'bg-amber-100 text-amber-700 border border-amber-200',
  'Coming Soon':   'bg-cyan-100 text-cyan-700 border border-cyan-200',
  'Live':          'bg-emerald-100 text-emerald-700 border border-emerald-200',
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-sky-50/40">
      <SectionHeader
        eyebrow="Side Projects"
        title="Personal Projects"
        subtitle="AI-powered tools I'm building to optimise life at home — because a data leader never stops solving problems."
      />

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => {
          const c = colorMap[project.color] || colorMap.violet
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group`}
            >
              {/* Card header with gradient */}
              <div className={`bg-gradient-to-br ${c.gradient} p-6 text-white`}>
                <div className="text-4xl mb-3">{project.icon}</div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-xl">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.subtitle}</p>
                  </div>
                  <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor[project.status]}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-5">
                {/* Problem / Solution */}
                <div className="space-y-3">
                  <div className={`p-3 rounded-xl ${c.bg}`}>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">The Problem</p>
                    <p className="text-sm text-slate-700">{project.problem}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">The Solution</p>
                    <p className="text-sm text-slate-700">{project.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium ${c.pill}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-violet-600 transition-colors"
                >
                  <GithubIcon size={16} />
                  View on GitHub
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
