/*

(1) - Rock
(2) - Paper
(3) - Scissors

Rock beats Scissors
Paper beats Rock
Scissors beats Paper

*/

// generate random number between 1 and max
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

// return a computer choice of Rock, Paper or Scissors
function getComputerChoice() {
  let computerChoice = generateRandomNumber(3);

  switch (computerChoice) {
    case 1:
      return (computerChoice = "rock");
      break;

    case 2:
      return (computerChoice = "paper");
      break;

    case 3:
      return (computerChoice = "scissors");
      break;
  }
}

// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win!";
  } else if (playerSelection === computerSelection) {
    return "Draw, try again!";
  } else {
    return "You lose!";
  }
}

// game function plays 5 rounds of rock paper scissors
function game() {
  let scorePlayer = 0;
  let scoreComp = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();

    // play a round of rock paper scissors
    let outcome = playRound(playerSelection.toLowerCase(), computerSelection);
    console.log(outcome);

    // keep track of score
    if (outcome.charAt(4) === "w") {
      scorePlayer++;
    } else {
      scoreComp++;
    }

    console.log(`Player: ${scorePlayer} Computer: ${scoreComp}`);
  }

  if (scorePlayer > scoreComp) {
    console.log("Player wins the game!");
  } else if (scorePlayer === scoreComp) {
    console.log("Game Tied!");
  } else {
    console.log("Computer wins the game!");
  }
}

game();
