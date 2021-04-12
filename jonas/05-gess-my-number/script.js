'use strict';

const elMessage = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const elScore = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const elHighScore = document.querySelector('.highscore');
const elGuess = document.querySelector('.guess');

function randomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min+1)) + min;
}
let secretNumber = randomNumber(1, 20);
let score = 20;
let highScore = 0;
highScore = Number(localStorage.getItem('highScore'));
elHighScore.textContent = highScore;

const message = function (message) {
  elMessage.textContent = message;
};

checkBtn.addEventListener('click', function () {
  let guess = Number(elGuess.value);
  if (!guess || guess < 1) {
    message('⛔ No Number');
  } else if (guess === secretNumber) {
    message('🎉 Correct Number');
    score > highScore ? (highScore = score) : highScore;
    elHighScore.textContent = highScore;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    checkBtn.style.display = 'none';
    //save highScore in local storage
    localStorage.setItem('highScore', highScore);
  } else if (guess !== secretNumber) {
    message(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
    score--;
    elScore.textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber(1, 20);
  score = 20;
  elScore.textContent = score;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  message('Start guessing... ');
  checkBtn.style.display = 'block';
  elGuess.value = '';
});
