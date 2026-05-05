import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useIntersectionObserver'
import type { Metric } from '../../data/resume'

function useCounter(target: number, run: boolean, duration = 1400) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(step)
      else setN(target)
    }
    requestAnimationFrame(step)
  }, [run, target, duration])
  return n
}

export default function MetricCounter({ value, suffix, label, sublabel }: Metric) {
  const { ref, inView } = useInView(0.3)
  const n = useCounter(value, inView)
  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-display font-bold text-4xl sm:text-5xl text-white tabular-nums">
        {n}{suffix}
      </div>
      <div className="mt-1.5 font-semibold text-sm text-white/90">{label}</div>
      <div className="text-xs text-white/50 mt-0.5 leading-relaxed">{sublabel}</div>
    </div>
  )
}
