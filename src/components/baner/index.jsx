import "./index.scss";
import { useEffect, useState } from "react";

export default function Baner() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero">

      {/* PARALLAX */}
      <img
        src="./baner.png"
        className="banner-img"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`  // 👈 efeito parallax
        }}
      />

      <div className="dark-overlay"></div>

      <div className="overlay">
        <h1 className="fade-up delay-1">
          Cuidar da Mente é um Ato de Amor-Próprio.
        </h1>

        <p className="fade-up delay-2">
          Atendimento psicológico com acolhimento e escuta empática.
        </p>

        <a
          className="btn fade-up delay-3"
          href="https://calendar.app.google/S78sNJuADpTCmqhu6"
          target="_blank"
        >
          Agendar Consulta
        </a>
      </div>

      <div className="onda-fundo">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,240 C320,360 1120,120 1440,240 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
}
