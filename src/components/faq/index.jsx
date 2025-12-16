import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import "./index.scss";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const perguntas = [
    {
      pergunta: "Como saber se realmente devo procurar um psicólogo?",
      resposta: "Você pode procurar terapia se estiver enfrentando ansiedade, estresse ou problemas nos relacionamentos. Mas também é totalmente válido buscar terapia apenas para se conhecer melhor e melhorar sua qualidade de vida."
    },
    {
      pergunta: "Com que frequência acontecem as sessões?",
      resposta: "A frequência mais comum é uma sessão por semana, mas isso pode variar conforme sua necessidade. O processo é personalizado para o seu ritmo."
    },
    {
      pergunta: "A terapia online funciona tão bem quanto a presencial?",
      resposta: "Sim! A terapia online possui eficácia comprovada pelo CFP. Oferece flexibilidade e conforto, mantendo o mesmo sigilo e vínculo do presencial."
    },
    {
      pergunta: "O que acontece com tudo que eu falo? É sigiloso?",
      resposta: "Sim, totalmente. O psicólogo segue o Código de Ética, que exige sigilo absoluto. Nada é compartilhado com terceiros."
    }
  ];

  return (
    <section id="duvidas" className="faq-section">
      <div className="faq-wrapper">
        
        {/* Lado Esquerdo: Chamada para ação */}
        <div className="faq-intro">
          <div className="icon-badge">
            <MessageCircle size={24} />
          </div>
          <h2 className="faq-title">Dúvidas Frequentes</h2>
          <p className="faq-subtitle">
            Entendo que iniciar o processo terapêutico pode gerar dúvidas. 
            Aqui estão as respostas para os questionamentos mais comuns.
          </p>
          <div className="faq-cta">
            <span>Ainda tem dúvidas?</span>
            <a href="https://wa.me/seu-numero" target="_blank" rel="noreferrer">
              Me chame no WhatsApp
            </a>
          </div>
        </div>

        {/* Lado Direito: Accordion */}
        <div className="faq-list">
          {perguntas.map((item, index) => (
            <div 
              key={index} 
              className={`faq-card ${openIndex === index ? "active" : ""}`}
            >
              <button className="question-btn" onClick={() => toggleFAQ(index)}>
                <span className="text">{item.pergunta}</span>
                <div className="status-icon">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="answer-wrapper"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="answer-content">
                      <p>{item.resposta}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}