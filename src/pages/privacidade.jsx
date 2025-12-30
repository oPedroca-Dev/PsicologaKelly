import PaginaLegal from "../components/PaginaLegal";

export default function PoliticaPrivacidade() {
  const conteudo = [
    {
      subtitulo: "1. Compromisso com a Privacidade",
      texto: "A sua privacidade é fundamental para nós. Esta política explica como coletamos, usamos e protegemos as informações pessoais de quem utiliza este site, respeitando as diretrizes da Lei Geral de Proteção de Dados (LGPD) e o sigilo ético profissional da Psicologia."
    },
    {
      subtitulo: "2. Coleta de Dados",
      texto: "As informações pessoais, como nome, e-mail e número de telefone, são coletadas apenas quando você as fornece voluntariamente através dos nossos formulários de contato ou via WhatsApp. Esses dados são utilizados exclusivamente para responder às suas dúvidas e realizar agendamentos."
    },
    {
      subtitulo: "3. Sigilo Ético Profissional",
      texto: "Diferente de dados de navegação, o conteúdo tratado em sessões de psicoterapia é protegido pelo Código de Ética do Psicólogo (CFP), garantindo sigilo absoluto. Nenhuma informação pessoal ou conteúdo de consulta será compartilhado ou utilizado para fins que não sejam o seu próprio processo terapêutico."
    },
    {
      subtitulo: "4. Cookies e Navegação",
      texto: "Utilizamos cookies apenas para melhorar a sua experiência de navegação e analisar o tráfego do site de forma anônima. Você pode optar por desativar os cookies nas configurações do seu navegador a qualquer momento."
    },
    {
      subtitulo: "5. Segurança",
      texto: "Implementamos medidas de segurança para proteger suas informações contra acessos não autorizados ou uso indevido. Seus dados de contato não são vendidos ou compartilhados com terceiros para fins de marketing."
    }
  ];

  return <PaginaLegal titulo="Política de Privacidade" conteudo={conteudo} />;
}