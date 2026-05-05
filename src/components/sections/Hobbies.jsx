import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper'
import { hobbies } from '../../data/resume'

const colorMap = {
  violet:  'bg-violet-50 border-violet-200 hover:bg-violet-100',
  rose:    'bg-rose-50 border-rose-200 hover:bg-rose-100',
  emerald: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
  amber:   'bg-amber-50 border-amber-200 hover:bg-amber-100',
  cyan:    'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
}

export default function Hobbies() {
  return (
    <SectionWrapper id="hobbies" className="bg-fuchsia-50/30">
      <SectionHeader
        eyebrow="Beyond Work"
        title="Life Outside the Office"
        subtitle="Because the best leaders bring their whole self — curious, creative, and always growing."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {hobbies.map((hobby, i) => {
          const c = colorMap[hobby.color] || colorMap.violet
          return (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`${c} border rounded-2xl p-6 transition-all duration-200 cursor-default group`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {hobby.icon}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                {hobby.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {hobby.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
