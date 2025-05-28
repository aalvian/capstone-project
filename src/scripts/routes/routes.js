import DashboardPage from '../pages/dashboard/dashboard-page';
import AboutPage from '../pages/about/about-page';
import RekomendasiPage from '../pages/rekomendasi/rekomendasi-page';

import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';

const routes = {

  "/": {
    page: new DashboardPage(),
    requiresAuth: false,
  },
  "/login": {
    page: new LoginPage(),
    requiresAuth: false,
  },
  "/register": {
    page: new RegisterPage(),
    requiresAuth: false,
  },

  "/about": {
    page: new AboutPage(),
    requiresAuth: true,
  },
    "/rekomendasi": {
    page: new RekomendasiPage(),
    requiresAuth: true,
  },

};

export default routes;
