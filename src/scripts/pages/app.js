import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';
import {
  generateUnauthNavigationTemplate,
  generateAuthNavigationTemplate,
  generateMainNavigationUnauthTemplate,
  generateMainNavigationAuthTemplate,
} from '../templates';

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;

    this._initAuthState();
  }

  _initAuthState() {
    this.#setupNavigationList();

    window.addEventListener('auth-change', () => {
      this.#setupNavigationList();
    });
  }

  #setupNavigationList() {
    const isLoggedIn = !!localStorage.getItem('token');
    const navMain = document.getElementById('navlist-main');
    const navBtn = document.getElementById('navlist-botton');

    navMain.innerHTML = isLoggedIn
      ? generateMainNavigationAuthTemplate()
      : generateMainNavigationUnauthTemplate();

    navBtn.innerHTML = isLoggedIn
      ? generateAuthNavigationTemplate()
      : generateUnauthNavigationTemplate();

    if (isLoggedIn) {
      const logoutBtn = document.getElementById('logout-button');
      logoutBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        this._handleLogout();
      });
    }
  }

  _handleLogout() {
    if (confirm('Yakin ingin logout?')) {
      localStorage.removeItem('token');
      window.dispatchEvent(new Event('auth-change'));
      window.location.hash = '#';
    }
  }

  async renderPage() {
    const url = getActiveRoute();
    const route = routes[url];

    const navbar = document.querySelector('nav.navbar');
    const footer = document.querySelector('footer');
    if (url === '/login' || url === '/register') {
      navbar?.classList.add('d-none');
      footer?.classList.add('d-none');
    } else {
      navbar?.classList.remove('d-none');
      footer?.classList.remove('d-none');
    }

    if (!route) {
      // Not SPA route (misal scroll ke anchor ID), biarkan
      return;
    }

    const token = localStorage.getItem('token');
    if (route.requiresAuth && !token) {
      window.location.hash = '/login';
      return;
    }

    const page = route.page;

    // Terapkan view transition jika didukung browser
    if (document.startViewTransition) {
      document.startViewTransition(async () => {
        this.#content.innerHTML = await page.render();
        await page.afterRender();
      });
    } else {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
}

export default App;
