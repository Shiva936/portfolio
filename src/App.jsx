import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Loader from './components/Loader'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Systems from './components/Systems'
import Explorations from './components/Explorations'
import Skills from './components/Skills'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const handle = window.requestAnimationFrame(() => setIsReady(true))
    return () => window.cancelAnimationFrame(handle)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-slate-100 selection:bg-blue-500/40">
      <Loader active={!isReady} />
      <div className={isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}>
        <NavBar />
        <main className="max-w-5xl mx-auto px-6 pb-20 pt-24">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Systems />
          <Explorations />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
