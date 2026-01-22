import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Defina a interface para o tipo de projeto (manter a tipagem para segurança)
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  performance: string;
  users?: string;
  downloads?: string;
  rating?: string;
  revenue?: string;
  dataPoints?: string;
  loadTime?: string;
}

// 2. Estilos com styled-components
const StyledProjetos = styled(motion.section)`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Tag = styled(motion.span)`
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const MainTitle = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #7e22ce, #0a5ad3b0);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  color: #a0a0a0;
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(126, 34, 206, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const StatusTag = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #38a169;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
`;

const StatusIcon = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 0.5rem;
`;

const Description = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const TechList = styled.div`
  margin-bottom: 1rem;
`;

const TechLabel = styled.h5`
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #718096;
  margin-bottom: 0.5rem;
`;

const TechBadge = styled(motion.span)`
  background-color: rgba(111, 66, 193, 0.2);
  color: #6f42c1;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-right: 0.5rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(111, 66, 193, 0.4);
    color: #fff;
    transform: scale(1.05);
  }
`;

const ResultsContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
`;

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

const ResultLabel = styled.p`
  font-size: 0.75rem;
  color: #a0a0a0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledButton = styled(motion.button)`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover::before {
    width: 300px;
    height: 300px;
  }
`;

const DemoButton = styled(StyledButton)`
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  color: #fff;
`;

const CodeButton = styled(StyledButton)`
  background: transparent;
  color: #6f42c1;
  border: 2px solid #7e22ce;
  &:hover {
    background-color: #0a5ad3b0;
    color: #fff;
    border: 2px solid #022074;
  }
`;

const BottomCTA = styled(motion.div)`
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 2.5rem;
  margin-top: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(126, 34, 206, 0.3), transparent);
    animation: rotate 4s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;



const CTAButton = styled(DemoButton)`
  padding: 1rem 3rem;
  font-size: 1rem;
`;

