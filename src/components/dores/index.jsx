import { motion } from "framer-motion";
import "./index.scss";

export default function Dores() {
  const cards = [
    {
      title: "ANSIEDADE",
      items: [
        "Preocupações excessivas e dificuldade de concentração",
        "Taquicardia, tensão muscular e insônia",
        "Medo constante de que algo ruim vai acontecer"
      ]
    },
    {
      title: "DEPRESSÃO",
      items: [
        "Falta de energia e motivação",
        "Sentimentos de culpa, tristeza profunda e isolamento",
        "Perda de interesse em atividades antes prazerosas"
      ]
    },
    {
      title: "RELACIONAMENTOS",
      items: [
        "Dificuldades de comunicação e conflitos constantes",
        "Relacionamentos abusivos ou dependência emocional",
        "Desafios familiares e afetivos"
      ]
    }
  ];

  return (
    <section className="sintomas-container">

      <motion.h1 
        className="titulo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        O que você está enfrentando?
      </motion.h1>

      <motion.p 
        className="subtitulo"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Muitas pessoas vivem em silêncio com dores emocionais. Conheça as situações mais comuns tratadas na psicologia:
      </motion.p>

      <div className="cardo">
        {cards.map((card, index) => (
          <motion.div 
            key={card.title}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{card.title}</h2>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="https://calendar.app.google/S78sNJuADpTCmqhu6"
        className="btn-consulta"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Agendar consulta
      </motion.a>

    </section>
  );
}
