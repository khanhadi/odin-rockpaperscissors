/*
Rock beats Scissors
Paper beats Rock
Scissors beats Paper

*/

const startScreen = document.querySelector('.start');
const gameScreen = document.querySelector('.main-game');
const endScreen = document.querySelector('.end');

start();

// main function to initialise start screen
function start() {
	const startButton = document.querySelector('.begin');

	gameScreen.classList.add('hidden');
	endScreen.classList.add('hidden');

	startButton.addEventListener('click', game);
}

function end(winMessage, scoreComp, scorePlayer) {
	const endText = document.querySelector('.end-text');
	endText.textContent = winMessage;

	const scoreText = document.querySelector('.end-score');
	scoreText.innerHTML = `Robo: ${scoreComp} <br> You: ${scorePlayer}`;

	setTimeout(() => {
		gameScreen.classList.add('hidden');
		endScreen.classList.remove('hidden');
	}, 1250); // wait 1250ms before game ends

	const resetButton = document.querySelector('.reset');
	resetButton.addEventListener('click', () => {
		location.reload();
	});
}

// generate random number between 1 and max
function generateRandomNumber(max) {
	return Math.floor(Math.random() * max + 1);
}

// return a computer choice of Rock, Paper or Scissors
function getComputerChoice() {
	let computerChoice = generateRandomNumber(3);

	switch (computerChoice) {
		case 1:
			return (computerChoice = 'rock');
			break;

		case 2:
			return (computerChoice = 'paper');
			break;

		case 3:
			return (computerChoice = 'scissors');
			break;
	}
}

// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return 'You win!';
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		return 'You win!';
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return 'You win!';
	} else if (playerSelection === computerSelection) {
		return 'Draw, try again!';
	} else {
		return 'You lose!';
	}
}

// main game function that plays rock paper scissors first to 5!
// switches scene to game
function game() {
	let hasGameEnded = false;
	let scorePlayer = 0;
	let scoreComp = 0;

	startScreen.classList.add('hidden');
	gameScreen.classList.remove('hidden');

	const playerButtons = document.querySelectorAll('.player');
	const gameScore = document.querySelector('.score');

	playerButtons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const computerChoice = getComputerChoice();
			let outcome = playRound(e.target.id, computerChoice);

			const compButton = document.querySelector('.' + computerChoice);

			compButton.classList.add('selected');
			button.classList.add('selected');
			setTimeout(() => {
				compButton.classList.remove('selected');
				button.classList.remove('selected');
			}, 350);

			console.log(outcome);

			// keep track of score
			if (outcome === 'You win!') {
				if (scorePlayer < 5 && !hasGameEnded) {
					scorePlayer++;
				}
				gameScore.innerHTML = `Robo: ${scoreComp} <br> You: ${scorePlayer}`;
			} else if (outcome === 'You lose!') {
				if (scoreComp < 5 && !hasGameEnded) {
					scoreComp++;
				}
				gameScore.innerHTML = `Robo: ${scoreComp} <br> You: ${scorePlayer}`;
			}

			if (scorePlayer === 5) {
				hasGameEnded = true;
				end('You won the game!', scoreComp, scorePlayer);
			} else if (scoreComp === 5) {
				hasGameEnded = true;
				end('Robo wins the game!', scoreComp, scorePlayer);
			}
		});
	});
}
