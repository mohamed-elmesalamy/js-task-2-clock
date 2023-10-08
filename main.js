function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros to minutes and seconds
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  var timeString = hours + ':' + minutes + ':' + seconds;

  document.getElementById('clockTime').textContent = timeString;
}

// Update the clock every second
setInterval(updateTime, 1000);

