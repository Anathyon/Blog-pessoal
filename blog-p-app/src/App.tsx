import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
