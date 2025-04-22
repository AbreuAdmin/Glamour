function SecSlide() {
  return (
    <section className="slide">
      <div className="slider-track">
        <img src="https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide02_kcoxfr.jpg"
          alt="Produto 2" />
        <img src="https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide01_xurcf0.jpg"
          alt="Produto 1" />
        <img src="https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide03_hftqbv.jpg"
          alt="Produto 3" />
        <img src="https://res.cloudinary.com/drdm7dp02/image/upload/v1745241613/slide04_y35gxr.jpg"
          alt="Produto 4" />
      </div>
      <div className="overlay">
        <div>
        <h1 className="text">Glamour Essence</h1>
        <p className="text">Beleza e bem-estar</p>
        <p className="text">O novo conceito de beleza feminina</p>
        </div>
        <a id="link" href="https://www.instagram.com/glamo.urcosmeticss/" target="_blank" rel="noopener noreferrer">Ver mais</a>
      </div>
      <div className="content">
        <button id="prev"><ion-icon name="chevron-back-outline"></ion-icon></button>
        <button id="next"><ion-icon name="chevron-forward-outline"></ion-icon></button>
      </div>
    </section>
  );
}

export default SecSlide;