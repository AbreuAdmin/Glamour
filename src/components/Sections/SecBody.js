const SecBody = () => {
  const items = [
    {
      tag: "Em Alta",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073442/C-A1_eagpht.jpg",
      title: "Gel Hidratante Babasoul",
      description: "Hidratação profunda para todos os tipos de pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073447/C-A3_hn7ga3.jpg",
      title: "Kit Banho de Lua Essência de Mulher",
      description: "O Kit Banho de Lua oferece uma experiência completa de cuidados com a pele, ideal para o dia a dia.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181441/C-A4_pfzesn.jpg",
      title: "Body Splash - Desodorante Colônia Destinée",
      description: "Este produto é ideal para quem busca uma fragrância sofisticada e envolvente, deixando a pele com um perfume marcante e duradouro.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073450/C-A6_po4mge.jpg",
      title: "Hidratantes Labiais Babasoul Soul Cosméticos",
      description: "Lábios macios e profundamente hidratados, repara rachaduras e ressecamentos com varios sabores.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181441/C-A7_zjpzcc.jpg",
      title: "Body Splash Soul Cosméticos",
      description: "Uma escolha ideal para quem busca fragrâncias frescas e sofisticadas. Com notas delicadas e envolventes.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073453/C-A8_sv4s7t.jpg",
      title: "Body Splash Belkit",
      description: "Body splash é um desodorante colônia que perfuma e refresca a pele. Fragrância suave e agradável, Fixação da fragrância menor que a do perfume.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181441/C-A9_okitof.jpg",
      title: "Hidratante Esfoliante de Corpo e Rosto Soul Cosméticos",
      description: "Ultra hidratação para peles ressecadas.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073442/C-A10_lmtecl.jpg",
      title: "Óleo Rosa Mosqueta Forever You",
      description: "Regeneração imediata da pele. Ação contra os sinais de envelhecimento.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073443/C-A12_n2ghvp.jpg",
      title: "Óleo Corporal Secrets Woman ",
      description: "Óleo Corporal Secrets Woman Clareador 110ml - Swiss Beauty.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073445/C-A13_fw88sy.jpg",
      title: "Linha Fruta Poran Hidratantes Rosto e Corpo",
      description: "Oferece uma experiência de hidratação única, deixando a pele com um toque macio e aveludado.",
    },
  ];

  return (
    <section id="body">
      <h3>Cuidados Corporais</h3>
      <div className="carousel-container">
        <div className="carousel-track">
          {items.map((item, index) => (
            <div className="card" key={index}>
              <div className="tag">{item.tag}</div>
              <img src={item.img} alt={item.title} loading="lazy" className="img" />
              <h4 className="title">{item.title}</h4>
              <span className="description">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecBody;