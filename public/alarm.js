

var sound = document.createElement('audio');
sound.src = "sound.mp3";

function getAlarm() {

  var timerId = setInterval(function() {
  var userHours = document.querySelector('#userHours').value;
  if (userHours < 0 || userHours >23) {
    alert('invalid hours!');
    clearInterval(timerId);
  }
  var userMin = document.querySelector('#userMin').value;
  if (userMin < 0 || userMin > 59) {
    alert('invalid minutes!');
    clearInterval(timerId);
  }
  var userTime = userHours + ':' + userMin;

  storageTime = sessionStorage.setItem('Key', userTime);
  // Получение данных пользователя

  var date = new Date();
  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var time = hours + ":" + min;
  //  Данные времени
  if (userTime == time) {
    sound.play();
    swal({
    title: "Alarm!",
    text: "Click a button for stop sound!",
    icon: "success",
    buttons: {
    cancel: "Stop Sound!"},
    content: clearInterval(timerId),
    })
    .then((value) => {
      switch (value) {

      default:
      sound.pause();
      }
    });
  }
  }, 1000);

}

function autoAlarm() {

  var userTime = sessionStorage.getItem('Key', userTime);
  var timerId = setInterval(function() {

  var date = new Date();
  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var time = hours + ":" + min;
  //  Данные времени
  if (userTime == time) {
    sound.play();
    swal({
    title: "Alarm!",
    text: "Click a button for stop sound!",
    icon: "success",
    buttons: {
    cancel: "Stop Sound!"},
    content: clearInterval(timerId),
    })
    .then((value) => {
      switch (value) {

      default:
      sound.pause();
      }
    });
  }
  }, 1000);
}


