'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayText = function (element, message) {
  document.querySelector(`.${element}`).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // when guess is wrong
  if (!guess) {
    // document.querySelector('.message').textContent = '☠ No number';
    displayText('message', '☠ No number');
  }
  // when guess is wrong
  else if (guess > 20) {
    // document.querySelector('.message').textContent =
    // (' 😶 Guess betn 1 to 20 idoit');
    displayText('message', ' 😶 Guess betn 1 to 20 idoit');
  }
  // when guess is right
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉  Correct Number';
    displayText('message', '🎉  Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // console.log((document.querySelector('.number').textContent = secretNumber));
    console.log(displayText('number', secretNumber));

    if (score > highScore) {
      highScore = score;
      // document.querySelector('.highscore').textContent = highScore;
      displayText('highscore', highScore);
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '📈 Too high !! Guess lower'
          : '📈 Too low !! Guess higher';
      // displayText('message', '📈 Too high !! Guess lower');
      score--;
      // document.querySelector('.score').textContent = score;
      displayText('score', score);
    } else {
      // document.querySelector('.message').textContent = '😬 You lose !';
      // document.querySelector('.score').textContent = 0;
      displayText('message', '😬 You lose !');
      displayText('score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  // new random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //reset background color
  document.querySelector('body').style.backgroundColor = '#222';
  //reset message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayText('message', 'Start guessing...');
  //reset number field and its size
  console.log((document.querySelector('.number').textContent = '?'));
  document.querySelector('.number').style.width = '15rem';
  //reset input field
  document.querySelector('.guess').value = '';

  // document.querySelector('.score').textContent = 20;
  displayText('score', 20);
});
