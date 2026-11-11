import { FiCode, FiLayers, FiTrendingUp, FiZap } from 'react-icons/fi'
import { profile } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const pillars = [
  {
    Icon: FiLayers,
    title: 'Do layout à produção',
    text: 'Transformo o design em interface real: componentização, responsividade, deploy e manutenção.',
  },
  {
    Icon: FiZap,
    title: 'Performance e SEO',
    text: 'Páginas leves, imagens otimizadas, carregamento sob demanda e marcação semântica.',
  },
  {
    Icon: FiCode,
    title: 'Código que escala',
    text: 'TypeScript estrito, validação com Zod, testes com Vitest e componentes acessíveis.',
  },
  {
    Icon: FiTrendingUp,
    title: 'Visão de negócio',
    text: 'Formação em Marketing: penso em conversão, clareza de mensagem e no objetivo do cliente.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Sobre mim"
            title={
              <>
                Código com propósito, <span className="text-gradient">entregas com resultado</span>.
              </>
            }
          />
          <Reveal className="space-y-5 text-base leading-relaxed text-zinc-400">
            <p>
              Comecei a programar em 2022 de forma autodidata e hoje atuo como{' '}
              <strong className="font-semibold text-zinc-200">
                {profile.role} na {profile.company}
              </strong>
              , onde desenvolvo sites e plataformas para prefeituras, mandatos legislativos, produtoras audiovisuais, eventos e
              empresas privadas.
            </p>
            <p>
              Minha formação em Marketing me ajuda a enxergar além do código: cada tela precisa comunicar bem, carregar rápido e
              levar o usuário à ação certa. Sigo estudando todos os dias — testes, arquitetura de front-end e o ecossistema React.
            </p>
            <p className="text-zinc-500">
              {profile.location} · {profile.availability}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06} className="card p-6 transition hover:border-white/15">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-linear-to-br from-brand-600/30 to-accent-500/20 text-brand-300">
                <Icon size={20} aria-hidden />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
