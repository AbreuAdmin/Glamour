function SecSlide() {
  return (
    <section className="container">
      <div className="slide">
        <div className="item" style={{
          background: "url('https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide02_kcoxfr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="content">
            <div className="name">Glamour Essence</div>
            <div className="description">Beleza e bem-estar</div>
            <a className="link" href="https://www.instagram.com/glamo.urcosmeticss/" target="_blank" rel="noopener noreferrer">Ver mais</a>
          </div>
        </div>

        <div className="item" style={{
          background: "url('https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide01_xurcf0.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="content">
            <div className="name">Glamour Cosmetics</div>
            <div className="description">O novo conceito de beleza feminina</div>
            <a className="link" href="https://www.instagram.com/glamo.urcosmeticss/" target="_blank" rel="noopener noreferrer">Ver mais</a>
          </div>
        </div>

        <div className="item" style={{
          background: "url('https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide03_hftqbv.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="content">
            <div className="name">Glamour Cosmetics</div>
            <div className="description">O seu lugar de beleza e cuidados</div>
            <a className="link" href="https://www.instagram.com/glamo.urcosmeticss/" target="_blank" rel="noopener noreferrer">Ver mais</a>
          </div>
        </div>

        <div className="item" style={{
          background: "url('https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide04_y35gxr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="content">
            <div className="name">Glamour Essence</div>
            <div className="description">Conheça nossos produtos</div>
            <a className="link" href="https://www.instagram.com/glamo.urcosmeticss/" target="_blank" rel="noopener noreferrer">Ver mais</a>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="prev"><ion-icon name="chevron-back"></ion-icon></button>
        <button className="next"><ion-icon name="chevron-forward"></ion-icon></button>
      </div>
    </section>
  );
}

export default SecSlide;