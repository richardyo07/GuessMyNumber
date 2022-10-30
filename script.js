'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScroe = 0;

// Display secret number for test purposes
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Reset the game
  document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
  });

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ There is no number!';
    // When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct number! 🎉';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    // Implement high score
    document.querySelector('.highscore').textContent = highScroe + score;
  } else if (guess > secretNumber) {
    //When number is too high
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Too high! 📈 Try again.';
      score--;
      document.querySelector('.score').textContent = score;
      // When the player loses the game
    } else {
      document.querySelector('.message').textContent = '😭 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // When number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 📉 Try again.';
      score--;
      document.querySelector('.score').textContent = score;
      // When the player loses
    } else {
      document.querySelector('.message').textContent = '😭 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
