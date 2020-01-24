let x;
let y;
let WorkTimerTime;
let RestTimerTime;
let splitStopped25Timer;
let splitStopped5timer;
const baseballSound = document.querySelector("#baseball");
const gettoworkSound = document.querySelector("#gettowork");

const start25Button = document.getElementById('start25Button');
const start5Button = document.getElementById('start5Button');

start25Button.addEventListener('click', function(e) {
  if (!WorkTimerTime) {
    // Set the date we're counting down to
    WorkTimerTime = new Date();
    WorkTimerTime.setMinutes(WorkTimerTime.getMinutes() + 25);    
  } else {
    const now1 = new Date().getTime();
    var stopped25Timer = document.getElementById("twentyFive").innerText;
    var splitStopped25Timer = stopped25Timer.split(':');
    var newMinutes25 = (+splitStopped25Timer[0]);
    var newSeconds25 = (+splitStopped25Timer[1]);
    var newDistance25 = (newMinutes25*60 + newSeconds25);
    WorkTimerTime = new Date();
    WorkTimerTime.setSeconds(WorkTimerTime.getSeconds() + newDistance25); 
  }
  // Update the count down every 1 second
    x = setInterval(function() {
    // Get today's date and time
    const now1 = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = WorkTimerTime - now1;
    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // Display the result in the element with id="twentyFive"
    document.getElementById("twentyFive").innerHTML = minutes + ":" + seconds;
    // If the count down is finished, write some text and play a sound
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("twentyFive").innerHTML = "Time to take a break!";
      baseballSound.play();
    }
  }, 1000);
});
const stop25Button = document.getElementById('stop25Button');
stop25Button.addEventListener('click', function(e){
  clearInterval(x);
});
const reset25Button = document.getElementById('reset25Button');
reset25Button.addEventListener('click', function(e){
  WorkTimerTime = undefined;
  clearInterval(x);
  document.getElementById("twentyFive").innerHTML = "25:00";
});

start5Button.addEventListener('click', function(e) {
  if (!RestTimerTime) {
    // Set the date we're counting down to
    RestTimerTime = new Date();
    RestTimerTime.setMinutes(RestTimerTime.getMinutes() + 5);    
  } else {
    const now2 = new Date().getTime();
    var stopped5Timer = document.getElementById("five").innerText;
    var splitStopped5Timer = stopped5Timer.split(':');
    var newMinutes5 = (+splitStopped5Timer[0]);
    var newSeconds5 = (+splitStopped5Timer[1]);
    var newDistance5 = (newMinutes5*60 + newSeconds5);
    RestTimerTime = new Date();
    RestTimerTime.setSeconds(RestTimerTime.getSeconds() + newDistance5); 
  }
  // Update the count down every 1 second
    y = setInterval(function() {
    // Get today's date and time
    const now2 = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = RestTimerTime - now2;
    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // Display the result in the element with id="twentyFive"
    document.getElementById("five").innerHTML = minutes + ":" + seconds;
    // If the count down is finished, write some text and play a sound
    if (distance < 0) {
      clearInterval(y);
      document.getElementById("five").innerHTML = "Time to get to work!";
      gettoworkSound.play();
    }
  }, 1000);
});
const stop5Button = document.getElementById('stop5Button');
stop5Button.addEventListener('click', function(e){
  clearInterval(y);
});
const reset5Button = document.getElementById('reset5Button');
reset5Button.addEventListener('click', function(e){
  RestTimerTime = undefined;
  clearInterval(y);
  document.getElementById("five").innerHTML = "5:00";
});


