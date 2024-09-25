let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

guessButton.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100!';
        return;
    }

    if (guess === randomNumber) {
        message.textContent = '🎉 Congrats! You guessed the number!';
        message.style.color = 'green';
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        score--;
    } else {
        message.textContent = 'Too high! Try again.';
        score--;
    }

    scoreDisplay.textContent = `Score: ${score}`;

    if (score === 0) {
        message.textContent = `💀 Game Over! The number was ${randomNumber}`;
        message.style.color = 'red';
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    }

    guessInput.value = '';
    guessInput.focus();
});

restartButton.addEventListener('click', function () {
    score = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = '';
    scoreDisplay.textContent = `Score: ${score}`;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
    guessInput.focus();
});
