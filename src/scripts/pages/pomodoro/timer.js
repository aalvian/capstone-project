let timer;
let remainingTime = 0;
let isRunning = false;

export function startTimer(duration, onTick, onComplete) {
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

export function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

export function getRemainingTime() {
  return remainingTime;
}

export function getIsRunning() {
  return isRunning;
}
