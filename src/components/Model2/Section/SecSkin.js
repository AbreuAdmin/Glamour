const SecSkin = () => {
  const items = [
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073784/S-A1_d3qllb.jpg",
      title: "Creme Hidratante A1",
      description: "Hidratação profunda para todos os tipos de pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073811/S-A3_pkq225.jpg",
      title: "Óleo de Massagem A4",
      description: "Perfeito para momentos relaxantes e cuidados com a pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181973/S-A4_drzjjb.jpg",
      title: "Sabonete Líquido A6",
      description: "Limpeza suave com fragrância refrescante.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073810/S-A5_nqwsxp.jpg",
      title: "Esfoliante Corporal A7",
      description: "Remove impurezas e renova a pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181980/S-A6_f67ish.jpg",
      title: "Hidratante Nutritivo A8",
      description: "Com vitaminas essenciais para uma pele saudável.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073811/S-A7_zti252.jpg",
      title: "Manteiga Corporal A9",
      description: "Ultra hidratação para peles ressecadas.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181979/S-A8_bahyqj.jpg",
      title: "Gel Refrescante A10",
      description: "Sensação de frescor imediato para a pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073812/S-A9_jbfzs1.jpg",
      title: "Creme Firmador A11",
      description: "Ajuda na firmeza e elasticidade da pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073784/S-A10_ui16yk.jpg",
      title: "Loção Pós-Sol A12",
      description: "Acalma e hidrata a pele após exposição solar.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073786/S-A11_olq2zi.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073800/S-A12_nnbh91.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181972/S-A13_vvd0mz.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
    },
  ];

  return (
    <section id="skincare">
      <h3>Skincare</h3>
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
}
export default SecSkin;