'use strict';

let secretNumber = Math.floor(Math.random() * 100) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

const checkText = document.querySelector('.check').textContent;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
  else if (guess === secretNumber) {
    if (score > highscore) {
      document.querySelector('.message').textContent = '🎉 Correct';
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
    }
    else {
      document.querySelector('.message').textContent = '💥 You have lost the Game'
    }


  }


  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '📈 Too High';
  //   }
  //   else {
  //     document.querySelector('.message').textContent = '💥 You have lost the Game'
  //   }
  // }
  // else if (guess < secretNumber) {

  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //   }

  //   else {
  //     document.querySelector('.message').textContent = '💥 You have lost the Game'

  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = "";
  document.querySelector('.number').textContent = '?';

})
