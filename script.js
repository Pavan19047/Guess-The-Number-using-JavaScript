'use strict'
let secret_number = Math.trunc(Math.random() * 20) + 1
let score = 20
let high_score = 0
// document.querySelector('.number').textContent = secret_number;
// console.log(secret_number);
const displayMessage = message => {
  document.querySelector('.message').textContent = message
}

const check = function () {
  const guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!')
  } else if (guess === secret_number) {
    displayMessage('🥳 Correct Number!')
    document.querySelector('.number').textContent = secret_number
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > high_score) {
      high_score = score
      document.querySelector('.highscore').textContent = high_score
    }
  } else if (guess !== secret_number) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secret_number ? 'Too high 📉' : 'Too low 📈';
      let msg = guess > secret_number ? 'Too high 📉' : 'Too low 📈';
      displayMessage(msg)
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You lose 😢')
      document.querySelector('.score').textContent = 0
    }
  }
}
function revert () {
  score = 20
  secret_number = Math.trunc(Math.random() * 20) + 1
  // console.log(secret_number);
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').textContent = secret_number
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.guess').value = ''
}

document.querySelector('.check').addEventListener('click', check)
document.querySelector('.again').addEventListener('click', revert)
