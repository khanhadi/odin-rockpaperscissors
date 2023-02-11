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

	gameScreen.classList.toggle('hidden');
	endScreen.classList.toggle('hidden');

	startButton.addEventListener('click', game);
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
	let scorePlayer = 0;
	let scoreComp = 0;

	startScreen.classList.toggle('hidden');
	gameScreen.classList.toggle('hidden');

	const playerButtons = document.querySelectorAll('.player');

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
			}, 500);

			console.log(outcome);

			// keep track of score
			if (outcome === 'You win!') {
				scorePlayer++;
				console.log(`Player: ${scorePlayer} Computer: ${scoreComp}`);
			} else if (outcome === 'You lose!') {
				scoreComp++;
				console.log(`Player: ${scorePlayer} Computer: ${scoreComp}`);
			}

			if (scorePlayer == 5) {
				console.log('Player wins the game!');
			} else if (scoreComp == 5) {
				console.log('Computer Wins the game!');
			}
		});
	});
}
