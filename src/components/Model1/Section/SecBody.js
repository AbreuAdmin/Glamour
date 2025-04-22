const SecBody = () => {
  const products = [
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073442/C-A1_eagpht.jpg",
      title: "Creme Hidratante A1",
      description: "Hidratação profunda para todos os tipos de pele.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073447/C-A3_hn7ga3.jpg",
      title: "Loção Corporal A3",
      description: "Textura leve e perfume suave, ideal para o dia a dia.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181441/C-A4_pfzesn.jpg",
      title: "Óleo de Massagem A4",
      description: "Perfeito para momentos relaxantes e cuidados com a pele.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073450/C-A6_po4mge.jpg",
      title: "Sabonete Líquido A6",
      description: "Limpeza suave com fragrância refrescante.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181441/C-A7_zjpzcc.jpg",
      title: "Esfoliante Corporal A7",
      description: "Remove impurezas e renova a pele.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073453/C-A8_sv4s7t.jpg",
      title: "Hidratante Nutritivo A8",
      description: "Com vitaminas essenciais para uma pele saudável.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181441/C-A9_okitof.jpg",
      title: "Manteiga Corporal A9",
      description: "Ultra hidratação para peles ressecadas.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073442/C-A10_lmtecl.jpg",
      title: "Gel Refrescante A10",
      description: "Sensação de frescor imediato para a pele.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073443/C-A11_wik1r7.jpg",
      title: "Creme Firmador A11",
      description: "Ajuda na firmeza e elasticidade da pele.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073443/C-A12_n2ghvp.jpg",
      title: "Loção Pós-Sol A12",
      description: "Acalma e hidrata a pele após exposição solar.",
      volume: "50ml",
    },
    {
      image: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073445/C-A13_fw88sy.jpg",
      title: "Creme Antissinais A13",
      description: "Ajuda a suavizar rugas e linhas de expressão.",
      volume: "50ml",
    },
  ];

  return (
    <section id="body">
      <h2>Corpo</h2>
      <div className="card-container" data-count={products.length}>
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <div className="volumes">
              <span>{product.volume}</span>
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

export default SecBody;