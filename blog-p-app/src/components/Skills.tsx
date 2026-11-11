import { skillGroups, softSkills, type Skill } from '../data/skills'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

function SkillPill({ skill }: { skill: Skill }) {
  const { Icon, img, color, name } = skill
  return (
    <li className="group flex items-center gap-2.5 rounded-xl border border-white/6 bg-white/2 px-3 py-2.5 transition hover:border-white/15 hover:bg-white/5">
      {Icon ? (
        <Icon aria-hidden className="h-4.5 w-4.5 shrink-0 transition group-hover:scale-110" style={{ color }} />
      ) : img ? (
        <img src={img} alt="" aria-hidden className="h-4.5 w-4.5 shrink-0" loading="lazy" />
      ) : null}
      <span className="text-sm font-medium text-zinc-300">{name}</span>
    </li>
  )
}

const marquee = skillGroups.flatMap((g) => g.skills).filter((s) => s.Icon)

export default function Skills() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              Tecnologias que uso <span className="text-gradient">no dia a dia</span>
            </>
          }
          description="Ferramentas que aplico em projetos reais — e que continuo estudando para entregar cada vez melhor."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.06} className={`card p-6 ${i === 1 ? 'lg:row-span-2' : ''}`}>
              <h3 className="text-base font-semibold">{group.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{group.description}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {group.skills.map((s) => (
                  <SkillPill key={s.name} skill={s} />
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.12} className="card p-6">
            <h3 className="text-base font-semibold">Soft skills</h3>
            <p className="mt-1 text-sm text-zinc-500">O que faz a diferença no trabalho em equipe.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <li key={s} className="chip px-3! py-1.5!">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Faixa animada de logos */}
      <div aria-hidden className="relative mt-20 overflow-hidden mask-[linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 py-2">
          {[...marquee, ...marquee].map((s, i) => {
            const Icon = s.Icon!
            return <Icon key={`${s.name}-${i}`} className="h-8 w-8 shrink-0 text-zinc-600 transition hover:text-zinc-300" />
          })}
        </div>
      </div>
    </section>
  )
}
