'use strict';

//declarations
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');

const current0Score = document.getElementById('current--0');
const current1Score = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;
//initialization function
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0Score.textContent = 0;
  current1Score.textContent = 0;
  diceEl.classList.add('hidden');

  player0Section.classList.remove('player--winner');
  player1Section.classList.remove('player--winner');
  player0Section.classList.add('player--active');
  player1Section.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //switching active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // current0Score.textContent = currentScore;
  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random number
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    console.log(diceValue);
    //show dice image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceValue}.png`;
    //add to current score if dice is not on one
    if (diceValue !== 1) {
      //add to current score
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //show current score 0

      switchPlayer();
      // switch player
      // player0Section.classList.remove('player--active');
      // player1Section.classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add to total score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if total score >= 100 or switch player
    if (scores[activePlayer] >= 20) {
      //declare winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// btnNew.addEventListener('click', function () {
//   //1. Reset the game
//   //remove winner
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   //make scores and current score 0

//   playing = true;
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;

//   player0Section.classList.add('player--active');
//   player1Section.classList.remove('player--active');
//   current0Score.textContent = 0;
//   current1Score.textContent = 0;
// });
