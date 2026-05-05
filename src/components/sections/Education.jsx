import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper'
import { education, certifications } from '../../data/resume'

const certColors = {
  amber:  { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700' },
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-white">
      <SectionHeader
        eyebrow="Credentials"
        title="Education & Certifications"
      />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-violet-600" size={20} />
            <h3 className="font-display font-bold text-slate-900 text-lg">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((ed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-violet-50 border border-violet-200"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h4 className="font-display font-bold text-slate-900 text-base leading-snug">
                    {ed.degree}
                  </h4>
                  <span className="shrink-0 font-mono text-xs text-slate-400">{ed.period}</span>
                </div>
                <p className="text-violet-700 font-semibold text-sm mb-1">{ed.major}</p>
                <p className="text-slate-600 text-sm">{ed.institution}</p>
                <p className="text-slate-400 text-xs mt-1">{ed.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-amber-500" size={20} />
            <h3 className="font-display font-bold text-slate-900 text-lg">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, i) => {
              const c = certColors[cert.color] || certColors.violet
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-5 rounded-2xl ${c.bg} border ${c.border} flex items-start gap-4`}
                >
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-slate-900 text-base leading-snug mb-0.5">
                      {cert.name}
                    </h4>
                    <p className="text-slate-600 text-sm">{cert.issuer}</p>
                    <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.badge}`}>
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* References */}
          <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-sm font-semibold text-slate-700 mb-1">References</p>
            <p className="text-sm text-slate-500">
              Available on request — professional referees from UBank, Commonwealth Bank, and the University of Sydney.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
