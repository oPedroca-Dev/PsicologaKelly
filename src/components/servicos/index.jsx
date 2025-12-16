import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "./index.scss";

const cards = [
  {
    title: "Acompanhamento Psicológico",
    desc: "No acompanhamento psicológico, ofereço um espaço seguro e acolhedor para que você possa se ouvir, se entender e se fortalecer emocionalmente. Através de encontros regulares, te ajudo a olhar com mais clareza para suas emoções, pensamentos e comportamentos, construindo juntos caminhos mais leves e saudáveis para lidar com os desafios da vida.",
    image: "/acompanhamento.jpg",
    color: "#f8f0fb"
  },
  {
    title: "Consulta Psicológica",
    desc: "Cuidar da mente é tão importante quanto cuidar do corpo. Na consulta psicológica, você encontra um espaço acolhedor e ético, onde é possível falar com liberdade, sem julgamentos. Aqui, utilizo abordagens como Terapia Cognitivo-Comportamental e conhecimentos em Neurociência para te ajudar a compreender suas emoções.",
    image: "/consulta.jpg",
    color: "#eff7fd"
  },
  {
    title: "Hipnoterapia",
    desc: "Hipnoterapia é uma técnica terapêutica poderosa que ajuda você a acessar seu subconsciente e transformar pensamentos, emoções e comportamentos negativos. Com ela, você se reconecta com sua mente de forma profunda e segura, promovendo autoconhecimento, bem-estar e equilíbrio emocional.",
    image: "/hip.jpg",
    color: "#f3f0f7"
  }
];

export default function Servico() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  useEffect(() => {
    const auto = setInterval(next, 6000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section id="servico" className="servicos-container">
      <div className="header-box">
        <h2 className="titulo">Serviços Oferecidos</h2>
        <div className="underline"></div>
      </div>

      <div className="carousel-wrapper">
        <button className="nav-btn left" onClick={prev} aria-label="Anterior">
          <ChevronLeft size={28} />
        </button>

        <div className="card-display" key={index}>
          <div className="image-side">
            <img src={cards[index].image} alt={cards[index].title} />
          </div>
          
          <div className="content-side" style={{ backgroundColor: cards[index].color }}>
            <Quote className="quote-icon" size={50} />
            <div className="text-content">
              <h3>{cards[index].title}</h3>
              <p>{cards[index].desc}</p>
            </div>
          </div>
        </div>

        <button className="nav-btn right" onClick={next} aria-label="Próximo">
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="dots-navigation">
        {cards.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === index ? 'active' : ''}`} 
            onClick={() => setIndex(i)} 
          />
        ))}
      </div>
    </section>
  );
}