import "./index.scss";


export default function BigNum({
    items = [
        { number: "+500", title: "Vidas Transformadas", desc: "Pessoas que encontraram um novo caminho através da terapia" },
        { number: "95%", title: "Taxa de Satisfação", desc: "Dos pacientes relatam melhora significativa em suas vidas" },
        { number: "50min", title: "Por Sessão", desc: "Tempo dedicado exclusivamente ao seu bem-estar" },
    ],
    decorativeImageUrl = "/mnt/data/511a765f-ee1c-43c5-94fd-0d83d0d8fc3e.png"
}) {
    return (
        <section className="bignumbers-section">
            <img src={decorativeImageUrl} alt="" className="decorative" />


            <div className="container">
                {items.map((item, i) => (
                    <article key={i} className="card">
                        <h3 className="number">{item.number}</h3>
                        <h4 className="title">{item.title}</h4>
                        <p className="desc">{item.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}