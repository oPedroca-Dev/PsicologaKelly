import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./index.scss";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const perguntas = [
    {
      pergunta: "Como saber se realmente devo procurar um psicólogo?",
      resposta:
        "Você pode procurar terapia se estiver enfrentando ansiedade, estresse, dificuldades emocionais ou problemas nos relacionamentos. Mas também é totalmente válido buscar terapia mesmo sem estar em crise, apenas para se conhecer melhor e melhorar sua qualidade de vida."
    },
    {
      pergunta: "Com que frequência acontecem as sessões e quanto tempo leva para ter resultados?",
      resposta:
        "A frequência mais comum é uma sessão por semana, mas isso pode variar conforme sua necessidade. O tempo para notar resultados depende da sua demanda e da abordagem terapêutica utilizada, já que a terapia não tem um prazo fixo."
    },
    {
      pergunta: "A terapia online funciona tão bem quanto a presencial?",
      resposta:
        "Sim! A terapia online é reconhecida pelo CFP e possui eficácia comprovada. Ela oferece flexibilidade, conforto e acessibilidade, mantendo o mesmo profissionalismo e vínculo terapêutico da modalidade presencial."
    },
    {
      pergunta: "Preciso falar de coisas que não quero? E se eu travar durante a sessão?",
      resposta:
        "Você nunca é obrigado(a) a falar sobre algo que ainda não se sente seguro(a). O psicólogo conduz a conversa no seu ritmo e respeita seus limites. Se você travar ou não souber por onde começar, isso é normal e faz parte do processo terapêutico."
    },
    {
      pergunta: "O que acontece com tudo que eu falo na terapia? É realmente sigiloso?",
      resposta:
        "Sim, totalmente. O psicólogo segue o Código de Ética, que exige sigilo absoluto sobre tudo que é dito em sessão. Nada é compartilhado com familiares ou terceiros, exceto em situações específicas previstas em lei, como risco grave à vida."
    }
  ];

  return (
    <div id="duvidas" className="faq-container">

      <h1 className="faq-title">Dúvidas Comuns</h1>

      {perguntas.map((item, index) => (
        <div key={index} className="faq-item">

          <div className="question" onClick={() => toggleFAQ(index)}>
            <span className="number">{index + 1}.</span>
            <span className="text">{item.pergunta}</span>

            <ChevronDown
              className={openIndex === index ? "icon rotate" : "icon"}
              size={22}
            />
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                className="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                {item.resposta}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      ))}
    </div>
  );
}
