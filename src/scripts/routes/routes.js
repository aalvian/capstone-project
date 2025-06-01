import DashboardPage from '../pages/dashboard/dashboard-page';
import AboutPage from '../pages/about/about-page';

import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
<<<<<<< HEAD

const routes = {
  '/': new DashboardPage(),
  
=======
import PomodoroPage from '../pages/pomodoro/pomodoro-page';

const routes = {
  '/': new DashboardPage(),

>>>>>>> 1afd711 (pomodoro-sistem)
  '/login': new LoginPage(),
  '/register': new RegisterPage(),

  '/about': new AboutPage(),
<<<<<<< HEAD
=======

  '/Pomodoro' : new PomodoroPage(),
>>>>>>> 1afd711 (pomodoro-sistem)
};

export default routes;
