function AppFooter() {
  return (
    <footer id="footer">
      <nav id="contact">
        <h3>Fale Conosco</h3>
        <ul>
        <li><a href="https://wa.me/559193405570" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-whatsapp"></ion-icon>WhatsApp</a></li>
        </ul>
      </nav>
      <nav id="about">
        <h3>Sobre Nós</h3>
        <ul>
          <li><a href="/about.html"><ion-icon name="document-text-outline"></ion-icon>Termos de Uso</a></li>
          <li><a href="/privacy.html"><ion-icon name="person-outline"></ion-icon>Política de Privacidade</a></li>
        </ul>
      </nav>
      <nav id="social">
        <h3>Redes Sociais</h3>
        <ul>
          <li><a href="https://www.instagram.com/glamo.urcosmeticss/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-instagram"></ion-icon>Instagram</a></li>
          <li><a href="https://www.tiktok.com/@glamouressency" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-tiktok"></ion-icon>TikTok</a></li>
          <li><a href="https://www.facebook.com/glamouressency" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-facebook"></ion-icon>Facebook</a></li>
        </ul>
      </nav>
      <nav id="copy">
        <ul>
          <p>Copyright &copy; 2025 Glamour Essence</p>
          <p>Stack for Developers:<br/> React + HTML5 + CSS3 + JavaScript</p>
          <li><a id="dev" href="https://abrell.netlify.app" target="_blank" rel="noopener noreferrer">Developed by Abrell</a></li>
        </ul>
      </nav>
      <nav id="navigation">
        <ul>
          <li><a href="#root"><ion-icon className="icon" name="home"></ion-icon></a></li>
          <li><a href="#favorite"><ion-icon name="heart"></ion-icon></a></li>
          <li><a href="https://wa.me/559193405570" target="_blank" rel="noopener noreferrer"><ion-icon name="chatbubbles"></ion-icon></a></li>
          <li><a href="https://www.instagram.com/glamo.urcosmeticss/" target="_blank" rel="noopener noreferrer"><ion-icon className="icon" name="logo-instagram"></ion-icon></a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default AppFooter;