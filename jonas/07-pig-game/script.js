'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

let currentScore = 0;
let score = 0;
btnRoll.addEventListener('click', function () {
  const random = Math.trunc(Math.random() * 6) + 1;
  currentScore += random;
  dice.src = `dice-${random}.png`;
  current0El.textContent = currentScore;
});

btnHold.addEventListener('click', function () {
  score += currentScore;
  score0El.textContent = score;
  currentScore = 0;
  current0El.textContent = currentScore;

  
});
