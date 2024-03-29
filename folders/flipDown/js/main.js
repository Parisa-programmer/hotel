document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date('2023/3/21').getTime() / 1000) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Show version number
  // var ver = document.getElementById('ver');
  // ver.innerHTML = flipdown.version;
});
