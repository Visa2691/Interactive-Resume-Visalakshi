import { motion } from 'framer-motion'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import { profile } from '../../data/resume'
import { useInView } from '../../hooks/useIntersectionObserver'

const industries = [
  'Financial Services', 'Digital Banking', 'Higher Education', 'Consulting', 'Enterprise Tech',
]

const values = [
  { title: 'People first',      body: 'Growing talent, embedding culture, org design, and capability uplift.' },
  { title: 'Data as a product', body: 'End-to-end ownership from concept to production — not just analysis.' },
  { title: 'Ethical AI',        body: 'Governance-led AI adoption with regulatory alignment built in.' },
  { title: 'Executive clarity', body: 'Structured data storytelling that influences decisions at board level.' },
]

export default function About() {
  const { ref, inView } = useInView()
  return (
    <Section id="about" className="bg-white">
      <div className="grid lg:grid-cols-[1fr_420px] gap-16" ref={ref}>
        <div>
          <SectionHeader eyebrow="About" title="Builder. Leader. Strategist." />
          <div className="space-y-4 mb-10">
            {profile.summary.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-slate-600 leading-relaxed">
                {p}
              </motion.p>
            ))}
          </div>

          {/* Industries */}
          <div className="mb-8">
            <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-3">Industries</p>
            <div className="flex flex-wrap gap-2">
              {industries.map(ind => (
                <span key={ind} className="px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 rounded-lg">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <motion.div initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3">
          <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-4">Core values</p>
          {values.map(v => (
            <div key={v.title} className="p-5 rounded-xl border border-slate-200 hover:border-sky-200 hover:bg-sky-50/30 transition-colors">
              <p className="font-display font-semibold text-slate-900 mb-1">{v.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
