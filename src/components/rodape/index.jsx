  import "./index.scss";
  import { Instagram, Linkedin, MessageCircle, MapPin, Mail } from "lucide-react"; // Usando Lucide para manter o padrão moderno

  export default function Rodape() {
    return (
      <footer id="contato" className="footer">
        <div className="footer-container">
          
          {/* Coluna 1: Marca e Bio Curta */}
          <div className="footer-brand">
            <h3>Kelly Ferreira</h3>
            <p className="brand-desc">
              Psicoterapia especializada em ajudar você a reencontrar seu equilíbrio emocional e qualidade de vida.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/equipepsievoce" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
              <a href="https://wa.me/11942045057" target="_blank" rel="noreferrer"><MessageCircle size={20} /></a>
              <a href="https://www.linkedin.com/in/ana-kelly-marques-ferreira-a3954788/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Contato Rápido */}
          <div className="footer-info">
            <h4>Contato</h4>
            <ul>
              <li><MapPin size={16} /> São Paulo - Atendimento Online</li>
              <li><Mail size={16} /> contato@kellyferreira.com.br</li>
              <li><MessageCircle size={16} /> (11) 94204-5057</li>
            </ul>
          </div>

          {/* Coluna 3: Créditos e Links Legais */}
          <div className="footer-legal">
            <h4>Institucional</h4>
            <p>Política de Privacidade</p>
            <p>Termos de Uso</p>
            <a href="https://www.instagram.com/pferreira.___" target="_blank" className="dev-credit" rel="noreferrer">
              Desenvolvido por <span>Pedro Henrique</span>
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="bottom-content">
            <p>© 2025 Ana Kelly - CRP: 06/112512 - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }