const SecGloss = () => {
  const products = [
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073526/G-A9_t5pyjt.jpg",
      title: "Creme Hidratante A1",
      description: "Hidratação profunda para todos os tipos de pele.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073522/G-A7_rbuzoo.jpg",
      title: "Óleo de Massagem A4",
      description: "Perfeito para momentos relaxantes e cuidados com a pele.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073521/G-A5_pfcmba.jpg",
      title: "Sabonete Líquido A6",
      description: "Limpeza suave com fragrância refrescante.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073518/G-A4_yy8jrh.jpg",
      title: "Esfoliante Corporal A7",
      description: "Remove impurezas e renova a pele.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073512/G-A3_osuih3.jpg",
      title: "Hidratante Nutritivo A8",
      description: "Com vitaminas essenciais para uma pele saudável.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073509/G-A2_l4hyw9.jpg",
      title: "Manteiga Corporal A9",
      description: "Ultra hidratação para peles ressecadas.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073498/G-A1_jvv9hr.jpg",
      title: "Gel Refrescante A10",
      description: "Sensação de frescor imediato para a pele.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073505/G-A13_nxd9xa.jpg",
      title: "Loção Pós-Sol A12",
      description: "Acalma e hidrata a pele após exposição solar.",
      cor: "Rosa",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073507/G-A14_e1qvrw.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
      cor: "Rosa",
    },
  ];

  return (
    <section className="section1" id="gloss">
      <h2>Gloss</h2>
      <div className="card-container" data-count={products.length}>
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <div className="volumes">
              <span>{product.cor}</span>
            </div>
            <div className="description">
              {product.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecGloss;