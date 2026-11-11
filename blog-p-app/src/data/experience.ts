export interface Experience {
  period: string
  role: string
  org: string
  type: string
  current?: boolean
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    period: '2026 — atual',
    role: 'Desenvolvedor Front-end',
    org: 'Plugwin Sistemas',
    type: 'Empresa de software para gestão pública e privada',
    current: true,
    bullets: [
      'Desenvolvo sites institucionais, portais e sistemas web para clientes públicos e privados — prefeitura e câmara municipal (incluindo o sistema de votação do Vereador Mirim de Martinópole), mandato legislativo, produtoras audiovisuais, eventos e o próprio site da empresa.',
      'Stack principal: React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, TanStack (Router, Start, Query) e Zustand.',
      'Formulários validados com React Hook Form + Zod e protegidos com reCAPTCHA/hCaptcha; envio de e-mails via APIs serverless com Nodemailer.',
      'Integração com Firebase (Auth, Firestore, Hosting), testes com Vitest + Testing Library e deploy na Vercel e no Firebase.',
      'Versionamento com Git em GitHub e Bitbucket, no fluxo de trabalho da equipe.',
    ],
  },
  {
    period: '2025',
    role: 'Desenvolvedor Front-end Freelancer',
    org: 'Mão na Roda',
    type: 'Plataforma de serviços domésticos',
    bullets: [
      'Desenvolvimento do site institucional em equipe multidisciplinar.',
      'Interface responsiva, otimizada para SEO, com React, TypeScript, Vite e Framer Motion.',
    ],
  },
  {
    period: '2022 — atual',
    role: 'Projetos autorais e estudos',
    org: 'GitHub · Anathyon',
    type: 'Aprendizado contínuo',
    bullets: [
      'Mais de 20 projetos públicos: SPAs e apps SSR com React e Next.js, PWAs, integrações com APIs (TMDB, OpenWeather, Gemini) e testes com Jest.',
    ],
  },
]

export const education = [
  { title: 'Tecnólogo em Marketing', org: 'Uninter — Centro Universitário Internacional', period: '2022' },
]

export const courses = [
  'HTML Avançado — Fundação Bradesco',
  'Criação de Sites — Fundação Bradesco',
  'Marketing Digital Essentials — Clube Share',
  'Fundamentos em Informática — IBSEC',
  'Inglês Básico — Uninter',
]
