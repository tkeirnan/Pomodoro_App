let x;

const start25Button = document.getElementById('start25Button');

start25Button.addEventListener('click', function(e) {
  // Set the date we're counting down to
  var twentyFiveMinutesLater = new Date();
  twentyFiveMinutesLater.setMinutes(twentyFiveMinutesLater.getMinutes() + 25);

  // Update the count down every 1 second
    x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = twentyFiveMinutesLater - now;

    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
  clearInterval(x);
  document.getElementById("twentyFive").innerHTML = "25:00";
});


