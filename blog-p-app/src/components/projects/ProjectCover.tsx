import type { Project } from '../../data/projects'

interface ProjectCoverProps {
  project: Project
  className?: string
  /** Largura em que a imagem é exibida — o navegador escolhe a versão 640 ou 1200 px */
  sizes?: string
  eager?: boolean
}

const addressOf = ({ live, repo }: Project) => {
  if (live) return live.replace(/^https?:\/\//, '').replace(/\/$/, '')
  if (repo) return repo.replace(/^https?:\/\//, '')
  return '🔒 projeto privado'
}

/**
 * Mostra o print do projeto ou, se não houver, uma capa gerada no estilo "janela de navegador".
 */
export function ProjectCover({
  project,
  className = '',
  sizes = '(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw',
  eager = false,
}: ProjectCoverProps) {
  const [from, to] = project.accent

  return (
    <div className={`relative overflow-hidden bg-ink-900 ${className}`}>
      {/* Barra do navegador */}
      <div className="flex h-7 items-center gap-1.5 border-b border-white/6 bg-ink-800/90 px-3">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 truncate rounded bg-white/4 px-2 py-0.5 font-mono text-[10px] text-zinc-500">
          {addressOf(project)}
        </span>
      </div>

      {project.image ? (
        <img
          src={project.image}
          srcSet={`${project.image.replace(/\.webp$/, '-640.webp')} 640w, ${project.image} 1200w`}
          sizes={sizes}
          alt={`Captura de tela do projeto ${project.title}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width={1200}
          height={580}
          className="aspect-[16/8] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className="relative grid aspect-[16/8] w-full place-items-center overflow-hidden"
          style={{ background: `radial-gradient(120% 120% at 0% 0%, ${from}55, transparent 55%), radial-gradient(120% 120% at 100% 100%, ${to}55, transparent 55%), #0e0e19` }}
        >
          <div aria-hidden className="pattern-grid absolute inset-0 opacity-70" />
          <div className="relative px-6 text-center transition-transform duration-700 group-hover:scale-[1.04]">
            <p className="font-display text-2xl font-semibold text-white drop-shadow sm:text-3xl">{project.title}</p>
            <p className="mt-1.5 text-xs font-medium tracking-wide text-white/60 uppercase">{project.client.split('·')[0]}</p>
          </div>
        </div>
      )}
    </div>
  )
}
