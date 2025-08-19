import Barra_navegacao from "./components/Barra_navegacao"
import Skills from "./components/Skills"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Barra_navegacao/>
      <Hero/>
      <Skills/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </>
  )
}