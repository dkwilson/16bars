$(document).ready(function () {
  // Handler for .ready() called.
  $('#howToModal').on('shown.bs.modal', function () {
    $('#howToBtn').trigger('focus')
  });

  
});

let previousAudio = null;
window.addEventListener('keydown', function (e) {
  if (previousAudio) {
    previousAudio.pause();
  }
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  previousAudio = audio;
  if (!audio) return;
  audio.play();

  $("#allStop").on("click", function () {
    audio.pause();
  });

});

