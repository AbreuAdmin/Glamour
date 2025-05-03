function SecHigh() {
  return (
    <>
      <h2 id="favorite">Favoritos</h2>
      <fieldset className="content">
        <label style={{ '--_img': 'url(https://res.cloudinary.com/drdm7dp02/image/upload/v1745073453/C-A8_sv4s7t.jpg)' }}>
          <input type="radio" name="images" value="Fiddle Leaf" />
        </label>
        <label style={{ '--_img': 'url(https://res.cloudinary.com/drdm7dp02/image/upload/v1745073598/H-A1_y8yi8a.jpg)' }}>
          <input type="radio" name="images" value="Pink Princess" />
        </label>
        <label style={{ '--_img': 'url(https://res.cloudinary.com/drdm7dp02/image/upload/v1745181698/H-A7_tztcly.jpg)' }}>
          <input type="radio" name="images" value="Monstera" defaultChecked />
        </label>
        <label style={{ '--_img': 'url(https://res.cloudinary.com/drdm7dp02/image/upload/v1745073612/M-A11_qzqhty.jpg)' }}>
          <input type="radio" name="images" value="Pothos" />
        </label>
        <label style={{ '--_img': 'url(https://res.cloudinary.com/drdm7dp02/image/upload/v1745073636/M-A20_iqso73.jpg)' }}>
          <input type="radio" name="images" value="Rubber Tree" />
        </label>
      </fieldset>
    </>
  );
}

export default SecHigh;