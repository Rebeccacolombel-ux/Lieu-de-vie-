class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="navbar">
        <div class="navbar__inner container">
          <a href="#" class="navbar__logo" aria-label="La Maison de Redaowsa">
            <img src="images/logo-hero.svg" alt="Logo Redaowsa" width="41" height="31">
          </a>
          <nav class="navbar__nav" aria-label="Navigation principale">
            <a href="index.html">Home</a>
            <a href="valeurs.html">Valeurs</a>
            <a href="about.html">À propos</a>
            <a href="maisons.html">Maisons</a>
            <a href="#contact" class="btn btn--orange">Contact</a>
          </nav>
        </div>
      </header>
    `;

    // Effet de scroll sur la navbar
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

customElements.define('app-header', AppHeader);

class AppContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="contact" id="contact">
        <div class="contact__container">
          <!-- Colonne gauche : infos -->
          <div class="contact__infos">
            <div class="contact__illustration">
              <img src="images/logo-contact.png" alt="Illustration bébé endormi">
            </div>
            <address class="contact__coordonnees">
              <p>20 rue Marcelle Toublanc,<br>44850 Le Cellier</p>
              <p><a href="mailto:lamaisondemouma@hotmail.fr">lamaisondemouma@hotmail.fr</a></p>
              <p><a href="tel:0636946161">06 36 94 61 61</a></p>
            </address>
          </div>

          <!-- Colonne droite : formulaire -->
          <div class="contact__form-wrapper">
            <h2 class="contact__title">Contact</h2>
            <form class="contact__form" action="#" method="POST">
              <div class="contact__row">
                <div class="contact__field">
                  <label for="prenom">Prénom</label>
                  <input type="text" id="prenom" name="prenom" placeholder="Jean" required>
                </div>
                <div class="contact__field">
                  <label for="nom">Nom</label>
                  <input type="text" id="nom" name="nom" placeholder="Paul" required>
                </div>
              </div>
              <div class="contact__field">
                <label for="email">Adresse email</label>
                <input type="email" id="email" name="email" placeholder="exemple@mail.fr" required>
              </div>
              <div class="contact__field">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Rédigez votre message..." rows="6" required></textarea>
              </div>
              <button type="submit" class="contact__submit">Envoyer</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('app-contact', AppContact);


class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container footer__inner">
          <div class="footer__brand">
            <div class="footer__logo-row">
              <img src="images/logo-footer.svg" alt="" width="61" height="46">
              <div>
                <p class="footer__name">Lieu de vie Redaowsa</p>
                <p class="footer__tagline">Lieu de vie et d'accueil agrée</p>
              </div>
            </div>
            <p class="footer__desc">Un toit, des repères, un avenir. Nous accueillons des enfants confiés à l'ASE dans un cadre familial, stable et bienveillant.</p>
            <div class="footer__social">
              <a href="#" aria-label="LinkedIn"><img src="images/icon-linkedin.svg" alt="" width="24" height="24"></a>
              <a href="#" aria-label="Facebook"><img src="images/icon-facebook.svg" alt="" width="24" height="24"></a>
            </div>
          </div>

          <div class="footer__links">
            <div class="footer__col">
              <h3>Navigation</h3>
              <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="about.html">À propos</a></li>
                <li><a href="valeurs.html">Valeurs</a></li>
                <li><a href="maisons.html">Lieux de vie</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="footer__col footer__col--contact">
              <h3>Contact</h3>
              <ul>
                <li>
                  <img src="images/tabler-icon-home.svg" alt="" width="24" height="24">
                  <span>20 rue Marcelle Toublanc,<br>44850 Le Cellier</span>
                </li>
                <li>
                  <img src="images/tabler-icon-mail.svg" alt="" width="24" height="24">
                  <a href="mailto:lamaisondemouma@hotmail.fr">lamaisondemouma@hotmail.fr</a>
                </li>
                <li>
                  <img src="images/tabler-icon-phone.svg" alt="" width="24" height="24">
                  <a href="tel:+33636946161">06 36 94 61 61</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img class="footer__line" src="images/footer-line.png" alt="" aria-hidden="true">

        <div class="container footer__bottom">
          <p>© 2025 Maison de Redaowsa — Tous droits réservés</p>
          <div class="footer__legal">
            <a href="#">Confidentialité</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);