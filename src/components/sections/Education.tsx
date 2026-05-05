import { motion } from 'framer-motion'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import { education, certifications } from '../../data/resume'

export default function Education() {
  return (
    <Section id="education" className="bg-slate-50">
      <SectionHeader eyebrow="Credentials" title="Education & certifications" />
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-5">Education</p>
          <div className="space-y-4">
            {education.map((ed, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-display font-bold text-slate-900 text-base leading-snug">{ed.degree}</h3>
                  <span className="shrink-0 text-xs font-mono text-slate-400">{ed.period}</span>
                </div>
                <p className="text-sky-600 font-semibold text-sm mb-0.5">{ed.major}</p>
                <p className="text-slate-500 text-sm">{ed.institution}</p>
                {ed.detail && <p className="text-slate-400 text-xs mt-1 font-mono">{ed.detail}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-5">Certifications</p>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">{c.name}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{c.issuer}</p>
                </div>
                <span className="shrink-0 px-2.5 py-1 text-xs font-mono font-semibold bg-sky-50 text-sky-600 border border-sky-200 rounded-lg">
                  {c.year}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-white rounded-xl border border-slate-200">
            <p className="font-semibold text-slate-700 text-sm mb-1">References</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Available on request — professional referees from UBank, Commonwealth Bank, and the University of Sydney.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
