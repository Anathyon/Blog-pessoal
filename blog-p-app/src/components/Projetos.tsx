import { useState } from 'react';
import styled from 'styled-components';

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
const StyledProjetos = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Tag = styled.span`
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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

const TechBadge = styled.span`
  background-color: rgba(111, 66, 193, 0.2);
  color: #6f42c1;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-right: 0.5rem;
  display: inline-block;
  margin-bottom: 0.5rem;
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

const StyledButton = styled.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
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

const BottomCTA = styled.div`
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 2.5rem;
  margin-top: 4rem;
  text-align: center;
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CTAParagraph = styled.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
`;

const CTAButton = styled(DemoButton)`
  padding: 1rem 3rem;
  font-size: 1rem;
`;

export default function Projetos() {
  const projectsData: Project[] = [
    {
      title: "Portal Institucional de Aplicativos",
      description: "Interface moderna e responsiva desenvolvida para apresentar e divulgar os aplicativos da empresa, destacando funcionalidades, benefícios e links de acesso para download.",
      image: "img-projetos/projeto-mao-na-roda.png", 
      link: "https://m-o-na-roda.vercel.app/",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      performance: "98%",
      users: "5K",
      revenue: "+120%",
    },
    {
      title: "🌤 App de Previsão do Tempo",
      description: "Aplicação moderna e responsiva em React + TypeScript que exibe clima atual, previsão e qualidade do ar, com temas dinâmicos e mapas interativos.",
      image: "img-projetos/projeto-info-meteorologico.png",
      link: "https://informa-es-meteorol-gicas.vercel.app/",
      technologies: ["React", "TypeScript", "Leaflet", "OpenWeather API", "Vercel", "Bootstrap"],
      performance: "100%",
      users: "2.5K",
      loadTime: "1.8s",
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
      title: "Calculadora de IMC",
      description: "Aplicação web que calcula o Índice de Massa Corporal (IMC) de forma prática, responsiva e com histórico de medições.",
      image: "img-projetos/projeto-calc-imc.png", 
      link: "https://calculadora-imc-liard-omega.vercel.app/", 
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel"],
      performance: "97%",
      users: "1K+",
      loadTime: "1.5s",
    },
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
        image: "assets/calc-desktop.png",
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

  return (
    <StyledProjetos id='projetos'>
      <HeaderContainer>
        <Tag>Projetos em Destaque</Tag>
        <MainTitle>
          Transformando <span className='skills-highlight'>Ideias</span> em Realidade
        </MainTitle>
        <Subtitle>
          Cada projeto é uma oportunidade de criar soluções inovadoras que geram resultados reais para nossos clientes.
        </Subtitle>
      </HeaderContainer>

      <ProjectGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <StatusTag>
                  <StatusIcon /> Concluído
                </StatusTag>
              </CardHeader>
              <Description>{project.description}</Description>

              <TechList>
                <TechLabel>Tecnologias</TechLabel>
                {project.technologies.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechList>

              <ResultsContainer>
                <ResultsGrid>
                  <ResultItem>
                    <ResultValue>{project.performance}</ResultValue>
                    <ResultLabel>Performance</ResultLabel>
                  </ResultItem>
                  <ResultItem>
                    <ResultValue>
                      {project.users || project.downloads || project.dataPoints}
                    </ResultValue>
                    <ResultLabel>
                      {project.users ? 'Usuários' : project.downloads ? 'Downloads' : 'Data Points'}
                    </ResultLabel>
                  </ResultItem>
                  <ResultItem>
                    <ResultValue>
                      {project.revenue || project.rating || project.loadTime}
                    </ResultValue>
                    <ResultLabel>
                      {project.revenue ? 'Revenue' : project.rating ? 'Rating' : 'Load Time'}
                    </ResultLabel>
                  </ResultItem>
                </ResultsGrid>
              </ResultsContainer>
            </div>

            <ButtonGroup>
              <DemoButton onClick={() => openModal(project)}>Ver Demo</DemoButton>
              <CodeButton as="a" href={project.link} className='text-center' target="_blank">Código</CodeButton>
            </ButtonGroup>
          </ProjectCard>
        ))}
      </ProjectGrid>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={selectedProject.image} alt={selectedProject.title} />
            <ModalTitle>{selectedProject.title}</ModalTitle>
            <ModalDescription>{selectedProject.description}</ModalDescription>
            <ModalLink href={selectedProject.link} target="_blank">Ver Projeto</ModalLink>
          </ModalContent>
        </ModalOverlay>
      )}

      <BottomCTA>
        <CTATitle>Tem um projeto em mente?</CTATitle>
        <CTAParagraph>Vamos transformar suas ideias em uma solução digital que gera resultados.</CTAParagraph>
        <CTAButton> <a href="#contato">Iniciar Projeto</a> </CTAButton>
      </BottomCTA>
    </StyledProjetos>
  );
}

// Estilos do Modal
const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background: rgba(30, 20, 48, 0.9);
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #a0a0a0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ModalDescription = styled.p`
  color: #a0a0a0;
  margin-bottom: 1rem;
`;

const ModalLink = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;