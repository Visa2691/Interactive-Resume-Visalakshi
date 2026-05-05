import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper'
import { profile, industries } from '../../data/resume'

export default function About() {
  const { ref, isVisible } = useIntersectionObserver()

  const industryColors = [
    'bg-violet-100 text-violet-700 border-violet-200',
    'bg-cyan-100 text-cyan-700 border-cyan-200',
    'bg-emerald-100 text-emerald-700 border-emerald-200',
    'bg-amber-100 text-amber-700 border-amber-200',
    'bg-rose-100 text-rose-700 border-rose-200',
  ]

  return (
    <SectionWrapper id="about" className="bg-white">
      <SectionHeader
        eyebrow="Who I Am"
        title="Builder. Leader. Strategist."
        subtitle="A data and analytics leader who creates the team, the stack, the culture, and the strategy — not just the analysis."
      />

      <div ref={ref} className="grid md:grid-cols-2 gap-10 items-start">
        {/* Profile text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            {profile.summary.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right: industries + values */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-display font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">
              Industries Spanned
            </h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind, i) => (
                <span
                  key={ind.name}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border ${industryColors[i]}`}
                >
                  <span>{ind.icon}</span>
                  {ind.name}
                </span>
              ))}
            </div>
          </div>

          {/* Values cards */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'People First',    desc: 'Grow talent, embed culture',    icon: '🤝' },
              { label: 'Data as Product', desc: 'End-to-end ownership & delivery', icon: '📦' },
              { label: 'Ethical AI',      desc: 'Governance-led AI adoption',     icon: '🛡️' },
              { label: 'Executive Voice', desc: 'Storytelling at the board level', icon: '🎙️' },
            ].map(v => (
              <div
                key={v.label}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50/40 transition-colors"
              >
                <div className="text-xl mb-1">{v.icon}</div>
                <div className="font-semibold text-slate-800 text-sm">{v.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{v.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
