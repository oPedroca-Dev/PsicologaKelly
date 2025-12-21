import { useState, useEffect } from "react";
import "./index.scss";

export default function Cabecalho() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Controla o scroll do corpo
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleAnchor = (e, id) => {
    e.preventDefault();
    
    // 1. Fecha o menu imediatamente
    setOpen(false);

    // 2. Localiza o elemento
    const target = document.querySelector(id);
    if (target) {
      // Pequeno delay para garantir que o menu começou a fechar
      setTimeout(() => {
        // Cálculo preciso: posição do elemento + scroll atual - altura do header
        const headerHeight = scrolled ? 65 : 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100); 
    }
  };

  return (
    <header className={`cabecalho ${scrolled ? "scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav-container">
        <div className="logo-area">
          <span className="name">Kelly Ferreira</span>
          <span className="divider">|</span>
          <span className="spec">Psicóloga</span>
        </div>

        {/* MENU */}
        <nav className={`menu ${open ? "menu-open" : ""}`}>
          <a href="#servico" onClick={(e) => handleAnchor(e, "#servico")}>Serviços</a>
          <a href="#QuemSou" onClick={(e) => handleAnchor(e, "#QuemSou")}>Sobre</a>
          <a href="#duvidas" onClick={(e) => handleAnchor(e, "#duvidas")}>Dúvidas</a>
          <a href="#contato" onClick={(e) => handleAnchor(e, "#contato")}>Contato</a>
          <a href="https://wa.me/11942045057" target="_blank" rel="noreferrer" className="btn-nav">
             Agendar Avaliação
          </a>
        </nav>

        {/* HAMBÚRGUER */}
        <button 
          className={`hamburguer ${open ? "hamburguer-active" : ""}`} 
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="hamburguer-box">
            <div className="hamburguer-inner"></div>
          </div>
        </button>
      </div>
      
      {/* OVERLAY: Adicionado fundo visível para melhor UX */}
      <div 
        className={`menu-overlay ${open ? "active" : ""}`} 
        onClick={() => setOpen(false)}
      ></div>
    </header>
  );
}