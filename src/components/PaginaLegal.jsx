import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./PaginaLegal.scss";

export default function PaginaLegal({ titulo, conteudo }) {
  const navigate = useNavigate();

  return (
    <main className="legal-container">
      <div className="legal-wrapper">
        <button className="back-btn" onClick={() => navigate("/")}>
          <ArrowLeft size={20} /> Voltar para o início
        </button>
        
        <header className="legal-header">
          <h1>{titulo}</h1>
          <div className="underline"></div>
        </header>

        <article className="legal-content">
          {conteudo.map((paragrafo, index) => (
            <section key={index} className="legal-section">
              {paragrafo.subtitulo && <h2>{paragrafo.subtitulo}</h2>}
              <p>{paragrafo.texto}</p>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}