import { Fragment } from 'react';

export default function Hero() {
  return (
    <Fragment>
      <article id="home" className="hero-article relative flex min-h-screen items-center justify-center overflow-hidden py-12 md:py-24">
        <div className="hero-container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-grid grid-cols-1 items-center gap-12 lg:grid lg:grid-cols-2 lg:items-start">
            {/* Lado Esquerdo */}
            <div className="hero-text flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Badge de Disponibilidade */}
              <div className="hero-badge mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-semibold text-emerald-300 shadow-md transition-all duration-300 hover:scale-105 hover:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 10-5 5-5-5" />
                  <path d="M12 7v5h5" />
                </svg>
                Disponível para novos projetos
              </div>

              {/* Título Principal */}
              <h1 className="hero-title mb-5 font-extrabold leading-tight text-white">
                Transformo
                <br />
                <span className="hero-highlight-1">Ideias</span>
                {' em '}
                <br className="sm:hidden" />
                <span className="hero-highlight-2">Experiências</span>
              </h1>

              {/* Subtítulo */}
              <div className="hero-subtitle mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
                Desenvolvedor Full Stack
              </div>

              {/* Parágrafo de descrição */}
              <p className="hero-desc mb-5 text-lg text-zinc-400 md:max-w-md lg:max-w-full">
                Especializado em criar aplicações web modernas, responsivas e de alta performance que geram
                <strong className="text-white"> resultados reais </strong>
                para o seu negócio.
              </p>

              {/* Estatísticas */}
              <div className="hero-stats mb-6 flex w-full flex-wrap justify-center gap-6 lg:justify-start">
                <div className="hero-stat flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-white sm:text-3xl">50+</span>
                  <span className="text-zinc-400 text-sm sm:text-base">Projetos</span>
                </div>
                <div className="hero-stat flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-white sm:text-3xl">3+</span>
                  <span className="text-zinc-400 text-sm sm:text-base">Anos Exp.</span>
                </div>
                <div className="hero-stat flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-white sm:text-3xl">99%</span>
                  <span className="text-zinc-400 text-sm sm:text-base">Satisfação</span>
                </div>
              </div>

              {/* Contêiner para Botões e Link de CV */}
              <div className="flex w-full flex-col items-center gap-4 lg:items-start">
                {/* Botões de Ação */}
                <div className="hero-buttons flex w-full flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="/contact"
                    className="hero-btn hero-btn-primary"
                  >
                    Vamos Conversar
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/projects"
                    className="hero-btn hero-btn-secondary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 10-5 5-5-5" />
                      <path d="M12 7v5h5" />
                    </svg>
                    Ver Projetos
                  </a>
                </div>
                
                {/* Link para Download de CV */}
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="hero-cv-link inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 10-5 5-5-5" />
                    <path d="M12 7v5h5" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            {/* Lado Direito (Imagem do Perfil) */}
            <div className="hero-visual relative mt-12 flex justify-center lg:mt-0 lg:justify-end">
              <div className="hero-image-container relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
                {/* Círculo de fundo com gradiente e blur */}
                <div className="hero-image-blur absolute inset-0 rounded-full blur-[75px]" style={{
                  background: 'radial-gradient(circle, rgba(129, 140, 248, 0.5) 0%, rgba(139, 92, 246, 0.5) 50%, rgba(0,0,0,0) 70%)',
                }}></div>
                {/* Imagem do perfil */}
                <div className="hero-image-wrapper relative z-10 h-full w-full rounded-full border-[6px] border-zinc-800 overflow-hidden">
                  <img
                    src="/perfil.jpg"
                    alt="Foto de perfil do desenvolvedor"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background animado e escuro */}
        <div className="hero-bg-container absolute inset-0 -z-0">
          <div className="hero-bg-overlay absolute inset-0"></div>
          <div className="hero-bg-grid absolute inset-0"></div>
        </div>
      </article>

      <style>
        {`
          .hero-article {
            background-color: #0d0d1a;
            color: #f0f0f0;
          }

          .hero-title {
            font-size: clamp(2.5rem, 6vw, 4.5rem);
          }

          .hero-highlight-1 {
            background: linear-gradient(to right, #60a5fa, #9333ea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-highlight-2 {
            background: linear-gradient(to right, #9333ea, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 2rem;
            font-weight: 600;
            border-radius: 9999px;
            transition: all 0.3s ease-in-out;
          }

          .hero-btn-primary {
            background: linear-gradient(to right, #3b82f6, #9333ea);
            color: white;
            box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
          }

          .hero-btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(59, 130, 246, 0.6);
          }

          .hero-btn-secondary {
            border: 1px solid #3f3f46;
            background-color: #18181b;
            color: #d4d4d8;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .hero-btn-secondary:hover {
            transform: scale(1.05);
            background-color: #262629;
          }

          .hero-bg-overlay {
            background-color: #0c0a09;
            opacity: 0.9;
          }

          .hero-bg-grid {
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%233f3f46" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            background-repeat: repeat;
            opacity: 0.1;
          }
          
          /* MOBILE */
          @media (max-width: 767px) {
            .hero-article {
              padding-top: 3rem;
              padding-bottom: 3rem;
            }
            .hero-text {
              align-items: center;
              text-align: center;
            }
            .hero-grid {
              gap: 2rem;
            }
            .hero-title {
              font-size: 2.5rem;
              line-height: 1.2;
            }
            .hero-subtitle {
              font-size: 1.125rem;
            }
            .hero-desc {
              font-size: 1rem;
              max-width: 90%;
            }
            .hero-stats {
              justify-content: center;
              gap: 1.5rem;
            }
            .hero-buttons {
              flex-direction: column;
              align-items: center;
              gap: 1rem;
            }
            .hero-btn {
              width: 100%;
              max-width: 300px;
            }
            .hero-visual {
              margin-top: 3rem;
            }
            .hero-image-container {
              width: 16rem;
              height: 16rem;
            }
            .hero-image-blur {
              filter: blur(50px);
            }
            .hero-cv-link {
              margin-top: 1.5rem;
            }
          }

          /* TABLET */
          @media (min-width: 768px) and (max-width: 1023px) {
            .hero-article {
              padding-top: 4rem;
              padding-bottom: 4rem;
            }
            .hero-text {
              align-items: center;
              text-align: center;
            }
            .hero-grid {
              gap: 3rem;
            }
            .hero-title {
              font-size: 3.5rem;
            }
            .hero-subtitle {
              font-size: 1.25rem;
            }
            .hero-desc {
              font-size: 1.125rem;
              max-width: 80%;
            }
            .hero-stats {
              justify-content: center;
              gap: 2rem;
            }
            .hero-buttons {
              gap: 1rem;
            }
            .hero-image-container {
              width: 20rem;
              height: 20rem;
            }
            .hero-cv-link {
              margin-top: 2rem;
            }
          }

          /* DESKTOP */
          @media (min-width: 1024px) {
            .hero-article {
              padding-top: 6rem;
              padding-bottom: 6rem;
            }
            .hero-text {
              align-items: flex-start;
              text-align: left;
            }
            .hero-grid {
              gap: 4rem;
            }
            .hero-title {
              font-size: 4.5rem;
            }
            .hero-subtitle {
              font-size: 1.25rem;
            }
            .hero-desc {
              font-size: 1.125rem;
              max-width: 100%;
            }
            .hero-stats {
              justify-content: flex-start;
              gap: 2rem;
            }
            .hero-buttons {
              gap: 1rem;
            }
            .hero-image-container {
              width: 24rem;
              height: 24rem;
            }
            .hero-cv-link {
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </Fragment>
  );
}