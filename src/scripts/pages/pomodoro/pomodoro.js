import { startTimer, stopTimer } from './timer.js';
import { loadSettings } from './settings.js';

export function initPomodoro() {
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
