import { handleSettingsFormSubmit } from './settings.js';

export function initEventListeners() {
  const applyBtn = document.querySelector('.settings-modal__btn');
  if (applyBtn) {
    applyBtn.addEventListener('click', handleSettingsFormSubmit);
  }

  document.querySelectorAll('[data-font]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-font]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('[data-accent-color]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-accent-color]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
