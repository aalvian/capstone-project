import DashboardPage from '../pages/dashboard/dashboard-page';
import RekomendasiPage from '../pages/rekomendasi/rekomendasi-page';

import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import PomodoroPage from '../pages/pomodoro/pomodoro-page';
import TargetBelajarPage from '../pages/target-belajar/targetBelajar-page';

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

  "/rekomendasi": {
    page: new RekomendasiPage(),
    requiresAuth: true,
  },
  "/target-belajar": {
    page: new TargetBelajarPage(),
    requiresAuth: true,
  },
  "/pomodoro": {
    page: new PomodoroPage(),
    requiresAuth: true,
  },

};

export default routes;
