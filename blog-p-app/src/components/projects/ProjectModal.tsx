import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheck, FiCode, FiGithub, FiX } from 'react-icons/fi'
import type { Project } from '../../data/projects'
import { ProjectCover } from './ProjectCover'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previouslyFocused?.focus()
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-60 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl sm:rounded-3xl"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-10 right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink-950/80 text-zinc-200 backdrop-blur hover:bg-ink-950"
        >
          <FiX size={20} />
        </button>

        <ProjectCover project={project} sizes="(min-width: 768px) 768px, 100vw" eager />

        <div className="p-6 sm:p-8">
          <p className="text-sm font-medium text-brand-300">
            {project.client} · {project.year}
          </p>
          <h3 id="project-modal-title" className="mt-1 text-2xl font-semibold sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-zinc-300">{project.summary}</p>

          {(project.context || project.role) && (
            <dl className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 sm:grid-cols-2">
              {project.context && (
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-brand-300 uppercase">Contexto</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">{project.context}</dd>
                </div>
              )}
              {project.role && (
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-brand-300 uppercase">Minha atuação</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">{project.role}</dd>
                </div>
              )}
            </dl>
          )}

          {project.features && project.features.length > 0 && (
            <>
              <h4 className="mt-8 text-sm font-semibold tracking-wide text-zinc-200 uppercase">Principais funcionalidades</h4>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <FiCheck className="mt-0.5 shrink-0 text-brand-400" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h4 className="mt-8 text-sm font-semibold tracking-wide text-zinc-200 uppercase">Destaques técnicos</h4>
          <ul className="mt-3 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                <FiCode className="mt-0.5 shrink-0 text-emerald-400" aria-hidden />
                {h}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-sm font-semibold tracking-wide text-zinc-200 uppercase">Stack</h4>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Abrir site <FiArrowUpRight aria-hidden />
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FiGithub aria-hidden /> Repositório
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
