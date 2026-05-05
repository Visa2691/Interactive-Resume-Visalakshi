import { motion } from 'framer-motion'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper'
import { competencies, techStack } from '../../data/resume'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const pillColors = {
  expert:     'bg-violet-100 text-violet-800 border border-violet-200 font-semibold',
  proficient: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
  familiar:   'bg-slate-100 text-slate-700 border border-slate-200',
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg rounded-xl px-4 py-2 border border-violet-100 text-sm font-medium text-slate-800">
        {payload[0].payload.subject}: <span className="text-violet-600">{payload[0].value}%</span>
      </div>
    )
  }
  return null
}

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <SectionWrapper id="skills" className="bg-amber-50/40">
      <SectionHeader
        eyebrow="Expertise"
        title="Skills & Competencies"
        subtitle="From executive storytelling to modern data engineering — a full-stack analytics leader."
      />

      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
        {/* Radar chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-amber-200 p-6 shadow-sm"
        >
          <h3 className="font-display font-semibold text-slate-800 text-sm text-center mb-4">
            Core Competency Profile
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={competencies} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'Inter' }}
              />
              <Radar
                name="Visalakshi"
                dataKey="A"
                stroke="#7c3aed"
                fill="#7c3aed"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {Object.entries(techStack).map(([level, tools]) => (
            <div key={level}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${pillColors[level]}`}>
                  {level}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map(t => (
                  <span
                    key={t}
                    className={`px-3 py-1.5 rounded-lg text-sm font-mono ${pillColors[level]}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Competency callouts */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { label: 'People Leadership',    icon: '👥', score: '92%' },
              { label: 'Data Strategy',        icon: '📊', score: '95%' },
              { label: 'Commercial Analytics', icon: '💹', score: '90%' },
              { label: 'AI & Governance',      icon: '🤖', score: '80%' },
            ].map(item => (
              <div
                key={item.label}
                className="p-3 rounded-xl bg-white border border-amber-200 flex items-center gap-3"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-slate-800 text-xs">{item.label}</div>
                  <div className="text-amber-600 font-mono text-sm font-bold">{item.score}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
