const d = new Date("2024-12-25");

const daysAmount = document.getElementById("days");

const hoursAmount = document.getElementById("hours");

const minutesAmount = document.getElementById("minutes");

const secondsAmount = document.getElementById("seconds");

function changeTime() {
  const currentDate = new Date();
  const difference = d - currentDate;

  const calcDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const calcHours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const calcMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const calcSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysAmount.innerHTML = calcDays;
  hoursAmount.innerHTML = calcHours;
  minutesAmount.innerHTML = calcMinutes;
  secondsAmount.innerHTML = calcSeconds;
}

setInterval(changeTime, 1000);
