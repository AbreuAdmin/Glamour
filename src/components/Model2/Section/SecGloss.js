const SecGloss = () => {
  const items = [
    {
      tag: "",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073526/G-A9_t5pyjt.jpg",
      title: "Creme Hidratante A1",
      description: "Hidratação profunda para todos os tipos de pele.",
    },
    {
      tag: "",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073522/G-A7_rbuzoo.jpg",
      title: "Óleo de Massagem A4",
      description: "Perfeito para momentos relaxantes e cuidados com a pele.",
    },
    {
      tag: "",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073521/G-A5_pfcmba.jpg",
      title: "Sabonete Líquido A6",
      description: "Limpeza suave com fragrância refrescante.",
    },
    {
      tag: "New",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073518/G-A4_yy8jrh.jpg",
      title: "Esfoliante Corporal A7",
      description: "Remove impurezas e renova a pele.",
    },
    {
      tag: "New",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073512/G-A3_osuih3.jpg",
      title: "Hidratante Nutritivo A8",
      description: "Com vitaminas essenciais para uma pele saudável.",
    },
    {
      tag: "",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073509/G-A2_l4hyw9.jpg",
      title: "Manteiga Corporal A9",
      description: "Ultra hidratação para peles ressecadas.",
    },
    {
      tag: "New",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073498/G-A1_jvv9hr.jpg",
      title: "Gel Refrescante A10",
      description: "Sensação de frescor imediato para a pele.",
    },
    {
      tag: "",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073505/G-A13_nxd9xa.jpg",
      title: "Loção Pós-Sol A12",
      description: "Acalma e hidrata a pele após exposição solar.",
    },
    {
      tag: "",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073507/G-A14_e1qvrw.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
    },
  ];

  return (
    <section id="gloss">
      <h3>Gloss</h3>
      <div className="carousel-container2">
        <div className="carousel-track2">
          {items.map((item, index) => (
            <div className="card" key={index}>
              <div className="tag">{item.tag}</div>
              <img src={item.img} alt={item.title} className="img" />
              <h4 className="title">{item.title}</h4>
              <span className="description">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecGloss;