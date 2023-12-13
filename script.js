const input = document.querySelector('input');
const btn = document.querySelector('button');
const guessesElement = document.querySelector('.guesses');
const result = document.querySelector('.result');

var randomNum = Math.floor(Math.random() * 1000);
let guesses = 0;

btn.addEventListener('click', () => {
  guesses++;
  if (input.value == randomNum) {
    result.innerHTML = `<span class="text-success">You guessed the number right!</span>`;
    input.disabled = true;
    btn.innerHTML = `Play again!`;

    btn.removeEventListener('click', () => {});
    btn.addEventListener('click', () => {
      window.location.reload();
    });
  } else if (input.value > randomNum) {
    result.innerHTML = `<span class="text-danger">Your guess is to high</span>`;
    guessesElement.innerHTML = `Your guesses: <span class="text-primary">${guesses}</span>`;
  } else if (input.value < randomNum) {
    result.innerHTML = `<span class="text-danger">Your guess is to low</span>`;
    guessesElement.innerHTML = `Your guesses: <span class="text-primary">${guesses}</span>`;
  }
});
