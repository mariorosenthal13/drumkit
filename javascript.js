document.addEventListener("DOMContentLoaded", function(event) {
    //your code to run since DOM is loaded and ready




function removeTransition(e){
  if (e.propertyName !== 'transform') return; //skip if its not a transform
  e.target.classList.remove('playing');
}

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stopes the function from running
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll('.key');
// const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

});
