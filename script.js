const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function addZeroToTime(zero) {
  return zero.toString().padStart(2, '0');
}

function getCurrentTime() {
  const currentTime = new Date();

  const getCurrentHours = addZeroToTime(currentTime.getHours());
  const getCurrentMinutes = addZeroToTime(currentTime.getMinutes());
  const getCurrentSeconds = addZeroToTime(currentTime.getSeconds());

  hours.innerHTML = getCurrentHours;
  minutes.innerHTML = getCurrentMinutes;
  seconds.innerHTML = getCurrentSeconds;

}

setInterval(getCurrentTime, 1000);