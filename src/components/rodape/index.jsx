import "./index.scss";
// Adicionado Instagram no import para resolver o erro
import { Instagram, Linkedin, MapPin, Mail } from "lucide-react";

// Ícone oficial do WhatsApp (Path original)
const WhatsAppIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function Rodape() {
  const mapUrl = "https://www.google.com/maps/dir//Av.+Nossa+Sra.+do+Sabará,+1693+-+Vila+Sofia,+São+Paulo+-+SP,+04685-004/@-23.7709699,-46.6995142,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce51c9f99d1d7d:0x7442a8cb50b52671!2m2!1d-46.6887202!2d-23.6697074?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer id="contato" className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Kelly Ferreira</h3>
          <p className="brand-desc">
            Psicoterapia especializada em ajudar você a reencontrar seu equilíbrio emocional e qualidade de vida.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/equipepsievoce" target="_blank" rel="noreferrer"><Instagram size={22} /></a>
            <a href="https://wa.me/5511984308198?text=Olá%20Kelly,%20gostaria%20de%20agendar%20uma%20avaliação." target="_blank" rel="noreferrer" className="whatsapp-social"><WhatsAppIcon size={22} /></a>
            <a href="https://www.linkedin.com/in/ana-kelly-marques-ferreira-a3954788/" target="_blank" rel="noreferrer"><Linkedin size={22} /></a>
          </div>
        </div>

        <div className="footer-info">
          <h4>Contato</h4>
          <ul>
            <li>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="footer-link">
                <MapPin size={18} /> <span>São Paulo - Atendimento Online</span>
              </a>
            </li>
            <li>
              <a href="mailto:kellymferreirapsi@gmail.com" className="footer-link">
                <Mail size={18} /> <span>kellymferreirapsi@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511984308198?text=Olá%20Kelly,%20gostaria%20de%20agendar%20uma%20avaliação."
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <WhatsAppIcon size={18} /> <span>(11) 98430-8198</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-legal">
          <h4>Institucional</h4>
          <nav>
            <a href="/politica-privacidade">Política de Privacidade</a>
            <a href="/termos-uso">Termos de Uso</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© 2025 Ana Kelly - CRP: 06/112512 - Todos os direitos reservados.</p>
          <a href="https://www.instagram.com/pferreira.___" target="_blank" className="dev-credit" rel="noreferrer">
            Desenvolvido por <span>Pedro Henrique</span>
          </a>
        </div>
      </div>
    </footer>
  );
}