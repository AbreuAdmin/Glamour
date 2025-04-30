const SecHair = () => {
  const products = [
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073598/H-A1_y8yi8a.jpg",
      title: "Creme Hidratante A1",
      description: "Hidratação profunda para todos os tipos de pele.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181697/H-A3_oh9luw.jpg",
      title: "Óleo de Massagem A4",
      description: "Perfeito para momentos relaxantes e cuidados com a pele.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073604/H-A4_lge2nj.jpg",
      title: "Sabonete Líquido A6",
      description: "Limpeza suave com fragrância refrescante.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181697/H-A5_wl9v8d.jpg",
      title: "Esfoliante Corporal A7",
      description: "Remove impurezas e renova a pele.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073605/H-A6_wt9k1l.jpg",
      title: "Hidratante Nutritivo A8",
      description: "Com vitaminas essenciais para uma pele saudável.",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181698/H-A7_tztcly.jpg",
      title: "Manteiga Corporal A9",
      description: "Ultra hidratação para peles ressecadas.",
    },
  ];

  return (
    <section className="section1" id="hair">
      <h2>Cabelos</h2>
      <div className="card-container" data-count={products.length}>
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <div className="volumes">
              <span>100ml</span>
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

export default SecHair;