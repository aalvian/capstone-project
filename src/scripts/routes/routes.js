import DashboardPage from '../pages/dashboard/dashboard-page';
import AboutPage from '../pages/about/about-page';

import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';

// Fitur
import TargetBelajarPage from '../pages/targetBelajar/targetBelajar-page';

const routes = {
  '/': new DashboardPage(),
  
  '/login': new LoginPage(),
  '/register': new RegisterPage(),

  '/about': new AboutPage(),

  //Fitur
  '/targetBelajar': new TargetBelajarPage(),
};

export default routes;
