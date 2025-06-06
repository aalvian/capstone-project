import '../../../styles/pomodoro.css';
import { initPomodoroPresenter } from './pomodoro-presenter';

export default class PomodoroPage {
  async render() {
    return `
    <section class="pomodoro-page">
     <div class="pomodoro-container">
      <h1 class="main-heading">Pomodoro</h1>

      <div class="modes">
        <a class="mode" data-time="1500" data-pomodoro>pomodoro</a>
        <a class="mode" data-time="300" data-short-break>short break</a>
        <a class="mode" data-time="900" data-long-break>long break</a>
      </div>

      <div class="get-started">
        <p>Click a mode to get started</p>
      </div>

      <main>
        <div class="pomodoro">
          <h1 class="pomodoro__time">Mulai</h1>
        </div>
      </main>

      <div class="settings-btn__wrap">
        <button type="button" popovertarget="settings-modal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d7d9ce"
            class="icon1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </div>

      <div class="settings-modal__container" popover id="settings-modal">
        <div class="settings-modal__header">
          <h3>Settings</h3>
          <button class="settings-modal__close" popovertarget="settings-modal" popovertargetaction="hide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#919097" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="settings-modal__settings-wrap">
          <div class="settings-modal__row-wrap">
            <h4>Time (Minutes)</h4>
            <div class="settings-modal__inputs-wrap settings-modal__inputs-wrap--top-spacer">
              <div>
                <label for="pomodoro">pomodoro</label>
                <input type="number" name="pomodoro" id="pomodoro" value="25" min="1" required />
              </div>
              <div>
                <label for="shortBreak">short break</label>
                <input type="number" name="shortBreak" id="shortBreak" value="5" min="1" required />
              </div>
              <div>
                <label for="longBreak">long break</label>
                <input type="number" name="longBreak" id="longBreak" value="15" min="1" required />
              </div>
            </div>
          </div>

          <div class="settings-modal__row-wrap settings-modal__row-wrap--inline">
            <h4>Font</h4>
            <div class="settings-modal__inputs-wrap">
              <button class="radio-btn font-sans-serif active" type="button" data-font="sans-serif" title="Poppins (sans-serif)">Aa</button>
              <button class="radio-btn font-serif" type="button" data-font="serif" title="Aleo (serif)">Aa</button>
              <button class="radio-btn font-mono" type="button" data-font="mono" title="JetBrains Mono (monospace)">Aa</button>
            </div>
          </div>

          <div class="settings-modal__row-wrap settings-modal__row-wrap--inline">
            <h4>Accent Color</h4>
            <div class="settings-modal__inputs-wrap">
              <button class="radio-btn bg-red active" type="button" data-accent-color="red" title="red"></button>
              <button class="radio-btn bg-cyan" type="button" data-accent-color="cyan" title="cyan"></button>
              <button class="radio-btn bg-violet" type="button" data-accent-color="violet" title="violet"></button>
            </div>
          </div>
        </div>

        <button class="settings-modal__btn">Apply</button>
      </div>

      <audio src="/assets/alarm-sound.mp3"></audio>
      </div>
    </section>
  `;
  }

  async afterRender() {
    initPomodoroPresenter();
  }
}
