const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minuteElement = document.getElementById("minute");
const secElement = document.getElementById("sec"); // Make sure this ID matches the HTML

const targetDate = new Date("Aug 10, 2024 15:30:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.innerText = `${days}d`;
  hoursElement.innerText = `${hours}h`;
  minuteElement.innerText = `${minutes}m`;
  secElement.innerText = `${seconds}s`;
}, 1000);
