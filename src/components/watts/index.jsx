import { useEffect, useState } from "react";
import "./index.scss";

export default function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <a
      href="https://wa.me/5511942045057?text=Olá! Gostaria de informações sobre horários e como funciona a consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="zap-btn"
    >
      <div className={`zap-content ${isMobile ? "mobile" : "desktop"}`}>
        <img
          className="zap-icon"
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
        {!isMobile && <span className="zap-text">Agendar Acolhimento</span>}
      </div>
    </a>
  );
}