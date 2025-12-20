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
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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
          <a href="#servico" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#QuemSou" onClick={() => setOpen(false)}>Sobre</a>
          <a href="#duvidas" onClick={() => setOpen(false)}>Dúvidas</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
          <a href="https://wa.me/11942045057" className="btn-nav">
             Agendar Consulta
          </a>
        </nav>

        {/* HAMBÚRGUER ANIMADO */}
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
      
      {/* OVERLAY */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
}