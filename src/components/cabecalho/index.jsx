import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./index.scss";

export default function Cabecalho() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cabecalho">
      <h1 className="logo">Kelly Ferreira | Psicóloga & Hipnoterapeuta</h1>

      {/* BOTÃO MENU MOBILE */}
      <button className="hamburguer" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MENU */}
      <nav className={`menu ${open ? "menu-open" : ""}`}>
        <a href="#servico" onClick={() => setOpen(false)}>Serviços</a>
        <a href="#QuemSou" onClick={() => setOpen(false)}>Quem Sou</a>
        <a href="#duvidas" onClick={() => setOpen(false)}>Dúvidas</a>
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
      </nav>
    </header>
  );
}
