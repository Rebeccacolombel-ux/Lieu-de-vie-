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
    }
  }
  
  customElements.define('app-header', AppHeader);