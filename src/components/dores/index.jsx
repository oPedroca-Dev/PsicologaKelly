import { motion } from "framer-motion";
import { Brain, Heart, Users, CheckCircle2 } from "lucide-react"; // Importe os ícones
import "./index.scss";

export default function Dores() {
  const cards = [
    {
      title: "ANSIEDADE",
      icon: <Brain className="icon" size={32} />,
      accent: "#6bb7dd",
      items: [
        "Preocupações excessivas e dificuldade de concentração",
        "Taquicardia, tensão muscular e insônia",
        "Medo constante de que algo ruim vai acontecer"
      ]
    },
    {
      title: "DEPRESSÃO",
      icon: <Heart className="icon" size={32} />,
      accent: "#9944b3",
      items: [
        "Falta de energia e motivação diária",
        "Sentimentos de culpa, tristeza profunda e isolamento",
        "Perda de interesse em atividades antes prazerosas"
      ]
    },
    {
      title: "RELACIONAMENTOS",
      icon: <Users className="icon" size={32} />,
      accent: "#b3446c",
      items: [
        "Dificuldades de comunicação e conflitos constantes",
        "Relacionamentos abusivos ou dependência emocional",
        "Desafios familiares, afetivos e luto"
      ]
    }
  ];

  return (
    <section className="sintomas-container">
      <div className="content-wrapper">
        <motion.span 
          className="tagline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Você não precisa carregar isso sozinho
        </motion.span>

        <motion.h1 
          className="titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          O que você está enfrentando?
        </motion.h1>

        <div className="cardo-grid">
          {cards.map((card, index) => (
            <motion.div 
              key={card.title}
              className="card"
              style={{ '--accent-color': card.accent }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <div className="icon-box">{card.icon}</div>
                <h2>{card.title}</h2>
              </div>
              
              <ul className="sintomas-lista">
                {card.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="footer-action"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Identificou-se com algum desses pontos? Vamos conversar.</p>
          <a
            href="https://calendar.app.google/S78sNJuADpTCmqhu6"
            className="btn-consulta-modern"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar minha sessão agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}