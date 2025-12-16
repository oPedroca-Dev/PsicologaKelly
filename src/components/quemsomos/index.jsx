import "./index.scss";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Quemsomos() {
  return (
    <section id="QuemSou" className="about-section">
      <div className="container">
        
        <div className="about-image-wrapper">
          <div className="image-border"></div>
          <img src="./Kelly.jpg" alt="Kelly Ferreira" className="main-img" />
          <div className="experience-badge">
            <span>CRP 06/112512</span>
          </div>
        </div>

        <div className="about-content">
          <span className="tag">Sobre mim</span>
          <h1 className="title">Kelly Ferreira</h1>
          <h2 className="subtitle">Psicóloga Clínica & Especialista em Comportamento</h2>

          <div className="bio-text">
            <div className="education-item">
              <GraduationCap className="edu-icon" />
              <p>
                Graduada pela <strong>Universidade Ibirapuera</strong> com capacitação avançada em Análise do Comportamento e Terapia Cognitiva Comportamental.
              </p>
            </div>

            <div className="education-item">
              <BookOpen className="edu-icon" />
              <p>
                Pós-graduada em <strong>Neurociências e Comportamento</strong> pela PUC-RS, integrando ciência e prática clínica.
              </p>
            </div>

            <div className="education-item">
              <Award className="edu-icon" />
              <p>
                Formação em Hipnose Clínica e PNL pela Universidade da Hipnose e Sociedade Interamericana de Hipnose.
              </p>
            </div>
          </div>

          <div className="logos-area">
            <p>Certificações:</p>
            <div className="logos-grid">
              <img src="puc.png" alt="PUC-RS" />
              {/* Adicione outros logos aqui se houver */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}