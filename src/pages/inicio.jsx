import Cabecalho from "../components/cabecalho";
import Baner from "../components/baner";
import Dores from "../components/dores";
import Servico from "../components/servicos";
import Quemsomos from "../components/quemsomos";
import BigNum from "../components/bignum";
import FAQ from "../components/faq";
import Rodape from "../components/rodape";
import WhatsAppButton from "../components/watts";

export default function Inicio() {
  return (
    <div>
      <WhatsAppButton/>
      <Cabecalho />
      <Baner />
      <Dores />
      <Servico />
      <Quemsomos />
      <BigNum />
      <FAQ />
      <Rodape />
    </div>

  );
}