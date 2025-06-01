let timer;
let remainingTime = 0;
let isRunning = false;

export function initPomodoroPresenter() {
  loadSettings();
  initPomodoro();
  initEventListeners();
  initSettings();
}

function initPomodoro() {
  const modes = document.querySelectorAll('.mode');
  const getStartedMessage = document.querySelector('.get-started');

  modes.forEach((modeBtn) => {
    modeBtn.addEventListener('click', (event) => {
      const settings = loadSettings();
      let seconds;

      if (modeBtn.hasAttribute('data-pomodoro')) {
        seconds = settings.pomodoro * 60;
      } else if (modeBtn.hasAttribute('data-short-break')) {
        seconds = settings.shortBreak * 60;
      } else if (modeBtn.hasAttribute('data-long-break')) {
        seconds = settings.longBreak * 60;
      }

      modes.forEach((mode) => mode.classList.remove('active'));
      event.target.classList.add('active');

      if (getStartedMessage) {
        getStartedMessage.remove();
      }

      startCountdown(seconds);
    });
  });
}

function startCountdown(duration) {
  const display = document.querySelector('.pomodoro__time');
  if (!display) return;

  function updateDisplay(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    display.textContent = `${m}:${s}`;
  }

  function onComplete() {
    const alarm = document.querySelector('audio');
    alarm?.play();
  }

  stopTimer();
  updateDisplay(duration);
  startTimer(duration, updateDisplay, onComplete);
}

function startTimer(duration, onTick, onComplete) {
  clearInterval(timer);
  remainingTime = duration;
  isRunning = true;

  timer = setInterval(() => {
    remainingTime--;
    onTick(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(timer);
      isRunning = false;
      onComplete();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

export function getRemainingTime() {
  return remainingTime;
}

export function getIsRunning() {
  return isRunning;
}

function initEventListeners() {
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
