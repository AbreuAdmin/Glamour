const SecHigh = () => {
  const products = [
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073453/C-A8_sv4s7t.jpg",
      title: "Hidratante Nutritivo A8",
      description: "Com vitaminas essenciais para uma pele saudável.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073507/G-A14_e1qvrw.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073598/H-A1_y8yi8a.jpg",
      title: "Creme Hidratante A1",
      description: "Hidratação profunda para todos os tipos de pele.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181698/H-A7_tztcly.jpg",
      title: "Manteiga Corporal A9",
      description: "Ultra hidratação para peles ressecadas.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073612/M-A11_qzqhty.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073636/M-A20_iqso73.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
    },
  ];

  return (
    <section className="section1" id="highlights">
      <h2>Favoritos</h2>
      <div className="card-container" data-count={products.length}>
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.title} />
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