import { motion } from 'framer-motion'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import { hobbies } from '../../data/resume'

export default function Hobbies() {
  return (
    <Section id="hobbies" className="bg-white">
      <SectionHeader eyebrow="Beyond work" title="Life outside the office"
        subtitle="Because the best leaders bring their whole self — curious, creative, and always growing." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((h, i) => (
          <motion.div key={h.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group p-6 rounded-xl border border-slate-200 hover:border-sky-200 hover:bg-sky-50/20 transition-all duration-200 cursor-default">
            <div className="font-mono text-2xl text-slate-300 group-hover:text-sky-400 transition-colors mb-4 select-none">
              {h.icon}
            </div>
            <h3 className="font-display font-bold text-slate-900 mb-2">{h.name}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{h.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
