export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <span className={`inline-block text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
          light
            ? 'bg-white/20 text-white'
            : 'bg-violet-100 text-violet-600'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base max-w-xl mx-auto ${light ? 'text-white/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
