import "./index.scss"
export default function Quemsomos(){
    return(
        <div id="QuemSou" className="about-section">
            <div class="about-content">
                <h1 class="title">Kelly Ferreira</h1>
                <h2 class="subtitle">Psicóloga Clínica - CRP: 06/112512</h2>

                <p>
                    Graduada pela Universidade Ibirapuera (UNIP) com capacitação avançada em Análise do
                    Comportamento e Terapia Cognitiva Comportamental pelo Instituto Cognitivo e Comportamental
                    de Psicologia (Inteligência Psicológica)
                    Pós Graduada em Neurociências e Comoortamento - pela PUC-RS
                </p>

                <p>
                    Formação em Hipnose Clínica e PNL pelo Instituto Flavio Bock e pela Universidade da Hipnose
                    / Sociedade Interamericana de Hipnose.
                </p>

                <div class="logos">
                    <img src="puc.png" alt="PUC-PR" />
                </div>
            </div>
            <div class="about-image">
                <img src="./Kelly.jpg" />
            </div>
        </div>
    )
}