import PaginaLegal from "../components/PaginaLegal";

export default function TermosUso() {
  const conteudo = [
    {
      subtitulo: "1. Aceitação dos Termos",
      texto: "Ao acessar e utilizar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. O conteúdo aqui presente é destinado a fins informativos sobre serviços de saúde mental."
    },
    {
      subtitulo: "2. Finalidade Informativa",
      texto: "O conteúdo deste site não substitui o diagnóstico ou tratamento psicológico individualizado. Em caso de crises de emergência, não utilize o contato deste site. Entre em contato com o CVV (188) ou procure o pronto-socorro mais próximo."
    },
    {
      subtitulo: "3. Agendamentos e Cancelamentos",
      texto: "O envio de uma mensagem de contato não constitui o início imediato de um vínculo terapêutico. Os horários e valores são combinados diretamente com a profissional Kelly Ferreira, sujeitos à disponibilidade de agenda."
    },
    {
      subtitulo: "4. Direitos Autorais",
      texto: "Todo o conteúdo textual e as marcas apresentadas neste site são de propriedade intelectual da profissional Kelly Ferreira. A reprodução total ou parcial sem autorização prévia é proibida."
    },
    {
      subtitulo: "5. Modificações",
      texto: "Estes termos podem ser revisados a qualquer momento para refletir mudanças na legislação ou em nossas práticas de atendimento. Recomendamos a revisão periódica desta página."
    }
  ];

  return <PaginaLegal titulo="Termos de Uso" conteudo={conteudo} />;
}