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
    <footer className="py-8 px-6 text-center bg-white border-t border-slate-100">
      <p className="text-slate-400 text-sm">
        Designed & built by{' '}
        <span className="text-violet-600 font-semibold">Visalakshi Saminathan</span>
        {' '}· {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
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
    </div>
  )
}
