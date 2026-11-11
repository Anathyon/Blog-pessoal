export const profile = {
  name: 'Anathyon Erysson',
  fullName: 'Anathyon Erysson Barros Iris',
  role: 'Desenvolvedor Front-end',
  company: 'Plugwin Sistemas',
  location: 'Meruoca, CE — Brasil',
  availability: 'Remoto, híbrido ou presencial',
  email: 'anathyon@protonmail.com',
  phoneDisplay: '(88) 99414-7362',
  whatsapp: 'https://wa.me/5588994147362',
  cvUrl: '/pdf-cv/Anathyon-Erysson-Curriculo.pdf',
  photo: '/profile_pic/perfil.webp',
  socials: {
    github: 'https://github.com/Anathyon',
    linkedin: 'https://www.linkedin.com/in/anathyonerysson/',
    instagram: 'https://www.instagram.com/anathyon/',
    x: 'https://x.com/anathyon',
  },
} as const

export const whatsappLink = (message: string) =>
  `${profile.whatsapp}?text=${encodeURIComponent(message)}`

export const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' },
] as const
