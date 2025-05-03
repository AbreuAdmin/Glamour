const SecHair = () => {
  const products = [
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073598/H-A1_y8yi8a.jpg",
      title: "Kit Capilar Babasoul Cheirinho de Chiclete Uva",
      description: "Shampoo + Condicionador + Máscara Capilar. A linha BabaSoul Uva é indicada para todos os tipos de cabelo, proporcionando hidratação, brilho e maciez.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181697/H-A3_oh9luw.jpg",
      title: "Kit Capilar Babablu da Charmelle Cosméticos",
      description: "Kit Capilar Babablu da Charmelle Cosméticos, que inclui shampoo, condicionador, máscara capilar, mousse micelar e creme finalizador",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073604/H-A4_lge2nj.jpg",
      title: "Kit Capilar Babablu Melancia da Charmelle Cosméticos.",
      description: "O kit é composto por shampoo, condicionador, máscara capilar, finalizador e sabonete líquido facial, todos com fragrância de chiclete e extrato de melancia.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181697/H-A5_wl9v8d.jpg",
      title: "Kit Capilar Cheirinho de Chiclete BabaSoul - Soul Cosméticos",
      description: "Shampoo + Condicionador + Máscara Capilar + Mousse Uva + Hidratante Labial.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073605/H-A6_wt9k1l.jpg",
      title: "Reparadores de pontas Babalu",
      description: "Uso para cabelos danificados e prometem alta hidratação, sedosidade, nutrição, maciez, revitalização, brilho extremo, redução de pontas duplas e ação anti-frizz.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181698/H-A7_tztcly.jpg",
      title: "Conjunto de produtos Mary Life Professional Tira Onda",
      description: "Máscara Condicionante Capilar + Condicionador Concentrado + Spray Desembaraçante Condicionante + Shampoo Disciplinante.",
    },
  ];

  return (
    <section className="section1" id="hair">
      <h2>Cabelos</h2>
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

export default SecHair;