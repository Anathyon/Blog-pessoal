import Barra_navegacao from "./components/Barra_navegacao"
import Inicio from "./components/Inicio"
import Skills from "./components/Skills"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"
import Hero from "./components/Hero"

export default function App() {
  return (
    <>
      <Barra_navegacao/>
      <Hero/>
      <Inicio/>
      <Skills/>
      <Projetos/>
      <Contato/>
      
    </>
  )
}