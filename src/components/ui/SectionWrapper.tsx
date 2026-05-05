import { ReactNode } from 'react'

interface Props {
  id: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className = '', children }: Props) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}

interface HeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: HeaderProps) {
  const a = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`mb-12 ${a} max-w-2xl`}>
      {eyebrow && (
        <p className="text-xs font-mono font-semibold tracking-widest text-sky-500 uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-slate-500 text-base leading-relaxed">{subtitle}</p>}
    </div>
  )
}
