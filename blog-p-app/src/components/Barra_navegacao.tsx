import {
  HomeIcon,
  CodeBracketIcon,
  FolderIcon,
  UserIcon,
  EnvelopeIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const links = [
  { href: "#inicio", label: "Início", icon: <HomeIcon className="w-5 h-5 mr-3" /> },
  { href: "#habilidades", label: "Habilidades", icon: <CodeBracketIcon className="w-5 h-5 mr-3" /> },
  { href: "#projetos", label: "Projetos", icon: <FolderIcon className="w-5 h-5 mr-3" /> },
  { href: "#sobre", label: "Sobre", icon: <UserIcon className="w-5 h-5 mr-3" /> },
  { href: "#contato", label: "Contato", icon: <EnvelopeIcon className="w-5 h-5 mr-3" /> },
];

export default function BarraNavegacao() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#323846] flex flex-col justify-between py-10 px-6 shadow-2xl z-50 rounded-tr-2xl rounded-br-2xl">
      {/* Logo e título */}
      <div>
        <div className="flex items-center mb-10">
          <span className="bg-gradient-to-tr from-blue-500 to-purple-500 p-2 rounded-xl mr-3 shadow-lg">
            <BoltIcon className="w-7 h-7 text-white" />
          </span>
          <div>
            <span className="block text-white font-bold text-xl leading-tight">Portfolio</span>
            <span className="block text-gray-300 text-xs">Dev Web</span>
          </div>
        </div>
        {/* Links */}
        <nav>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center px-2 py-2 rounded-lg text-gray-100 font-semibold hover:bg-[#404758] hover:text-white transition-all duration-200"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* CTA */}
      <div className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-5 text-white shadow-inner border border-white/20">
        <span className="block font-bold text-base mb-1">Pronto para começar?</span>
        <span className="block text-gray-300 text-sm mb-4">Vamos transformar sua ideia em realidade.</span>
        <a
          href="#contato"
          className="block w-full text-center py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition"
        >
          Iniciar Projeto
        </a>
      </div>
    </aside>
  );
}