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
            <header className="header-main fixed top-0 w-full z-[1000]" style={{ background: '#13131F', backdropFilter: 'blur(0.625rem)', padding: '1rem 0' }}>
                <div className="header-container flex justify-between items-center w-full mx-auto" style={{ maxWidth: '75rem', padding: '0 5%' }}>
                    {/* Logo */}
                    <div className="header-logo flex items-center gap-3 text-white">
                        <div className="header-logo-img flex items-center justify-center rounded-[0.75rem] shadow-lg" style={{ width: '2.8rem', height: '2.8rem', color: '#fff', fontSize: '1.3rem', boxShadow: '0 0.25rem 0.94rem #0a5ad3b0', padding: '0.3rem', overflow: 'hidden', background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)" }}>
                            ⚡
                        </div>
                        <div className="logo-text">
                            <h1 className="text-xl font-bold">Portfolio</h1>
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
                            className="header-btn flex items-center gap-2 rounded-full text-white font-semibold transition-all text-base"
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

                    <div className="sidebar-cta mt-auto p-4 rounded-lg text-center" style={{ background: '#1e1e2d', margin: '1rem', boxShadow: '0 0.25rem 0.94rem rgba(0,0,0,0.3)', borderRadius:"1rem", padding:"1%" }}>
                        <h3 className="text-white text-lg font-bold mb-2" style={{color: "#fff"}}>Pronto para começar?</h3>
                        <p className="text-gray-400 text-sm mb-4" style={{color: "#fff"}}>Vamos transformar sua ideia em realidade.</p>
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
                /* MOBILE */
                @media (max-width: 480px) {
                    .header-main {
                        padding: 0.7rem 0 !important;
                    }
                    .header-container {
                        padding: 0 2vw !important;
                        max-width: 100vw !important;
                    }
                    .header-logo {
                        font-size: 1.1rem !important;
                        gap: 0.7rem !important;
                    }
                    .header-logo-img {
                        width: 2.1rem !important;
                        height: 2.1rem !important;
                        padding: 0.15rem !important;
                        background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)"
                    }
                    .logo-text {
                        display: none;
                    }
                    .header-nav {
                        display: none !important;
                    }
                    .header-menu-toggle {
                        margin-left: 0 !important;
                        width: 2.2rem !important;
                        height: 2.2rem !important;
                    }
                    .sidebar-mobile {
                        display: block !important;
                        width: 100vw !important;
                        max-width: 100vw !important;
                        border-radius: 0 !important;
                        padding: 0 !important;
                        z-index: 2000 !important;
                    }
                    .sidebar-header {
                        padding: 1rem 1.2rem !important;
                    }
                    .sidebar-logo {
                        font-size: 1.1rem !important;
                        gap: 0.5rem !important;
                    }
                    .sidebar-links {
                        padding: 1.2rem 1.2rem !important;
                        gap: 0.5rem !important;
                    }
                    .sidebar-link {
                        font-size: 1rem !important;
                        padding: 0.7rem 0.5rem !important;
                    }
                }
                /* TABLET */
                @media (min-width: 481px) and (max-width: 1024px) {
                    .header-main {
                        padding: 0.9rem 0 !important;
                    }
                    .header-container {
                        padding: 0 3vw !important;
                        max-width: 98vw !important;
                    }
                    .header-logo {
                        font-size: 1.3rem !important;
                        gap: 1rem !important;
                    }
                    .header-logo-img {
                        width: 2.3rem !important;
                        height: 2.3rem !important;
                        padding: 0.2rem !important;
                        background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)"
                    }
                    .logo-text h1 {
                        font-size: 1.3rem !important;
                        color: #fff !important;
                    }
                    .logo-text p {
                        display: none;
                    }
                    .header-nav {
                        display: flex !important;
                        gap: 2.5vw !important;
                    }
                    .header-links {
                        gap: 2dvw !important;
                        position: relative !important;
                        right: 5% !important;
                        color: #fff !important;
                    }
                    .header-link {
                        font-size: 1rem !important;
                        padding: 0.7rem 0.5rem !important;
                    }
                    .header-btn {
                        font-size: 1rem !important;
                        padding: 0.6rem 1.1rem !important;
                        color: #fff !important;
                        background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)" !important;
                    }
                    .header-menu-toggle {
                        display: none !important;
                    }
                    .sidebar-mobile {
                        display: none !important;
                    }
                }
                /* DESKTOP */
                @media (min-width: 1025px) {
                    .header-main {
                        padding: 1.1rem 0 !important;
                    }
                    .header-container {
                        padding: 0 5vw !important;
                        max-width: 75rem !important;
                    }
                    .header-logo {
                        font-size: 1.6rem !important;
                        gap: 1.2rem !important;
                    }
                    .header-logo-img {
                        width: 2.8rem !important;
                        height: 2.8rem !important;
                        padding: 0.3rem !important;
                        background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)" !important;
                    }
                    .logo-text h1 {
                        font-size: 1.6rem !important;
                        color: #fff !important;
                    }
                    .logo-text p {
                        font-size: 0.875rem !important; /* text-sm in tailwind */
                        display: block !important;
                        color: #fff !important;
                    }
                    .header-nav {
                        display: flex !important;
                        gap: 3vw !important;
                    }
                    .header-links {
                        gap: 2vw !important;
                    }
                    .header-link {
                        font-size: 1.1rem !important;
                        padding: 0.8rem 0.7rem !important;
                        color: #fff !important;
                    }
                    .header-link:hover {
                        cursor: pointer;
                        color: #0a5ad3 !important;
                    }
                    .header-btn {
                        font-size: 1.05rem !important;
                        padding: 0.7rem 1.3rem !important;
                        background: "linear-gradient(135deg, #7e22ce, #0a5ad3b0)" !important;
                        color: #fff !important;
                    }
                    .header-menu-toggle {
                        display: none !important;
                    }
                    .sidebar-mobile {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
}