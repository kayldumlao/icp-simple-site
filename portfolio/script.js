// Countdown Timer for Birthday
function calculateCountdown(targetDate) {
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startCountdown() {
  const targetDate = new Date('September 5, 2025 00:00:00');
  const counterDisplay = document.getElementById('counter-display');

  function updateCountdown() {
    const countdown = calculateCountdown(targetDate);
    counterDisplay.textContent = countdown;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

startCountdown();
