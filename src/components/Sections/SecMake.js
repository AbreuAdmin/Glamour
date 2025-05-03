const SecMake = () => {
  const items = [
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073611/M-A1_e86ai0.jpg",
      title: "Iluminador Crystal Glow Linha Rosa Ruby Rose Radiant Pearl Radiant Pearl ",
      description: "A fórmula do produto é desenvolvida com micropartículas de brilho que se fundem à pele, garantindo um efeito luminoso natural ou intenso, dependendo da aplicação.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181837/M-A3_tvjfmk.jpg",
      title: "Rímel The Colossal Febella",
      description: "Este rímel promete volume e definição para os cílios, sendo resistente à água, calor, umidade e suor. Possue uma fórmula enriquecida com colágeno e agentes espessantes.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073647/M-A4_g30in3.jpg",
      title: "Pó Solto Ultrafino Pink Power - Dapop",
      description: "Pó facial solto, com textura fina e translúcida, indicado para todos os tons de pele. Sua fórmula contém óleo de rosa mosqueta, que ajuda a controlar o brilho, disfarçar imperfeições e proteger a pele contra radicais livres.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181843/M-A5_ri71nd.jpg",
      title: "Lip Tint Lua & Neve",
      description: "Lip tint é um corante labial líquido que proporciona um efeito natural e duradouro aos lábios, geralmente contendo ingredientes hidratantes como extrato de frutas vermelhas e vitamina E.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073656/M-A6_acrsra.jpg",
      title: "Corretivo Sérum Hidratante Mia Make",
      description: "O Corretivo Sérum Hidratante Mia Make é versátil, podendo ser usado para uniformizar o tom da pele, camuflar imperfeições e iluminar áreas específicas do rosto.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073657/M-A7_idzvsz.jpg",
      title: "Powder Puffs Make Lolita",
      description: "Esponjas de maquiagem úmidas ajudam a obter um acabamento mais natural e hidratado, enquanto o uso seco é indicado para produtos em pó e para controlar a oleosidade da pele",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073663/M-A8_ljvi4u.jpg",
      title: "Bronzer Cremoso em Bastão Sunkiss Ruby Rose",
      description: "O Bronzer Cremoso foi projetado para contorno fácil e natural, proporcionando um acabamento de longa duração com uma textura cremosa que se adapta à pele.",
    },
    {
      tag: "Em Alta",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073612/M-A11_qzqhty.jpg",
      title: "Blush líquido Febella",
      description: "O blush líquido é versátil, podendo ser usado nas bochechas, olhos e lábios. Sua fórmula proporciona um toque de cor natural e radiante, com alta pigmentação que permite construir camadas para intensificar o efeito desejado.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181831/M-A12_r0jzfx.jpg",
      title: "Blush líquido Miss Kose",
      description: "A textura leve do blush líquido facilita a aplicação e proporciona um acabamento natural. A pigmentação pode ser construída em camadas, permitindo um controle da intensidade da cor.",
    },
    
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073622/M-A14_hvctzk.jpg",
      title: "Delineadores líquidos Lua & Neve",
      description: "Ponta fina e flexível, permitindo a criação de traços precisos, tanto finos quanto grossos.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073626/M-A16_ec7cxi.jpg",
      title: "Perfect Blend Base Stick",
      description: "Esses bastões são projetados para oferecer uma aplicação prática e uma cobertura uniforme para a pele. Enriquecida com Vitamina E e Ácido Hialurônico, que auxiliam na manutenção da hidratação da pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181832/M-A18_zbj9pl.jpg",
      title: "Jelly Tint Febella",
      description: "O Jelly Tint é um produto 2 em 1, podendo ser usado tanto como blush quanto como lip tint. Sua textura em gel proporciona uma aplicação suave e um acabamento natural.",
    },
    {
      tag: "Em Alta",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073636/M-A20_iqso73.jpg",
      title: "Base líquida Soul Cosméticos",
      description: "Base líquida com alta cobertura, toque seco e natural, com textura suave e cremosa que garante um efeito aveludado sem deixar a pele oleosa ou pesada.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073673/M-B3_gca4id.jpg",
      title: "Bruma Glow Wike Make",
      description: "Este produto é uma bruma facial com partículas iluminadoras, usada para hidratar, refrescar e fixar a maquiagem, proporcionando um brilho radiante à pele.",
    },
  ];

  return (
    <section id="makes">
      <h3>Maquiagem</h3>
      <div className="carousel-container">
        <div className="carousel-track">
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

export default SecMake;