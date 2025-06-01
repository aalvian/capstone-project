import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    // this._setupDrawer();
  }

  // _setupDrawer() {
  //   this.#drawerButton.addEventListener('click', () => {
  //     this.#navigationDrawer.classList.toggle('open');
  //   });

  //   document.body.addEventListener('click', (event) => {
  //     if (!this.#navigationDrawer.contains(event.target) && !this.#drawerButton.contains(event.target)) {
  //       this.#navigationDrawer.classList.remove('open');
  //     }

  //     this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
  //       if (link.contains(event.target)) {
  //         this.#navigationDrawer.classList.remove('open');
  //       }
  //     })
  //   });
  // }

  _initAuthState() {
    this.#setupNavigationList();

    window.addEventListener('auth-change', () => {
      this.#setupNavigationList();
    });
  }

  #setupNavigationList() {
    const isLoggedIn = !!localStorage.getItem('token');
    const navUnauth = document.getElementById('navlist-unauth');
    const navAuth = document.getElementById('navlist-auth');

    navUnauth.innerHTML = '';
    navAuth.innerHTML = isLoggedIn
      ? generateAuthenticatedNavigationListTemplate()
      : generateUnauthenticatedNavigationListTemplate();

    if (isLoggedIn) {
      const logoutButton = document.getElementById('logout-button');
      logoutButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this._handleLogout();
      });
    }
  }

  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];

    // Sembunyikan navbar & footer di halaman login/register
    const navbar = document.querySelector('nav.navbar');
    const footer = document.querySelector('footer');
    if (url === '/login' || url === '/register') {
      navbar?.classList.add('d-none');
      footer?.classList.add('d-none');
    } else {
      navbar?.classList.remove('d-none');
      footer?.classList.remove('d-none');
    }

    if (!page) {
      // Bukan route SPA, biarkan browser scroll ke id
      return;
    }
    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
