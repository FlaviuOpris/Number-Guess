'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `🎉 Correct number!`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there's no input
  if (!guess) {
    displayMsg(`⛔ No number!`);

    //When player wins
  } else if (guess === number) {
    displayMsg(`🏆 You win!`);
    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = number;

    //When guess is out of range
  } else if (guess < 1 || guess > 20) {
    displayMsg(`😡 Out of range!`);
    score--;
    document.querySelector('.score').textContent = score;

    //When guess wrong
  } else if (guess !== number) {
    displayMsg(guess > number ? `↗ Too high!` : `↘ Too low!`);
    score--;
    document.querySelector('.score').textContent = score;
  }
  //   //When guess too low
  // } else if (guess < number && guess >= 1) {
  //   document.querySelector('.message').textContent = `↘ Too low!`;
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   //When guess too high
  // } else if (guess > number && guess <= 20) {
  //   document.querySelector('.message').textContent = `↗ Too high!`;
  //   score--;
  //   document.querySelector('.score').textContent = score;
});

//Play again
document.querySelector(`.again`).addEventListener(`click`, function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.guess').value = ``;
  displayMsg(`Start guessing...`);
});
