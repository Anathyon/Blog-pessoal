import type { IconType } from 'react-icons'
import {
  SiBitbucket,
  SiClaude,
  SiCss,
  SiCursor,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPwa,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTanstack,
  SiTestinglibrary,
  SiTypescript,
  SiV0,
  SiVercel,
  SiVite,
  SiVitest,
  SiZod,
} from 'react-icons/si'
import { TbApi, TbBrandVscode } from 'react-icons/tb'

export interface Skill {
  name: string
  /** Ícone vetorial (react-icons) */
  Icon?: IconType
  /** Alternativa: caminho de imagem em /public/icons */
  img?: string
  color?: string
}

export interface SkillGroup {
  title: string
  description: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    description: 'Base sólida para interfaces rápidas, acessíveis e responsivas.',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61dafb' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', Icon: SiCss, color: '#663399' },
      { name: 'Sass', Icon: SiSass, color: '#cc6699' },
      { name: 'PWA', Icon: SiPwa, color: '#a78bfa' },
    ],
  },
  {
    title: 'UI & Ecossistema',
    description: 'Bibliotecas que uso no dia a dia para entregar com qualidade.',
    skills: [
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'shadcn/ui', Icon: SiShadcnui, color: '#ffffff' },
      { name: 'Radix UI', Icon: SiRadixui, color: '#ffffff' },
      { name: 'Framer Motion', Icon: SiFramer, color: '#e879f9' },
      { name: 'Zustand', img: '/icons/zustand.svg' },
      { name: 'TanStack', Icon: SiTanstack, color: '#ffffff' },
      { name: 'TanStack Query', Icon: SiReactquery, color: '#ff4154' },
      { name: 'React Router', Icon: SiReactrouter, color: '#f44250' },
      { name: 'React Hook Form', Icon: SiReacthookform, color: '#ec5990' },
      { name: 'Zod', Icon: SiZod, color: '#3e67b1' },
    ],
  },
  {
    title: 'Back-end, dados & deploy',
    description: 'Integrações e infraestrutura para colocar projetos no ar.',
    skills: [
      { name: 'Firebase', Icon: SiFirebase, color: '#ffca28' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'Express', Icon: SiExpress, color: '#ffffff' },
      { name: 'APIs REST', Icon: TbApi, color: '#a78bfa' },
      { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
      { name: 'Vite', Icon: SiVite, color: '#bd34fe' },
      { name: 'Git', Icon: SiGit, color: '#f05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
      { name: 'Bitbucket', Icon: SiBitbucket, color: '#2684ff' },
    ],
  },
  {
    title: 'Qualidade',
    description: 'Testes e padrões para código confiável e fácil de manter.',
    skills: [
      { name: 'Vitest', Icon: SiVitest, color: '#6e9f18' },
      { name: 'Testing Library', Icon: SiTestinglibrary, color: '#e33332' },
      { name: 'Jest', Icon: SiJest, color: '#c21325' },
      { name: 'ESLint', Icon: SiEslint, color: '#8080f2' },
      { name: 'Figma', Icon: SiFigma, color: '#f24e1e' },
      { name: 'VS Code', Icon: TbBrandVscode, color: '#22a6f2' },
    ],
  },
  {
    title: 'IA no fluxo de trabalho',
    description: 'Ferramentas de IA para acelerar entregas sem abrir mão da revisão.',
    skills: [
      { name: 'Claude', Icon: SiClaude, color: '#d97757' },
      { name: 'Gemini', Icon: SiGooglegemini, color: '#8e75ff' },
      { name: 'ChatGPT', img: '/icons/chatgpt.svg' },
      { name: 'GitHub Copilot', Icon: SiGithubcopilot, color: '#ffffff' },
      { name: 'Cursor', Icon: SiCursor, color: '#ffffff' },
      { name: 'v0', Icon: SiV0, color: '#ffffff' },
    ],
  },
]

export const softSkills = [
  'Trabalho em equipe',
  'Comunicação clara com clientes',
  'Autonomia e aprendizado contínuo',
  'Visão de marketing e produto',
]
