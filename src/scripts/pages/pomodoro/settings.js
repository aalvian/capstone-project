export function loadSettings() {
  const savedSettings = JSON.parse(localStorage.getItem('pomodoro-settings')) || {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    font: 'sans-serif',
    accentColor: 'cyan',
  };

  populateSettingsForm(savedSettings);
  applySettings(savedSettings);

  return savedSettings;
}

export function handleSettingsFormSubmit(event) {
  event.preventDefault();

  const inputFields = ['pomodoro', 'shortBreak', 'longBreak'];
  const isInvalid = inputFields.some((id) => {
    const input = document.getElementById(id);
    return !input || !input.checkValidity();
  });

  if (isInvalid) {
    alert('Please fill in all fields correctly.');
    return;
  }

  const settings = {
    pomodoro: parseInt(document.getElementById('pomodoro').value),
    shortBreak: parseInt(document.getElementById('shortBreak').value),
    longBreak: parseInt(document.getElementById('longBreak').value),
    font: document.querySelector('[data-font].active')?.dataset.font || 'sans-serif',
    accentColor: document.querySelector('[data-accent-color].active')?.dataset.accentColor || 'cyan',
  };

  localStorage.setItem('pomodoro-settings', JSON.stringify(settings));
  applySettings(settings);

  const modal = document.getElementById('settings-modal');
  modal?.hidePopover?.();
}

export function applySettings(settings) {
  document.body.style.setProperty('--font-family', `var(--${settings.font})`);
  document.body.classList.remove('bg-red', 'bg-cyan', 'bg-violet');
  document.body.classList.add(`bg-${settings.accentColor}`);
}

export function populateSettingsForm(settings) {
  const pomodoroInput = document.getElementById('pomodoro');
  const shortBreakInput = document.getElementById('shortBreak');
  const longBreakInput = document.getElementById('longBreak');

  if (pomodoroInput) pomodoroInput.value = settings.pomodoro;
  if (shortBreakInput) shortBreakInput.value = settings.shortBreak;
  if (longBreakInput) longBreakInput.value = settings.longBreak;

  document.querySelectorAll('[data-font]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.font === settings.font);
  });

  document.querySelectorAll('[data-accent-color]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.accentColor === settings.accentColor);
  });
}

export function initSettings() {
  const modal = document.getElementById('settings-modal');
  const applyBtn = modal?.querySelector('.settings-modal__btn');

  if (modal && applyBtn) {
    applyBtn.addEventListener('click', handleSettingsFormSubmit);
  }
}
