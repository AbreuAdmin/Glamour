const SecHair = () => {
  const items = [
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073598/H-A1_y8yi8a.jpg",
      title: "Creme Hidratante A1",
      description: "Hidratação profunda para todos os tipos de pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181697/H-A3_oh9luw.jpg",
      title: "Óleo de Massagem A4",
      description: "Perfeito para momentos relaxantes e cuidados com a pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073604/H-A4_lge2nj.jpg",
      title: "Sabonete Líquido A6",
      description: "Limpeza suave com fragrância refrescante.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181697/H-A5_wl9v8d.jpg",
      title: "Esfoliante Corporal A7",
      description: "Remove impurezas e renova a pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073605/H-A6_wt9k1l.jpg",
      title: "Hidratante Nutritivo A8",
      description: "Com vitaminas essenciais para uma pele saudável.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181698/H-A7_tztcly.jpg",
      title: "Manteiga Corporal A9",
      description: "Ultra hidratação para peles ressecadas.",
    },
  ];

  return (
    <section id="hairs">
      <h3>Cabelos</h3>
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

export default SecHair;