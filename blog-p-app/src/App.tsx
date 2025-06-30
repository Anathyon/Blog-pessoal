import Barra_navegacao from "./components/Barra_navegacao"
import Inicio from "./components/Inicio"
import Skills from "./components/Skills"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"

export default function App() {
  return (
    <section>
        <Barra_navegacao/>
        <Inicio/>
        <Skills/>
        <Projetos/>
        <Contato/>
    </section>
  )
}