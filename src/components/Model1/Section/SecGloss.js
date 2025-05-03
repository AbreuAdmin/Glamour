const SecGloss = () => {
  const products = [
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073526/G-A9_t5pyjt.jpg",
      title: "Lip Gloss Babasoul Cheirinho de Chiclete",
      description: "Este lip gloss garante lábios macios, nutridos e protegidos. Ele é enriquecido com Vitamina E e Manteiga de Karité, que ajudam a proteger os lábios contra danos causados pelos radicais livres e promovem a hidratação profunda.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073521/G-A5_pfcmba.jpg",
      title: "Lip Gloss Labial Mágico Hidra Gloss Vivai - Acabamento Brilhante Tom Vermelho",
      description: "Brilho Intenso e Acabamento Espelhado: Proporciona um brilho marcante que realça a beleza dos lábios. Hidratação Profunda: Mantém os lábios macios e protegidos contra o ressecamento.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073518/G-A4_yy8jrh.jpg",
      title: "Lip Gloss Labial Mágico Hidra Gloss Vivai - Acabamento Brilhante Tom Candy Rose",
      description: "Brilho Intenso e Acabamento Espelhado: Proporciona um brilho marcante que realça a beleza dos lábios. Hidratação Profunda: Mantém os lábios macios e protegidos contra o ressecamento.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073512/G-A3_osuih3.jpg",
      title: "Lip Gloss Labial Mágico Hidra Gloss Vivai - Acabamento Brilhante Tom Rosa Vermelho",
      description: "Brilho Intenso e Acabamento Espelhado: Proporciona um brilho marcante que realça a beleza dos lábios. Hidratação Profunda: Mantém os lábios macios e protegidos contra o ressecamento.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073509/G-A2_l4hyw9.jpg",
      title: "Lip Gloss Labial Mágico Hidra Gloss Vivai - Acabamento Brilhante Tom Nude Rosado",
      description: "Brilho Intenso e Acabamento Espelhado: Proporciona um brilho marcante que realça a beleza dos lábios. Hidratação Profunda: Mantém os lábios macios e protegidos contra o ressecamento.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073498/G-A1_jvv9hr.jpg",
      title: "Lip Gloss Labial Mágico Hidra Gloss Vivai - Acabamento Brilhante Tom Rosa Claro",
      description: "Brilho Intenso e Acabamento Espelhado: Proporciona um brilho marcante que realça a beleza dos lábios. Hidratação Profunda: Mantém os lábios macios e protegidos contra o ressecamento.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073505/G-A13_nxd9xa.jpg",
      title: "Gel Tint Tattoo Mia Make - Linha Gummy",
      description: "Este produto combina a facilidade de aplicação de um gel com a fixação de um tint, proporcionando uma cor vibrante que dura o dia todo sem retoques.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073507/G-A14_e1qvrw.jpg",
      title: "Gloss Labial Volumoso da Max Love",
      description: "Auxilia no aumento do volume dos lábios, hidrata e protege a pele. Contém ácido hialurônico, vitamina E e D-pantenol.",
    },
  ];

  return (
    <section className="section1" id="gloss">
      <h2>Gloss</h2>
      <div className="card-container" data-count={products.length}>
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
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