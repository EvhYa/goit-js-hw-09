const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonStart.addEventListener('click', changeStart);
buttonStop.addEventListener('click', changeStop);

let intervalId;

function changeStart() {
  intervalId = setInterval(colorChange, 1000);
  buttonStart.disabled = true;
}

function colorChange() {
  body.style.backgroundColor = getRandomHexColor();
}

function changeStop() {
  clearInterval(intervalId);
  buttonStart.disabled = false;
}
