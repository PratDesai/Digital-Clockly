function updateClock() {
  const dateTime = new Date();
  const hours =  ('0' + dateTime.getHours()).slice(-2);
  const minutes = ('0' + dateTime.getUTCMinutes()).slice(-2);
  const seconds = ('0' + dateTime.getSeconds()).slice(-2);
  document.getElementById('hours').innerHTML = hours + ':';
  document.getElementById('minutes').innerHTML = minutes + ':';
  document.getElementById('seconds').innerHTML = seconds;
}

setInterval(updateClock, 100)