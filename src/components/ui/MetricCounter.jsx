import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const colorMap = {
  violet: { bg: 'bg-violet-50',  border: 'border-violet-200', text: 'text-violet-700', badge: 'bg-violet-100' },
  cyan:   { bg: 'bg-cyan-50',    border: 'border-cyan-200',   text: 'text-cyan-700',   badge: 'bg-cyan-100' },
  amber:  { bg: 'bg-amber-50',   border: 'border-amber-200',  text: 'text-amber-700',  badge: 'bg-amber-100' },
  rose:   { bg: 'bg-rose-50',    border: 'border-rose-200',   text: 'text-rose-700',   badge: 'bg-rose-100' },
}

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function Counter({ value, suffix, label, color, description }) {
  const { ref, isVisible } = useIntersectionObserver()
  const count = useCounter(value, 1600, isVisible)
  const c = colorMap[color] || colorMap.violet

  return (
    <div
      ref={ref}
      className={`${c.bg} border ${c.border} rounded-2xl p-6 text-center flex flex-col items-center gap-2 transition-transform hover:-translate-y-1 duration-200`}
    >
      <div className={`font-display text-5xl font-bold ${c.text}`}>
        {count}{suffix}
      </div>
      <div className="font-semibold text-slate-800 text-sm">{label}</div>
      <div className="text-xs text-slate-500 leading-relaxed">{description}</div>
    </div>
  )
}

export default Counter
