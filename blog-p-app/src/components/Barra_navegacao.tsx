import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaLaptopCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Handles smooth scrolling for internal links and closes the sidebar
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            setSidebarOpen(false);
            const el = document.querySelector(href);
            if (el) {
                window.scrollTo({
                    top: (el as HTMLElement).offsetTop - 80,
                    behavior: "smooth"
                });
            }
        } else {
            setSidebarOpen(false);
        }
    };

    // Menu items
    const navItems = [
        { name: "Início", href: "#home", icon: <FaHome /> },
        { name: "Habilidades", href: "#habilidades", icon: <FaLaptopCode /> },
        { name: "Projetos", href: "#projetos", icon: <FaBriefcase /> },
        { name: "Contato", href: "#contato", icon: <FaEnvelope /> },
    ];

    return (
        <>
            {/* Main Header */}
            <header className="header-main fixed top-0 w-full z-[1000]">
                <div className="header-container flex justify-between items-center w-full mx-auto">
                    {/* Logo */}
                    <div className="header-logo flex items-center gap-3 text-white">
                        <div className="header-logo-img flex items-center justify-center rounded-[0.75rem] shadow-lg">
                            <img src="/logo/Logotipo.png" alt="Logo" className="w-full h-full object-cover rounded-[0.75rem]" />
                        </div>
                        <div className="logo-text">
                            <h1 className="text-xl font-bold">Portfólio</h1>
                            <p className="text-xs font-medium text-gray-400">Dev Web</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="header-nav hidden md:flex items-center gap-8 relative w-full justify-end">
                        <div className="header-links flex gap-6">
                            {navItems.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="header-link font-medium transition-colors"
                                    style={{ fontSize: '1rem', padding: '0.7rem 0.5rem'}}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <a
                            href="#contato"
                            onClick={(e) => handleNavClick(e, "#contato")}
                            className="header-btn flex items-center gap-2 rounded-full text-white font-semibold transition-all text-base text-center"
                            style={{ background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)", boxShadow: '0 0.25rem 0.94rem #0a5ad3b0', padding: '0.5rem 1.25rem' }}
                        >
                            Começar Projeto
                        </a>
                    </nav>

                    {/* Mobile menu toggle */}
                    <div className="header-menu-toggle md:hidden ml-4 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition" onClick={() => setSidebarOpen(true)}>
                        <FaBars className="text-white text-xl" />
                    </div>
                </div>
            </header>

            {/* Sidebar Mobile */}
            <aside className={`sidebar-mobile fixed top-0 left-0 h-full w-[80vw] max-w-[320px] shadow-2xl z-[99] transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
                style={{ background: '#13131F', borderTopRightRadius: '1.5rem', borderBottomRightRadius: '1.5rem', boxShadow: '0 0.5rem 2rem rgba(0,0,0,0.15)', padding: '0.5rem', pointerEvents: 'auto' }}
            >
                <div className="sidebar-content flex flex-col h-full">
                    <div className="sidebar-header flex items-center justify-between px-6 py-4 border-b border-white/20" style={{ padding: '2%' }}>
                        <div className="sidebar-logo flex items-center gap-2 font-extrabold text-white text-xl">
                            <div className="logo-icon w-8 h-8 flex items-center justify-center rounded-lg bg-[#0a5ad3b0] text-white">⚡</div>
                            Portfolio
                        </div>
                        <button className="sidebar-close text-white text-2xl z-[999999]" onClick={() => setSidebarOpen(false)} aria-label="Fechar menu">
                            <FaTimes />
                        </button>
                    </div>

                    <nav className="sidebar-links flex flex-col gap-2 px-6 py-6" style={{ padding: '5%' }}>
                        {navItems.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={e => handleNavClick(e, item.href)}
                                className="sidebar-link text-gray-300 font-semibold text-lg py-2 rounded-lg hover:bg-white/10 transition z-[999999] flex items-center gap-4"
                                style={{color: "#fff"}}
                            >
                                <div className="icon text-[#0a5ad3]" style={{padding: "2%"}}>{item.icon}</div>
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="sidebar-cta mt-auto rounded-lg text-center" style={{ background: '#1e1e2d', margin: '1rem', boxShadow: '0 0.25rem 0.94rem rgba(0,0,0,0.3)', borderRadius:"1rem", padding:"1rem" }}>
                        <h3 className="text-white text-lg font-bold mb-2" style={{color: "#fff"}}>Pronto para começar?</h3>
                        <p className="text-gray-400 text-sm" style={{color: "#fff", marginBottom: "1rem"}}>Vamos transformar sua ideia em realidade.</p>
                        <a
                            href="#contato"
                            onClick={e => handleNavClick(e, "#contato")}
                            className="cta-button w-full inline-block rounded-full px-6 py-3 text-white font-semibold transition-all"
                            style={{ background: 'linear-gradient(135deg, #7e22ce, #0a5ad3b0)', boxShadow: '0 0.25rem 0.94rem #0a5ad3b0', padding: "2%", color: "#fff" }}
                        >
                            Iniciar Projeto
                        </a>
                    </div>
                </div>
            </aside>

            {/* Overlay para fechar sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[98] md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <style>{`
                .header-main {
                    background: #13131F;
                    backdrop-filter: blur(0.625rem);
                    padding: clamp(0.7rem, 2vw, 1.1rem) 0;
                }
                
                .header-container {
                    max-width: 75rem;
                    padding: 0 5%;
                }
                
                .header-logo-img {
                    width: 2.8rem;
                    height: 2.8rem;
                    color: #fff;
                    font-size: 1.3rem;
                    box-shadow: 0 0.25rem 0.94rem #0a5ad3b0;
                    padding: 0.3rem;
                    overflow: hidden;
                    background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
                }
                
                .header-container {
                    padding: 0 clamp(2vw, 4vw, 5vw);
                    max-width: clamp(100vw, 90vw, 75rem);
                }
                
                .header-logo {
                    font-size: clamp(1.1rem, 3vw, 1.6rem);
                    gap: clamp(0.7rem, 2vw, 1.2rem);
                }
                
                .header-logo-img {
                    width: clamp(3.2rem, 7.5vw, 4.2rem);
                    height: clamp(3.2rem, 7.5vw, 4.2rem);
                    padding: 0;
                    font-size: clamp(1.5rem, 3.75vw, 2rem);
                }
                
                .logo-text h1 {
                    font-size: clamp(1.1rem, 3vw, 1.6rem);
                    color: #fff;
                }
                
                .logo-text p {
                    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
                    color: #9ca3af;
                }
                
                .header-menu-toggle {
                    width: clamp(2.2rem, 5vw, 2.5rem);
                    height: clamp(2.2rem, 5vw, 2.5rem);
                }
                
                .header-link {
                    font-size: clamp(0.9rem, 2vw, 1.1rem);
                    padding: clamp(0.5rem, 1.5vw, 0.8rem) clamp(0.3rem, 1vw, 0.7rem);
                    color: #fff;
                    transition: color 0.3s ease;
                }
                
                .header-link:hover {
                    color: #0a5ad3;
                }
                
                .header-btn {
                    font-size: clamp(0.9rem, 2vw, 1.05rem);
                    padding: clamp(0.5rem, 1.5vw, 0.7rem) clamp(1rem, 2.5vw, 1.3rem);
                    color: #fff;
                }
                
                .header-links {
                    gap: clamp(1rem, 3vw, 2rem);
                }
                
                .header-nav {
                    gap: clamp(1.5rem, 4vw, 3rem);
                }
                
                .sidebar-header {
                    padding: clamp(1rem, 3vw, 2rem) clamp(1.2rem, 4vw, 1.5rem);
                }
                
                .sidebar-logo {
                    font-size: clamp(1.1rem, 3vw, 1.3rem);
                    gap: clamp(0.5rem, 1.5vw, 0.8rem);
                }
                
                .sidebar-links {
                    padding: clamp(1.2rem, 4vw, 1.5rem);
                    gap: clamp(0.5rem, 1.5vw, 0.8rem);
                }
                
                .sidebar-link {
                    font-size: clamp(1rem, 2.5vw, 1.1rem);
                    padding: clamp(0.7rem, 2vw, 0.8rem) clamp(0.5rem, 1.5vw, 0.7rem);
                }
                
                .sidebar-cta {
                    margin: clamp(0.8rem, 2vw, 1rem);
                    padding: clamp(1rem, 3vw, 1.5rem);
                }
                
                .sidebar-cta h3 {
                    font-size: clamp(1rem, 2.5vw, 1.125rem);
                }
                
                .sidebar-cta p {
                    font-size: clamp(0.8rem, 2vw, 0.875rem);
                }
                
                .cta-button {
                    font-size: clamp(0.9rem, 2vw, 1rem);
                    padding: clamp(0.6rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem);
                }
                
                /* Mobile specific adjustments */
                @media (max-width: 640px) {
                    .logo-text {
                        display: none;
                    }
                    
                    .header-nav {
                        display: none;
                    }
                    
                    .sidebar-mobile {
                        width: 100vw;
                        max-width: 100vw;
                        border-radius: 0;
                    }
                    .header-btn{
                        font-size: 0.5rem;
                        text-align: center;
                    }     
                }
                
                /* Tablet and desktop */
                @media (min-width: 641px) {
                    .header-menu-toggle {
                        display: none;
                    }
                    
                    .sidebar-mobile {
                        display: none;
                    }
                    
                    .header-nav {
                        display: flex;
                    }
                        
                    .header-links{
                        padding-left: 1.2rem;
                    }       
                }
                
                /* Large screens */
                @media (min-width: 1024px) {
                    .logo-text p {
                        display: block;
                    }
                }
            `}</style>
        </>
    );
}