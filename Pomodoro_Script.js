let x;
let WorkTimerTime;
let splitStopped25Timer;

const start25Button = document.getElementById('start25Button');

start25Button.addEventListener('click', function(e) {
  console.log(!WorkTimerTime);
  if (!WorkTimerTime) {
    // Set the date we're counting down to
    WorkTimerTime = new Date();
    WorkTimerTime.setMinutes(WorkTimerTime.getMinutes() + 25);    
  } else {

    const now = new Date().getTime();
    var stopped25Timer = document.getElementById("twentyFive").innerText;
    var splitStopped25Timer = stopped25Timer.split(':');
    var newMinutes25 = (+splitStopped25Timer[0]);
    var newSeconds25 = (+splitStopped25Timer[1]);
    var newDistance25 = (newMinutes25*60 + newSeconds25);

    WorkTimerTime = new Date();
    WorkTimerTime.setSeconds(WorkTimerTime.getSeconds() + newDistance25); 

    console.log(now);
    console.log(stopped25Timer);
    console.log(splitStopped25Timer);
    console.log(newMinutes25);
    console.log(newSeconds25);
    console.log(newDistance25);

  }

  // Update the count down every 1 second
    x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = WorkTimerTime - now;

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


