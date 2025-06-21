const SecSkin = () => {
  const items = [
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073784/S-A1_d3qllb.jpg",
      title: "Séruns Faciais Max Love",
      description: "Sérum Facial Bioativo Antiacne 10 em 1 + Sérum Primer Antioleosidade Oil-Free Dia. Séruns linha Studio da Max Love e podem ser usados antes da maquiagem, primer ou protetor solar.",
    },
    {
      tag: "Em Alta",
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181973/S-A4_drzjjb.jpg",
      title: "Sabonetes faciais em mousse Beautyloo",
      description: "Os sabonetes faciais em mousse são indicados para a limpeza diária da pele, removendo impurezas e maquiagem sem ressecar. A textura em mousse proporciona uma limpeza suave e eficaz, deixando a pele macia e revitalizada.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073810/S-A5_nqwsxp.jpg",
      title: "Mousse de Limpeza Facial Louca por Morango Super Poderes",
      description: "Possui uma textura de mousse leve e o aroma de morango torna a experiência de limpeza agradável.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181980/S-A6_f67ish.jpg",
      title: "Discos de algodão SS Sabrina Sato",
      description: "Esses discos de algodão são projetados para serem delicados na pele, sendo adequados para todos os tipos de pele, incluindo as mais sensíveis. Eles são ideais para uso diário na rotina de cuidados com a pele.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073811/S-A7_zti252.jpg",
      title: "Sérum Facial Vitamina C 10 em 1 - Max Love",
      description: "O sérum facial é formulado com vitamina C, ácido hialurônico, D-pantenol e niacinamida. O sérum promete hidratar, amaciar, tonificar e uniformizar a pele, além de oferecer ação antioxidante.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181979/S-A8_bahyqj.jpg",
      title: "Sérum Primer Antioleosidade Oil-Free Dia - Max Love Studio",
      description: "O Sérum Primer Antioleosidade Oil-Free é indicado para peles mistas, oleosas e acneicas. Ele proporciona um acabamento matte e uma pele com aspecto saudável.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073812/S-A9_jbfzs1.jpg",
      title: "Primers faciais Max Love",
      description: "Os primers faciais da Max Love, são produtos pré-maquiagem que oferecem diferentes benefícios para a pele. Primer Hidratante Anticraquelamento + Primer Clareador + Primer Vit C.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073784/S-A10_ui16yk.jpg",
      title: "Lenços demaquilantes Super Poderes",
      description: "Lenço Demaquilante Micelar Cheirinho de Melancia + Lenços Demaquilantes Colágeno Louca por Morangos.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073786/S-A11_olq2zi.jpg",
      title: "Óleo Rosa Mosqueta Forever You",
      description: "O Óleo Rosa Mosqueta Forever You é um produto 100% puro, dermatologicamente testado, que auxilia na regeneração da pele, combatendo o envelhecimento.",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745073800/S-A12_nnbh91.jpg",
      title: "Mousse Micelar Cheirinho de Chiclete Babasoul Uva - Soul Cosméticos",
      description: "Espuma de limpeza facial com ação demaquilante que promete limpar profundamente, purificar, nutrir e tonificar a pele, deixando um toque de hidratação e um cheiro agradável de chiclete",
    },
    {
      img: "https://res.cloudinary.com/drdm7dp02/image/upload/v1745181972/S-A13_vvd0mz.jpg",
      title: "Pomada clareadora Micosan Original",
      description: "Pomada clareadora. Remove olheiras. Acaba com a micose. Rejuvenesce a pele. Hidrata a pele.",
    },
  ];

  return (
    <section id="skincare">
      <h3>Skincare</h3>
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
}
export default SecSkin;