import { FiAward, FiBookOpen } from 'react-icons/fi'
import { courses, education, experiences } from '../data/experience'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Trajetória"
          title={
            <>
              Experiência <span className="text-gradient">profissional</span>
            </>
          }
          description="Do estudo autodidata a projetos reais em produção para empresas e órgãos públicos."
        />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <ol className="relative space-y-6 border-l border-white/8 pl-8">
            {experiences.map((exp, i) => (
              <li key={exp.org} className="relative">
                <Reveal delay={i * 0.08}>
                <span
                  aria-hidden
                  className={`absolute top-7 -left-[2.42rem] h-3 w-3 rounded-full ring-4 ring-ink-950 ${
                    exp.current ? 'bg-emerald-400' : 'bg-zinc-600'
                  }`}
                />
                <article className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-xs tracking-wide text-zinc-500">{exp.period}</p>
                    {exp.current && <span className="chip border-emerald-400/25 bg-emerald-400/10 text-emerald-300">Atual</span>}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-1 text-sm">
                    <span className="font-medium text-brand-300">{exp.org}</span>
                    <span className="text-zinc-500"> · {exp.type}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="space-y-6">
            <Reveal className="card p-6">
              <h3 className="flex items-center gap-2.5 text-base font-semibold">
                <FiBookOpen className="text-brand-400" aria-hidden /> Formação
              </h3>
              {education.map((e) => (
                <div key={e.title} className="mt-4">
                  <p className="font-medium text-zinc-200">{e.title}</p>
                  <p className="text-sm text-zinc-500">
                    {e.org} · {e.period}
                  </p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.08} className="card p-6">
              <h3 className="flex items-center gap-2.5 text-base font-semibold">
                <FiAward className="text-brand-400" aria-hidden /> Cursos
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {courses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.12} className="card p-6">
              <h3 className="text-base font-semibold">Idiomas</h3>
              <p className="mt-3 text-sm text-zinc-400">Português — nativo · Inglês — intermediário</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
