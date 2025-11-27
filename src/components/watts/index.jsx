import { useEffect, useState } from "react";

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
      href="https://wa.me/11942045057?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20fiquei%20interessado(a).%20Pode%20me%20ajudar%20com%20algumas%20d%C3%BAvidas?%20%F0%9F%99%82"
      target="_blank"
      className="zap-btn"
    >
      <div className={`zap-content ${isMobile ? "mobile" : "desktop"}`}>
        <img
          className="zap-icon"
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />

        {!isMobile && <span className="zap-text">Tire suas dúvidas</span>}
      </div>
    </a>
  );
}
