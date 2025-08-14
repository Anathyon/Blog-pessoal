export default function Hero() {
  return (
      <article id="home" className="hero-article relative flex min-h-screen items-center justify-center overflow-hidden py-12 md:py-24">
        <div className="hero-container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-grid grid-cols-1 items-center gap-12 lg:grid lg:grid-cols-2">
            {/* Lado Esquerdo */}
            <div className="hero-text flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Badge de Disponibilidade */}
              <div
                className="hero-badge flex justify-center items-center gap-[0.5em] mb-[1.5em] font-semibold w-auto text-sm sm:text-base"
                style={{
                  background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)",
                  color: "#fff",
                  padding: "0.8em 1.5em",
                  borderRadius: "9999px",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  boxShadow: "0 0.25em 0.9em #0a5ad3b0",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="hero-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 10-5 5-5-5" />
                  <path d="M12 7v5h5" />
                </svg>
                <p className="inline-block whitespace-nowrap"> Disponível para novos projetos </p>
              </div>

          <section className='hero-info w-full flex flex-row'>
              
            <div>
                  <h1 className="hero-title mb-6 font-extrabold leading-tight text-white">
                    Transformo
                    <br />
                    <span className="hero-highlight-1">Ideias</span>
                    {' em '}
                    <br className="sm:hidden" />
                    <span className="hero-highlight-2">Experiências</span>
                  </h1>

                  <div className="hero-subtitle mb-8 flex items-center gap-2 text-xl font-semibold text-zinc-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hero-subtitle-icon text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                    Desenvolvedor Front-End
                  </div>
            </div>

              <div className="hero-visual relative flex justify-center">
              <div className="hero-image-container relative">
                {/* Círculo de fundo com gradiente e blur */}
                <div className="hero-image-blur absolute inset-0"></div>
                {/* Imagem do perfil */}
                <div className="hero-image-wrapper relative z-10">
                  <img
                    src="/perfil.jpg"
                    alt="Foto de perfil do desenvolvedor"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
             </div>
          </section>

            

              {/* Parágrafo de descrição */}
              <p className="hero-desc mb-8 text-lg text-zinc-400 md:max-w-md lg:max-w-full">
                Especializado em criar aplicações web modernas, responsivas e de alta performance que geram
                <strong className="text-white"> resultados reais </strong>
                para o seu negócio.
              </p>

              {/* Estatísticas */}
              <div className="hero-stats mb-8 flex w-full flex-wrap justify-center gap-8 lg:justify-start">
                <div className="hero-stat flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-white">2+</span>
                  <span className="text-zinc-400">Anos Exp.</span>
                </div>
                <div className="hero-stat flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-white">99%</span>
                  <span className="text-zinc-400">Satisfação</span>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="hero-buttons flex w-full flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="/contact"
                  className="hero-btn hero-btn-primary"
                >
                  Vamos Conversar
                  <svg xmlns="http://www.w3.org/2000/svg" className="ic-bt-vams-conv" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/projects"
                  className="hero-btn hero-btn-secondary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="ic-bt-ver-projs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 10-5 5-5-5" />
                    <path d="M12 7v5h5" />
                  </svg>
                  Ver Projetos
                </a>
              </div>
              
              <a
                href="/Currículo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cv-link mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="ic-bt-curric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 10-5 5-5-5" />
                  <path d="M12 7v5h5" />
                </svg>
                Download Currículo
              </a>
            </div>
            
          </div>
        </div>
        <div className="hero-bg-container absolute inset-0 -z-0">
          <div className="hero-bg-overlay absolute inset-0"></div>
          <div className="hero-bg-grid absolute inset-0"></div>
        </div>
      

      <style>{`
        .hero-article {
          background-color: #0d0d1a;
          color: #f0f0f0;
          padding-top: 120px;
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

        .hero-image-container {
          width: 24rem;
          height: 24rem;
          margin-left: -2rem;
          margin-right: 2rem;
        }

        .hero-image-blur {
          inset: 0;
          border-radius: 9999px;
          filter: blur(75px);
          background: radial-gradient(circle, rgba(129, 140, 248, 0.5) 0%, rgba(139, 92, 246, 0.5) 50%, rgba(0,0,0,0) 70%);
        }

        .hero-image-wrapper {
          width: 100%;
          height: 100%;
          border: 6px solid #27272a;
          border-radius: 9999px;
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
        
        /* Extra Small Devices (<576px) */
        @media (max-width: 575.98px) {
          .hero-article {
            padding: 2rem 0;
          }
          .hero-text {
            align-items: center;
            text-align: center;
          }
          .hero-grid {
            gap: 1.5rem;
          }
          .hero-title {
            font-size: 2.5rem;
            line-height: 1.1;
            margin: 0 auto 1.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
            margin: 0 auto 1rem;
            justify-content: center;
          }
          .hero-subtitle-icon {
            width: 1.2rem;
            height: 1.2rem;
          }
          .hero-desc {
            font-size: 1rem;
            max-width: 95%;
            margin: 0 auto 1.5rem;
          }
          .hero-stats {
            justify-content: center;
            gap: 1.5rem;
            margin: 1.5rem 0;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            margin: 1.5rem 0;
          }
          .hero-btn {
            width: 100%;
            max-width: 280px;
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
          }
          .hero-image-container {
            width: 14rem;
            height: 14rem;
            margin: 0 auto 1.5rem;
          }
          .hero-badge {
            margin: 4.85rem auto 1.5rem;
            width: 95%;
            max-width: 300px;
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem;
          }
          .hero-badge-icon {
            width: 1.2rem;
            height: 1.2rem;
          }
          .hero-info {
            flex-direction: column;
            align-items: center;
          }
          .hero-cv-link {
            margin: 1rem auto 0;
            font-size: 0.9rem;
          }
          .ic-bt-vams-conv, .ic-bt-ver-projs {
            width: 1.2rem;
            height: 1.2rem;
          }
          .ic-bt-curric {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        /* Small Devices (≥576px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .hero-article {
            padding: 2.5rem 0;
          }
          .hero-text {
            align-items: center;
            text-align: center;
          }
          .hero-grid {
            gap: 2rem;
          }
          .hero-title {
            font-size: 3rem;
            line-height: 1.1;
            margin: 0 auto 1.5rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            margin: 0 auto 1.25rem;
            justify-content: center;
          }
          .hero-subtitle-icon {
            width: 1.4rem;
            height: 1.4rem;
          }
          .hero-desc {
            font-size: 1.1rem;
            max-width: 90%;
            margin: 0 auto 2rem;
          }
          .hero-stats {
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin: 2rem 0;
          }
          .hero-btn {
            width: 100%;
            max-width: 320px;
            font-size: 1.1rem;
          }
          .hero-image-container {
            width: 16rem;
            height: 16rem;
            margin: 0 auto 2rem;
          }
          .hero-badge {
            margin: 7.27rem auto;
            width: 80%;
            max-width: 350px;
            font-size: 1rem;
          }
          .hero-badge-icon {
            width: 1.4rem;
            height: 1.4rem;
          }
          .hero-info {
            flex-direction: column;
            align-items: center;
          }
          .hero-cv-link {
            margin: 1.5rem auto 0;
          }
          .ic-bt-vams-conv, .ic-bt-ver-projs {
            width: 1.4rem;
            height: 1.4rem;
          }
          .ic-bt-curric {
            width: 1.4rem;
            height: 1.4rem;
          }
        }

        /* Medium Devices (≥768px) */
        @media (min-width: 768px) {
          .hero-article {
            padding: 4rem 0;
          }
          .hero-text {
            align-items: center;
            text-align: center;
          }
          .hero-grid {
            gap: 1rem;
          }
          .hero-title {
            font-size: 3.5rem;
            line-height: 1.1;
            margin: 0 auto 0.5rem;
          }
          .hero-subtitle {
            font-size: 1.3rem;
            margin: 0 auto 0.8rem;
            justify-content: center;
          }
          .hero-subtitle-icon {
            width: 1.6rem;
            height: 1.6rem;
          }
          .hero-desc {
            font-size: 1.2rem;
            max-width: 80%;
            margin: 0 auto 1rem;
          }
          .hero-stats {
            justify-content: center;
            gap: 2.5rem;
            margin: 1rem 0;
          }
          .hero-buttons {
            justify-content: center;
            gap: 1.5rem;
            margin: 1rem 0;
          }
          .hero-btn {
            font-size: 1.2rem;
            padding: 0.8rem 2rem;
          }
          .hero-image-container {
            width: 18rem;
            height: 18rem;
            margin: 0 auto;
            margin-left: -2rem;
            margin-right: 2rem;
          }
          .hero-badge {
            margin: 0.5rem auto;
            width: auto;
            max-width: 400px;
            font-size: 1.1rem;
          }
          .hero-badge-icon {
            width: 1.6rem;
            height: 1.6rem;
          }
          .hero-info {
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            justify-content: flex-start;
          }
          .hero-info > div:first-child {
            flex: 1;
          }
          .hero-visual {
            flex-shrink: 0;
          }
          .hero-cv-link {
            margin: 0.8rem auto 0;
          }
          .ic-bt-vams-conv, .ic-bt-ver-projs {
            width: 1.6rem;
            height: 1.6rem;
          }
          .ic-bt-curric {
            width: 1.6rem;
            height: 1.6rem;
          }
        }

        /* Large Desktop (≥1024px) */
        @media (min-width: 1024px) {
          .hero-article {
            padding: 5rem 0;
          }
          .hero-text {
            align-items: center;
            text-align: center;
          }
          .hero-grid {
            gap: 3rem;
            align-items: center;
          }
          .hero-title {
            font-size: 4rem;
            margin: 0 auto 1rem auto;
          }
          .hero-subtitle {
            font-size: 1.5rem;
            margin: 0 auto 1.5rem auto;
            justify-content: center;
          }
          .hero-subtitle-icon {
            width: 1.8rem;
            height: 1.8rem;
          }
          .hero-desc {
            font-size: 1.3rem;
            max-width: 80%;
            margin: 2.2rem auto 2rem auto;
          }
          .hero-stats {
            justify-content: center;
            gap: 3rem;
            margin: 2rem 0;
          }
          .hero-buttons {
            justify-content: center;
            gap: 1.5rem;
            margin: 2rem 0;
          }
          .hero-btn {
            font-size: 1.3rem;
            padding: 1rem 2.5rem;
          }
          .hero-image-container {
            width: 20rem;
            height: 20rem;
            margin: 0 auto;
            position: relative;
            right: 9.79rem;
          }
          .hero-badge {
            margin: 2.58rem auto 2rem auto;
            max-width: 350px;
            font-size: 1.2rem;
          }
          .hero-badge-icon {
            width: 1.8rem;
            height: 1.8rem;
          }
          .hero-info {
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            justify-content: center;
          }
          .hero-visual {
            justify-content: center;
          }
          .hero-cv-link {
            margin: 1rem auto 0 auto;
          }
          .ic-bt-vams-conv, .ic-bt-ver-projs {
            width: 1.8rem;
            height: 1.8rem;
          }
          .ic-bt-curric {
            width: 1.8rem;
            height: 1.8rem;
          }
        }

        /* Extra Large Desktop (≥1280px) */
        @media (min-width: 1280px) {
          .hero-article {
            padding: 6rem 0;
          }
          .hero-grid {
            gap: 4rem;
          }
          .hero-title {
            font-size: 4.5rem;
            margin: 0 auto 1.5rem auto;
          }
          .hero-subtitle {
            font-size: 1.6rem;
            margin: 0 auto 2rem auto;
          }
          .hero-subtitle-icon {
            width: 2rem;
            height: 2rem;
          }
          .hero-desc {
            font-size: 1.4rem;
            margin: 2.75rem auto 2.5rem auto;
          }
          .hero-stats {
            gap: 4rem;
            margin: 2.5rem 0;
          }
          .hero-buttons {
            gap: 2rem;
            margin: 2.5rem 0;
          }
          .hero-btn {
            font-size: 1.4rem;
            padding: 1.2rem 3rem;
          }
          .hero-image-container {
            width: 22rem;
            height: 22rem;
            position: relative;
            right: 14.69rem;
          }
          .hero-badge {
            margin: 2.82rem auto 2.5rem auto;
            font-size: 1.3rem;
          }
          .hero-badge-icon {
            width: 2rem;
            height: 2rem;
          }
          .hero-cv-link {
            margin: 1.5rem auto 0 auto;
          }
          .ic-bt-vams-conv, .ic-bt-ver-projs {
            width: 2rem;
            height: 2rem;
          }
          .ic-bt-curric {
            width: 2rem;
            height: 2rem;
          }
        }

        /* Ultra Wide Screens (≥1536px) */
        @media (min-width: 1536px) {
          .hero-article {
            padding: 8rem 0;
          }
          .hero-grid {
            gap: 5rem;
          }
          .hero-title {
            font-size: 5rem;
            margin: 0 auto 2rem auto;
          }
          .hero-subtitle {
            font-size: 1.8rem;
            margin: 0 auto 2.5rem auto;
          }
          .hero-subtitle-icon {
            width: 2.2rem;
            height: 2.2rem;
          }
          .hero-desc {
            font-size: 1.5rem;
            margin: 3.3rem auto 3rem auto;
          }
          .hero-stats {
            gap: 5rem;
            margin: 3rem 0;
          }
          .hero-buttons {
            gap: 2.5rem;
            margin: 3rem 0;
          }
          .hero-btn {
            font-size: 1.5rem;
            padding: 1.4rem 3.5rem;
          }
          .hero-image-container {
            width: 24rem;
            height: 24rem;
            position: relative;
            right: 19.58rem;
          }
          .hero-badge {
            margin: 3.00rem auto 3rem auto;
            font-size: 1.4rem;
          }
          .hero-badge-icon {
            width: 2.2rem;
            height: 2.2rem;
          }
          .hero-cv-link {
            margin: 2rem auto 0 auto;
          }
          .ic-bt-vams-conv, .ic-bt-ver-projs {
            width: 2.2rem;
            height: 2.2rem;
          }
          .ic-bt-curric {
            width: 2.2rem;
            height: 2.2rem;
          }
        }


      `}</style>
    </article>
  );
}

 