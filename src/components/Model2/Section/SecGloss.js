const SecGloss = () => {
  const items = [
    {
      tag: "Quente",
      title: "Windbreaker Jacket",
      img: "https://i.postimg.cc/2SNPfMqw/new-1.png",
      description: "Accessory"
    },
    {
      tag: "Frio",
      title: "Velvet Lip Gloss",
      img: "https://i.postimg.cc/YqQZJ0rG/gloss-2.png",
      description: "Makeup"
    },
    {
      tag: "Tendência",
      title: "Shiny Lip Oil",
      img: "https://i.postimg.cc/xjH0vR3J/gloss-3.png",
      description: "Lançamento"
    },
    {
      tag: "New",
      title: "Hydrating Gloss",
      img: "https://i.postimg.cc/zvZJb8bv/gloss-4.png",
      description: "Brilho Natural"
    }
  ];

  return (
    <section id="gloss">
      <h3>Gloss</h3>
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

export default SecGloss;