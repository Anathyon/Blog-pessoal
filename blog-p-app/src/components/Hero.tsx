import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/profile'
import { professionalProjects } from '../data/projects'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stats = [
  { value: `${professionalProjects.length}`, label: 'projetos para clientes' },
  { value: '20+', label: 'projetos no GitHub' },
  { value: '2022', label: 'programando desde' },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Fundo */}
      <div aria-hidden className="pattern-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-144 w-240 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.28),transparent)] blur-2xl"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.a
            {...fadeUp(0)}
            href="#experiencia"
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/7 py-1.5 pr-4 pl-2 text-sm text-emerald-200 transition hover:border-emerald-400/40"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {profile.role} na <strong className="font-semibold text-white">{profile.company}</strong>
          </motion.a>

          <motion.h1 {...fadeUp(0.08)} className="text-[2.6rem] leading-[1.05] font-semibold sm:text-6xl lg:text-[4.25rem]">
            Interfaces que <span className="text-gradient">funcionam</span> e{' '}
            <span className="text-gradient">convertem</span>.
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Sou <strong className="font-semibold text-zinc-200">{profile.name}</strong>, desenvolvedor front-end. Crio sites
            institucionais, portais e plataformas web com <span className="text-zinc-200">React, TypeScript e Tailwind CSS</span>{' '}
            — rápidos, acessíveis e prontos para produção.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projetos" className="btn-primary">
              Ver projetos <FiArrowRight aria-hidden />
            </a>
            <a href={profile.cvUrl} download className="btn-ghost">
              <FiDownload aria-hidden /> Baixar currículo
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition hover:bg-white/5 hover:text-white">
                <FiGithub size={20} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition hover:bg-white/5 hover:text-white">
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.dl {...fadeUp(0.32)} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/7 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-88 lg:max-w-none"
        >
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-brand-600/40 via-transparent to-accent-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-ink-800 p-2 shadow-2xl shadow-black/50">
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width={640}
              height={672}
              fetchPriority="high"
              className="aspect-[4/4.2] w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink-950/75 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold text-white">{profile.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <FiMapPin aria-hidden /> {profile.location}
                </p>
              </div>
              <span className="chip border-brand-400/30 bg-brand-500/10 text-brand-300">React · TS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
