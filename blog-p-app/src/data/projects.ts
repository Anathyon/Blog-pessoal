export type ProjectKind = 'profissional' | 'pessoal'

export interface Project {
  slug: string
  title: string
  /** Cliente / contexto exibido acima do título */
  client: string
  kind: ProjectKind
  year: number
  summary: string
  highlights: string[]
  stack: string[]
  live?: string
  repo?: string
  /**
   * Print do projeto em /public/img-projetos (formato .webp, ~1200px de largura).
   * Sem imagem, o card exibe uma capa gerada automaticamente com as cores de `accent`.
   */
  image?: string
  /** Par de cores usado na capa gerada */
  accent: [string, string]
  featured?: boolean
}

const gh = (repo: string) => `https://github.com/Anathyon/${repo}`

export const projects: Project[] = [
  // ───────────────────────── Profissionais (Plugwin Sistemas) ─────────────────────────
  {
    slug: 'plugwin',
    title: 'Plugwin Sistemas',
    client: 'Plugwin Sistemas · Site institucional',
    kind: 'profissional',
    year: 2026,
    summary:
      'Site institucional da empresa de software para gestão pública e privada, apresentando soluções para saúde, educação, legislativo e outros segmentos.',
    highlights: [
      'Formulário de contato validado com Zod e protegido com hCaptcha',
      'Função serverless (Vercel) para envio de e-mails com Nodemailer',
      'Integração com Firebase, estado global com Zustand e animações com Framer Motion',
      'Testes automatizados com Vitest e Testing Library',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Zustand', 'Zod', 'Firebase', 'Serverless API', 'Vitest'],
    live: 'https://site-plugwin.vercel.app',
    repo: gh('SITE-PLUGWIN'),
    image: '/img-projetos/plugwin.webp',
    accent: ['#2563eb', '#06b6d4'],
    featured: true,
  },
  {
    slug: 'meruoca-off-road',
    title: 'Meruoca Off-Road',
    client: 'Evento esportivo · Plataforma web',
    kind: 'profissional',
    year: 2026,
    summary:
      'Plataforma oficial de inscrições e gestão do 1º Trilhão Meruoca Off-Road, com área administrativa e dados em tempo real.',
    highlights: [
      'Fluxo completo de inscrição de participantes',
      'Autenticação e banco de dados com Firebase (Auth + Firestore) e deploy no Firebase Hosting',
      'Interface construída com shadcn/ui (Radix) e cache de dados com TanStack Query',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'Firebase', 'Zustand', 'Vitest'],
    live: 'https://meruoca-off-road.vercel.app',
    repo: gh('MERUOCA-OFF-ROAD'),
    image: '/img-projetos/meruoca-off-road.webp',
    accent: ['#ea580c', '#facc15'],
    featured: true,
  },
  {
    slug: 'eleicao-mirim-martinopole',
    title: 'Eleição Vereador Mirim',
    client: 'Câmara Municipal de Martinópole · Sistema de votação',
    kind: 'profissional',
    year: 2026,
    summary:
      'Sistema oficial de votação do Programa Vereador Mirim: urna virtual para os alunos das escolas do município e painel eleitoral administrativo com apuração em tempo real.',
    highlights: [
      'Urna virtual com fluxo guiado: acessar a urna, escolher o candidato e confirmar o voto',
      'Painel do organizador com dashboard em tempo real: total de votos, participação, votos por escola e pico de votação por horário',
      'Gestão de eleições, escolas, candidatos e votantes, apuração, segurança das urnas e auditoria/logs',
      'Acessibilidade no portal público: alto contraste e ajuste de tamanho de fonte',
      'React, TypeScript, Tailwind CSS e shadcn/ui no front; Node.js/Express e Firebase no back',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express', 'Firebase'],
    image: '/img-projetos/eleicao-mirim-martinopole.webp',
    accent: ['#16a34a', '#2563eb'],
    featured: true,
  },
  {
    slug: 'prefeitura-alcantaras',
    title: 'Portal da Prefeitura de Alcântaras',
    client: 'Gestão pública · Portal municipal',
    kind: 'profissional',
    year: 2026,
    summary:
      'Portal oficial do município com destinos turísticos, serviços ao cidadão, notícias, transparência, licitações e ouvidoria.',
    highlights: [
      'Arquitetura em HTML, CSS e JavaScript nativo com ES Modules — sem frameworks',
      'Barra de acessibilidade com ajuste de fonte, alto contraste e mapa do site',
      'Aviso de armazenamento local com consentimento do visitante (LGPD)',
      'Busca de serviços com atalhos para os termos mais procurados',
      'Configuração centralizada de conteúdo e testes com o test runner nativo do Node.js',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript (ES Modules)', 'Node.js', 'node:test', 'Vercel'],
    live: 'https://layout-executivo.vercel.app',
    repo: gh('LAYOUT-EXECUTIVO'),
    image: '/img-projetos/prefeitura-alcantaras.webp',
    accent: ['#059669', '#0ea5e9'],
    featured: true,
  },
  {
    slug: 'vereador-robertinho',
    title: 'Vereador Robertinho Moreira',
    client: 'Legislativo · Mandato aberto',
    kind: 'profissional',
    year: 2026,
    summary:
      'Site de mandato aberto e transparente para acompanhar projetos, agenda e votações do vereador na Câmara Municipal de Martinópole.',
    highlights: [
      'Roteamento tipado com TanStack Router / TanStack Start',
      'Formulários com React Hook Form + Zod e proteção com reCAPTCHA',
      'Componentes acessíveis com shadcn/ui (Radix UI)',
      'Hospedagem e dados com Firebase',
    ],
    stack: ['React', 'TypeScript', 'TanStack Start', 'TanStack Query', 'Tailwind CSS', 'shadcn/ui', 'React Hook Form', 'Zod', 'Firebase'],
    live: 'https://site-roberto-vereador.vercel.app',
    repo: gh('SITE-ROBERTO-VEREADOR'),
    image: '/img-projetos/vereador-robertinho.webp',
    accent: ['#1d4ed8', '#16a34a'],
    featured: true,
  },
  {
    slug: 'argumento-producoes',
    title: 'Argumento Produções',
    client: 'Audiovisual · Produtora de cinema',
    kind: 'profissional',
    year: 2026,
    summary:
      'Site da produtora brasileira de cinema e audiovisual: filmes, equipe e bastidores — “do sertão à tela”.',
    highlights: [
      'SPA com React Router e animações com Motion',
      'Formulário com React Hook Form + Zod e reCAPTCHA',
      'Estado com Zustand e testes com Vitest + cobertura V8',
      'Deploy no Firebase Hosting',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion', 'React Router', 'React Hook Form', 'Zod', 'Zustand', 'Vitest'],
    live: 'https://site-argumento-f4d69.web.app',
    repo: gh('ARGUMENTO-PRODUCOES'),
    image: '/img-projetos/argumento-producoes.webp',
    accent: ['#b91c1c', '#f59e0b'],
    featured: true,
  },
  {
    slug: 'edney-eslley',
    title: 'Edney Eslley',
    client: 'Marketing político · Landing page',
    kind: 'profissional',
    year: 2026,
    summary:
      'Página do estrategista em marketing político, focada em autoridade, gestão de crise e conversão de contatos.',
    highlights: [
      'Layout de alta conversão com animações sob medida (Framer Motion)',
      'Estado com Zustand e integração com Firebase',
      'Testes de componentes com Vitest e Testing Library',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Zustand', 'Firebase', 'Vitest'],
    live: 'https://site-edney.vercel.app',
    repo: gh('SITE-EDNEY'),
    image: '/img-projetos/edney-eslley.webp',
    accent: ['#4f46e5', '#db2777'],
  },
  {
    slug: 'promova-producoes',
    title: 'Promova Produções',
    client: 'Produtora · Site institucional',
    kind: 'profissional',
    year: 2026,
    summary:
      'Site institucional com formulário de orçamento integrado a uma API Node.js/Express para envio de e-mails.',
    highlights: [
      'API própria com Express + Nodemailer (serverless na Vercel)',
      'Formulários com React Hook Form + Zod e componentes Headless UI',
      'Estado com Zustand, testes com Vitest',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS v4', 'Headless UI', 'React Hook Form', 'Zod', 'Express', 'Nodemailer', 'Firebase', 'Vitest'],
    live: 'https://site-promova.vercel.app',
    repo: gh('SITE-PROMOVA'),
    image: '/img-projetos/promova-producoes.webp',
    accent: ['#7c3aed', '#f97316'],
  },
  {
    slug: 'narrativa',
    title: 'Narrativa Entretenimento',
    client: 'Audiovisual · Estúdio de animação',
    kind: 'profissional',
    year: 2026,
    summary:
      'Site do estúdio brasileiro de animação focado em histórias que valorizam a cultura e a imaginação nacionais.',
    highlights: [
      'SPA com React Router, animações com Motion',
      'Formulário de contato com React Hook Form, Zod e reCAPTCHA',
      'Testes com Vitest e Testing Library',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion', 'React Router', 'Zod', 'Zustand', 'Vitest'],
    repo: gh('NARRATIVA-PRODUCOES'),
    image: '/img-projetos/narrativa.webp',
    accent: ['#0891b2', '#a855f7'],
  },
  {
    slug: 'scm',
    title: 'Sociedade Coração de Maria',
    client: 'Terceiro setor · Site institucional',
    kind: 'profissional',
    year: 2026,
    summary:
      'Site institucional da SCM construído com TanStack Start, com rotas tipadas e biblioteca de componentes acessíveis.',
    highlights: [
      'TanStack Start + TanStack Router com geração de rotas',
      'Componentes acessíveis com shadcn/ui (Radix UI)',
      'Formulários com React Hook Form + Zod',
    ],
    stack: ['React', 'TypeScript', 'TanStack Start', 'TanStack Query', 'Tailwind CSS v4', 'shadcn/ui', 'React Hook Form', 'Zod', 'Vitest'],
    repo: gh('SOCIEDADE-CORACAO-DE-MARIA'),
    image: '/img-projetos/scm.webp',
    accent: ['#be123c', '#2563eb'],
  },
  {
    slug: 'trilhao-landing',
    title: '1º Trilhão Meruoca Off-Road',
    client: 'Evento esportivo · Landing page',
    kind: 'profissional',
    year: 2026,
    summary: 'Landing page de divulgação do evento, com programação, percurso e chamada para inscrição.',
    highlights: ['Página leve e responsiva com animações de entrada', 'Deploy no Firebase Hosting e Vercel'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://evento-moto.vercel.app',
    repo: gh('EVENTO-MOTO'),
    accent: ['#ca8a04', '#dc2626'],
  },
  {
    slug: 'mao-na-roda',
    title: 'Mão na Roda',
    client: 'Freelance · Plataforma de serviços',
    kind: 'profissional',
    year: 2025,
    summary:
      'Site que conecta clientes a profissionais de serviços domésticos, com versões para quem contrata e para quem presta o serviço.',
    highlights: [
      'Desenvolvido em equipe multidisciplinar para empresa real',
      'Interface responsiva e otimizada para SEO',
      'Integração com os apps mobile Android da plataforma',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://m-o-na-roda.vercel.app',
    repo: gh('M-o-na-roda'),
    image: '/img-projetos/mao-na-roda.webp',
    accent: ['#0d9488', '#22c55e'],
  },

  // ───────────────────────── Pessoais & estudos ─────────────────────────
  {
    slug: 'cine-explorer',
    title: 'Cine Explorer',
    client: 'Projeto pessoal · Next.js',
    kind: 'pessoal',
    year: 2025,
    summary:
      'Descoberta de filmes, séries e animes com recomendações, favoritos e PWA instalável, integrando as APIs TMDB e Jikan.',
    highlights: ['App Router do Next.js 15', 'PWA instalável', 'Testes com Jest'],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'TMDB API', 'Jikan API', 'PWA', 'Jest'],
    live: 'https://reco-cine.vercel.app',
    repo: gh('reco-cine'),
    image: '/img-projetos/cine-explorer.webp',
    accent: ['#e11d48', '#7c3aed'],
    featured: true,
  },
  {
    slug: 'weather',
    title: 'WeatherApp',
    client: 'Projeto pessoal · Dashboard',
    kind: 'pessoal',
    year: 2026,
    summary:
      'Dashboard meteorológico com geolocalização, mapas multiparamétricos (temperatura, chuva, vento, pressão), ciclo solar e fases da lua.',
    highlights: ['Mapas interativos com React-Leaflet', 'Sincronização automática de fuso horário'],
    stack: ['React', 'TypeScript', 'Zustand', 'Framer Motion', 'Bootstrap', 'React-Leaflet', 'OpenWeatherMap API'],
    live: 'https://informa-es-meteorol-gicas.vercel.app',
    repo: gh('informa--es-meteorol-gicas'),
    image: '/img-projetos/weather.webp',
    accent: ['#0284c7', '#38bdf8'],
  },
  {
    slug: 'recipes',
    title: 'RecipeApp',
    client: 'Projeto pessoal · IA',
    kind: 'pessoal',
    year: 2026,
    summary:
      'Buscador de receitas internacionais com tradução em tempo real de instruções, ingredientes e medidas via Google Gemini.',
    highlights: ['Tradução com IA (Gemini API)', 'Internacionalização com React-Intl'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'React-Intl', 'TheMealDB API', 'Gemini API'],
    live: 'https://buscador-receitas-theta.vercel.app',
    repo: gh('Buscador-receitas'),
    image: '/img-projetos/recipes.webp',
    accent: ['#ea580c', '#84cc16'],
  },
  {
    slug: 'conversor',
    title: 'Conversor de Moedas',
    client: 'Projeto pessoal · PWA',
    kind: 'pessoal',
    year: 2026,
    summary:
      'Conversão de moedas em tempo real com favoritos, histórico de conversões e gráficos de tendência do câmbio.',
    highlights: ['Gráficos históricos de câmbio', 'Tema claro/escuro e PWA instalável'],
    stack: ['React', 'TypeScript', 'Vite', 'PWA', 'localStorage'],
    live: 'https://conversor-de-moedas-orcin.vercel.app',
    repo: gh('Conversor-de-moedas'),
    accent: ['#16a34a', '#eab308'],
  },
  {
    slug: 'email-sender',
    title: 'Disparador de E-mails',
    client: 'Projeto pessoal · Integração',
    kind: 'pessoal',
    year: 2026,
    summary:
      'Envio de e-mails estilizados direto do front-end usando templates dinâmicos do EmailJS, com configuração de credenciais pela interface.',
    highlights: ['Templates com variáveis dinâmicas', 'Credenciais via .env ou localStorage'],
    stack: ['React', 'Vite', 'EmailJS', 'Lucide'],
    live: 'https://form-submmit.vercel.app',
    repo: gh('form-submmit'),
    accent: ['#2563eb', '#a855f7'],
  },
  {
    slug: 'imc',
    title: 'Calculadora de IMC',
    client: 'Projeto pessoal · Next.js',
    kind: 'pessoal',
    year: 2025,
    summary: 'Cálculo de IMC com histórico, exportação em CSV, tema claro/escuro e PWA.',
    highlights: ['Exportação CSV', 'Testes com Jest'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'PWA', 'Jest'],
    live: 'https://calculadora-imc-liard-omega.vercel.app',
    repo: gh('calculadora_imc'),
    image: '/img-projetos/imc.webp',
    accent: ['#0d9488', '#6366f1'],
  },
]

export const professionalProjects = projects.filter((p) => p.kind === 'profissional')
export const personalProjects = projects.filter((p) => p.kind === 'pessoal')
