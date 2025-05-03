const SecHigh = () => {
  const products = [
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073526/G-A9_t5pyjt.jpg",
      title: "Lip Gloss Babasoul Cheirinho de Chiclete",
      description: "Este lip gloss garante lábios macios, nutridos e protegidos. Ele é enriquecido com Vitamina E e Manteiga de Karité, que ajudam a proteger os lábios contra danos causados pelos radicais livres e promovem a hidratação profunda.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073636/M-A20_iqso73.jpg",
      title: "Base líquida Soul Cosméticos",
      description: "Base líquida com alta cobertura, toque seco e natural, com textura suave e cremosa que garante um efeito aveludado sem deixar a pele oleosa ou pesada.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073612/M-A11_qzqhty.jpg",
      title: "Blush líquido Febella",
      description: "O blush líquido é versátil, podendo ser usado nas bochechas, olhos e lábios. Sua fórmula proporciona um toque de cor natural e radiante, com alta pigmentação que permite construir camadas para intensificar o efeito desejado.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073800/S-A12_nnbh91.jpg",
      title: "Mousse Micelar Cheirinho de Chiclete Babasoul Uva - Soul Cosméticos",
      description: "Espuma de limpeza facial com ação demaquilante que promete limpar profundamente, purificar, nutrir e tonificar a pele, deixando um toque de hidratação e um cheiro agradável de chiclete",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181441/C-A4_pfzesn.jpg",
      title: "Body Splash - Desodorante Colônia Destinée",
      description: "Este produto é ideal para quem busca uma fragrância sofisticada e envolvente, deixando a pele com um perfume marcante e duradouro.",
    },
  ];

  return (
    <section className="section1" id="highlights">
      <h2>Favoritos</h2>
      <div className="card-container" data-count={products.length}>
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <div className="volumes">
              <span>100ml</span>
              <span>200ml</span>
              <span>300ml</span>
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

export default SecHigh;