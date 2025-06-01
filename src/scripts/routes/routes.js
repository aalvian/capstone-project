import DashboardPage from '../pages/dashboard/dashboard-page';
import AboutPage from '../pages/about/about-page';

import LoginPage from '../pages/auth/login/login-page';
import PomodoroPage from '../pages/pomodoro/pomodoro-page';
import RegisterPage from '../pages/auth/register/register-page';

const routes = {
  '/': new DashboardPage(),
  '/login': new LoginPage(),
  '/register': new RegisterPage(),

  '/about': new AboutPage(),

  '/Pomodoro' : new PomodoroPage(),
};

export default routes;
