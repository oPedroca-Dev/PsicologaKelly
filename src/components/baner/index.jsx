import "./index.scss";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Baner() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-modern">
      <div className="container">
        {/* Lado do Texto */}
        <div className="text-side">
          <div className="tag fade-in">
            <Sparkles size={16} /> <span>Atendimento Online e Presencial</span>
          </div>
          
          <h1 className="fade-up delay-1">
            Encontre o equilíbrio para uma vida <span>mais leve.</span>
          </h1>
          
          <p className="fade-up delay-2">
            A psicoterapia é o caminho para o autoconhecimento. 
            Agende uma conversa e inicie sua jornada de transformação emocional.
          </p>

          <div className="fade-up delay-3">
            <a href="https://calendar.app.google/V2ZF5Ykx6Z1YG7Q19" className="btn-modern">
              Começar minha jornada <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Lado da Imagem com Parallax Suave */}
        <div className="image-side">
          <div 
            className="blob-wrapper"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <div className="blob-shape">
              <img src="./baner.png" alt="Psicologia" />
            </div>
            {/* Elementos flutuantes decorativos */}
            <div className="floating-card card-1">🌱 Autoconhecimento</div>
            <div className="floating-card card-2">✨ Bem-estar</div>
          </div>
        </div>
      </div>

      {/* Onda mais sutil para a transição */}
      <div className="custom-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.1,15.15,103.77,33,158.2,43.61,217,55,270.47,65.8,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}