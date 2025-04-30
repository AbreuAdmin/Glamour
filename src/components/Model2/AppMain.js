import SecBody from './Section/SecBody';
import SecGloss from './Section/SecGloss';
import SecHair from './Section/SecHair';
import SecHigh from './Section/SecHigh';
import SecMake from './Section/SecMake';
import SecSkin from './Section/SecSkin';
import SecSlide from './Section/SecSlide';

function AppMain() {
  return (
    <main id="main2">
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