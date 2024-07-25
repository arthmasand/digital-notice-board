function loadPomodoroTimer(container) {
  let timer;
  let isRunning = false;
  let timeLeft = 25 * 60; // 25 minutes

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    container.querySelector('#pomodoro-timer-display').innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up!");  
      }
    }, 1000);
  }

  container.innerHTML = `
    <div id="pomodoro-timer-display">${Math.floor(timeLeft / 60)}:00</div>
    <button id="pomodoro-start-btn">Start</button>
  `;

  const startBtn = container.querySelector('#pomodoro-start-btn');
  startBtn.addEventListener('click', startTimer);
  updateTimerDisplay();
}

  