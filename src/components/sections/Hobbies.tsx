import { motion } from 'framer-motion'
import Section, { SectionHeader } from '../ui/SectionWrapper'
import { hobbies } from '../../data/resume'

export default function Hobbies() {
  return (
    <Section id="hobbies" className="bg-white dark:bg-slate-900">
      <SectionHeader eyebrow="Beyond work" title="Life outside the office"
        subtitle="Because the best leaders bring their whole self: curious, creative, and always growing." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((h, i) => (
          <motion.div key={h.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-700 hover:bg-sky-50/20 dark:hover:bg-sky-900/10 transition-all duration-200 cursor-default">
            <div className="font-mono text-2xl text-slate-300 dark:text-slate-600 group-hover:text-sky-400 transition-colors mb-4 select-none">
              {h.icon}
            </div>
            <h3 className="font-display font-bold text-slate-900 dark:text-white mb-2">{h.name}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{h.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
