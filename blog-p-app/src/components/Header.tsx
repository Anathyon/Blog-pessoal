import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navItems, profile } from '../data/profile'
import { LogoMark } from './ui/Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Destaca o link da seção visível
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Trava o scroll e permite fechar com Esc quando o menu mobile está aberto
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/6 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950">
        Pular para o conteúdo
      </a>

      <div className="container-page flex h-[4.5rem] items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Início">
          <LogoMark />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-[0.95rem] font-semibold text-white">{profile.name}</span>
            <span className="block text-xs text-zinc-500">{profile.role}</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? 'true' : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                active === item.href ? 'bg-white/6 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <a href={profile.cvUrl} download className="btn-ghost px-4! py-2!">
              <FiDownload aria-hidden /> Currículo
            </a>
          </span>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-zinc-200 hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/6 md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-200 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href={profile.cvUrl} download className="btn-primary w-full">
                  <FiDownload aria-hidden /> Baixar currículo
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
