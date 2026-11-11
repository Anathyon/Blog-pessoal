import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal className={`mb-12 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-zinc-400">{description}</p>}
    </Reveal>
  )
}