export default function Projetos() {
  const projectsData: Project[] = [
    {
      title: "Mão na Roda | Plataforma de Serviços Domésticos",
      description: "Aplicação web moderna e responsiva que conecta clientes com profissionais qualificados para serviços domésticos. Inclui animações interativas com Framer Motion, design responsivo e integração com apps mobile para Android. Oferece soluções tanto para quem busca serviços quanto para profissionais.",
      image: "img-projetos/projeto-mao-na-roda.png",
      link: "https://m-o-na-roda.vercel.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "CSS-in-JS"],
      performance: "98%",
      users: "30K+",
      loadTime: "0.8s"
    },
    
    {
      title: "WeatherApp | Informações Meteorológicas",
      description: "Dashboard meteorológico avançado com geolocalização, mapas interativos multiparamétricos (Temp, Chuva, Vento e Pressão), visualização fluida de ciclo solar e fases da lua, além de sincronização automática de fuso horário.",
      image: "img-projetos/projeto-clima.png",
      link: "https://informa-es-meteorol-gicas.vercel.app/",
      technologies: [
        "React", 
        "TypeScript", 
        "Zustand", 
        "Framer Motion", 
        "Bootstrap", 
        "React-Leaflet", 
        "OpenWeatherMap API", 
        "Unsplash API"
      ],
      performance: "98%",
      users: "1K+",
      loadTime: "0.9s"
    },

    {
        title: "Cine Explorer | Plataforma de Recomendações Cinematográficas",
        description: "Aplicação web moderna e responsiva para descobrir filmes, séries e animes com recomendações personalizadas. Inclui sistema de favoritos, PWA instalável, interface responsiva e integração com APIs TMDB e Jikan para conteúdo atualizado.",
        image: "img-projetos/projeto-reco-cine.png",
        link: "https://reco-cine.vercel.app/",
        technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "TMDB API", "Jikan API", "PWA", "Jest"],
        performance: "98%",
        users: "1.5K+",
        loadTime: "0.8s"
    },
    
    {
    title: "Calculadora IMC | Acompanhe sua Saúde",
    description: "Aplicação web moderna e responsiva para cálculo do Índice de Massa Corporal (IMC). Inclui histórico de cálculos, download de dados em CSV, notificação PWA para instalação, tema escuro/claro e design totalmente adaptável para todos os dispositivos.",
    image: "img-projetos/calculadora-imc.png",
    link: "https://calculadora-imc-liard-omega.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "PWA", "Framer Motion", "Jest"],
    performance: "98%",
    users: "1.5K+",
    loadTime: "0.8s"
  }
  ,
    {
    title: "Lista de Tarefas Premium (PWA)",
    description: "Aplicação PWA completa para gerenciamento de tarefas (To-Do List), com design Neon Glassmorphism, painel de estatísticas, edição completa e persistência de dados local.",
    image: "img-projetos/projeto-todo-list.png", 
    link: "https://to-do-list-sepia-nine-42.vercel.app/", // Sugestão: link para o repositório ou deploy.
    technologies: ["TypeScript", "HTML5", "CSS3", "PWA", "localStorage", "Bootstrap Icons"],
    performance: "95% (PWA)", 
    users: "1K+", 
    loadTime: "0.5s (Offline/Service Worker)", 
    },
    {
      title: "RecipeApp | Plataforma de Receitas Global",
      description: "Aplicação web moderna e responsiva para busca e visualização de receitas internacionais. Inclui tradução em tempo real (instruções, ingredientes e medidas) via Google Gemini API, internacionalização (i18n) e design adaptável para todos os dispositivos.",
      image: "img-projetos/projeto-receitas.png", 
      link: "https://buscador-receitas-theta.vercel.app/", 
      technologies: ["React", "TypeScript", "Tailwind CSS", "React-Intl", "TheMealDB API", "Google Gemini API"],
      performance: "95%",
      users: "2K+",
      loadTime: "1.2s",
    },
    {  
        title: "Webcam Creative com Galeria e Filtros",  
        description: "Aplicação web interativa para captura de fotos da webcam em tempo real, com mais de 25 filtros dinâmicos, galeria local e troca de tema (Claro/Escuro).",  
        image: "img-projetos/projeto-webcam.png", 
        link: "https://webcam-mauve.vercel.app/",
        technologies: ["HTML5", "CSS3", "TypeScript", "Vercel", "Bootstrap Icons"],  
        performance: "98%", 
        users: "500+", 
        loadTime: "1.0s", 
      },
      
      {
        title: "Gerador de Senhas | PWA Moderno",
        description: "Aplicação web moderna e responsiva para geração de senhas seguras. Inclui controle de comprimento, opções de caracteres personalizáveis, histórico de senhas, feedback visual de força e funcionalidade PWA para instalação offline.",
        image: "img-projetos/projeto-gerador-senhas.png",
        link: "https://gerador-de-senha-five-psi.vercel.app/",
        technologies: ["TypeScript", "HTML5", "CSS3/SCSS", "Service Worker", "PWA", "Vercel"],
        performance: "98%",
        users: "1K+",
        loadTime: "0.8s"
      },
      {
        title: "Calculadora Científica PWA | Ferramenta Matemática Completa",
        description: "Calculadora científica moderna e responsiva com funcionalidades avançadas. Inclui operações trigonométricas, logaritmos, histórico persistente (até 50 cálculos), PWA com funcionamento offline e design adaptável para todos os dispositivos.",
        image: "img-projetos/projeto-calculadora-cientifica.png",
        link: "https://calculadora-six-rosy.vercel.app/",
        technologies: ["HTML5", "TypeScript", "SCSS", "Service Worker", "PWA", "LocalStorage"],
        performance: "98%",
        users: "1K+",
        loadTime: "0.8s"
      },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 20, 
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -3,
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      y: -1,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeOut" as const
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const ctaVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <StyledProjetos 
      id='projetos'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <HeaderContainer variants={headerVariants}>
        <Tag
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          Projetos em Destaque
        </Tag>
        <MainTitle
          variants={headerVariants}
          whileHover={{ 
            scale: 1.01
          }}
        >
          Transformando <span className='skills-highlight'>Ideias</span> em Realidade
        </MainTitle>
        <motion.div variants={headerVariants}>
          <Subtitle>
            Cada projeto é uma oportunidade de criar soluções inovadoras que geram resultados reais para nossos clientes.
          </Subtitle>
        </motion.div>
      </HeaderContainer>

      <ProjectGrid variants={containerVariants}>
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            variants={cardVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1000 }}
          >
            <div>
              <CardHeader>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardTitle>{project.title}</CardTitle>
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <StatusTag>
                    <motion.span

                    >
                      <StatusIcon />
                    </motion.span>
                    Concluído
                  </StatusTag>
                </motion.div>
              </CardHeader>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Description>{project.description}</Description>
              </motion.div>

              <TechList>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <TechLabel>Tecnologias</TechLabel>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: index * 0.1 + 0.4
                      }
                    }
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <TechBadge 
                      key={i}
                      variants={techBadgeVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                    >
                      {tech}
                    </TechBadge>
                  ))}
                </motion.div>
              </TechList>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <ResultsContainer>
                  <ResultsGrid>
                    <ResultItem>
                      <motion.div whileHover={{ scale: 1.05, color: "#7e22ce" }}>
                        <ResultValue>{project.performance}</ResultValue>
                      </motion.div>
                      <ResultLabel>Performance</ResultLabel>
                    </ResultItem>
                    <ResultItem>
                      <motion.div whileHover={{ scale: 1.05, color: "#7e22ce" }}>
                        <ResultValue>
                          {project.users || project.downloads || project.dataPoints}
                        </ResultValue>
                      </motion.div>
                      <ResultLabel>
                        {project.users ? 'Usuários' : project.downloads ? 'Downloads' : 'Data Points'}
                      </ResultLabel>
                    </ResultItem>
                    <ResultItem>
                      <motion.div whileHover={{ scale: 1.05, color: "#7e22ce" }}>
                        <ResultValue>
                          {project.revenue || project.rating || project.loadTime}
                        </ResultValue>
                      </motion.div>
                      <ResultLabel>
                        {project.revenue ? 'Revenue' : project.rating ? 'Rating' : 'Load Time'}
                      </ResultLabel>
                    </ResultItem>
                  </ResultsGrid>
                </ResultsContainer>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <ButtonGroup>
                <DemoButton 
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => openModal(project)}
                >
                  Ver Demo
                </DemoButton>
                <CodeButton 
                  as={motion.a}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  href={project.link} 
                  className='text-center' 
                  target="_blank"
                >
                  Código
                </CodeButton>
              </ButtonGroup>
            </motion.div>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.05, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  color: '#a0a0a0',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ×
              </motion.button>
              <motion.img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}
              />
              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}
              >
                {selectedProject.title}
              </motion.h4>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  color: '#a0a0a0',
                  marginBottom: '1rem'
                }}
              >
                {selectedProject.description}
              </motion.p>
              <motion.a
                href={selectedProject.link} 
                target="_blank"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7e22ce, #0a5ad3b0)',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                Ver Projeto
              </motion.a>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <BottomCTA
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}
        >
          Tem um projeto em mente?
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: '#a0a0a0',
            marginBottom: '1.5rem'
          }}
        >
          Vamos transformar suas ideias em uma solução digital que gera resultados.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CTAButton
            as={motion.button}
            whileHover={{ 
              scale: 1.02
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 3rem',
              fontSize: '1rem'
            }}
          >
            <a href="#contato">Iniciar Projeto</a>
          </CTAButton>
        </motion.div>
      </BottomCTA>
    </StyledProjetos>
  );
}

// Estilos do Modal
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background: rgba(30, 20, 48, 0.9);
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  border: 1px solid rgba(126, 34, 206, 0.3);
  box-shadow: 0 20px 40px rgba(126, 34, 206, 0.2);
`;

