import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import type { Project } from '../../data/projects'
import { ProjectCover } from './ProjectCover'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

const MAX_TAGS = 4

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const extra = project.stack.length - MAX_TAGS

  return (
    <article className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-2xl hover:shadow-brand-600/10">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block text-left"
        aria-label={`Ver detalhes de ${project.title}`}
      >
        <ProjectCover project={project} />
      </button>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-brand-300">{project.client}</p>
        <h3 className="mt-1.5 text-lg font-semibold">
          <button type="button" onClick={() => onOpen(project)} className="text-left hover:text-brand-300">
            {project.title}
          </button>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {project.stack.slice(0, MAX_TAGS).map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
          {extra > 0 && <li className="chip text-zinc-500">+{extra}</li>}
        </ul>

        <div className="mt-auto flex items-center gap-2 pt-6">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary px-4! py-2!">
              Ver site <FiArrowUpRight aria-hidden />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4! py-2!">
              <FiGithub aria-hidden /> Código
            </a>
          )}
          {!project.live && !project.repo && <span className="chip">Repositório privado</span>}
          <button type="button" onClick={() => onOpen(project)} className="ml-auto text-sm font-medium text-zinc-400 hover:text-white">
            Detalhes
          </button>
        </div>
      </div>
    </article>
  )
}
