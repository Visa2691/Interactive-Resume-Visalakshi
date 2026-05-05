import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RocketLaunch() {
  const [show, setShow] = useState(false)
  const [showMoon, setShowMoon] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    let canFire = true

    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting && canFire) {
        canFire = false
        setShow(true)
        setTimeout(() => { setShow(false); setShowMoon(true) }, 1500)
        setTimeout(() => { setShowMoon(false) }, 3200)
        setTimeout(() => { canFire = true }, 4000)
      }
    }, { threshold: 0.2 })

    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9997]">
      <AnimatePresence>
        {show && (
          <motion.div
            key="rocket"
            className="fixed right-12 sm:right-20 text-4xl sm:text-5xl select-none"
            style={{ bottom: '20%' }}
            initial={{ y: 0, opacity: 1, rotate: 0 }}
            animate={{ y: '-130vh', opacity: 1, rotate: -12 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.4, 1] }}>
            🚀
            {/* Flame trail */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-full leading-none"
              initial={{ opacity: 1, scaleY: 0.4, scaleX: 0.6 }}
              animate={{ opacity: 0, scaleY: 1.4, scaleX: 0.3 }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}>
              🔥
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMoon && (
          <motion.div
            key="moon"
            className="fixed right-11 sm:right-[4.5rem] text-4xl sm:text-5xl select-none"
            style={{ top: '4%' }}
            initial={{ opacity: 0, scale: 0, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: -20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}>
            🌙
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
