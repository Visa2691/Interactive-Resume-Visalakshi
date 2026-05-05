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
  dark?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', dark = false }: HeaderProps) {
  const a = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`mb-12 ${a} max-w-2xl`}>
      {eyebrow && (
        <p className="text-xs font-mono font-semibold tracking-widest text-sky-500 uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className={`font-display font-bold text-3xl sm:text-4xl tracking-tight mb-3 ${
        dark ? 'text-white' : 'text-slate-900 dark:text-white'
      }`}>{title}</h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${
          dark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
        }`}>{subtitle}</p>
      )}
    </div>
  )
}
