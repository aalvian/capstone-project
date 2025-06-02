// CSS imports
import '../styles/styles.css';
import '../styles/pomodoro.css';

import App from './pages/app';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://localhost:3000/api/check-db');
  console.log('Database', response);

  const app = new App({
    content: document.querySelector('#main-content'),
  });
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});
