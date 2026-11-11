import { FaXTwitter } from 'react-icons/fa6'
import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import { navItems, profile } from '../data/profile'
import { LogoMark } from './ui/Logo'

const socials = [
  { Icon: FiGithub, label: 'GitHub', href: profile.socials.github },
  { Icon: FiLinkedin, label: 'LinkedIn', href: profile.socials.linkedin },
  { Icon: FiInstagram, label: 'Instagram', href: profile.socials.instagram },
  { Icon: FaXTwitter, label: 'X (Twitter)', href: profile.socials.x },
  { Icon: FiMail, label: 'E-mail', href: `mailto:${profile.email}` },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-ink-950">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#inicio" className="flex items-center gap-3">
            <LogoMark className="h-9 w-auto" />
            <span className="font-display text-lg font-semibold text-white">{profile.name}</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            {profile.role} na {profile.company}. Sites e aplicações web com React, TypeScript e Tailwind CSS.
          </p>
        </div>

        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-zinc-400 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a href={profile.cvUrl} download className="text-zinc-400 transition hover:text-white">
            Currículo (PDF)
          </a>
        </nav>

        <ul className="flex gap-2">
          {socials.map(({ Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/8 text-zinc-400 transition hover:border-white/20 hover:text-white"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/6">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Feito com React, TypeScript e Tailwind CSS.
          </p>
          <a href="#inicio" className="inline-flex items-center gap-1.5 transition hover:text-zinc-300">
            Voltar ao topo <FiArrowUp aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
