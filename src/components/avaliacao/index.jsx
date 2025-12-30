import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import "./index.scss";

const depoimentos = [
  {
    nome: "Mariana Silva",
    cargo: "Paciente",
    texto: "A Kelly é uma profissional incrível. O acolhimento e a clareza nas sessões me ajudaram a superar fases muito difíceis. Sou muito grata por todo o processo e pela forma como ela conduz cada encontro.",
    foto: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nome: "Ricardo Santos",
    cargo: "Paciente",
    texto: "Excelente atendimento. A abordagem com neurociência trouxe explicações que eu nunca tinha recebido antes, o que facilitou muito meu autoconhecimento e a forma como lido com a ansiedade.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nome: "Carla Oliveira",
    cargo: "Paciente",
    texto: "Ambiente seguro e ético. Me sinto muito à vontade para falar sobre qualquer assunto sem julgamentos. Recomendo muito o trabalho dela para quem procura uma terapia séria e humana.",
    foto: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Avaliacoes() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % depoimentos.length);
  const prev = () => setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);

  return (
    <section id="avaliacoes" className="avaliacoes-premium">
      <div className="bg-decoration"></div>
      
      <div className="header-box">
        <span className="subtitle">Feedback</span>
        <h2 className="titulo">O que dizem os pacientes</h2>
        <div className="underline"></div>
      </div>

      <div className="carousel-main">
        <button className="nav-arrow left" onClick={prev}><ChevronLeft size={30} /></button>

        <div className="testimonial-card" key={index}>
          <div className="quote-badge">
            <Quote size={30} fill="currentColor" />
          </div>
          
          <div className="card-content">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
            </div>

            <p className="main-text">{depoimentos[index].texto}</p>

            <div className="profile-footer">
              <div className="img-wrapper">
                <img src={depoimentos[index].foto} alt={depoimentos[index].nome} />
              </div>
              <div className="info">
                <h4>{depoimentos[index].nome}</h4>
                <span>{depoimentos[index].cargo}</span>
              </div>
            </div>
          </div>
        </div>

        <button className="nav-arrow right" onClick={next}><ChevronRight size={30} /></button>
      </div>

      <div className="dots-container">
        {depoimentos.map((_, i) => (
          <button key={i} className={`dot-item ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
        ))}
      </div>
    </section>
  );
}