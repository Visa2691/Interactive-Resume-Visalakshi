import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a',
]

interface Toast {
  id: number
  message: string
  emoji: string
  color: string
}

/* Global click counter for the hero name — exported so Hero can call it */
let nameClickCount = 0
let nameClickTimer: ReturnType<typeof setTimeout> | null = null

export function onNameClick(addToast: (msg: string, emoji: string, color: string) => void) {
  nameClickCount++
  if (nameClickTimer) clearTimeout(nameClickTimer)
  nameClickTimer = setTimeout(() => { nameClickCount = 0 }, 1500)

  if (nameClickCount === 3) {
    addToast("You've clicked my name 3 times. Persistent. I like that.", '🎯', 'sky')
  }
  if (nameClickCount === 7) {
    addToast("Okay — officially hired. (Just kidding. But seriously, let's talk.)", '🏆', 'emerald')
    nameClickCount = 0
  }
}

/* Exported hook so App can get the addToast fn and pass it to Hero */
export function useEasterToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, emoji: string, color: string) => {
    const id = Date.now()
    setToasts(t => [...t, { id, message, emoji, color }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 4500)
  }, [])

  return { toasts, addToast }
}

const colorMap: Record<string, string> = {
  sky:     'border-sky-500/30 bg-sky-500/10 text-sky-300',
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  violet:  'border-violet-500/30 bg-violet-500/10 text-violet-300',
  amber:   'border-amber-500/30 bg-amber-500/10 text-amber-300',
  rose:    'border-rose-500/30 bg-rose-500/10 text-rose-300',
}

export default function EasterEggs({ addToast }: { addToast: (msg: string, emoji: string, color: string) => void }) {
  const [konamiIdx, setKonamiIdx] = useState(0)
  const [typedBuffer, setTypedBuffer] = useState('')

  useEffect(() => {
    let footerClicks = 0
    let footerTimer: ReturnType<typeof setTimeout> | null = null

    const handleKey = (e: KeyboardEvent) => {
      // Skip if user is typing in an input/textarea
      if (['INPUT','TEXTAREA'].includes((e.target as HTMLElement).tagName)) return

      // Konami code
      setKonamiIdx(prev => {
        if (e.key === KONAMI[prev]) {
          const next = prev + 1
          if (next === KONAMI.length) {
            addToast(
              "⬆⬆⬇⬇⬅➡⬅➡BA — You just unlocked: Senior Analytics Legend status.",
              '🕹️',
              'violet'
            )
            return 0
          }
          return next
        }
        return e.key === KONAMI[0] ? 1 : 0
      })

      // Buffer for typed secrets
      setTypedBuffer(b => {
        const next = (b + e.key).slice(-8).toLowerCase()

        if (next.includes('hire')) {
          addToast(
            "Pssst — you typed 'hire'. Coincidence? I think not. 😏",
            '🤫',
            'sky'
          )
          return ''
        }
        if (next.includes('data')) {
          addToast(
            "Data is not just a job — it's a superpower. ⚡",
            '📊',
            'amber'
          )
          return ''
        }
        return next
      })
    }

    const handleFooterClick = () => {
      footerClicks++
      if (footerTimer) clearTimeout(footerTimer)
      footerTimer = setTimeout(() => { footerClicks = 0 }, 1200)
      if (footerClicks >= 3) {
        addToast(
          "Built with React, Tailwind, strong coffee, and questionable sleep habits.",
          '☕',
          'amber'
        )
        footerClicks = 0
      }
    }

    const footer = document.querySelector('footer')
    window.addEventListener('keydown', handleKey)
    footer?.addEventListener('click', handleFooterClick)

    return () => {
      window.removeEventListener('keydown', handleKey)
      footer?.removeEventListener('click', handleFooterClick)
    }
  }, [addToast])

  return null
}

export function EasterToasts({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-full shadow-2xl border text-sm font-medium whitespace-nowrap backdrop-blur-sm ${
              colorMap[toast.color] ?? colorMap.sky
            } bg-slate-900/90`}>
            <span className="text-base">{toast.emoji}</span>
            <span className="text-white/90">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
