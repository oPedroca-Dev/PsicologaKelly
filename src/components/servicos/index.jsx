import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./index.scss";

const cards = [
  {
    title: "Acompanhamento Psicológico",
    desc: "No acompanhamento psicológico, ofereço um espaço seguro e acolhedor para que você possa se ouvir, se entender e se fortalecer emocionalmente. Através de encontros regulares, te ajudo a olhar com mais clareza para suas emoções, pensamentos e comportamentos, construindo juntos caminhos mais leves e saudáveis para lidar com os desafios da vida.",
    image: "/baner.png",
    color: "#9944b3"
  },
  {
    title: "Consulta Psicológica",
    desc: "Cuidar da mente é tão importante quanto cuidar do corpo. Na consulta psicológica, você encontra um espaço acolhedor e ético, onde é possível falar com liberdade, sem julgamentos. Aqui, utilizo abordagens como Terapia Cognitivo-Comportamental, Hipnoterapia e conhecimentos em Neurociência para te ajudar a compreender suas emoções",
    image: "/baner.png",
    color: "#6bb7dd"
  },
  {
    title: "Hipnoterapia",
    desc: "Hipnoterapia é uma técnica terapêutica poderosa que ajuda você a acessar seu subconsciente e transformar pensamentos, emoções e comportamentos negativos. Com ela, você se reconecta com sua mente de forma profunda e segura, promovendo autoconhecimento, bem-estar e equilíbrio emocional.",
    image: "/baner.png",
    color: "#9944b3"
  }
];

export default function Servico() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  // AUTO PLAY
  useEffect(() => {
    const auto = setInterval(next, 4000);
    return () => clearInterval(auto);
  }, []);

  // TOUCH / SWIPE
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const minSwipe = 50;

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > minSwipe) next();
    if (touchEnd - touchStart > minSwipe) prev();
  };

  return (
    <div id="servico" className="servicos-container">
      <h2 className="titulo">Serviços Oferecidos</h2>

      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {/* SETA ESQUERDA */}
        <button className="seta esquerda" onClick={prev}>
          <ChevronLeft size={32} />
        </button>

        {/* CARD */}
        <div className="cards" style={{ backgroundColor: cards[index].color }}>
          <img src={cards[index].image} className="card-img" />
          <div className="card-info">
            <h3>{cards[index].title}</h3>
            <p>{cards[index].desc}</p>
          </div>
        </div>

        {/* SETA DIREITA */}
        <button className="seta direita" onClick={next}>
          <ChevronRight size={32} />
        </button>

      </div>
    </div>
  );
}
