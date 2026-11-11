import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiAlertCircle, FiCheck, FiGithub, FiLinkedin, FiLoader, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { profile, whatsappLink } from '../data/profile'
import { isFirebaseConfigured, LIMITS, sendContactMessage, type ContactPayload } from '../lib/contact'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

type Status = { type: 'idle' } | { type: 'sending' } | { type: 'success' } | { type: 'error'; message: string }

const empty: ContactPayload = { nome: '', email: '', assunto: '', mensagem: '' }

const channels = [
  { Icon: FiMail, label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
  {
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    value: profile.phoneDisplay,
    href: whatsappLink('Olá, Anathyon! Vi seu portfólio e gostaria de conversar.'),
  },
  { Icon: FiLinkedin, label: 'LinkedIn', value: 'in/anathyonerysson', href: profile.socials.linkedin },
  { Icon: FiGithub, label: 'GitHub', value: 'github.com/Anathyon', href: profile.socials.github },
]

export default function Contact() {
  const [form, setForm] = useState<ContactPayload>(empty)
  const [status, setStatus] = useState<Status>({ type: 'idle' })
  // Campo invisível para filtrar bots simples (honeypot)
  const [website, setWebsite] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status.type === 'sending') return
    if (website) {
      setStatus({ type: 'success' })
      return
    }

    // Sem Firebase configurado: abre o cliente de e-mail com a mensagem preenchida
    if (!isFirebaseConfigured) {
      const subject = form.assunto || `Contato pelo portfólio — ${form.nome}`
      const body = `${form.mensagem}\n\n— ${form.nome} (${form.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus({ type: 'sending' })
    try {
      await sendContactMessage(form)
      setForm(empty)
      setStatus({ type: 'success' })
    } catch (err) {
      console.error('Falha ao enviar mensagem:', err)
      setStatus({
        type: 'error',
        message: 'Não foi possível enviar agora. Tente novamente ou fale comigo pelo WhatsApp ou e-mail.',
      })
    }
  }

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Contato"
          title={
            <>
              Vamos construir algo <span className="text-gradient">juntos</span>?
            </>
          }
          description="Aberto a oportunidades, parcerias e projetos. Respondo normalmente em até um dia útil."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col gap-3">
            {channels.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card group flex items-center gap-4 p-4 transition hover:border-white/15"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-600/30 to-accent-500/20 text-brand-300 transition group-hover:text-white">
                  <Icon size={20} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-zinc-500">{label}</span>
                  <span className="block truncate text-sm font-medium text-zinc-200">{value}</span>
                </span>
              </a>
            ))}
            <p className="mt-2 flex items-center gap-2 px-1 text-sm text-zinc-500">
              <FiMapPin aria-hidden /> {profile.location} · {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-zinc-300">Nome</span>
                  <input name="nome" required maxLength={LIMITS.nome} autoComplete="name" value={form.nome} onChange={onChange} className="field" placeholder="Seu nome" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-zinc-300">E-mail</span>
                  <input name="email" type="email" required maxLength={LIMITS.email} autoComplete="email" value={form.email} onChange={onChange} className="field" placeholder="voce@empresa.com" />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Assunto <span className="text-zinc-500">(opcional)</span>
                </span>
                <input name="assunto" maxLength={LIMITS.assunto} value={form.assunto} onChange={onChange} className="field" placeholder="Vaga, projeto, parceria…" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">Mensagem</span>
                <textarea name="mensagem" required rows={5} maxLength={LIMITS.mensagem} value={form.mensagem} onChange={onChange} className="field resize-y" placeholder="Conte um pouco sobre o que você precisa." />
              </label>

              <label aria-hidden className="hidden">
                Website
                <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </label>

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-primary" disabled={status.type === 'sending'}>
                  {status.type === 'sending' ? (
                    <>
                      <FiLoader className="animate-spin" aria-hidden /> Enviando…
                    </>
                  ) : (
                    <>
                      <FiSend aria-hidden /> Enviar mensagem
                    </>
                  )}
                </button>

                <p role="status" aria-live="polite" className="text-sm">
                  {status.type === 'success' && (
                    <span className="flex items-center gap-2 text-emerald-300">
                      <FiCheck aria-hidden /> Mensagem enviada! Retorno em breve.
                    </span>
                  )}
                  {status.type === 'error' && (
                    <span className="flex items-start gap-2 text-rose-300">
                      <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden /> {status.message}
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
