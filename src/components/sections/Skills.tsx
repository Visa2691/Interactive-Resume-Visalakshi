import { motion } from 'framer-motion'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import { competencies, techStack } from '../../data/resume'
import { useInView } from '../../hooks/useIntersectionObserver'

const levelStyle: Record<string, string> = {
  Expert:     'bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-700',
  Proficient: 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600',
  Familiar:   'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600',
}

export default function Skills() {
  const { ref, inView } = useInView()
  return (
    <Section id="skills" className="bg-white dark:bg-slate-900">
      <SectionHeader eyebrow="Skills" title="Expertise" />
      <div ref={ref} className="grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-6">Core competencies</p>
          <div className="space-y-5">
            {competencies.map((c, i) => (
              <div key={c.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.label}</span>
                  <span className="text-xs font-mono text-slate-400">{c.score}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-sky-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${c.score}%` } : {}}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-6">Tech stack</p>
          <div className="space-y-6">
            {Object.entries(techStack).map(([level, tools]) => (
              <div key={level}>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5">{level}</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map(t => (
                    <span key={t} className={`px-3 py-1.5 text-sm font-mono rounded-lg ${levelStyle[level]}`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
            <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-4">Certifications</p>
            <div className="space-y-2">
              {[
                { name: 'AWS Certified AI Practitioner', year: '2024' },
                { name: 'Certified Scrum Master (CSM)', year: '2023' },
              ].map(c => (
                <div key={c.name} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.name}</span>
                  <span className="text-xs font-mono text-slate-400">{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
