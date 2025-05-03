import SecBody from './Sections/SecBody';
import SecGloss from './Sections/SecGloss';
import SecHair from './Sections/SecHair';
import SecHigh from './Sections/SecHigh';
import SecMake from './Sections/SecMake';
import SecSkin from './Sections/SecSkin';
import SecSlide from './Sections/SecSlide';

function AppMain() {
  return (
    <main id="main">
      <a id="whatsapp-mobile" href="https://wa.me/559193405570?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido"><ion-icon name="logo-whatsapp"></ion-icon></a>
      <SecSlide />
      <SecBody />
      <SecGloss />
      <SecHigh />
      <SecHair />
      <SecMake />
      <SecSkin />
    </main>
  );
}

export default AppMain;