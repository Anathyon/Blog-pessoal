import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, pulseAnimation, floatingAnimation } from '../utils/animations';

const skillCategories = [
  {
    title: "Linguagens",
    icon: "icons/code.png",
    skills: [
      { name: "HTML5", icon: "icons/html5.svg" },
      { name: "CSS3", icon: "icons/css3.svg" },
      { name: "SCSS", icon: "icons/sass.svg" },
      { name: "JavaScript", icon: "icons/javascript.svg" },
      { name: "TypeScript", icon: "icons/typescript.svg" },
    ],
  },
  {
    title: "Frameworks & Bibliotecas",
    icon: "icons/framework.png",
    skills: [
      { name: "React", icon: "icons/react.svg" },
      { name: "Next.js", icon: "icons/nextjs.svg" },
      { name: "Vite", icon: "icons/vite.svg" },
      { name: "TailwindCSS", icon: "icons/tailwindcss.svg" },
      { name: "Bootstrap", icon: "icons/bootstrap.svg" },
      { name: "Zustand", icon: "icons/zustand.svg" },
    ],
  },
  {
    title: "Ferramentas & Plataformas",
    icon: "icons/programming.png",
    skills: [
      { name: "Node.js", icon: "icons/nodejs.svg" },
      { name: "Firebase", icon: "icons/firebase.svg" },
      { name: "Git", icon: "icons/git.svg" },
      { name: "GitHub", icon: "icons/github.svg" },
      { name: "NPM", icon: "icons/npm.svg" },
      { name: "VS Code", icon: "icons/vscode.svg" },
      { name: "Vercel", icon: "icons/vercel.svg" },
      { name: "PWA", icon: "icons/pwa.svg" },
    ],
  },
  {
    title: "Testes & Qualidade",
    icon: "icons/testing.png",
    skills: [
      { name: "Jest", icon: "icons/jest.svg" },
      { name: "Clean Code", icon: "icons/clean-code.svg" },
      { name: "SOLID", icon: "icons/solid.svg" },
      { name: "MVC", icon: "icons/mvc.svg" },
    ],
  },
  {
    title: "Inteligência Artificial",
    icon: "icons/ai.png",
    skills: [
      { name: "ChatGPT", icon: "icons/chatgpt.svg" },
      { name: "Claude", icon: "icons/claude.svg" },
      { name: "Gemini", icon: "icons/gemini.svg" },
      { name: "Cursor AI", icon: "icons/cursor.svg" },
      { name: "GitHub Copilot", icon: "icons/github-copilot.svg" },
      { name: "V0", icon: "icons/v0.svg" },
    ],
  },
  {
    title: "Habilidades Interpessoais",
    icon: "icons/soft-skills.png",
    skills: [
      { name: "Trabalho em Equipe", icon: "icons/teamwork.svg" },
      { name: "Comunicação", icon: "icons/communication.svg" },
      { name: "Eficiência", icon: "icons/efficiency.svg" },
      { name: "Marketing", icon: "icons/marketing.svg" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleNext = () => {
    stopAutoPlay();
    setActiveCategory((prev) => (prev + 1) % skillCategories.length);
  };

  const handlePrev = () => {
    stopAutoPlay();
    setActiveCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  const handleCategoryClick = (index: number) => {
    stopAutoPlay();
    setActiveCategory(index);
  };

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

  const skillItemVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      y: 50
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.15,
      y: -10,
      rotate: [0, -5, 5, 0],
      boxShadow: "0 15px 30px rgba(126, 34, 206, 0.4)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    }
  };

  const categoryPillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 10px 20px rgba(126, 34, 206, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
    <motion.section 
      className="pb-[5%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <section id="habilidades" className="py-16 px-6 bg-[#0d0d1a] text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <motion.div 
            className="mb-12 flex flex-col justify-center"
            variants={staggerContainer}
          >
            <motion.div
                className="skills-badge flex justify-center items-center gap-[0.5em] mb-[1.5em] font-semibold w-auto max-w-1/4 text-sm sm:text-base"
                style={{
                  background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)",
                  color: "#fff",
                  padding: "0.8em 1.5em",
                  borderRadius: "9999px",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  fontSize:"1.1em"
                }}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  boxShadow: "0 0 25px rgba(10, 90, 211, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="hero-badge-icon text-emerald-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={pulseAnimation}
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </motion.svg>
              Stack Tecnológico
            </motion.div>
            <motion.h2 
              className="text-4xl font-extrabold leading-tight mt-6 mb-4 md:text-5xl" 
              style={{color:"#fff", fontSize:"1.7em", paddingTop:"3dvh"}}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(126, 34, 206, 0.8)"
              }}
            >
              Tecnologias & <span className="skills-highlight">Habilidades</span>
            </motion.h2>
            <motion.p 
              className="text-zinc-400 text-lg md:text-xl" 
              style={{color:"#fff", fontSize:"1.1em", paddingBottom:"3dvh", paddingTop:"2dvh"}}
              variants={fadeInUp}
            >
              Combinando expertise técnica com <motion.strong 
                className="text-white"
                whileHover={{ color: "#7e22ce", textShadow: "0 0 10px rgba(126, 34, 206, 0.8)" }}
              >
                inteligência artificial
              </motion.strong>,
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#0a5ad3", textShadow: "0 0 10px rgba(10, 90, 211, 0.8)" }}
              > 
                <span> habilidades interpessoais</span>
              </motion.strong> e conhecimento em
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#7e22ce", textShadow: "0 0 10px rgba(126, 34, 206, 0.8)" }}
              > 
                <span> marketing </span>
              </motion.strong> para entregar soluções completas e eficazes.
            </motion.p>
          </motion.div>

          {/* Category Pills */}
          <motion.div 
            className="category-pills"
            variants={staggerContainer}
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => handleCategoryClick(index)}
                className={`category-pill ${index === activeCategory ? 'active' : ''}`}
                variants={categoryPillVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                animate={index === activeCategory ? {
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 10px 15px -3px rgba(10, 90, 211, 0.5)",
                    "0 15px 25px -3px rgba(10, 90, 211, 0.7)",
                    "0 10px 15px -3px rgba(10, 90, 211, 0.5)"
                  ]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: index === activeCategory ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <motion.img 
                  src={category.icon} 
                  alt="" 
                  className="pill-icon"
                  animate={index === activeCategory ? {
                    rotate: [0, 10, -10, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  } : {}}
                />
                <span>{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Carousel */}
          <motion.div 
            className="skills-carousel"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
            variants={fadeInUp}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(126, 34, 206, 0.2)",
              scale: 1.01
            }}
          >
            {/* Navigation Buttons */}
            <motion.button 
              onClick={handlePrev} 
              className="nav-btn nav-btn-left"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "#3f3f46",
                boxShadow: "0 10px 20px rgba(126, 34, 206, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              animate={floatingAnimation}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={{
                  x: [-2, 2, -2],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <path d="M15 18l-6-6 6-6" />
              </motion.svg>
            </motion.button>
            
            <motion.button 
              onClick={handleNext} 
              className="nav-btn nav-btn-right"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "#3f3f46",
                boxShadow: "0 10px 20px rgba(126, 34, 206, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [-5, 5, -5],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={{
                  x: [-2, 2, -2],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <path d="m9 18 6-6-6-6" />
              </motion.svg>
            </motion.button>

            {/* Category Title */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                className="category-header"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={skillCategories[activeCategory].icon} 
                  alt="" 
                  className="category-icon"
                  animate={{
                    rotate: [0, 360],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />
                <motion.h3 
                  className="category-title"
                  animate={{
                    color: ["#ffffff", "#7e22ce", "#0a5ad3", "#ffffff"],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {skillCategories[activeCategory].title}
                </motion.h3>
              </motion.div>
            </AnimatePresence>

            {/* Skills Display */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                className="skills-container"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="skill-item"
                    variants={skillItemVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    custom={index}
                  >
                    <motion.img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="skill-icon"
                      animate={{
                        y: [0, -5, 0],
                        transition: {
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }
                      }}
                    />
                    <motion.span 
                      className="skill-name"
                      whileHover={{ 
                        color: "#7e22ce",
                        textShadow: "0 0 10px rgba(126, 34, 206, 0.8)"
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <motion.div 
              className="indicators"
              variants={staggerContainer}
            >
              {skillCategories.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className={`indicator ${index === activeCategory ? 'active' : ''}`}
                  variants={scaleIn}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  animate={index === activeCategory ? {
                    scale: [1.2, 1.4, 1.2],
                    boxShadow: [
                      "0 0 10px rgba(102, 49, 219, 0.6)",
                      "0 0 20px rgba(102, 49, 219, 0.8)",
                      "0 0 10px rgba(102, 49, 219, 0.6)"
                    ]
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: index === activeCategory ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Learning Section */}
          <motion.div 
            className="learning-section shadow-lg" 
            style={{boxShadow: '0 0.25rem 0.94rem #0a5ad3b0'}}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0.5rem 1.5rem rgba(10, 90, 211, 0.4)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            <motion.h3 
              className="learning-title"
              animate={{
                backgroundImage: [
                  "linear-gradient(45deg, #ffffff, #7e22ce)",
                  "linear-gradient(45deg, #7e22ce, #0a5ad3)",
                  "linear-gradient(45deg, #0a5ad3, #ffffff)",
                  "linear-gradient(45deg, #ffffff, #7e22ce)"
                ],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Sempre Aprendendo & Evoluindo
            </motion.h3>
            <motion.p 
              className="learning-text"
              variants={fadeInUp}
            >
              Além das tecnologias tradicionais, estou constantemente explorando novas ferramentas como 
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#7e22ce", textShadow: "0 0 10px rgba(126, 34, 206, 0.8)" }}
              > 
                <span> Jest para testes</span>
              </motion.strong>, 
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#0a5ad3", textShadow: "0 0 10px rgba(10, 90, 211, 0.8)" }}
              >
                <span> Zustand para gerenciamento de estado</span>
              </motion.strong>,
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#7e22ce", textShadow: "0 0 10px rgba(126, 34, 206, 0.8)" }}
              > 
                <span> SCSS para estilização avançada</span>
              </motion.strong> e aplicando conceitos de
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#0a5ad3", textShadow: "0 0 10px rgba(10, 90, 211, 0.8)" }}
              > 
                <span> Clean Code, SOLID e arquitetura MVC</span>
              </motion.strong>. Também utilizo
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#7e22ce", textShadow: "0 0 10px rgba(126, 34, 206, 0.8)" }}
              > 
                <span> IA generativa</span>
              </motion.strong> como ChatGPT, Claude, Gemini e Cursor para otimizar
              meu desenvolvimento, combinando com minhas habilidades em 
              <motion.strong 
                className="text-white"
                whileHover={{ color: "#0a5ad3", textShadow: "0 0 10px rgba(10, 90, 211, 0.8)" }}
              > 
                <span> marketing </span> 
              </motion.strong>
              para criar soluções que realmente conectam com o usuário.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.section>

    <style>{`
        .category-pills {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .category-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 9999px;
          background-color: #27272a;
          color: #a1a1aa;
          border: 1px solid #3f3f46;
          transition: all 0.3s ease;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
        }

        .category-pill:hover {
          background-color: #3f3f46;
        }

        .category-pill.active {
          background-color: #6631dba6;
          color: white;
          font-weight: 700;
          box-shadow: 0 10px 15px -3px #0a5ad383;
        }

        .pill-icon {
          width: 20px;
          height: 20px;
        }

        .skills-carousel {
          position: relative;
          background-color: rgba(43, 28, 70, 0.5);
          border: 1px solid #3f3f46;
          border-radius: 24px;
          padding: 40px;
          margin-bottom: 48px;
          overflow: hidden;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: #27272a;
          border: 1px solid #3f3f46;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .nav-btn:hover {
          background-color: #3f3f46;
          transform: translateY(-50%) scale(1.05);
        }

        .nav-btn-left {
          left: 20px;
        }

        .nav-btn-right {
          right: 20px;
        }

        .category-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .category-icon {
          width: 32px;
          height: 32px;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .skills-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          min-height: 120px;
          padding: 0 80px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .skill-item:hover {
          transform: scale(1.1);
        }

        .skill-icon {
          width: 64px;
          height: 64px;
          margin-bottom: 12px;
        }

        .skill-name {
          font-size: 14px;
          font-weight: 600;
          color: white;
          white-space: nowrap;
        }

        .indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #3f3f46;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background-color: #6631dba6;
          transform: scale(1.2);
        }

        .indicator:hover {
          background-color: #6b7280;
        }

        .learning-section {
          background-color: rgba(30, 20, 48, 0.5);
          border: 1px solid #3f3f46;
          border-radius: 16px;
          padding: 32px;
        }

        .learning-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }

        .learning-text {
          color: #a1a1aa;
          line-height: 1.6;
          margin: 0;
        }

        .skills-badge {
          margin: 0 auto;
          width: fit-content;
        }

        .hero-badge-icon {
          width: 1em;
          height: 1em;
        }

        /* Extra Small Devices (<576px) */
        @media (max-width: 575.98px) {
          .category-pills {
            gap: 8px;
            margin-bottom: 24px;
          }
          
          .category-pill {
            padding: 6px 12px;
            font-size: 12px;
            white-space: nowrap;
          }
          
          .pill-icon {
            width: 16px;
            height: 16px;
          }
          
          .skills-carousel {
            padding: 20px;
            margin-bottom: 32px;
          }
          
          .nav-btn {
            width: 40px;
            height: 40px;
          }
          
          .nav-btn-left {
            left: 8px;
          }
          
          .nav-btn-right {
            right: 8px;
          }
          
          .category-header {
            margin-bottom: 20px;
          }
          
          .category-icon {
            width: 24px;
            height: 24px;
          }
          
          .category-title {
            font-size: 1.1rem;
          }
          
          .skills-container {
            gap: 12px;
            padding: 0 50px;
            min-height: 100px;
          }
          
          .skill-icon {
            width: 36px;
            height: 36px;
            margin-bottom: 8px;
          }
          
          .skill-name {
            font-size: 11px;
          }
          
          .indicators {
            margin-top: 20px;
            gap: 6px;
          }
          
          .indicator {
            width: 8px;
            height: 8px;
          }
          
          .learning-section {
            padding: 20px;
          }
          
          .learning-title {
            font-size: 1.2rem;
            margin-bottom: 12px;
          }
          
          .learning-text {
            font-size: 14px;
          }
          
          .skills-badge {
            font-size: 12px;
            padding: 0.6em 1.2em !important;
            max-width: 60%;
          }
          
          .hero-badge-icon {
            width: 0.9em;
            height: 0.9em;
          }
        }

        /* Small Devices (≥576px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .category-pills {
            gap: 12px;
            margin-bottom: 28px;
          }
          
          .category-pill {
            padding: 7px 16px;
            font-size: 13px;
          }
          
          .pill-icon {
            width: 18px;
            height: 18px;
          }
          
          .skills-carousel {
            padding: 28px;
            margin-bottom: 36px;
          }
          
          .nav-btn {
            width: 46px;
            height: 46px;
          }
          
          .nav-btn-left {
            left: 12px;
          }
          
          .nav-btn-right {
            right: 12px;
          }
          
          .category-header {
            margin-bottom: 24px;
          }
          
          .category-icon {
            width: 28px;
            height: 28px;
          }
          
          .category-title {
            font-size: 1.3rem;
          }
          
          .skills-container {
            gap: 20px;
            padding: 0 60px;
            min-height: 110px;
          }
          
          .skill-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 10px;
          }
          
          .skill-name {
            font-size: 12px;
          }
          
          .indicators {
            margin-top: 24px;
          }
          
          .learning-section {
            padding: 24px;
          }
          
          .learning-title {
            font-size: 1.3rem;
          }
          
          .skills-badge {
            font-size: 13px;
            padding: 0.7em 1.3em !important;
          }
        }

        /* Medium Devices (≥768px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .category-pills {
            gap: 14px;
            margin-bottom: 30px;
          }
          
          .skills-carousel {
            padding: 32px;
            margin-bottom: 40px;
          }
          
          .nav-btn {
            width: 50px;
            height: 50px;
          }
          
          .nav-btn-left {
            left: 16px;
          }
          
          .nav-btn-right {
            right: 16px;
          }
          
          .category-header {
            margin-bottom: 28px;
          }
          
          .category-icon {
            width: 30px;
            height: 30px;
          }
          
          .category-title {
            font-size: 1.4rem;
          }
          
          .skills-container {
            gap: 30px;
            padding: 0 70px;
          }
          
          .skill-icon {
            width: 56px;
            height: 56px;
          }
          
          .skill-name {
            font-size: 13px;
          }
          
          .indicators {
            margin-top: 28px;
          }
          
          .learning-section {
            padding: 28px;
          }
          
          .skills-badge {
            font-size: 14px;
            padding: 0.75em 1.4em !important;
            max-width: 40%;
          }
        }

        /* Large Devices (≥992px) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .skills-carousel {
            padding: 36px;
            margin-bottom: 44px;
          }
          
          .nav-btn {
            width: 52px;
            height: 52px;
          }
          
          .nav-btn-left {
            left: 18px;
          }
          
          .nav-btn-right {
            right: 18px;
          }
          
          .skills-container {
            gap: 35px;
            padding: 0 75px;
          }
          
          .skill-icon {
            width: 60px;
            height: 60px;
          }
          
          .learning-section {
            padding: 30px;
          }
          
          .skills-badge {
            font-size: 15px;
            padding: 0.8em 1.45em !important;
          }
        }

        /* Extra Large Devices (≥1200px) */
        @media (min-width: 1200px) and (max-width: 1399.98px) {
          .skills-carousel {
            padding: 38px;
          }
          
          .skills-container {
            gap: 38px;
          }
          
          .skill-icon {
            width: 62px;
            height: 62px;
          }
          
          .skills-badge {
            font-size: 16px;
            padding: 0.8em 1.5em !important;
          }
        }

        /* Extra Extra Large Devices (≥1400px) */
        @media (min-width: 1400px) {
          .skills-carousel {
            padding: 40px;
          }
          
          .skills-container {
            gap: 40px;
          }
          
          .skill-icon {
            width: 64px;
            height: 64px;
          }
          
          .skills-badge {
            font-size: 16px;
            padding: 0.8em 1.5em !important;
          }
        }
      `}</style>
    </>
  );
}