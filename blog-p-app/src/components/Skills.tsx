import { useState, Fragment } from 'react';

// Dados das habilidades organizados por categoria, como na imagem de referência
// Obs: Os ícones são placeholders. Substitua os caminhos pelos seus próprios arquivos de imagem.
const skillCategories = [
  {
    name: "Linguagens",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18H8a2 2 0 0 1-2-2v-4h12v4a2 2 0 0 1-2 2zM6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <path d="m10 11-2 4" />
        <path d="m14 11 2 4" />
      </svg>
    ),
    skills: [
      { name: "CSS3", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
    ],
  },
  {
    name: "Frameworks & Bibliotecas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
        <path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      </svg>
    ),
    skills: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Vite", icon: "/icons/vite.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    name: "Ferramentas & Plataformas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
        <path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      </svg>
    ),
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "NPM", icon: "/icons/npm.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].name);

  const getActiveSkills = () => {
    const category = skillCategories.find(cat => cat.name === activeTab);
    return category ? category.skills : [];
  };

  return (
    <Fragment>
      <section id="habilidades" className="py-16 px-6 bg-[#0d0d1a] text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-semibold text-emerald-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm5 10-5 5-5-5" />
                <path d="M12 7v5h5" />
              </svg>
              Stack Tecnológico
            </div>
            <h2 className="skills-title text-4xl font-extrabold leading-tight mt-6 mb-4 md:text-5xl">
              Tecnologias que <span className="skills-highlight">Domino</span>
            </h2>
            <p className="skills-subtitle text-zinc-400 text-lg md:text-xl">
              Sempre atualizado com as mais modernas tecnologias do mercado para entregar
              <strong className="text-white"> soluções de alta qualidade</strong>.
            </p>
          </div>

          {/* Tabs de Categoria (Desktop) */}
          <div className="skills-tabs hidden md:flex w-full items-center justify-center gap-4 mb-8 p-1 rounded-full bg-[#18181b] border border-[#3f3f46]">
            {skillCategories.map(category => (
              <button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === category.name
                    ? 'skills-tab-active'
                    : 'text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Habilidades */}
          <div className="skills-container relative">
            <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
              {getActiveSkills().map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-700 bg-zinc-900 shadow-md transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <img src={skill.icon} alt={`${skill.name} icon`} className="h-12 w-12 mb-3" />
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção "Sempre Aprendendo" */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-zinc-700 bg-zinc-900 shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-white">Sempre Aprendendo</h3>
            <p className="text-zinc-400">
              O mundo da tecnologia evolui rapidamente, e eu mantenho-me sempre atualizado com as últimas
              tendências, frameworks e melhores práticas do mercado para entregar soluções modernas e eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* Estilos customizados para gradientes e media queries */}
      <style>{`
        .skills-highlight {
          background: linear-gradient(to right, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .skills-tab-active {
          background: linear-gradient(to right, #3b82f6, #9333ea);
          color: white;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .skills-title {
            font-size: 2.25rem;
          }
          .skills-subtitle {
            font-size: 1rem;
          }
          .skills-tabs {
            display: none; /* Oculta as abas no mobile para usar um layout mais simples */
          }
        }

        /* TABLET */
        @media (min-width: 768px) and (max-width: 1023px) {
          .skills-title {
            font-size: 3rem;
          }
          .skills-subtitle {
            font-size: 1.125rem;
          }
        }
        
        /* DESKTOP */
        @media (min-width: 1024px) {
          .skills-title {
            font-size: 3.75rem;
          }
          .skills-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </Fragment>
  );
}