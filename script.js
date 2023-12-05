const input = document.querySelector('input');
const btn = document.querySelector('button');
const guessesElement = document.querySelector('.guesses');
const result = document.querySelector('.result');

var randomNum = Math.floor(Math.random() * 1000);
let guesses = 0;

btn.addEventListener('click', () => {
  guesses++;
  if (input.value == randomNum) {
    result.innerHTML = `You guessed the number right!`;
    input.disabled = true;
    btn.innerHTML = `Play again!`;

    btn.removeEventListener('click', () => {});
    btn.addEventListener('click', () => {
      window.location.reload();
    });
  } else if (input.value > randomNum) {
    result.innerHTML = `Your guess is to high`;
    guessesElement.innerHTML = `Your guesses: ${guesses}`;
  } else if (input.value < randomNum) {
    result.innerHTML = `Your guess is to low`;
    guessesElement.innerHTML = `Your guesses: ${guesses}`;
  }
});
