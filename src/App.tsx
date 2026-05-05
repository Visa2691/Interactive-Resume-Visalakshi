import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Hobbies from './components/sections/Hobbies'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

function Footer() {
  return (
    <footer className="py-8 px-6 text-center bg-slate-950 border-t border-white/5">
      <p className="text-slate-500 text-sm">
        Designed & built by <span className="text-slate-300 font-medium">Visalakshi Saminathan</span>
        <span className="text-slate-600"> · {new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Hobbies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
