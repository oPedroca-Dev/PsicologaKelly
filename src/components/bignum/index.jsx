import { motion } from "framer-motion";
import "./index.scss";

const stats = [
  { number: "+500", title: "Vidas Transformadas", desc: "Pessoas que encontraram novos caminhos através da terapia" },
  { number: "95%", title: "Taxa de Satisfação", desc: "Pacientes que relatam melhora significativa em suas vidas" },
  { number: "50min", title: "Tempo de Sessão", desc: "Dedicados exclusivamente ao seu acolhimento e bem-estar" },
];

export default function BigNum() {
  return (
    <section className="bignumbers-section">
      <div className="container">
        {stats.map((item, i) => (
          <motion.article 
            key={i} 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="number-wrapper">
              <h3 className="number">{item.number}</h3>
              <div className="accent-line"></div>
            </div>
            <div className="text-wrapper">
              <h4 className="title">{item.title}</h4>
              <p className="desc">{item.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}