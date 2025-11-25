import "./index.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Rodape() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Kelly Ferreira</h3>
        </div>

        <div className="footer-social">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/equipepsievoce"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/11942045057"
            target="_blank"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ana-kelly-marques-ferreira-a3954788/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="footer-links">
          <p>Política de Privacidade e Termos de Uso</p>

          <a href="https://www.instagram.com/pferreira.___" target="_blank">
            Feito Carinhosamente por <strong>Pedro Henrique</strong>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ana Kelly - Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
}
