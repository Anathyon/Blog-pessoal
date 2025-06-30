export default function barra_navegacao (){
    return <>
         <nav className="flex justify-between items-center px-6 py-4 bg-[#111827] shadow-md shadow-blue-500/10">
                <h1 className="text-2xl font-bold text-white">Meu Portfólio</h1>
                <ul className="flex gap-6 text-sm font-medium">
                  <li><a href="#inicio" className="hover:text-blue-400 transition">Início</a></li>
                  <li><a href="#sobre" className="hover:text-blue-400 transition">Sobre</a></li>
                  <li><a href="#projetos" className="hover:text-blue-400 transition">Projetos</a></li>
                  <li><a href="#curriculo" className="hover:text-blue-400 transition">Currículo</a></li>
                  <li><a href="#contato" className="hover:text-blue-400 transition">Contato</a></li>
                </ul>
         </nav>
    </>
}