function SecSlide() {
  return (
    <section className="container2">
      <div className="slide">
        <div className="item" style={{
          background: "url('https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide02_kcoxfr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="content">
            <div className="name">Switzerland</div>
            <div className="description">Renowned for its breathtaking Alpine scenery and precision in craftsmanship</div>
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
            <div className="name">Finland</div>
            <div className="description">Known for its saunas, lakes, and a deep connection to nature</div>
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
            <div className="name">India</div>
            <div className="description">Famous for its rich culture, historical landmarks, natural beauty, and diverse cuisine</div>
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
            <div className="name">Australia</div>
            <div className="description">Distinguished by its diverse ecosystems, ranging from beaches to bushland</div>
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