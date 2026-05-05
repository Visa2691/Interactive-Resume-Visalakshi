import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Hobbies from './components/sections/Hobbies'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import EasterEggs, { EasterToasts, useEasterToast } from './components/ui/EasterEggs'
import RocketLaunch from './components/ui/RocketLaunch'

function Footer() {
  return (
    <footer className="py-8 px-6 text-center bg-slate-950 border-t border-white/5 cursor-default select-none">
      <p className="text-slate-500 text-sm">
        Designed & built by <span className="text-slate-300 font-medium">Visalakshi Saminathan</span>
        <span className="text-slate-600"> · {new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

function AppInner() {
  const { toasts, addToast } = useEasterToast()

  return (
    <>
      <Navbar />
      <main>
        <Hero addToast={addToast} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Hobbies />
        <Education />
        <Contact />
      </main>
      <Footer />
      <EasterEggs addToast={addToast} />
      <EasterToasts toasts={toasts} />
      <RocketLaunch />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
