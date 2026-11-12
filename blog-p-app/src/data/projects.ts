export type ProjectKind = 'profissional' | 'pessoal'

export interface Project {
  slug: string
  title: string
  /** Cliente / contexto exibido acima do título */
  client: string
  kind: ProjectKind
  year: number
  summary: string
  /** Contexto / problema que o projeto resolve (exibido no modal) */
  context?: string
  /** O que eu fiz no projeto */
  role?: string
  /** Funcionalidades entregues, do ponto de vista de quem usa */
  features?: string[]
  /** Decisões e destaques técnicos */
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

const PLUGWIN_ROLE = 'Desenvolvedor front-end na Plugwin Sistemas'

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
    context:
      'A empresa precisava de uma vitrine única para 11 produtos distintos (saúde, educação, legislativo, GED, e-SIC, ouvidoria e outros), com um canal de contato confiável para gerar oportunidades comerciais.',
    role: `${PLUGWIN_ROLE}: interface, páginas de produto, formulário de contato e função serverless de envio de e-mail.`,
    features: [
      'Página dedicada para cada um dos 11 produtos, gerada a partir de uma fonte de conteúdo centralizada',
      'Blog com páginas individuais de publicação',
      'Chatbot de atendimento que qualifica o interesse do visitante e encaminha a conversa para WhatsApp ou Instagram',
      'Formulário de contato com validação e hCaptcha, e aviso de privacidade (LGPD)',
    ],
    highlights: [
      'Função serverless que revalida os dados com Zod, confere o hCaptcha no servidor, escapa o HTML e envia o e-mail via Nodemailer/SMTP',
      'Mesmo schema Zod no cliente e no servidor, com estado do formulário em Zustand',
      'Code splitting manual de dependências (React e Framer Motion) e cabeçalhos de segurança/cache (CSP, X-Frame-Options, gzip)',
      'Testes com Vitest e Testing Library cobrindo páginas, componentes de UI e a store do formulário',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'React Router', 'Framer Motion', 'Zustand', 'Zod', 'hCaptcha', 'Nodemailer', 'Vercel Functions', 'Vitest'],
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
      'Plataforma oficial do 1º Trilhão Meruoca Off-Road: site do evento, lista de pilotos confirmados em tempo real e painel administrativo para a organização gerenciar as inscrições.',
    context:
      'As inscrições eram feitas em um sistema externo em PHP. A organização precisava acompanhar e validar os pilotos (status, comprovantes de pagamento) em um só lugar, e o público queria ver quem já estava confirmado.',
    role: `${PLUGWIN_ROLE}: site do evento, integração com o sistema de inscrição, painel administrativo e autenticação.`,
    features: [
      'Site do evento com percurso, programação, o que está incluso, galeria e perguntas frequentes',
      'Lista de pilotos confirmados e contador atualizados em tempo real',
      'Painel administrativo com busca, alteração de status (pendente, confirmado, recusado), visualização de comprovante e foto do piloto',
      'Exportação das inscrições em CSV (UTF-8 com BOM, abre corretamente no Excel)',
      'Página de mapas das trilhas por nível de dificuldade',
    ],
    highlights: [
      'Sincronização dos pilotos da API PHP do sistema de inscrição para o Firestore, com trava contra execuções simultâneas',
      'Dados em tempo real com listeners do Firestore (onSnapshot)',
      'Login com Firebase Auth (e-mail/senha e Google) e rota administrativa protegida',
      'Seções abaixo da dobra carregadas sob demanda (React.lazy) e mídias otimizadas com ffmpeg/ImageMagick',
      'Interface com shadcn/ui (Radix) e testes com Vitest',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'shadcn/ui', 'React Router', 'TanStack Query', 'Firebase Auth', 'Firestore', 'Firebase Hosting', 'Vitest'],
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
    context:
      'A Câmara Municipal precisava conduzir uma eleição escolar em várias escolas ao mesmo tempo, garantindo que só alunos aptos votassem, uma única vez, e com apuração transparente para a organização.',
    role: 'Desenvolvimento da aplicação: fluxo de votação, painel administrativo e persistência no Firestore.',
    features: [
      'Urna virtual em etapas: identificação, escolha do candidato, confirmação e comprovante',
      'Validação de CPF e conferência do aluno na lista de aptos por escola, série e turma, bloqueando voto duplicado',
      'Painel com votos por escola e por horário, gestão de eleições, escolas, candidatos e eleitores',
      'Importação da lista de alunos aptos, apuração com exportação em CSV e impressão, logs e backup/restauração em JSON',
      'Acessibilidade no portal público: alto contraste e ajuste de tamanho de fonte',
    ],
    highlights: [
      'Arquitetura offline-first: o voto é gravado localmente na hora e sincronizado com o Firestore em segundo plano',
      'Sincronização em tempo real entre terminais com listeners do Firestore',
      'Regras do Firestore com negação por padrão: votos e eleitores só podem ser lidos pela administração',
      'Encadeamento dos votos com checksum para detectar alterações na sequência',
      'Testes com Vitest cobrindo utilitários, camada de dados e fluxo de votação',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion', 'Firestore', 'Firebase Hosting', 'Vitest'],
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
      'Portal municipal com transparência, serviços ao cidadão, notícias, licitações e ouvidoria, construído inteiramente em JavaScript nativo.',
    context:
      'Portais de transparência precisam publicar um grande volume de dados públicos de forma acessível (padrão e-MAG) e exportável, mantendo o site leve e fácil de manter sem depender de frameworks.',
    role: `${PLUGWIN_ROLE}: arquitetura em ES Modules, componentes de listagem, acessibilidade, scripts de build e testes.`,
    features: [
      'Mais de 400 rotas geradas a partir de definições de recursos: listagem, detalhe, impressão e exportação (CSV, JSON, TXT, DOC)',
      'Tabelas com filtro, ordenação e paginação',
      'Ouvidoria/e-SIC, mapa do site, busca e página 404',
      'Barra de acessibilidade com ajuste de fonte, alto contraste e atalhos e-MAG (Alt+1 a Alt+4)',
      'Consentimento de armazenamento local (LGPD)',
    ],
    highlights: [
      'Zero dependências de produção: HTML, CSS e JavaScript nativo com ES Modules',
      'PWA com service worker; sitemap, robots e modulepreload gerados por scripts',
      'Imagens em WebP com srcset, Open Graph e dados estruturados (JSON-LD)',
      'Cabeçalhos de segurança (CSP, X-Frame-Options, Permissions-Policy) e escape de HTML contra XSS',
      'Suíte de testes com o test runner nativo do Node.js e CI no GitHub Actions (lint, testes e verificação de arquivos gerados)',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript (ES Modules)', 'PWA', 'Node.js', 'node:test', 'GitHub Actions', 'Vercel'],
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
      'Site de mandato aberto e transparente para acompanhar matérias, realizações, transparência e o dia a dia do vereador na Câmara Municipal de Martinópole.',
    context:
      'O conteúdo do mandato (matérias, prestação de contas, realizações e posts do Instagram) é publicado por um painel administrativo; o site precisava consumir esses dados e manter o eleitor informado.',
    role: `${PLUGWIN_ROLE}: front-end completo, integração com a API do painel e formulário de contato.`,
    features: [
      'Matérias com paginação e página individual para cada uma',
      'Feed do Instagram paginado com visualização em modal',
      'Seções de transparência, realizações e Câmara oficial',
      'Contato por formulário, WhatsApp e redes sociais',
    ],
    highlights: [
      'Consumo de API REST headless com TanStack Query e roteamento tipado com TanStack Router',
      'Formulário protegido com reCAPTCHA v3 invisível e envio via Formspark',
      'Code splitting manual (React, Framer Motion, TanStack) e imagens com carregamento tardio',
      'Componentes acessíveis com shadcn/ui (Radix) e testes com Vitest e Testing Library',
    ],
    stack: ['React 19', 'TypeScript', 'TanStack Router', 'TanStack Query', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'reCAPTCHA v3', 'Firebase Hosting', 'Vitest'],
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
      'Site da produtora brasileira de cinema e audiovisual: filmes, equipe, portfólio e notícias — “do sertão à tela”.',
    context:
      'A produtora atualiza filmes, portfólio e notícias por um painel administrativo próprio; o site precisava exibir esse conteúdo dinâmico com a identidade cinematográfica da marca.',
    role: `${PLUGWIN_ROLE}: front-end, integração com a API de conteúdo e formulário de contato.`,
    features: [
      'Páginas de trabalhos, portfólio e notícias com listagem paginada e páginas de detalhe',
      'Ficha técnica e trailer de cada filme',
      'Modal da equipe com carrossel automático e navegação por teclado',
      'Seções institucionais (missão, visão e valores) e formulário de contato',
    ],
    highlights: [
      'Conteúdo vindo de API REST headless, com camada de dados tipada e estado em Zustand',
      'Todas as páginas carregadas sob demanda (React.lazy) e imagem principal pré-carregada com alta prioridade',
      'Formulário validado com Zod e protegido com reCAPTCHA, enviado via Web3Forms',
      'SEO com canonical, Open Graph e Twitter Cards; cabeçalhos de segurança (CSP, Permissions-Policy)',
      '44 testes com Vitest e Testing Library cobrindo a camada de API e os estados da página (carregamento, vazio, erro)',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion', 'React Router', 'Zustand', 'Zod', 'reCAPTCHA', 'Firebase Hosting', 'Vitest'],
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
      'Landing page do estrategista em marketing político no Ceará, focada em autoridade, gestão de crise e conversão de contatos.',
    context:
      'O objetivo era transformar visitantes em contatos qualificados: a página precisava transmitir credibilidade rapidamente e levar a pessoa a falar com o estrategista.',
    role: `${PLUGWIN_ROLE}: layout, animações e formulário de captação de leads.`,
    features: [
      'Seções de serviços, cases, depoimentos em carrossel e perguntas frequentes em acordeão',
      'Formulário de leads que envia por e-mail e já abre uma conversa pré-preenchida no WhatsApp',
    ],
    highlights: [
      'Validação de nome, WhatsApp e e-mail no cliente, envio via Web3Forms com campo honeypot anti-spam',
      'Animações sob medida com Framer Motion e hook de breakpoint para adaptar o layout',
      'Testes com Vitest e Testing Library cobrindo cabeçalho, formulário, página e hooks',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Zustand', 'Web3Forms', 'Firebase Hosting', 'Vitest'],
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
      'Site da produtora de eventos e audiovisual do Ceará, com portfólio de eventos e formulário de orçamento integrado a uma API própria de envio de e-mails.',
    context:
      'A produtora queria mostrar os eventos que já realizou e receber pedidos de orçamento organizados por tipo de serviço, direto no e-mail da equipe.',
    role: `${PLUGWIN_ROLE}: front-end, API de e-mail e deploy serverless.`,
    features: [
      'Hero com vídeo de fundo escolhido aleatoriamente',
      'Portfólio de eventos com modal de detalhes e cards de serviços',
      'Formulário de orçamento com seleção do serviço desejado',
      'Termos de uso, política de privacidade, cookies e LGPD em modal',
    ],
    highlights: [
      'API com Express e Nodemailer, rodando localmente e como função serverless na Vercel',
      'Formulário com React Hook Form + Zod e componentes acessíveis do Headless UI',
      'Vídeos em WebM/MP4 compactados e animações reduzidas em dispositivos móveis',
      'Testes com Vitest cobrindo renderização, acessibilidade, validação do formulário e o modal do portfólio',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Headless UI', 'React Hook Form', 'Zod', 'Express', 'Nodemailer', 'Vercel Functions', 'Vitest'],
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
    context:
      'O estúdio publica trabalhos, portfólio e notícias por um painel próprio e precisava que o site continuasse apresentável mesmo se a API ficasse fora do ar.',
    role: `${PLUGWIN_ROLE}: front-end, integração com a API de conteúdo e formulário de contato.`,
    features: [
      'Trabalhos, portfólio e notícias com listagem paginada, páginas de detalhe e visualização rápida em modal',
      'Cards da equipe de animadores com carrossel de trabalhos',
      'Formulário de contato com captcha',
    ],
    highlights: [
      'Fallback com dados locais quando a API está indisponível, mantendo o site funcional',
      'Modal acessível (role="dialog", fechamento com Esc, bloqueio de rolagem) reutilizado em todas as listagens',
      'Friendly Captcha (sem rastreamento) e validação com Zod, envio via Web3Forms',
      'Páginas sob demanda, assets pré-comprimidos em gzip e 44 testes com Vitest',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion', 'React Router', 'Zustand', 'Zod', 'Friendly Captcha', 'Vitest'],
    repo: gh('NARRATIVA-PRODUCOES'),
    image: '/img-projetos/narrativa.webp',
    accent: ['#0891b2', '#a855f7'],
  },
  {
    slug: 'scm',
    title: 'Sociedade Coração de Maria',
    client: 'Terceiro setor · Blog institucional',
    kind: 'profissional',
    year: 2026,
    summary:
      'Blog e site institucional da Sociedade Coração de Maria / Sítio Santo Elias, sobre cultura, audiovisual e agroecologia na Serra da Meruoca.',
    context:
      'A organização publica notícias, galeria, prestação de contas e apoiadores por um painel próprio e precisava de um site para dar visibilidade ao trabalho e transparência aos recursos.',
    role: `${PLUGWIN_ROLE}: front-end, integração com a API e testes.`,
    features: [
      'Busca de publicações e filtros por ano e por marcador',
      'Página individual de cada post e página de marcadores',
      'Carrossel de destaques e de apoiadores, galeria com lightbox',
      'Seção de prestação de contas',
    ],
    highlights: [
      'Cache de 30 minutos com TanStack Query e paginação sequencial para respeitar o limite de requisições da API',
      'Roteamento tipado com divisão automática de código por rota (TanStack Router)',
      'Open Graph/Twitter Cards e cabeçalhos de segurança e cache no Firebase Hosting',
      'Testes com Vitest cobrindo API, utilitários e componentes, com relatório de cobertura',
    ],
    stack: ['React 19', 'TypeScript', 'TanStack Router', 'TanStack Query', 'Tailwind CSS v4', 'Radix UI', 'Embla Carousel', 'Firebase Hosting', 'Vitest'],
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
    summary: 'Primeira landing page de divulgação do evento, com data, local, níveis de dificuldade, itens inclusos e chamada para inscrição.',
    context: 'Página rápida para abrir a divulgação e as inscrições do evento, antes da plataforma completa.',
    role: `${PLUGWIN_ROLE}: desenvolvimento e publicação.`,
    features: ['Cards com data, local e dificuldade do percurso', 'Lista do que está incluso no kit do piloto', 'Chamada para inscrição e contato pelo Instagram'],
    highlights: [
      'Slideshow de fundo alimentado pela API do Unsplash, com imagens reserva se a API falhar',
      'Animações de entrada com Framer Motion e deploy no Firebase Hosting',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Unsplash API'],
    live: 'https://evento-moto.vercel.app',
    repo: gh('EVENTO-MOTO'),
    image: '/img-projetos/trilhao-landing.webp',
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
    context: 'A plataforma já tinha apps Android e precisava de um site para apresentar o serviço aos dois públicos e direcionar para os aplicativos.',
    role: 'Freelance: desenvolvimento do site em equipe multidisciplinar para uma empresa real.',
    highlights: [
      'Interface responsiva com animações em Framer Motion',
      'Otimizado para SEO e com cabeçalhos de segurança e cache no deploy',
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
    features: ['Páginas de filmes, séries, animes, favoritos e busca', 'Filtros por gênero e detalhes em modal', 'Favoritos salvos no dispositivo'],
    highlights: ['App Router do Next.js 15 com next/image', 'Integração de duas APIs (TMDB e Jikan/MyAnimeList)', 'PWA instalável e Jest configurado para testes'],
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
      'Dashboard meteorológico com geolocalização, mapas multiparamétricos (temperatura, chuva, vento, pressão), qualidade do ar, ciclo solar e fases da lua.',
    features: [
      'Condições atuais, previsão por hora e para 7 dias',
      'Busca de cidades com histórico e geolocalização com consentimento',
      'Qualidade do ar (IQA e poluentes) e tema que muda conforme o período do dia',
    ],
    highlights: ['Mapas interativos com React-Leaflet', 'Sincronização automática de fuso horário', 'Chave da API protegida por variável de ambiente'],
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
    features: ['Busca por nome, ingrediente ou categoria', 'Receita completa com vídeo, favoritos e exportação em PDF', 'Interface em português, inglês e espanhol'],
    highlights: ['Tradução das receitas com IA (Gemini API)', 'Internacionalização da interface com React-Intl', 'Skeletons de carregamento'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React-Intl', 'TheMealDB API', 'Gemini API'],
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
    features: ['Conversão com cotações atualizadas', 'Favoritos e histórico com taxa e horário', 'Tema claro/escuro'],
    highlights: ['Gráficos históricos de câmbio com Recharts', 'PWA instalável com service worker para uso offline'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Recharts', 'PWA', 'ExchangeRate-API'],
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
    highlights: ['Templates com variáveis dinâmicas', 'Credenciais via .env ou pela aba de configurações (localStorage)'],
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
    summary: 'Cálculo de IMC com classificação da OMS, histórico com data e hora e interface em glassmorphism, implementada a partir de um design no Figma.',
    highlights: ['Validação de peso e altura', 'Histórico persistido com Zustand', 'Animações com Framer Motion'],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Zustand', 'Framer Motion'],
    live: 'https://calculadora-imc-liard-omega.vercel.app',
    repo: gh('calculadora_imc'),
    image: '/img-projetos/imc.webp',
    accent: ['#0d9488', '#6366f1'],
  },
]

export const professionalProjects = projects.filter((p) => p.kind === 'profissional')
export const personalProjects = projects.filter((p) => p.kind === 'pessoal')
