import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiGithub } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { personalProjects, professionalProjects, type Project } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

const tabs = [
  { id: 'profissional', label: 'Profissionais', items: professionalProjects },
  { id: 'pessoal', label: 'Pessoais & estudos', items: personalProjects },
] as const

type TabId = (typeof tabs)[number]['id']

const INITIAL_VISIBLE = 6

/** Destaques primeiro, mantendo a ordem definida em data/projects.ts */
const sortFeatured = (list: readonly Project[]) =>
  [...list].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

export default function Projects() {
  const [tab, setTab] = useState<TabId>('profissional')
  const [showAll, setShowAll] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)

  const current = tabs.find((t) => t.id === tab) ?? tabs[0]
  const sorted = useMemo(() => sortFeatured(current.items), [current])
  const visible = showAll ? sorted : sorted.slice(0, INITIAL_VISIBLE)

  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfólio"
            title={
              <>
                Projetos em <span className="text-gradient">produção</span>
              </>
            }
            description="Sites e plataformas entregues para clientes da Plugwin Sistemas e freelances, além dos projetos autorais que uso para estudar e experimentar."
          />

          <div role="group" aria-label="Filtrar projetos por tipo" className="mb-12 inline-flex self-start rounded-full border border-white/10 bg-white/3 p-1 lg:self-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={tab === t.id}
                onClick={() => {
                  setTab(t.id)
                  setShowAll(false)
                }}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  tab === t.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">
                  {t.label} <span className="text-zinc-500">({t.items.length})</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              >
                <ProjectCard project={project} onOpen={setSelected} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {sorted.length > INITIAL_VISIBLE && (
            <button type="button" onClick={() => setShowAll((v) => !v)} className="btn-ghost">
              {showAll ? 'Mostrar menos' : `Ver todos os ${sorted.length} projetos`} <FiArrowRight aria-hidden className={showAll ? '-rotate-90' : 'rotate-90'} />
            </button>
          )}
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FiGithub aria-hidden /> Mais no GitHub
          </a>
        </div>
      </div>

      <AnimatePresence>{selected && <ProjectModal key={selected.slug} project={selected} onClose={close} />}</AnimatePresence>
    </section>
  )
}
