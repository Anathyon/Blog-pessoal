import Barra_navegacao from "./components/Barra_navegacao"
import Inicio from "./components/Inicio"
import Skills from "./components/Skills"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Barra_navegacao/>
      <main className="space-y-24">
        <Inicio/>
        <Skills/>
        <Projetos/>
        <Contato/>
      </main>
    </div>
  )
}